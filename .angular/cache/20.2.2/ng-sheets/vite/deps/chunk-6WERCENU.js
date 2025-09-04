import {
  TuiAlerts,
  TuiDialogs
} from "./chunk-YY3WMTMS.js";
import {
  TuiHints,
  TuiPopups
} from "./chunk-37RJCKTW.js";
import {
  TuiBreakpointService,
  TuiDropdowns
} from "./chunk-M27B4EMP.js";
import {
  PreventEventPlugin
} from "./chunk-CGRAKRVX.js";
import {
  TUI_SCROLLBAR_OPTIONS,
  TuiScrollControls
} from "./chunk-ZX26QIOR.js";
import {
  TuiPlatform,
  TuiVisualViewport
} from "./chunk-FBHNP4IK.js";
import {
  PolymorpheusOutlet,
  TuiFontSize,
  TuiValidationError,
  tuiGetDuration,
  tuiToAnimationOptions
} from "./chunk-XLE6HMXC.js";
import {
  TUI_IS_MOBILE,
  TuiAnimated
} from "./chunk-HABJD475.js";
import {
  tuiInjectElement
} from "./chunk-JSMOXT4E.js";
import {
  TUI_ANIMATIONS_SPEED,
  TUI_DEFAULT_ERROR_MESSAGE,
  TUI_REDUCED_MOTION,
  TUI_THEME,
  tuiWatch
} from "./chunk-VHLRK7UT.js";
import {
  EVENT_MANAGER_PLUGINS
} from "./chunk-BJJ62CP2.js";
import {
  TUI_VERSION,
  tuiIsString
} from "./chunk-XYVFFOET.js";
import {
  toSignal
} from "./chunk-KSDZZ3AX.js";
import {
  NgIf
} from "./chunk-O7OBBIEJ.js";
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  RendererFactory2,
  ViewChild,
  ViewEncapsulation,
  setClassMetadata,
  ɵɵHostDirectivesFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵresolveDocument,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-H2LFSO26.js";
