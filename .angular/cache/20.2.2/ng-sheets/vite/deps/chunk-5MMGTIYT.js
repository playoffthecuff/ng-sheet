import {
  DOCUMENT,
  InjectionToken,
  inject
} from "./chunk-VNPPOK4A.js";
import {
  Observable,
  distinctUntilChanged,
  fromEvent,
  map,
  share,
  shareReplay,
  startWith
} from "./chunk-WQ5CZGEH.js";

// node_modules/@ng-web-apis/common/fesm2022/ng-web-apis-common.mjs
var WA_WINDOW = new InjectionToken("[WA_WINDOW]", {
  factory: () => {
    const { defaultView } = inject(DOCUMENT);
    if (!defaultView) {
      throw new Error("Window is not available");
    }
    return defaultView;
  }
});
var WINDOW = WA_WINDOW;
var WA_ANIMATION_FRAME = new InjectionToken("[WA_ANIMATION_FRAME]", {
  factory: () => {
    const { requestAnimationFrame, cancelAnimationFrame } = inject(WINDOW);
    const animationFrame$ = new Observable((subscriber) => {
      let id = NaN;
      const callback = (timestamp) => {
        subscriber.next(timestamp);
        id = requestAnimationFrame(callback);
      };
      id = requestAnimationFrame(callback);
      return () => {
        cancelAnimationFrame(id);
      };
    });
    return animationFrame$.pipe(share());
  }
});
var ANIMATION_FRAME = WA_ANIMATION_FRAME;
var WA_CACHES = new InjectionToken("[WA_CACHES]", {
  factory: () => inject(WINDOW).caches
});
var CACHES = WA_CACHES;
var WA_CRYPTO = new InjectionToken("[WA_CRYPTO]", {
  factory: () => inject(WINDOW).crypto
});
var CRYPTO = WA_CRYPTO;
var WA_CSS = new InjectionToken("[WA_CSS]", {
  factory: () => inject(WINDOW).CSS ?? {
    escape: (v) => v,
    // eslint-disable-next-line no-restricted-syntax
    supports: () => false
  }
});
var TOKEN_CSS = WA_CSS;
var WA_HISTORY = new InjectionToken("[WA_HISTORY]", {
  factory: () => inject(WINDOW).history
});
var HISTORY = WA_HISTORY;
var WA_LOCAL_STORAGE = new InjectionToken("[WA_LOCAL_STORAGE]", {
  factory: () => inject(WINDOW).localStorage
});
var LOCAL_STORAGE = WA_LOCAL_STORAGE;
var WA_LOCATION = new InjectionToken("[WA_LOCATION]", {
  factory: () => inject(WINDOW).location
});
var LOCATION = WA_LOCATION;
var WA_NAVIGATOR = new InjectionToken("[WA_NAVIGATOR]", {
  factory: () => inject(WINDOW).navigator
});
var NAVIGATOR = WA_NAVIGATOR;
var WA_MEDIA_DEVICES = new InjectionToken("[WA_MEDIA_DEVICES]", {
  factory: () => inject(NAVIGATOR).mediaDevices
});
var MEDIA_DEVICES = WA_MEDIA_DEVICES;
var WA_NETWORK_INFORMATION = new InjectionToken("[WA_NETWORK_INFORMATION]", {
  // @ts-ignore
  factory: () => inject(WA_NAVIGATOR).connection || null
});
var NETWORK_INFORMATION = WA_NETWORK_INFORMATION;
var WA_PAGE_VISIBILITY = new InjectionToken("[WA_PAGE_VISIBILITY]", {
  factory: () => {
    const documentRef = inject(DOCUMENT);
    return fromEvent(documentRef, "visibilitychange").pipe(startWith(0), map(() => documentRef.visibilityState !== "hidden"), distinctUntilChanged(), shareReplay({ refCount: false, bufferSize: 1 }));
  }
});
var PAGE_VISIBILITY = WA_PAGE_VISIBILITY;
var WA_PERFORMANCE = new InjectionToken("[WA_PERFORMANCE]", {
  factory: () => inject(WINDOW).performance
});
var PERFORMANCE = WA_PERFORMANCE;
var WA_SCREEN = new InjectionToken("[WA_SCREEN]", {
  factory: () => inject(WINDOW).screen
});
var SCREEN = WA_SCREEN;
var WA_SESSION_STORAGE = new InjectionToken("[WA_SESSION_STORAGE]", {
  factory: () => inject(WINDOW).sessionStorage
});
var SESSION_STORAGE = WA_SESSION_STORAGE;
var WA_SPEECH_RECOGNITION = new InjectionToken("[WA_SPEECH_RECOGNITION]: [SPEECH_RECOGNITION]", {
  factory: () => {
    const windowRef = inject(WINDOW);
    return windowRef.speechRecognition || windowRef.webkitSpeechRecognition || null;
  }
});
var SPEECH_RECOGNITION = WA_SPEECH_RECOGNITION;
var WA_SPEECH_SYNTHESIS = new InjectionToken("[WA_SPEECH_SYNTHESIS]", {
  factory: () => inject(WINDOW).speechSynthesis
});
var SPEECH_SYNTHESIS = WA_SPEECH_SYNTHESIS;
var WA_USER_AGENT = new InjectionToken("[WA_USER_AGENT]", {
  factory: () => inject(NAVIGATOR).userAgent
});
var USER_AGENT = WA_USER_AGENT;

export {
  WA_WINDOW,
  WINDOW,
  WA_ANIMATION_FRAME,
  ANIMATION_FRAME,
  WA_CACHES,
  CACHES,
  WA_CRYPTO,
  CRYPTO,
  WA_CSS,
  TOKEN_CSS,
  WA_HISTORY,
  HISTORY,
  WA_LOCAL_STORAGE,
  LOCAL_STORAGE,
  WA_LOCATION,
  LOCATION,
  WA_NAVIGATOR,
  NAVIGATOR,
  WA_MEDIA_DEVICES,
  MEDIA_DEVICES,
  WA_NETWORK_INFORMATION,
  NETWORK_INFORMATION,
  WA_PAGE_VISIBILITY,
  PAGE_VISIBILITY,
  WA_PERFORMANCE,
  PERFORMANCE,
  WA_SCREEN,
  SCREEN,
  WA_SESSION_STORAGE,
  SESSION_STORAGE,
  WA_SPEECH_RECOGNITION,
  SPEECH_RECOGNITION,
  WA_SPEECH_SYNTHESIS,
  SPEECH_SYNTHESIS,
  WA_USER_AGENT,
  USER_AGENT
};
//# sourceMappingURL=chunk-5MMGTIYT.js.map
