import {
  TuiTransitioned
} from "./chunk-NJW6Q2NF.js";
import {
  tuiInjectElement
} from "./chunk-JSMOXT4E.js";
import {
  TUI_ALLOW_SIGNAL_WRITES,
  tuiDirectiveBinding,
  tuiIsString,
  tuiProvide,
  tuiWithStyles
} from "./chunk-XYVFFOET.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Directive,
  Input,
  ViewEncapsulation,
  setClassMetadata,
  ɵɵHostDirectivesFeature,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdefineDirective
} from "./chunk-H2LFSO26.js";
import {
  InjectionToken,
  computed,
  effect,
  inject,
  signal
} from "./chunk-VNPPOK4A.js";

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-directives-appearance.mjs
var TUI_APPEARANCE_DEFAULT_OPTIONS = {
  appearance: ""
};
var TUI_APPEARANCE_OPTIONS = new InjectionToken(ngDevMode ? "TUI_APPEARANCE_OPTIONS" : "", {
  factory: () => TUI_APPEARANCE_DEFAULT_OPTIONS
});
function tuiAppearanceOptionsProvider(token) {
  return tuiProvide(TUI_APPEARANCE_OPTIONS, token);
}
var _TuiAppearanceStyles = class _TuiAppearanceStyles {
};
_TuiAppearanceStyles.ɵfac = function TuiAppearanceStyles_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiAppearanceStyles)();
};
_TuiAppearanceStyles.ɵcmp = ɵɵdefineComponent({
  type: _TuiAppearanceStyles,
  selectors: [["ng-component"]],
  hostAttrs: [1, "tui-appearance"],
  decls: 0,
  vars: 0,
  template: function TuiAppearanceStyles_Template(rf, ctx) {
  },
  styles: ["[tuiAppearance]{transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:relative;-webkit-appearance:none;appearance:none;outline:.125rem solid transparent;outline-offset:-.125rem;transition-property:color,background-color,opacity,box-shadow,border-color,border-radius,filter}[tuiAppearance]:focus-visible:not([data-focus=false]){outline-color:var(--tui-border-focus)}[tuiAppearance][data-focus=true]{outline-color:var(--tui-border-focus)}[tuiAppearance][tuiWrapper]:not(._focused):has(:focus-visible),[tuiAppearance][tuiWrapper]._focused{outline-color:var(--tui-border-focus)}[tuiAppearance]:disabled:not([data-state]),[tuiAppearance][data-state=disabled]{cursor:initial;opacity:var(--tui-disabled-opacity)}[tuiAppearance][tuiWrapper]:disabled:not([data-state]),[tuiAppearance][tuiWrapper][data-state=disabled]{cursor:initial;opacity:var(--tui-disabled-opacity)}\n"],
  encapsulation: 2,
  changeDetection: 0
});
var TuiAppearanceStyles = _TuiAppearanceStyles;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAppearanceStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-appearance"
      },
      styles: ["[tuiAppearance]{transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:relative;-webkit-appearance:none;appearance:none;outline:.125rem solid transparent;outline-offset:-.125rem;transition-property:color,background-color,opacity,box-shadow,border-color,border-radius,filter}[tuiAppearance]:focus-visible:not([data-focus=false]){outline-color:var(--tui-border-focus)}[tuiAppearance][data-focus=true]{outline-color:var(--tui-border-focus)}[tuiAppearance][tuiWrapper]:not(._focused):has(:focus-visible),[tuiAppearance][tuiWrapper]._focused{outline-color:var(--tui-border-focus)}[tuiAppearance]:disabled:not([data-state]),[tuiAppearance][data-state=disabled]{cursor:initial;opacity:var(--tui-disabled-opacity)}[tuiAppearance][tuiWrapper]:disabled:not([data-state]),[tuiAppearance][tuiWrapper][data-state=disabled]{cursor:initial;opacity:var(--tui-disabled-opacity)}\n"]
    }]
  }], null, null);
})();
var _TuiAppearance = class _TuiAppearance {
  constructor() {
    this.cdr = inject(ChangeDetectorRef, {
      skipSelf: true
    });
    this.el = tuiInjectElement();
    this.nothing = tuiWithStyles(TuiAppearanceStyles);
    this.modes = computed((mode = this.mode()) => !mode || tuiIsString(mode) ? mode : mode.join(" "));
    this.appearance = signal(inject(TUI_APPEARANCE_OPTIONS).appearance);
    this.state = signal(null);
    this.focus = signal(null);
    this.mode = signal(null);
    this.update = effect(() => {
      this.mode();
      this.state();
      this.focus();
      if (this.el.matches("tui-textfield[multi]")) {
        this.cdr.detectChanges();
      }
    }, TUI_ALLOW_SIGNAL_WRITES);
  }
  set tuiAppearance(appearance) {
    this.appearance.set(appearance);
  }
  set tuiAppearanceState(state) {
    this.state.set(state);
  }
  set tuiAppearanceFocus(focus) {
    this.focus.set(focus);
  }
  set tuiAppearanceMode(mode) {
    this.mode.set(mode);
  }
};
_TuiAppearance.ɵfac = function TuiAppearance_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiAppearance)();
};
_TuiAppearance.ɵdir = ɵɵdefineDirective({
  type: _TuiAppearance,
  selectors: [["", "tuiAppearance", ""]],
  hostAttrs: ["tuiAppearance", ""],
  hostVars: 4,
  hostBindings: function TuiAppearance_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("data-appearance", ctx.appearance())("data-state", ctx.state())("data-focus", ctx.focus())("data-mode", ctx.modes());
    }
  },
  inputs: {
    tuiAppearance: "tuiAppearance",
    tuiAppearanceState: "tuiAppearanceState",
    tuiAppearanceFocus: "tuiAppearanceFocus",
    tuiAppearanceMode: "tuiAppearanceMode"
  },
  features: [ɵɵHostDirectivesFeature([TuiTransitioned])]
});
var TuiAppearance = _TuiAppearance;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAppearance, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiAppearance]",
      hostDirectives: [TuiTransitioned],
      host: {
        tuiAppearance: "",
        "[attr.data-appearance]": "appearance()",
        "[attr.data-state]": "state()",
        "[attr.data-focus]": "focus()",
        "[attr.data-mode]": "modes()"
      }
    }]
  }], null, {
    tuiAppearance: [{
      type: Input
    }],
    tuiAppearanceState: [{
      type: Input
    }],
    tuiAppearanceFocus: [{
      type: Input
    }],
    tuiAppearanceMode: [{
      type: Input
    }]
  });
})();
function tuiAppearance(value, options) {
  return tuiDirectiveBinding(TuiAppearance, "appearance", value, options);
}
function tuiAppearanceState(value, options) {
  return tuiDirectiveBinding(TuiAppearance, "state", value, options);
}
function tuiAppearanceFocus(value, options) {
  return tuiDirectiveBinding(TuiAppearance, "focus", value, options);
}
function tuiAppearanceMode(value, options) {
  return tuiDirectiveBinding(TuiAppearance, "mode", value, options);
}
var _TuiWithAppearance = class _TuiWithAppearance {
};
_TuiWithAppearance.ɵfac = function TuiWithAppearance_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiWithAppearance)();
};
_TuiWithAppearance.ɵdir = ɵɵdefineDirective({
  type: _TuiWithAppearance,
  features: [ɵɵHostDirectivesFeature([{
    directive: TuiAppearance,
    inputs: ["tuiAppearance", "appearance", "tuiAppearanceState", "tuiAppearanceState", "tuiAppearanceFocus", "tuiAppearanceFocus", "tuiAppearanceMode", "tuiAppearanceMode"]
  }])]
});
var TuiWithAppearance = _TuiWithAppearance;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiWithAppearance, [{
    type: Directive,
    args: [{
      standalone: true,
      hostDirectives: [{
        directive: TuiAppearance,
        inputs: ["tuiAppearance: appearance", "tuiAppearanceState", "tuiAppearanceFocus", "tuiAppearanceMode"]
      }]
    }]
  }], null, null);
})();

export {
  TUI_APPEARANCE_DEFAULT_OPTIONS,
  TUI_APPEARANCE_OPTIONS,
  tuiAppearanceOptionsProvider,
  TuiAppearance,
  tuiAppearance,
  tuiAppearanceState,
  tuiAppearanceFocus,
  tuiAppearanceMode,
  TuiWithAppearance
};
//# sourceMappingURL=chunk-ZGA3WRGT.js.map
