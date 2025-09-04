import {
  tuiInjectElement
} from "./chunk-JSMOXT4E.js";
import {
  tuiPreventDefault,
  tuiTypedFromEvent
} from "./chunk-VHLRK7UT.js";
import {
  tuiDistanceBetweenTouches,
  tuiIsPresent
} from "./chunk-XYVFFOET.js";
import {
  Directive,
  ElementRef,
  Injectable,
  Output,
  setClassMetadata,
  ɵɵProvidersFeature,
  ɵɵdefineDirective,
  ɵɵstyleProp
} from "./chunk-H2LFSO26.js";
import {
  DOCUMENT,
  InjectionToken,
  inject,
  ɵɵdefineInjectable
} from "./chunk-VNPPOK4A.js";
import {
  Observable,
  filter,
  map,
  merge,
  pairwise,
  repeat,
  scan,
  switchMap,
  takeUntil
} from "./chunk-WQ5CZGEH.js";

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-element.mjs
var _TuiElement = class _TuiElement {
  constructor() {
    this.nativeElement = tuiInjectElement();
    return new ElementRef(this.nativeElement);
  }
};
_TuiElement.ɵfac = function TuiElement_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiElement)();
};
_TuiElement.ɵdir = ɵɵdefineDirective({
  type: _TuiElement,
  selectors: [["", "tuiElement", ""]],
  exportAs: ["elementRef"]
});
var TuiElement = _TuiElement;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiElement, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiElement]",
      exportAs: "elementRef"
    }]
  }], function() {
    return [];
  }, null);
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-pan.mjs
var _TuiPanService = class _TuiPanService extends Observable {
  constructor() {
    const el = tuiInjectElement();
    const doc = inject(DOCUMENT);
    super((subscriber) => merge(tuiTypedFromEvent(el, "touchstart", {
      passive: true
    }), tuiTypedFromEvent(el, "mousedown")).pipe(switchMap(() => merge(tuiTypedFromEvent(doc, "touchmove", {
      passive: true
    }).pipe(filter(({
      touches
    }) => touches.length < 2), map(({
      touches
    }) => touches[0])), tuiTypedFromEvent(doc, "mousemove"))), pairwise(), map(([first, second]) => {
      const deltaX = (second?.clientX ?? 0) - (first?.clientX ?? 0);
      const deltaY = (second?.clientY ?? 0) - (first?.clientY ?? 0);
      return [deltaX, deltaY];
    }), takeUntil(merge(tuiTypedFromEvent(doc, "touchend"), tuiTypedFromEvent(doc, "mouseup"))), repeat()).subscribe(subscriber));
  }
};
_TuiPanService.ɵfac = function TuiPanService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiPanService)();
};
_TuiPanService.ɵprov = ɵɵdefineInjectable({
  token: _TuiPanService,
  factory: _TuiPanService.ɵfac
});
var TuiPanService = _TuiPanService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPanService, [{
    type: Injectable
  }], function() {
    return [];
  }, null);
})();
var _TuiPan = class _TuiPan {
  constructor() {
    this.tuiPan = inject(TuiPanService);
  }
};
_TuiPan.ɵfac = function TuiPan_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiPan)();
};
_TuiPan.ɵdir = ɵɵdefineDirective({
  type: _TuiPan,
  selectors: [["", "tuiPan", ""]],
  outputs: {
    tuiPan: "tuiPan"
  },
  features: [ɵɵProvidersFeature([TuiPanService])]
});
var TuiPan = _TuiPan;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPan, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiPan]",
      providers: [TuiPanService]
    }]
  }], null, {
    tuiPan: [{
      type: Output
    }]
  });
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-swipe.mjs
var TUI_SWIPE_OPTIONS = new InjectionToken(ngDevMode ? "TUI_SWIPE_OPTIONS" : "", {
  factory: () => ({
    timeout: 500,
    threshold: 30
  })
});
var _TuiSwipeService = class _TuiSwipeService extends Observable {
  constructor() {
    const doc = inject(DOCUMENT);
    const el = tuiInjectElement();
    const {
      timeout,
      threshold
    } = inject(TUI_SWIPE_OPTIONS);
    super((subscriber) => merge(tuiTypedFromEvent(el, "touchstart", {
      passive: true
    }), tuiTypedFromEvent(doc, "touchend")).pipe(pairwise(), filter(([first, second]) => !!first.touches.length && first.touches[0]?.identifier === second.changedTouches[0]?.identifier), map(([start, end]) => {
      const startX = start.touches[0]?.clientX ?? 0;
      const startY = start.touches[0]?.clientY ?? 0;
      const endX = end.changedTouches[0]?.clientX ?? 0;
      const endY = end.changedTouches[0]?.clientY ?? 0;
      const distanceX = startX - endX;
      const distanceY = startY - endY;
      const duration = end.timeStamp - start.timeStamp;
      if ((Math.abs(distanceX) > threshold || Math.abs(distanceY) > threshold) && duration < timeout) {
        return {
          direction: tuiGetSwipeDirection(distanceX, distanceY),
          events: [start, end]
        };
      }
      return null;
    }), filter(tuiIsPresent)).subscribe(subscriber));
  }
};
_TuiSwipeService.ɵfac = function TuiSwipeService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiSwipeService)();
};
_TuiSwipeService.ɵprov = ɵɵdefineInjectable({
  token: _TuiSwipeService,
  factory: _TuiSwipeService.ɵfac
});
var TuiSwipeService = _TuiSwipeService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSwipeService, [{
    type: Injectable
  }], function() {
    return [];
  }, null);
})();
function tuiGetSwipeDirection(deltaX, deltaY) {
  if (Math.abs(deltaY) > Math.abs(deltaX)) {
    return deltaY > 0 ? "top" : "bottom";
  }
  return deltaX > 0 ? "left" : "right";
}
var _TuiSwipe = class _TuiSwipe {
  constructor() {
    this.tuiSwipe = inject(TuiSwipeService);
  }
};
_TuiSwipe.ɵfac = function TuiSwipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiSwipe)();
};
_TuiSwipe.ɵdir = ɵɵdefineDirective({
  type: _TuiSwipe,
  selectors: [["", "tuiSwipe", ""]],
  outputs: {
    tuiSwipe: "tuiSwipe"
  },
  features: [ɵɵProvidersFeature([TuiSwipeService])]
});
var TuiSwipe = _TuiSwipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSwipe, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiSwipe]",
      providers: [TuiSwipeService]
    }]
  }], null, {
    tuiSwipe: [{
      type: Output
    }]
  });
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-zoom.mjs
var TUI_ZOOM_OPTIONS = new InjectionToken(ngDevMode ? "TUI_ZOOM_OPTIONS" : "", {
  factory: () => ({
    wheelSensitivity: 0.01
  })
});
var TOUCH_SENSITIVITY = 0.01;
var _TuiZoomService = class _TuiZoomService extends Observable {
  constructor() {
    const el = tuiInjectElement();
    const {
      wheelSensitivity
    } = inject(TUI_ZOOM_OPTIONS);
    super((subscriber) => merge(tuiTypedFromEvent(el, "touchstart", {
      passive: true
    }).pipe(filter(({
      touches
    }) => touches.length > 1), switchMap((startEvent) => tuiTypedFromEvent(el, "touchmove", {
      passive: true
    }).pipe(tuiPreventDefault(), scan((prev, event) => {
      const distance = tuiDistanceBetweenTouches(event);
      return {
        event,
        distance,
        delta: (distance - prev.distance) * TOUCH_SENSITIVITY
      };
    }, {
      event: startEvent,
      distance: tuiDistanceBetweenTouches(startEvent),
      delta: 0
    }), map(({
      event,
      delta
    }) => {
      const clientX = ((event.touches[0]?.clientX ?? 0) + (event.touches[1]?.clientX ?? 0)) / 2;
      const clientY = ((event.touches[0]?.clientY ?? 0) + (event.touches[1]?.clientY ?? 0)) / 2;
      return {
        clientX,
        clientY,
        delta,
        event
      };
    }), takeUntil(tuiTypedFromEvent(el, "touchend"))))), tuiTypedFromEvent(el, "wheel", {
      passive: false
    }).pipe(tuiPreventDefault(), map((wheel) => ({
      clientX: wheel.clientX,
      clientY: wheel.clientY,
      delta: -wheel.deltaY * wheelSensitivity,
      event: wheel
    })))).subscribe(subscriber));
  }
};
_TuiZoomService.ɵfac = function TuiZoomService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiZoomService)();
};
_TuiZoomService.ɵprov = ɵɵdefineInjectable({
  token: _TuiZoomService,
  factory: _TuiZoomService.ɵfac
});
var TuiZoomService = _TuiZoomService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiZoomService, [{
    type: Injectable
  }], function() {
    return [];
  }, null);
})();
var _TuiZoom = class _TuiZoom {
  constructor() {
    this.tuiZoom = inject(TuiZoomService);
  }
};
_TuiZoom.ɵfac = function TuiZoom_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiZoom)();
};
_TuiZoom.ɵdir = ɵɵdefineDirective({
  type: _TuiZoom,
  selectors: [["", "tuiZoom", ""]],
  hostVars: 2,
  hostBindings: function TuiZoom_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵstyleProp("touch-action", "none");
    }
  },
  outputs: {
    tuiZoom: "tuiZoom"
  },
  features: [ɵɵProvidersFeature([TuiZoomService])]
});
var TuiZoom = _TuiZoom;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiZoom, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiZoom]",
      outputs: ["tuiZoom"],
      providers: [TuiZoomService],
      host: {
        "[style.touch-action]": '"none"'
      }
    }]
  }], null, null);
})();

export {
  TuiElement,
  TuiPanService,
  TuiPan,
  TUI_SWIPE_OPTIONS,
  TuiSwipeService,
  TuiSwipe,
  TUI_ZOOM_OPTIONS,
  TuiZoomService,
  TuiZoom
};
//# sourceMappingURL=chunk-SPXXHJXB.js.map
