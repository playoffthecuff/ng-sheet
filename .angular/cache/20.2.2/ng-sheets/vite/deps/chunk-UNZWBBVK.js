import {
  TUI_ICON_END,
  TUI_ICON_START,
  tuiGetIconMode,
  tuiInjectIconResolver
} from "./chunk-VHLRK7UT.js";
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
  ɵɵHostDirectivesFeature,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵstyleProp
} from "./chunk-H2LFSO26.js";
import {
  computed,
  inject,
  signal
} from "./chunk-VNPPOK4A.js";

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-directives-icons.mjs
var _TuiIconsStyles = class _TuiIconsStyles {
};
_TuiIconsStyles.ɵfac = function TuiIconsStyles_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiIconsStyles)();
};
_TuiIconsStyles.ɵcmp = ɵɵdefineComponent({
  type: _TuiIconsStyles,
  selectors: [["ng-component"]],
  hostAttrs: [1, "tui-icons"],
  decls: 0,
  vars: 0,
  template: function TuiIconsStyles_Template(rf, ctx) {
  },
  styles: ['[tuiIcons]{--t-icon-start: none;--t-icon-end: none}[tuiIcons]:before,[tuiIcons]:after{content:"";inline-size:1em;block-size:1em;line-height:1em;font-size:1.5rem;flex-shrink:0;box-sizing:content-box;background:currentColor}[tuiIcons]:before{display:var(--t-icon-start, none);-webkit-mask:var(--t-icon-start) no-repeat center / contain padding-box;mask:var(--t-icon-start) no-repeat center / contain padding-box}[tuiIcons]:after{display:var(--t-icon-end, none);-webkit-mask:var(--t-icon-end) no-repeat center / contain padding-box;mask:var(--t-icon-end) no-repeat center / contain padding-box}[tuiIcons][data-icon-start=image]:before{-webkit-mask:none;mask:none;background:var(--t-icon-start) no-repeat center / contain padding-box}[tuiIcons][data-icon-end=image]:after{-webkit-mask:none;mask:none;background:var(--t-icon-end) no-repeat center / contain padding-box}[tuiIcons][data-icon-start=font]:before,[tuiIcons][data-icon-end=font]:after{display:grid;-webkit-mask:none;mask:none;background:none;font:1.3em/1 var(--tui-font-icon, inherit);text-align:center;place-content:center;text-transform:none}[tuiIcons][data-icon-start=font]:before{content:var(--t-icon-start)}[tuiIcons][data-icon-end=font]:after{content:var(--t-icon-end)}\n'],
  encapsulation: 2,
  changeDetection: 0
});
var TuiIconsStyles = _TuiIconsStyles;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiIconsStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-icons"
      },
      styles: ['[tuiIcons]{--t-icon-start: none;--t-icon-end: none}[tuiIcons]:before,[tuiIcons]:after{content:"";inline-size:1em;block-size:1em;line-height:1em;font-size:1.5rem;flex-shrink:0;box-sizing:content-box;background:currentColor}[tuiIcons]:before{display:var(--t-icon-start, none);-webkit-mask:var(--t-icon-start) no-repeat center / contain padding-box;mask:var(--t-icon-start) no-repeat center / contain padding-box}[tuiIcons]:after{display:var(--t-icon-end, none);-webkit-mask:var(--t-icon-end) no-repeat center / contain padding-box;mask:var(--t-icon-end) no-repeat center / contain padding-box}[tuiIcons][data-icon-start=image]:before{-webkit-mask:none;mask:none;background:var(--t-icon-start) no-repeat center / contain padding-box}[tuiIcons][data-icon-end=image]:after{-webkit-mask:none;mask:none;background:var(--t-icon-end) no-repeat center / contain padding-box}[tuiIcons][data-icon-start=font]:before,[tuiIcons][data-icon-end=font]:after{display:grid;-webkit-mask:none;mask:none;background:none;font:1.3em/1 var(--tui-font-icon, inherit);text-align:center;place-content:center;text-transform:none}[tuiIcons][data-icon-start=font]:before{content:var(--t-icon-start)}[tuiIcons][data-icon-end=font]:after{content:var(--t-icon-end)}\n']
    }]
  }], null, null);
})();
var _TuiIcons = class _TuiIcons {
  constructor() {
    this.resolver = tuiInjectIconResolver();
    this.nothing = tuiWithStyles(TuiIconsStyles);
    this.startResource = computed(() => this.resolve(this.iconStart()));
    this.endResource = computed(() => this.resolve(this.iconEnd()));
    this.startMode = computed(() => tuiGetIconMode(this.iconStart()?.toString()));
    this.endMode = computed(() => tuiGetIconMode(this.iconEnd()));
    this.iconStart = signal(inject(TUI_ICON_START, {
      self: true,
      optional: true
    }) || "");
    this.iconEnd = signal(inject(TUI_ICON_END, {
      self: true,
      optional: true
    }) || "");
  }
  // TODO(v5): use signal inputs
  set iconStartSetter(x) {
    this.iconStart.set(x);
  }
  // TODO(v5): use signal inputs
  set iconEndSetter(x) {
    this.iconEnd.set(x);
  }
  resolve(icon) {
    if (!icon) {
      return null;
    }
    const iconStr = icon.toString();
    return tuiGetIconMode(iconStr) === "font" ? `'${this.resolver(iconStr)}'` : `url(${this.resolver(iconStr)})`;
  }
};
_TuiIcons.ɵfac = function TuiIcons_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiIcons)();
};
_TuiIcons.ɵdir = ɵɵdefineDirective({
  type: _TuiIcons,
  hostAttrs: ["tuiIcons", ""],
  hostVars: 6,
  hostBindings: function TuiIcons_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("data-icon-start", ctx.startMode())("data-icon-end", ctx.endMode());
      ɵɵstyleProp("--t-icon-start", ctx.startResource())("--t-icon-end", ctx.endResource());
    }
  },
  inputs: {
    iconStartSetter: [0, "iconStart", "iconStartSetter"],
    iconEndSetter: [0, "iconEnd", "iconEndSetter"]
  }
});
var TuiIcons = _TuiIcons;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiIcons, [{
    type: Directive,
    args: [{
      standalone: true,
      host: {
        tuiIcons: "",
        "[style.--t-icon-start]": "startResource()",
        "[style.--t-icon-end]": "endResource()",
        "[attr.data-icon-start]": "startMode()",
        "[attr.data-icon-end]": "endMode()"
      }
    }]
  }], null, {
    iconStartSetter: [{
      type: Input,
      args: ["iconStart"]
    }],
    iconEndSetter: [{
      type: Input,
      args: ["iconEnd"]
    }]
  });
})();
var _TuiWithIcons = class _TuiWithIcons {
};
_TuiWithIcons.ɵfac = function TuiWithIcons_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiWithIcons)();
};
_TuiWithIcons.ɵdir = ɵɵdefineDirective({
  type: _TuiWithIcons,
  features: [ɵɵHostDirectivesFeature([{
    directive: TuiIcons,
    inputs: ["iconStart", "iconStart", "iconEnd", "iconEnd"]
  }])]
});
var TuiWithIcons = _TuiWithIcons;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiWithIcons, [{
    type: Directive,
    args: [{
      standalone: true,
      hostDirectives: [{
        directive: TuiIcons,
        inputs: ["iconStart", "iconEnd"]
      }]
    }]
  }], null, null);
})();

export {
  TuiIcons,
  TuiWithIcons
};
//# sourceMappingURL=chunk-UNZWBBVK.js.map