import {
  DOCUMENT,
  inject,
  signal
} from "./chunk-VNPPOK4A.js";
import {
  map
} from "./chunk-WQ5CZGEH.js";

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-error.mjs
var _c0 = () => ({});
function TuiError_div_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const text_r1 = ctx.polymorpheusOutlet;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", text_r1, " ");
  }
}
function TuiError_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵtemplate(1, TuiError_div_0_ng_container_1_Template, 2, 1, "ng-container", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", ctx_r1.error.message || ctx_r1.default())("polymorpheusOutletContext", ctx_r1.error.context || ɵɵpureFunction0(2, _c0));
  }
}
var _TuiError = class _TuiError {
  constructor() {
    this.options = tuiToAnimationOptions(inject(TUI_ANIMATIONS_SPEED));
    this.error = null;
    this.visible = true;
    this.default = toSignal(inject(TUI_DEFAULT_ERROR_MESSAGE));
  }
  set errorSetter(error) {
    this.error = tuiIsString(error) ? new TuiValidationError(error) : error;
  }
};
_TuiError.ɵfac = function TuiError_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiError)();
};
_TuiError.ɵcmp = ɵɵdefineComponent({
  type: _TuiError,
  selectors: [["tui-error"]],
  hostVars: 2,
  hostBindings: function TuiError_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("_error", ctx.error);
    }
  },
  inputs: {
    errorSetter: [0, "error", "errorSetter"]
  },
  decls: 1,
  vars: 1,
  consts: [["automation-id", "tui-error__text", "tuiAnimated", "", "class", "t-message-text", 4, "ngIf"], ["automation-id", "tui-error__text", "tuiAnimated", "", 1, "t-message-text"], [4, "polymorpheusOutlet", "polymorpheusOutletContext"]],
  template: function TuiError_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, TuiError_div_0_Template, 2, 3, "div", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.error);
    }
  },
  dependencies: [NgIf, PolymorpheusOutlet, TuiAnimated],
  styles: ['[_nghost-%COMP%]{transition-property:grid-template-rows;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:grid;font:var(--tui-font-text-s);color:var(--tui-text-negative);overflow-wrap:break-word;grid-template-rows:0fr}._error[_nghost-%COMP%]{grid-template-rows:1fr}.t-message-text[_ngcontent-%COMP%]{white-space:pre-line;grid-row:1 / span 2;overflow:hidden}.t-message-text.tui-enter[_ngcontent-%COMP%], .t-message-text.tui-leave[_ngcontent-%COMP%]{animation-name:tuiFade}.t-message-text[_ngcontent-%COMP%]:before{content:"";line-height:1.5rem;vertical-align:bottom}'],
  changeDetection: 0
});
var TuiError = _TuiError;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiError, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-error",
      imports: [NgIf, PolymorpheusOutlet, TuiAnimated],
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[class._error]": "error"
      },
      template: '<div\n    *ngIf="error"\n    automation-id="tui-error__text"\n    tuiAnimated\n    class="t-message-text"\n>\n    <ng-container *polymorpheusOutlet="error.message || default() as text; context: error.context || {}">\n        {{ text }}\n    </ng-container>\n</div>\n',
      styles: [':host{transition-property:grid-template-rows;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:grid;font:var(--tui-font-text-s);color:var(--tui-text-negative);overflow-wrap:break-word;grid-template-rows:0fr}:host._error{grid-template-rows:1fr}.t-message-text{white-space:pre-line;grid-row:1 / span 2;overflow:hidden}.t-message-text.tui-enter,.t-message-text.tui-leave{animation-name:tuiFade}.t-message-text:before{content:"";line-height:1.5rem;vertical-align:bottom}\n']
    }]
  }], null, {
    errorSetter: [{
      type: Input,
      args: ["error"]
    }]
  });
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-root.mjs
var _c02 = ["*", [["tuiOverContent"]], [["tuiOverDialogs"]], [["tuiOverAlerts"]], [["tuiOverDropdowns"]], [["tuiOverHints"]]];
var _c1 = ["*", "tuiOverContent", "tuiOverDialogs", "tuiOverAlerts", "tuiOverDropdowns", "tuiOverHints"];
function TuiRoot_ng_container_2_tui_scroll_controls_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-scroll-controls", 3);
  }
}
function TuiRoot_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TuiRoot_ng_container_2_tui_scroll_controls_1_Template, 1, 0, "tui-scroll-controls", 2);
    ɵɵelement(2, "tui-popups");
    ɵɵprojection(3, 1);
    ɵɵelement(4, "tui-dialogs");
    ɵɵprojection(5, 2);
    ɵɵelement(6, "tui-alerts");
    ɵɵprojection(7, 3);
    ɵɵelement(8, "tui-dropdowns");
    ɵɵprojection(9, 4);
    ɵɵelement(10, "tui-hints");
    ɵɵprojection(11, 5);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.scrollbars);
  }
}
var _TuiRoot = class _TuiRoot {
  constructor() {
    this.doc = inject(DOCUMENT);
    this.el = tuiInjectElement();
    this.reducedMotion = inject(TUI_REDUCED_MOTION);
    this.duration = tuiGetDuration(inject(TUI_ANIMATIONS_SPEED));
    this.isChildRoot = !!inject(_TuiRoot, {
      optional: true,
      skipSelf: true
    });
    this.top = signal(!this.isChildRoot);
    this.isMobileRes = toSignal(inject(TuiBreakpointService).pipe(map((breakpoint) => breakpoint === "mobile"), tuiWatch()), {
      initialValue: false
    });
    this.nativeScrollbar = inject(TUI_SCROLLBAR_OPTIONS).mode === "native";
    this.scrollbars = !this.nativeScrollbar && !inject(TUI_IS_MOBILE) && !this.isChildRoot;
    const factory = inject(RendererFactory2);
    factory.removeStylesOnCompDestroy = false;
    if (factory.delegate) {
      factory.delegate.removeStylesOnCompDestroy = false;
    }
    if (!this.top()) {
      return;
    }
    this.doc.documentElement.setAttribute("data-tui-theme", inject(TUI_THEME).toLowerCase());
    if (!this.nativeScrollbar) {
      this.doc.defaultView?.document.documentElement.classList.add("tui-zero-scrollbar");
    }
    ngDevMode && console.assert(!!inject(EVENT_MANAGER_PLUGINS).find((plugin) => plugin instanceof PreventEventPlugin), "NG_EVENT_PLUGINS is missing from global providers");
  }
  get isTopLayer() {
    return this.doc.fullscreenElement?.matches("tui-root") ? this.doc.fullscreenElement === this.el : !this.isChildRoot;
  }
};
_TuiRoot.ɵfac = function TuiRoot_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiRoot)();
};
_TuiRoot.ɵcmp = ɵɵdefineComponent({
  type: _TuiRoot,
  selectors: [["tui-root"]],
  hostAttrs: ["data-tui-version", "4.52.0"],
  hostVars: 6,
  hostBindings: function TuiRoot_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("touchstart.passive.zoneless", function TuiRoot_touchstart_passive_zoneless_HostBindingHandler() {
        return 0;
      })("fullscreenchange", function TuiRoot_fullscreenchange_HostBindingHandler() {
        return ctx.top.set(ctx.isTopLayer);
      }, ɵɵresolveDocument);
    }
    if (rf & 2) {
      ɵɵstyleProp("--tui-duration", ctx.duration, "ms")("--tui-scroll-behavior", ctx.reducedMotion ? "auto" : "smooth");
      ɵɵclassProp("_mobile", ctx.isMobileRes());
    }
  },
  features: [ɵɵHostDirectivesFeature([TuiPlatform, TuiVisualViewport, TuiFontSize])],
  ngContentSelectors: _c1,
  decls: 3,
  vars: 1,
  consts: [[1, "t-root-content"], [4, "ngIf"], ["class", "t-root-scrollbar", 4, "ngIf"], [1, "t-root-scrollbar"]],
  template: function TuiRoot_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef(_c02);
      ɵɵelementStart(0, "div", 0);
      ɵɵprojection(1);
      ɵɵelementEnd();
      ɵɵtemplate(2, TuiRoot_ng_container_2_Template, 12, 1, "ng-container", 1);
    }
    if (rf & 2) {
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.top());
    }
  },
  dependencies: [NgIf, TuiAlerts, TuiDialogs, TuiDropdowns, TuiHints, TuiPopups, TuiScrollControls],
  styles: ['@keyframes tuiSkeletonVibe{to{opacity:.5}}@keyframes tuiPresent{to{content:""}}@keyframes tuiFade{0%{opacity:0}}@keyframes tuiSlide{0%{transform:var(--tui-from, translateY(100%))}}@keyframes tuiScale{0%{transform:scale(var(--tui-scale, 0))}}@keyframes tuiCollapse{0%{grid-template-rows:0fr}to{grid-template-rows:1fr}}.tui-enter,.tui-leave{animation-duration:var(--tui-duration);animation-timing-function:ease-in-out;pointer-events:none}.tui-leave{animation-direction:reverse}\n', ".tui-zero-scrollbar{scrollbar-width:none;-ms-overflow-style:none}.tui-zero-scrollbar::-webkit-scrollbar,.tui-zero-scrollbar::-webkit-scrollbar-thumb{display:none}body,input{margin:0}tui-root{position:relative;display:block;font:var(--tui-font-text-s);color:var(--tui-text-primary);flex:1;border-image:conic-gradient(var(--tui-background-base) 0 0) fill 0/0/0 0 100vh 0;-webkit-tap-highlight-color:transparent}:root{--tui-inline-start: left;--tui-inline-end: right;--tui-inline: 1}[dir=rtl]{--tui-inline-start: right;--tui-inline-end: left;--tui-inline: -1}tui-root>.t-root-scrollbar{position:fixed;top:0;left:0;bottom:0;right:0;z-index:0;display:none;margin:0}[data-tui-theme] tui-root>.t-root-scrollbar{display:block}.t-root-content{position:relative;top:var(--t-root-top);block-size:100%;isolation:isolate}.t-root-content>*{--t-root-top: 0}[tuiDropdownButton][tuiDropdownButton]{display:none}\n"],
  encapsulation: 2
});
var TuiRoot = _TuiRoot;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiRoot, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-root",
      imports: [NgIf, TuiAlerts, TuiDialogs, TuiDropdowns, TuiHints, TuiPopups, TuiScrollControls],
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.Default,
      hostDirectives: [TuiPlatform, TuiVisualViewport, TuiFontSize],
      host: {
        "data-tui-version": TUI_VERSION,
        "[style.--tui-duration.ms]": "duration",
        "[style.--tui-scroll-behavior]": 'reducedMotion ? "auto" : "smooth"',
        "[class._mobile]": "isMobileRes()",
        // Required for the :active state to work in Safari. https://stackoverflow.com/a/33681490
        "(touchstart.passive.zoneless)": "0",
        "(document:fullscreenchange)": "top.set(isTopLayer)"
      },
      template: '<div class="t-root-content">\n    <ng-content />\n</div>\n<ng-container *ngIf="top()">\n    <tui-scroll-controls\n        *ngIf="scrollbars"\n        class="t-root-scrollbar"\n    />\n    <tui-popups />\n    <ng-content select="tuiOverContent" />\n    <tui-dialogs />\n    <ng-content select="tuiOverDialogs" />\n    <tui-alerts />\n    <ng-content select="tuiOverAlerts" />\n    <tui-dropdowns />\n    <ng-content select="tuiOverDropdowns" />\n    <tui-hints />\n    <ng-content select="tuiOverHints" />\n</ng-container>\n',
      styles: ['@keyframes tuiSkeletonVibe{to{opacity:.5}}@keyframes tuiPresent{to{content:""}}@keyframes tuiFade{0%{opacity:0}}@keyframes tuiSlide{0%{transform:var(--tui-from, translateY(100%))}}@keyframes tuiScale{0%{transform:scale(var(--tui-scale, 0))}}@keyframes tuiCollapse{0%{grid-template-rows:0fr}to{grid-template-rows:1fr}}.tui-enter,.tui-leave{animation-duration:var(--tui-duration);animation-timing-function:ease-in-out;pointer-events:none}.tui-leave{animation-direction:reverse}\n', ".tui-zero-scrollbar{scrollbar-width:none;-ms-overflow-style:none}.tui-zero-scrollbar::-webkit-scrollbar,.tui-zero-scrollbar::-webkit-scrollbar-thumb{display:none}body,input{margin:0}tui-root{position:relative;display:block;font:var(--tui-font-text-s);color:var(--tui-text-primary);flex:1;border-image:conic-gradient(var(--tui-background-base) 0 0) fill 0/0/0 0 100vh 0;-webkit-tap-highlight-color:transparent}:root{--tui-inline-start: left;--tui-inline-end: right;--tui-inline: 1}[dir=rtl]{--tui-inline-start: right;--tui-inline-end: left;--tui-inline: -1}tui-root>.t-root-scrollbar{position:fixed;top:0;left:0;bottom:0;right:0;z-index:0;display:none;margin:0}[data-tui-theme] tui-root>.t-root-scrollbar{display:block}.t-root-content{position:relative;top:var(--t-root-top);block-size:100%;isolation:isolate}.t-root-content>*{--t-root-top: 0}[tuiDropdownButton][tuiDropdownButton]{display:none}\n"]
    }]
  }], function() {
    return [];
  }, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-fullscreen.mjs
