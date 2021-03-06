(ns nkn.core
  (:require
   [cljsjs.react]
   [cljsjs.react.dom]
   [sablono.core :as sab :include-macros true]
   [cljs.core.async :refer [<! chan sliding-buffer put! close! timeout]])
  (:require-macros
   [cljs.core.async.macros :refer [go-loop go]]))

(enable-console-print!)

(defn floor [x] (.floor js/Math x))

(defn translate [start-pos vel time]
  (floor (+ start-pos (* time vel))))

(def hor-vel -0.128)
(def gravity 0.0225)
(def jump-vel 12)
(def start-y 312)
(def bottom-y 561)
(def flyer-x 212)
(def flyer-width 81)
(def flyer-height 29)
(def pillar-spacing 400)
(def pillar-gap 160)
(def pillar-width 80)

(def starting-state { :timer-running false
                      :jump-count 0
                      :initial-vel 0
                      :start-time 0
                      :flyer-start-time 0
                      :flyer-y   start-y
                      :pillar-list
                      [{ :start-time 0
                         :pos-x 900
                         :cur-x 900
                         :gap-top 200 }]})

(defn reset-state [_ cur-time]
  (-> starting-state
      (update-in [:pillar-list] (fn [pls] (map #(assoc % :start-time cur-time) pls)))
      (assoc
          :start-time cur-time
          :flyer-start-time cur-time
          :timer-running true)))

(defonce flr-state (atom starting-state))

(defn curr-pillar-pos [cur-time {:keys [pos-x start-time] }]
  (translate pos-x hor-vel (- cur-time start-time)))

(defn in-pillar? [{:keys [cur-x]}]
  (and (>= (+ flyer-x flyer-width)
           cur-x)
       (< flyer-x (+ cur-x pillar-width))))

(defn in-pillar-gap? [{:keys [flyer-y]} {:keys [gap-top]}]
  (and (< gap-top flyer-y)
       (> (+ gap-top pillar-gap)
          (+ flyer-y flyer-height))))

(defn bottom-collision? [{:keys [flyer-y]}]
  (>= flyer-y (- bottom-y flyer-height)))

(defn collision? [{:keys [pillar-list] :as st}]
  (if (some #(or (and (in-pillar? %)
                      (not (in-pillar-gap? st %)))
                 (bottom-collision? st)) pillar-list)
    (assoc st :timer-running false)
    st))

(defn new-pillar [cur-time pos-x]
  {:start-time cur-time
   :pos-x      pos-x
   :cur-x      pos-x
   :gap-top    (+ 60 (rand-int (- bottom-y 120 pillar-gap)))})

(defn update-pillars [{:keys [pillar-list cur-time] :as st}]
  (let [pillars-with-pos (map #(assoc % :cur-x (curr-pillar-pos cur-time %)) pillar-list)
        pillars-in-world (sort-by
                          :cur-x
                          (filter #(> (:cur-x %) (- pillar-width)) pillars-with-pos))]
    (assoc st
      :pillar-list
      (if (< (count pillars-in-world) 3)
        (conj pillars-in-world
              (new-pillar
               cur-time
               (+ pillar-spacing
                  (:cur-x (last pillars-in-world)))))
        pillars-in-world))))

(defn sine-wave [st]
  (assoc st
    :flyer-y
    (+ start-y (* 30 (.sin js/Math (/ (:time-delta st) 300))))))

(defn update-flyer [{:keys [time-delta initial-vel flyer-y jump-count] :as st}]
  (if (pos? jump-count)
    (let [cur-vel (- initial-vel (* time-delta gravity))
          new-y   (- flyer-y cur-vel)
          new-y   (if (> new-y (- bottom-y flyer-height))
                    (- bottom-y flyer-height)
                    new-y)]
      (assoc st
        :flyer-y new-y))
    (sine-wave st)))

(defn score [{:keys [cur-time start-time] :as st}]
  (let [score (- (.abs js/Math (floor (/ (- (* (- cur-time start-time) hor-vel) 544)
                               pillar-spacing)))
                 4)]
  (assoc st :score (if (neg? score) 0 score))))

(defn time-update [timestamp state]
  (-> state
      (assoc
          :cur-time timestamp
          :time-delta (- timestamp (:flyer-start-time state)))
      update-flyer
      update-pillars
      collision?
      score))

(defn jump [{:keys [cur-time jump-count] :as state}]
  (-> state
      (assoc
          :jump-count (inc jump-count)
          :flyer-start-time cur-time
          :initial-vel jump-vel)))

;; derivatives

(defn border [{:keys [cur-time] :as state}]
  (-> state
      (assoc :border-pos (mod (translate 0 hor-vel cur-time) 23))))

(defn pillar-offset [{:keys [gap-top] :as p}]
  (assoc p
    :upper-height gap-top
    :lower-height (- bottom-y gap-top pillar-gap)))

(defn pillar-offsets [state]
  (update-in state [:pillar-list]
             (fn [pillar-list]
               (map pillar-offset pillar-list))))

(defn world [state]
  (-> state
      border
      pillar-offsets))

(defn px [n] (str n "px"))

(defn pillar [{:keys [cur-x pos-x upper-height lower-height]}]
  [:div.pillars
   [:div.pillar.pillar-upper {:style {:left (px cur-x)
                                       :height upper-height}}]
   [:div.pillar.pillar-lower {:style {:left (px cur-x)
                                       :height lower-height}}]])

(defn time-loop [time]
  (let [new-state (swap! flr-state (partial time-update time))]
    (when (:timer-running new-state)
      (go
       (<! (timeout 30))
       (.requestAnimationFrame js/window time-loop)))))

(defn start-game []
  (.requestAnimationFrame
   js/window
   (fn [time]
     (reset! flr-state (reset-state @flr-state time))
     (time-loop time))))

(defn main-template [{:keys [score cur-time jump-count
                             timer-running border-pos
                             flyer-y pillar-list]}]
  (sab/html [:div.board { :onMouseDown (fn [e]
                                         (swap! flr-state jump)
                                         (.preventDefault e))}
             [:h1.score score]
             (if-not timer-running
               [:a.start-button {:onClick #(start-game)}
                (if (< 1 jump-count) "RESTART" "START")]
               [:span])
             [:div (map pillar pillar-list)]
             [:div.flyer {:style {:top (px flyer-y)}}]
             [:div.scrolling-border {:style { :background-position-x (px border-pos)}}]]))

(let [node (.getElementById js/document "board-area")]
  (defn renderer [full-state]
    (.render js/ReactDOM (main-template full-state) node)))

(add-watch flr-state :renderer (fn [_ _ _ n]
                                  (renderer (world n))))

(reset! flr-state @flr-state)
