(defproject nkn "0.1.1-SNAPSHOT"
  :description "NKN"

  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.293"]
                 [org.clojure/core.async "0.2.395"]
                 [cljsjs/react-dom-server "15.3.1-0"] 
                 [cljsjs/react-dom "15.3.1-0"] 
                 [cljsjs/react "15.3.1-0"] 
                 [sablono "0.7.5"]]

  :plugins [[lein-cljsbuild "1.1.4"
             :exclusions [org.clojure/clojure]]
            [lein-figwheel "0.5.4-7"]]

  :clean-targets ^{:protect false} ["resources/public/js/out"
                                    "resources/public/js/nkn.js"
                                    :target-path]

  :source-paths ["src"]

  :cljsbuild {
    :builds [{:id "nkn"
              :source-paths ["src"]
              :figwheel true
              :compiler {
                         :main nkn.core
                         :asset-path "js/out"
                         :output-to "resources/public/js/nkn.js"
                         :output-dir "resources/public/js/out"
                         :source-map-timestamp true}}]}

  :figwheel { :css-dirs ["resources/public/css"]
              :open-file-command "emacsclient"
             })