var _c03 = ["tuiFullscreen", ""];
var _c12 = ["*"];
var _TuiFullscreen = class _TuiFullscreen {
  constructor() {
    this.doc = inject(DOCUMENT);
    this.open = signal(false);
    this.opened = new EventEmitter();
    this.options = {
      navigationUI: "auto"
    };
  }
  set fullscreen(open) {
    if (this.open() === open) {
      return;
    }
    if (open) {
      this.root?.nativeElement.requestFullscreen(this.options).then(() => this.fullscreenState(open));
    } else {
      this.doc.exitFullscreen().then(() => this.fullscreenState(open)).catch((error) => console.error("Failed to exit fullscreen:", error));
    }
  }
  closedByEscape(event) {
    const escaped = !this.doc.fullscreenElement && event.target === this.root?.nativeElement;
    if (escaped) {
      this.fullscreenState(false);
    }
  }
  fullscreenState(open) {
    this.open.set(open);
    this.opened.emit(open);
  }
};
_TuiFullscreen.ɵfac = function TuiFullscreen_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiFullscreen)();
};
_TuiFullscreen.ɵcmp = ɵɵdefineComponent({
  type: _TuiFullscreen,
  selectors: [["", "tuiFullscreen", ""]],
  viewQuery: function TuiFullscreen_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(TuiRoot, 5, ElementRef);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.root = _t.first);
    }
  },
  hostBindings: function TuiFullscreen_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("fullscreenchange", function TuiFullscreen_fullscreenchange_HostBindingHandler($event) {
        return ctx.closedByEscape($event);
      }, ɵɵresolveDocument);
    }
  },
  inputs: {
    options: [0, "tuiFullscreenOptions", "options"],
    fullscreen: [0, "tuiFullscreen", "fullscreen"]
  },
  outputs: {
    opened: "tuiFullscreenChange"
  },
  attrs: _c03,
  ngContentSelectors: _c12,
  decls: 2,
  vars: 0,
  template: function TuiFullscreen_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "tui-root");
      ɵɵprojection(1);
      ɵɵelementEnd();
    }
  },
  dependencies: [TuiRoot],
  encapsulation: 2,
  changeDetection: 0
});
var TuiFullscreen = _TuiFullscreen;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFullscreen, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "[tuiFullscreen]",
      imports: [TuiRoot],
      template: "<tui-root><ng-content /></tui-root>",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "(document:fullscreenchange)": "closedByEscape($event)"
      }
    }]
  }], null, {
    root: [{
      type: ViewChild,
      args: [TuiRoot, {
        read: ElementRef
      }]
    }],
    opened: [{
      type: Output,
      args: ["tuiFullscreenChange"]
    }],
    options: [{
      type: Input,
      args: ["tuiFullscreenOptions"]
    }],
    fullscreen: [{
      type: Input,
      args: ["tuiFullscreen"]
    }]
  });
})();

export {
  TuiError,
  TuiRoot,
  TuiFullscreen
};
//# sourceMappingURL=chunk-6WERCENU.js.map
