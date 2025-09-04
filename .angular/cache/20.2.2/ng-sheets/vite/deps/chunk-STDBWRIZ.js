import {
  TUI_DATA_LIST_HOST
} from "./chunk-GZTJTGPG.js";
import {
  tuiInjectElement
} from "./chunk-JSMOXT4E.js";
import {
  tuiWithStyles
} from "./chunk-XYVFFOET.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  Directive,
  ViewEncapsulation,
  setClassMetadata,
  ɵɵattribute,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵloadQuery,
  ɵɵqueryRefresh
} from "./chunk-H2LFSO26.js";
import {
  forwardRef,
  inject
} from "./chunk-VNPPOK4A.js";

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-label.mjs
var _TuiLabelStyles = class _TuiLabelStyles {
};
_TuiLabelStyles.ɵfac = function TuiLabelStyles_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiLabelStyles)();
};
_TuiLabelStyles.ɵcmp = ɵɵdefineComponent({
  type: _TuiLabelStyles,
  selectors: [["ng-component"]],
  hostAttrs: [1, "tui-label"],
  decls: 0,
  vars: 0,
  template: function TuiLabelStyles_Template(rf, ctx) {
  },
  styles: ["[tuiLabel]{display:flex;gap:.25rem;flex-direction:column;font:var(--tui-font-text-s);color:var(--tui-text-primary)}[tuiLabel]:not([data-orientation=vertical]){flex-direction:row;inline-size:-webkit-fit-content;inline-size:-moz-fit-content;inline-size:fit-content;font:var(--tui-font-text-m)}[tuiLabel]:has(tui-textfield),[tuiLabel]:has(tui-primitive-textfield),[tuiLabel]:has(tui-textarea){flex-direction:column!important;inline-size:auto!important;font:var(--tui-font-text-s)!important}[tuiLabel] input[type=checkbox],[tuiLabel] input[type=radio]{margin-inline-end:.5rem}[tuiLabel] input[type=checkbox][data-size=s],[tuiLabel] input[type=radio][data-size=s]{margin-inline-end:.25rem;margin-block-start:.125rem}[tuiLabel] small{font:var(--tui-font-text-s)}[tuiLabel] [tuiTitle]{margin-block-start:.125rem}[tuiLabel] [tuiSubtitle]{color:var(--tui-text-secondary)}\n"],
  encapsulation: 2,
  changeDetection: 0
});
var TuiLabelStyles = _TuiLabelStyles;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiLabelStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-label"
      },
      styles: ["[tuiLabel]{display:flex;gap:.25rem;flex-direction:column;font:var(--tui-font-text-s);color:var(--tui-text-primary)}[tuiLabel]:not([data-orientation=vertical]){flex-direction:row;inline-size:-webkit-fit-content;inline-size:-moz-fit-content;inline-size:fit-content;font:var(--tui-font-text-m)}[tuiLabel]:has(tui-textfield),[tuiLabel]:has(tui-primitive-textfield),[tuiLabel]:has(tui-textarea){flex-direction:column!important;inline-size:auto!important;font:var(--tui-font-text-s)!important}[tuiLabel] input[type=checkbox],[tuiLabel] input[type=radio]{margin-inline-end:.5rem}[tuiLabel] input[type=checkbox][data-size=s],[tuiLabel] input[type=radio][data-size=s]{margin-inline-end:.25rem;margin-block-start:.125rem}[tuiLabel] small{font:var(--tui-font-text-s)}[tuiLabel] [tuiTitle]{margin-block-start:.125rem}[tuiLabel] [tuiSubtitle]{color:var(--tui-text-secondary)}\n"]
    }]
  }], null, null);
})();
var _TuiLabel = class _TuiLabel {
  constructor() {
    this.el = tuiInjectElement();
    this.nothing = tuiWithStyles(TuiLabelStyles);
    this.parent = inject(forwardRef(() => TUI_DATA_LIST_HOST), {
      optional: true
    });
  }
};
_TuiLabel.ɵfac = function TuiLabel_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiLabel)();
};
_TuiLabel.ɵdir = ɵɵdefineDirective({
  type: _TuiLabel,
  selectors: [["label", "tuiLabel", ""]],
  contentQueries: function TuiLabel_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, TUI_DATA_LIST_HOST, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.textfield = _t.first);
    }
  },
  hostVars: 2,
  hostBindings: function TuiLabel_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("for", ctx.el.htmlFor || (ctx.parent == null ? null : ctx.parent.id))("data-orientation", ctx.textfield ? "vertical" : "horizontal");
    }
  }
});
var TuiLabel = _TuiLabel;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiLabel, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "label[tuiLabel]",
      host: {
        "[attr.for]": "el.htmlFor || parent?.id",
        "[attr.data-orientation]": 'textfield ? "vertical" : "horizontal"'
      }
    }]
  }], null, {
    textfield: [{
      type: ContentChild,
      args: [forwardRef(() => TUI_DATA_LIST_HOST)]
    }]
  });
})();

export {
  TuiLabel
};
//# sourceMappingURL=chunk-STDBWRIZ.js.map
