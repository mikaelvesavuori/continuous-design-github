(()=>{"use strict";({480:function(){var e=this&&this.__awaiter||function(e,t,i,n){return new(i||(i=Promise))((function(a,s){function o(e){try{f(n.next(e))}catch(e){s(e)}}function c(e){try{f(n.throw(e))}catch(e){s(e)}}function f(e){var t;e.done?a(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(o,c)}f((n=n.apply(e,t||[])).next())}))};figma.showUI(__html__),figma.ui.resize(350,460),figma.ui.onmessage=t=>e(void 0,void 0,void 0,(function*(){if("resize"===t.type&&figma.ui.resize(t.message.width,t.message.height),"notify"===t.type&&figma.notify(t.message),"store"===t.type){const{key:e,data:i}=t;yield figma.clientStorage.setAsync(e,i)}if("load"===t.type){const{key:e}=t,i=yield figma.clientStorage.getAsync(e);i&&figma.ui.postMessage(JSON.parse(i))}if("clear"===t.type){const{key:e}=t;yield figma.clientStorage.setAsync(e,""),figma.ui.postMessage("cleared")}}))}})[480]()})();