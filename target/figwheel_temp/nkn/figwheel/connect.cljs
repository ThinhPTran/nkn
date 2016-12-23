(ns figwheel.connect (:require [figwheel.client] [nkn.core] [figwheel.client.utils]))
(figwheel.client/start {:build-id "nkn", :websocket-url "ws://localhost:3449/figwheel-ws"})

