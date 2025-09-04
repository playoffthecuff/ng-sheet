import {
  TUI_ASSETS_PATH
} from "./chunk-VHLRK7UT.js";
import {
  Pipe,
  setClassMetadata,
  ɵɵdefinePipe
} from "./chunk-H2LFSO26.js";
import {
  inject
} from "./chunk-VNPPOK4A.js";

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-pipes-flag.mjs
var _TuiFlagPipe = class _TuiFlagPipe {
  constructor() {
    this.staticPath = inject(TUI_ASSETS_PATH);
  }
  transform(countryIsoCode) {
    if (!countryIsoCode) {
      return null;
    }
    return `${this.staticPath}/flags/${countryIsoCode.toLowerCase()}.svg`;
  }
};
_TuiFlagPipe.ɵfac = function TuiFlagPipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiFlagPipe)();
};
_TuiFlagPipe.ɵpipe = ɵɵdefinePipe({
  name: "tuiFlag",
  type: _TuiFlagPipe,
  pure: true
});
var TuiFlagPipe = _TuiFlagPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFlagPipe, [{
    type: Pipe,
    args: [{
      standalone: true,
      name: "tuiFlag"
    }]
  }], null, null);
})();

export {
  TuiFlagPipe
};
//# sourceMappingURL=chunk-X6FSSHIP.js.map
