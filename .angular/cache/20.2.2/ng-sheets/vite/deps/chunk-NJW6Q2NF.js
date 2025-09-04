import {
  tuiInjectElement
} from "./chunk-JSMOXT4E.js";
import {
  Directive,
  NgZone,
  setClassMetadata,
  ɵɵdefineDirective,
  ɵɵstyleProp
} from "./chunk-H2LFSO26.js";
import {
  inject
} from "./chunk-VNPPOK4A.js";

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-transitioned.mjs
var _TuiTransitioned = class _TuiTransitioned {
  constructor() {
    const el = tuiInjectElement();
    inject(NgZone).runOutsideAngular(() => {
      setTimeout(() => {
        el.style.transition = "";
      });
    });
  }
};
_TuiTransitioned.ɵfac = function TuiTransitioned_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiTransitioned)();
};
_TuiTransitioned.ɵdir = ɵɵdefineDirective({
  type: _TuiTransitioned,
  selectors: [["", "tuiTransitioned", ""]],
  hostVars: 2,
  hostBindings: function TuiTransitioned_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵstyleProp("transition", "none");
    }
  }
});
var TuiTransitioned = _TuiTransitioned;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTransitioned, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiTransitioned]",
      host: {
        "[style.transition]": '"none"'
      }
    }]
  }], function() {
    return [];
  }, null);
})();

export {
  TuiTransitioned
};
//# sourceMappingURL=chunk-NJW6Q2NF.js.map
