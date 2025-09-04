import {
  TuiWithAppearance,
  tuiAppearanceOptionsProvider
} from "./chunk-ZGA3WRGT.js";
import {
  TuiWithIcons
} from "./chunk-UNZWBBVK.js";
import {
  tuiProvideOptions,
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
  ɵɵProvidersFeature,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdefineDirective
} from "./chunk-H2LFSO26.js";
import {
  InjectionToken,
  inject
} from "./chunk-VNPPOK4A.js";

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-badge.mjs
var TUI_BADGE_DEFAULT_OPTIONS = {
  appearance: "",
  size: "l"
};
var TUI_BADGE_OPTIONS = new InjectionToken(ngDevMode ? "TUI_BADGE_OPTIONS" : "", {
  factory: () => TUI_BADGE_DEFAULT_OPTIONS
});
function tuiBadgeOptionsProvider(options) {
  return tuiProvideOptions(TUI_BADGE_OPTIONS, options, TUI_BADGE_DEFAULT_OPTIONS);
}
var _TuiBadgeStyles = class _TuiBadgeStyles {
};
_TuiBadgeStyles.ɵfac = function TuiBadgeStyles_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiBadgeStyles)();
};
_TuiBadgeStyles.ɵcmp = ɵɵdefineComponent({
  type: _TuiBadgeStyles,
  selectors: [["ng-component"]],
  hostAttrs: [1, "tui-badge"],
  decls: 0,
  vars: 0,
  template: function TuiBadgeStyles_Template(rf, ctx) {
  },
  styles: ["tui-badge,[tuiBadge]{--t-icon-size: 1rem;--t-padding: 0 .5rem;--t-size: var(--tui-height-xs);--t-margin: -.25rem;-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font:inherit;line-height:inherit;text-decoration:none;position:relative;display:inline-flex;align-items:center;flex-shrink:0;box-sizing:border-box;white-space:nowrap;overflow:hidden;vertical-align:middle;max-inline-size:100%;gap:calc(var(--t-gap, 0rem) - 2 * var(--t-margin, 0rem));border-radius:6rem;background:#959595;color:var(--tui-background-base);padding:var(--t-padding);block-size:var(--t-size);min-inline-size:var(--t-size);inline-size:-webkit-fit-content;inline-size:-moz-fit-content;inline-size:fit-content;font:var(--tui-font-text-s)}tui-badge>img,[tuiBadge]>img,tui-badge>tui-svg,[tuiBadge]>tui-svg,tui-badge>tui-icon,[tuiBadge]>tui-icon,tui-badge>tui-avatar,[tuiBadge]>tui-avatar,tui-badge>tui-badge,[tuiBadge]>tui-badge,tui-badge>[tuiBadge],[tuiBadge]>[tuiBadge],tui-badge>[tuiRadio],[tuiBadge]>[tuiRadio],tui-badge>[tuiSwitch],[tuiBadge]>[tuiSwitch],tui-badge>[tuiCheckbox],[tuiBadge]>[tuiCheckbox],tui-badge[tuiIcons]:before,[tuiBadge][tuiIcons]:before,tui-badge[tuiIcons]:after,[tuiBadge][tuiIcons]:after{margin:var(--t-margin)}tui-badge[tuiStatus]:before,[tuiBadge][tuiStatus]:before{inline-size:.375rem;block-size:.375rem;margin:0}tui-badge>tui-icon,[tuiBadge]>tui-icon,tui-badge[tuiIcons]:before,[tuiBadge][tuiIcons]:before,tui-badge[tuiIcons]:after,[tuiBadge][tuiIcons]:after{font-size:var(--t-icon-size)!important}tui-badge[data-appearance=error],[tuiBadge][data-appearance=error],tui-badge[data-appearance=negative],[tuiBadge][data-appearance=negative]{--t-status: var(--tui-status-negative)}tui-badge[data-appearance=success],[tuiBadge][data-appearance=success],tui-badge[data-appearance=positive],[tuiBadge][data-appearance=positive]{--t-status: var(--tui-status-positive)}tui-badge[data-appearance=warning],[tuiBadge][data-appearance=warning]{--t-status: var(--tui-status-warning)}tui-badge[data-appearance=info],[tuiBadge][data-appearance=info]{--t-status: var(--tui-status-info)}tui-badge[data-appearance=neutral],[tuiBadge][data-appearance=neutral]{--t-status: var(--tui-status-neutral)}tui-badge[data-size=s],[tuiBadge][data-size=s]{--t-padding: 0 .3125rem;--t-size: 1rem;--t-icon-size: .625rem;--t-margin: -.125rem;font:var(--tui-font-text-xs)}tui-badge[data-size=s][tuiStatus]:before,[tuiBadge][data-size=s][tuiStatus]:before{inline-size:.25rem;block-size:.25rem;margin-inline-end:-.125rem}tui-badge[data-size=m],[tuiBadge][data-size=m]{--t-padding: 0 .375rem;--t-size: 1.25rem;--t-icon-size: .75rem;--t-margin: -.125rem}tui-badge[data-size=xl],[tuiBadge][data-size=xl]{--t-margin: -.25rem;--t-padding: 0 .75rem;--t-size: var(--tui-height-s);font:var(--tui-font-text-m)}tui-badge[data-size=xl][tuiStatus]:before,[tuiBadge][data-size=xl][tuiStatus]:before{inline-size:.5rem;block-size:.5rem;margin-inline-end:-.125rem}tui-badge[tuiAppearance][data-appearance=error],[tuiBadge][tuiAppearance][data-appearance=error],tui-badge[tuiAppearance][data-appearance=success],[tuiBadge][tuiAppearance][data-appearance=success],tui-badge[tuiAppearance][data-appearance=negative],[tuiBadge][tuiAppearance][data-appearance=negative],tui-badge[tuiAppearance][data-appearance=positive],[tuiBadge][tuiAppearance][data-appearance=positive],tui-badge[tuiAppearance][data-appearance=warning],[tuiBadge][tuiAppearance][data-appearance=warning],tui-badge[tuiAppearance][data-appearance=info],[tuiBadge][tuiAppearance][data-appearance=info],tui-badge[tuiAppearance][data-appearance=neutral],[tuiBadge][tuiAppearance][data-appearance=neutral]{color:var(--tui-text-primary)}img[tuiBadge]{padding:0;inline-size:var(--t-size)}tui-icon[tuiBadge]{--t-margin: 0 !important;-webkit-mask:none;mask:none;block-size:var(--t-size);inline-size:var(--t-size)}tui-icon[tuiBadge][data-size=s]:after{-webkit-mask-size:.625rem;mask-size:.625rem}tui-icon[tuiBadge][data-size=m]:after{-webkit-mask-size:.75rem;mask-size:.75rem}tui-icon[tuiBadge][data-size=l]:after,tui-icon[tuiBadge][data-size=xl]:after{-webkit-mask-size:1rem;mask-size:1rem}\n"],
  encapsulation: 2,
  changeDetection: 0
});
var TuiBadgeStyles = _TuiBadgeStyles;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiBadgeStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-badge"
      },
      styles: ["tui-badge,[tuiBadge]{--t-icon-size: 1rem;--t-padding: 0 .5rem;--t-size: var(--tui-height-xs);--t-margin: -.25rem;-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font:inherit;line-height:inherit;text-decoration:none;position:relative;display:inline-flex;align-items:center;flex-shrink:0;box-sizing:border-box;white-space:nowrap;overflow:hidden;vertical-align:middle;max-inline-size:100%;gap:calc(var(--t-gap, 0rem) - 2 * var(--t-margin, 0rem));border-radius:6rem;background:#959595;color:var(--tui-background-base);padding:var(--t-padding);block-size:var(--t-size);min-inline-size:var(--t-size);inline-size:-webkit-fit-content;inline-size:-moz-fit-content;inline-size:fit-content;font:var(--tui-font-text-s)}tui-badge>img,[tuiBadge]>img,tui-badge>tui-svg,[tuiBadge]>tui-svg,tui-badge>tui-icon,[tuiBadge]>tui-icon,tui-badge>tui-avatar,[tuiBadge]>tui-avatar,tui-badge>tui-badge,[tuiBadge]>tui-badge,tui-badge>[tuiBadge],[tuiBadge]>[tuiBadge],tui-badge>[tuiRadio],[tuiBadge]>[tuiRadio],tui-badge>[tuiSwitch],[tuiBadge]>[tuiSwitch],tui-badge>[tuiCheckbox],[tuiBadge]>[tuiCheckbox],tui-badge[tuiIcons]:before,[tuiBadge][tuiIcons]:before,tui-badge[tuiIcons]:after,[tuiBadge][tuiIcons]:after{margin:var(--t-margin)}tui-badge[tuiStatus]:before,[tuiBadge][tuiStatus]:before{inline-size:.375rem;block-size:.375rem;margin:0}tui-badge>tui-icon,[tuiBadge]>tui-icon,tui-badge[tuiIcons]:before,[tuiBadge][tuiIcons]:before,tui-badge[tuiIcons]:after,[tuiBadge][tuiIcons]:after{font-size:var(--t-icon-size)!important}tui-badge[data-appearance=error],[tuiBadge][data-appearance=error],tui-badge[data-appearance=negative],[tuiBadge][data-appearance=negative]{--t-status: var(--tui-status-negative)}tui-badge[data-appearance=success],[tuiBadge][data-appearance=success],tui-badge[data-appearance=positive],[tuiBadge][data-appearance=positive]{--t-status: var(--tui-status-positive)}tui-badge[data-appearance=warning],[tuiBadge][data-appearance=warning]{--t-status: var(--tui-status-warning)}tui-badge[data-appearance=info],[tuiBadge][data-appearance=info]{--t-status: var(--tui-status-info)}tui-badge[data-appearance=neutral],[tuiBadge][data-appearance=neutral]{--t-status: var(--tui-status-neutral)}tui-badge[data-size=s],[tuiBadge][data-size=s]{--t-padding: 0 .3125rem;--t-size: 1rem;--t-icon-size: .625rem;--t-margin: -.125rem;font:var(--tui-font-text-xs)}tui-badge[data-size=s][tuiStatus]:before,[tuiBadge][data-size=s][tuiStatus]:before{inline-size:.25rem;block-size:.25rem;margin-inline-end:-.125rem}tui-badge[data-size=m],[tuiBadge][data-size=m]{--t-padding: 0 .375rem;--t-size: 1.25rem;--t-icon-size: .75rem;--t-margin: -.125rem}tui-badge[data-size=xl],[tuiBadge][data-size=xl]{--t-margin: -.25rem;--t-padding: 0 .75rem;--t-size: var(--tui-height-s);font:var(--tui-font-text-m)}tui-badge[data-size=xl][tuiStatus]:before,[tuiBadge][data-size=xl][tuiStatus]:before{inline-size:.5rem;block-size:.5rem;margin-inline-end:-.125rem}tui-badge[tuiAppearance][data-appearance=error],[tuiBadge][tuiAppearance][data-appearance=error],tui-badge[tuiAppearance][data-appearance=success],[tuiBadge][tuiAppearance][data-appearance=success],tui-badge[tuiAppearance][data-appearance=negative],[tuiBadge][tuiAppearance][data-appearance=negative],tui-badge[tuiAppearance][data-appearance=positive],[tuiBadge][tuiAppearance][data-appearance=positive],tui-badge[tuiAppearance][data-appearance=warning],[tuiBadge][tuiAppearance][data-appearance=warning],tui-badge[tuiAppearance][data-appearance=info],[tuiBadge][tuiAppearance][data-appearance=info],tui-badge[tuiAppearance][data-appearance=neutral],[tuiBadge][tuiAppearance][data-appearance=neutral]{color:var(--tui-text-primary)}img[tuiBadge]{padding:0;inline-size:var(--t-size)}tui-icon[tuiBadge]{--t-margin: 0 !important;-webkit-mask:none;mask:none;block-size:var(--t-size);inline-size:var(--t-size)}tui-icon[tuiBadge][data-size=s]:after{-webkit-mask-size:.625rem;mask-size:.625rem}tui-icon[tuiBadge][data-size=m]:after{-webkit-mask-size:.75rem;mask-size:.75rem}tui-icon[tuiBadge][data-size=l]:after,tui-icon[tuiBadge][data-size=xl]:after{-webkit-mask-size:1rem;mask-size:1rem}\n"]
    }]
  }], null, null);
})();
var _TuiBadge = class _TuiBadge {
  constructor() {
    this.nothing = tuiWithStyles(TuiBadgeStyles);
    this.size = inject(TUI_BADGE_OPTIONS).size;
  }
};
_TuiBadge.ɵfac = function TuiBadge_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiBadge)();
};
_TuiBadge.ɵdir = ɵɵdefineDirective({
  type: _TuiBadge,
  selectors: [["tui-badge"], ["", "tuiBadge", ""]],
  hostVars: 1,
  hostBindings: function TuiBadge_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("data-size", ctx.size);
    }
  },
  inputs: {
    size: "size"
  },
  features: [ɵɵProvidersFeature([tuiAppearanceOptionsProvider(TUI_BADGE_OPTIONS)]), ɵɵHostDirectivesFeature([TuiWithAppearance, TuiWithIcons])]
});
var TuiBadge = _TuiBadge;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiBadge, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "tui-badge,[tuiBadge]",
      providers: [tuiAppearanceOptionsProvider(TUI_BADGE_OPTIONS)],
      hostDirectives: [TuiWithAppearance, TuiWithIcons],
      host: {
        "[attr.data-size]": "size"
      }
    }]
  }], null, {
    size: [{
      type: Input
    }]
  });
})();

export {
  TUI_BADGE_DEFAULT_OPTIONS,
  TUI_BADGE_OPTIONS,
  tuiBadgeOptionsProvider,
  TuiBadge
};
//# sourceMappingURL=chunk-7KFTYP4C.js.map
