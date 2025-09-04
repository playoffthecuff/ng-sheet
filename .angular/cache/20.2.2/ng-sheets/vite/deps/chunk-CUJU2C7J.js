import {
  tuiWithStyles
} from "./chunk-XYVFFOET.js";
import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  Input,
  ViewEncapsulation,
  setClassMetadata,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdefineDirective
} from "./chunk-H2LFSO26.js";

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-directives-title.mjs
var _TuiTitleStyles = class _TuiTitleStyles {
};
_TuiTitleStyles.ɵfac = function TuiTitleStyles_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiTitleStyles)();
};
_TuiTitleStyles.ɵcmp = ɵɵdefineComponent({
  type: _TuiTitleStyles,
  selectors: [["ng-component"]],
  hostAttrs: [1, "tui-title"],
  decls: 0,
  vars: 0,
  template: function TuiTitleStyles_Template(rf, ctx) {
  },
  styles: ["[tuiTitle]{position:relative;display:flex;min-inline-size:0;flex-direction:column;text-align:start;gap:.25rem;margin:0;font:var(--tui-font-text-ui-m)}[tuiTitle][data-size=s]{gap:.125rem;font:var(--tui-font-text-s)}[tuiTitle][data-size=s] [tuiSubtitle]{font:var(--tui-font-text-xs)}[tuiTitle][data-size=m]{gap:.125rem;font:var(--tui-font-heading-5)}[tuiTitle][data-size=m] [tuiSubtitle]{font:var(--tui-font-text-m)}[tuiTitle][data-size=l]{gap:.5rem;font:var(--tui-font-heading-3)}[tuiTitle][data-size=l] [tuiSubtitle]{font:var(--tui-font-text-m)}[tuiTitle] h1,[tuiTitle] h2,[tuiTitle] h3,[tuiTitle] h4,[tuiTitle] h5,[tuiTitle] h6{margin:0;font:inherit}[tuiSubtitle]{font:var(--tui-font-text-ui-s);margin:0}[tuiButton] [tuiTitle]{margin-inline-end:auto}[tuiButton] [tuiTitle] [tuiSubtitle]{color:var(--tui-text-secondary)}\n"],
  encapsulation: 2,
  changeDetection: 0
});
var TuiTitleStyles = _TuiTitleStyles;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTitleStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-title"
      },
      styles: ["[tuiTitle]{position:relative;display:flex;min-inline-size:0;flex-direction:column;text-align:start;gap:.25rem;margin:0;font:var(--tui-font-text-ui-m)}[tuiTitle][data-size=s]{gap:.125rem;font:var(--tui-font-text-s)}[tuiTitle][data-size=s] [tuiSubtitle]{font:var(--tui-font-text-xs)}[tuiTitle][data-size=m]{gap:.125rem;font:var(--tui-font-heading-5)}[tuiTitle][data-size=m] [tuiSubtitle]{font:var(--tui-font-text-m)}[tuiTitle][data-size=l]{gap:.5rem;font:var(--tui-font-heading-3)}[tuiTitle][data-size=l] [tuiSubtitle]{font:var(--tui-font-text-m)}[tuiTitle] h1,[tuiTitle] h2,[tuiTitle] h3,[tuiTitle] h4,[tuiTitle] h5,[tuiTitle] h6{margin:0;font:inherit}[tuiSubtitle]{font:var(--tui-font-text-ui-s);margin:0}[tuiButton] [tuiTitle]{margin-inline-end:auto}[tuiButton] [tuiTitle] [tuiSubtitle]{color:var(--tui-text-secondary)}\n"]
    }]
  }], null, null);
})();
var _TuiTitle = class _TuiTitle {
  constructor() {
    this.nothing = tuiWithStyles(TuiTitleStyles);
    this.size = "";
  }
};
_TuiTitle.ɵfac = function TuiTitle_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiTitle)();
};
_TuiTitle.ɵdir = ɵɵdefineDirective({
  type: _TuiTitle,
  selectors: [["", "tuiTitle", ""]],
  hostAttrs: ["tuiTitle", ""],
  hostVars: 1,
  hostBindings: function TuiTitle_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("data-size", ctx.size || null);
    }
  },
  inputs: {
    size: [0, "tuiTitle", "size"]
  }
});
var TuiTitle = _TuiTitle;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTitle, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiTitle]",
      host: {
        tuiTitle: "",
        "[attr.data-size]": "size || null"
      }
    }]
  }], null, {
    size: [{
      type: Input,
      args: ["tuiTitle"]
    }]
  });
})();

export {
  TuiTitle
};
//# sourceMappingURL=chunk-CUJU2C7J.js.map
