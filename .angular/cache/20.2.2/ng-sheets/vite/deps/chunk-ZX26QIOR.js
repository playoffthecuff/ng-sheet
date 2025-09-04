import {
  TUI_IS_IOS,
  TuiAnimated
} from "./chunk-HABJD475.js";
import {
  tuiCreateOptions
} from "./chunk-2JKV5ZCN.js";
import {
  tuiGetElementOffset,
  tuiInjectElement
} from "./chunk-JSMOXT4E.js";
import {
  TUI_SCROLL_REF,
  tuiScrollFrom,
  tuiTypedFromEvent,
  tuiZoneOptimized,
  tuiZonefree,
  tuiZonefreeScheduler
} from "./chunk-VHLRK7UT.js";
import {
  WA_ANIMATION_FRAME
} from "./chunk-5MMGTIYT.js";
import {
  tuiProvide
} from "./chunk-XYVFFOET.js";
import {
  takeUntilDestroyed
} from "./chunk-KSDZZ3AX.js";
import {
  AsyncPipe,
  NgIf
} from "./chunk-O7OBBIEJ.js";
import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  ElementRef,
  Injectable,
  Input,
  setClassMetadata,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵreference,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor
} from "./chunk-H2LFSO26.js";
import {
  DestroyRef,
  inject,
  ɵɵdefineInjectable,
  ɵɵresetView,
  ɵɵrestoreView
} from "./chunk-VNPPOK4A.js";
import {
  Observable,
  distinctUntilChanged,
  filter,
  map,
  merge,
  startWith,
  switchMap,
  takeUntil,
  throttleTime,
  timer
} from "./chunk-WQ5CZGEH.js";

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-scrollbar.mjs
function TuiScrollControls_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TuiScrollControls_ng_template_1_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 5);
    ɵɵlistener("mousedown.capture.prevent", function TuiScrollControls_ng_template_1_ng_container_0_div_1_Template_div_mousedown_capture_prevent_0_listener() {
      ɵɵrestoreView(_r1);
      return ɵɵresetView(0);
    });
    ɵɵelement(1, "div", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const bars_r2 = ɵɵnextContext().ngIf;
    ɵɵclassProp("t-bar_has-horizontal", bars_r2[1]);
  }
}
function TuiScrollControls_ng_template_1_ng_container_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 7);
    ɵɵlistener("mousedown.capture.prevent", function TuiScrollControls_ng_template_1_ng_container_0_div_2_Template_div_mousedown_capture_prevent_0_listener() {
      ɵɵrestoreView(_r3);
      return ɵɵresetView(0);
    });
    ɵɵelement(1, "div", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const bars_r2 = ɵɵnextContext().ngIf;
    ɵɵclassProp("t-bar_has-vertical", bars_r2[0]);
  }
}
function TuiScrollControls_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TuiScrollControls_ng_template_1_ng_container_0_div_1_Template, 2, 2, "div", 3)(2, TuiScrollControls_ng_template_1_ng_container_0_div_2_Template, 2, 2, "div", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const bars_r2 = ctx.ngIf;
    ɵɵadvance();
    ɵɵproperty("ngIf", bars_r2[0]);
    ɵɵadvance();
    ɵɵproperty("ngIf", bars_r2[1]);
  }
}
function TuiScrollControls_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TuiScrollControls_ng_template_1_ng_container_0_Template, 3, 2, "ng-container", 2);
    ɵɵpipe(1, "async");
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx_r3.refresh$));
  }
}
var _c0 = ["*"];
function TuiScrollbar_tui_scroll_controls_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-scroll-controls", 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassProp("t-hover-mode", ctx_r0.options.mode === "hover");
  }
}
var _TuiScrollbarService = class _TuiScrollbarService extends Observable {
  constructor() {
    super((subscriber) => this.scroll$.subscribe(subscriber));
    this.el = tuiInjectElement();
    this.element = inject(TUI_SCROLL_REF).nativeElement;
    this.scroll$ = merge(tuiTypedFromEvent(this.el.parentElement, "mousedown").pipe(filter(({
      target
    }) => target !== this.el), map((event) => this.getScrolled(event, 0.5, 0.5))), tuiTypedFromEvent(this.el, "mousedown").pipe(tuiZonefree(), switchMap((event) => {
      const {
        ownerDocument
      } = this.el;
      const rect = this.el.getBoundingClientRect();
      const vertical = getOffsetVertical(event, rect);
      const horizontal = getOffsetHorizontal(event, rect);
      return tuiTypedFromEvent(ownerDocument, "mousemove").pipe(map((event2) => this.getScrolled(event2, vertical, horizontal)), takeUntil(tuiTypedFromEvent(ownerDocument, "mouseup")));
    })));
  }
  getScrolled({
    clientY,
    clientX
  }, offsetY, offsetX) {
    const {
      offsetHeight,
      offsetWidth
    } = this.el;
    const {
      top,
      left,
      right,
      width,
      height
    } = this.el.parentElement.getBoundingClientRect();
    const rtl = this.el.matches('[dir="rtl"] :scope');
    const inline = rtl ? right : left;
    const multiplier = rtl ? -1 : 1;
    const maxTop = this.element.scrollHeight - height;
    const maxLeft = this.element.scrollWidth - width;
    const scrolledTop = (clientY - top - offsetHeight * offsetY) / (height - offsetHeight);
    const scrolledLeft = (clientX - inline - offsetWidth * offsetX * multiplier) / (width - offsetWidth);
    return [maxTop * scrolledTop, maxLeft * scrolledLeft];
  }
};
_TuiScrollbarService.ɵfac = function TuiScrollbarService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiScrollbarService)();
};
_TuiScrollbarService.ɵprov = ɵɵdefineInjectable({
  token: _TuiScrollbarService,
  factory: _TuiScrollbarService.ɵfac
});
var TuiScrollbarService = _TuiScrollbarService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiScrollbarService, [{
    type: Injectable
  }], function() {
    return [];
  }, null);
})();
function getOffsetVertical({
  clientY
}, {
  top,
  height
}) {
  return (clientY - top) / height;
}
function getOffsetHorizontal({
  clientX
}, {
  left,
  width
}) {
  return (clientX - left) / width;
}
var MIN_WIDTH = 24;
var _TuiScrollbarDirective = class _TuiScrollbarDirective {
  constructor() {
    this.el = inject(TUI_SCROLL_REF).nativeElement;
    this.style = tuiInjectElement().style;
    this.scrollSub = inject(TuiScrollbarService).pipe(takeUntilDestroyed()).subscribe(([top, left]) => {
      this.el.style.scrollBehavior = "auto";
      if (this.tuiScrollbar === "horizontal") {
        this.el.scrollLeft = left;
      } else {
        this.el.scrollTop = top;
      }
      this.el.style.scrollBehavior = "";
    });
    this.styleSub = merge(inject(WA_ANIMATION_FRAME).pipe(throttleTime(100, tuiZonefreeScheduler())), tuiScrollFrom(this.el)).pipe(tuiZonefree(), takeUntilDestroyed()).subscribe(() => {
      const dimension = {
        scrollTop: this.el.scrollTop,
        scrollHeight: this.el.scrollHeight,
        clientHeight: this.el.clientHeight,
        scrollLeft: this.el.scrollLeft,
        scrollWidth: this.el.scrollWidth,
        clientWidth: this.el.clientWidth
      };
      const thumb = `${this.getThumb(dimension) * 100}%`;
      const view = `${this.getView(dimension) * 100}%`;
      if (this.tuiScrollbar === "vertical") {
        this.style.top = thumb;
        this.style.height = view;
      } else {
        this.style.left = thumb;
        this.style.insetInlineStart = thumb;
        this.style.width = view;
      }
    });
    this.tuiScrollbar = "vertical";
  }
  getScrolled(dimension) {
    return this.tuiScrollbar === "vertical" ? dimension.scrollTop / (dimension.scrollHeight - dimension.clientHeight) : dimension.scrollLeft / (dimension.scrollWidth - dimension.clientWidth);
  }
  getCompensation(dimension) {
    if (dimension.clientHeight * dimension.clientHeight / dimension.scrollHeight > MIN_WIDTH && this.tuiScrollbar === "vertical" || dimension.clientWidth * dimension.clientWidth / dimension.scrollWidth > MIN_WIDTH && this.tuiScrollbar === "horizontal") {
      return 0;
    }
    return this.tuiScrollbar === "vertical" ? MIN_WIDTH / dimension.clientHeight : MIN_WIDTH / dimension.clientWidth;
  }
  getThumb(dimension) {
    const compensation = this.getCompensation(dimension) || this.getView(dimension);
    return Math.abs(this.getScrolled(dimension) * (1 - compensation));
  }
  getView(dimension) {
    return this.tuiScrollbar === "vertical" ? Math.ceil(dimension.clientHeight / dimension.scrollHeight * 100) / 100 : Math.ceil(dimension.clientWidth / dimension.scrollWidth * 100) / 100;
  }
};
_TuiScrollbarDirective.ɵfac = function TuiScrollbarDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiScrollbarDirective)();
};
_TuiScrollbarDirective.ɵdir = ɵɵdefineDirective({
  type: _TuiScrollbarDirective,
  selectors: [["", "tuiScrollbar", ""]],
  inputs: {
    tuiScrollbar: "tuiScrollbar"
  },
  features: [ɵɵProvidersFeature([TuiScrollbarService])]
});
var TuiScrollbarDirective = _TuiScrollbarDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiScrollbarDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiScrollbar]",
      providers: [TuiScrollbarService]
    }]
  }], null, {
    tuiScrollbar: [{
      type: Input
    }]
  });
})();
var TUI_DEFAULT_SCROLLBAR_OPTIONS = {
  mode: "always"
};
var [TUI_SCROLLBAR_OPTIONS, tuiScrollbarOptionsProvider] = tuiCreateOptions(TUI_DEFAULT_SCROLLBAR_OPTIONS);
var _TuiScrollControls = class _TuiScrollControls {
  constructor() {
    this.scrollRef = inject(TUI_SCROLL_REF).nativeElement;
    this.nativeScrollbar = inject(TUI_SCROLLBAR_OPTIONS).mode === "native";
    this.refresh$ = inject(WA_ANIMATION_FRAME).pipe(throttleTime(300, tuiZonefreeScheduler()), map(() => this.scrollbars), startWith([false, false]), distinctUntilChanged((a, b) => a[0] === b[0] && a[1] === b[1]), tuiZoneOptimized());
  }
  get scrollbars() {
    const {
      clientHeight,
      scrollHeight,
      clientWidth,
      scrollWidth
    } = this.scrollRef;
    return [Math.ceil(clientHeight / scrollHeight * 100) < 100, Math.ceil(clientWidth / scrollWidth * 100) < 100];
  }
};
_TuiScrollControls.ɵfac = function TuiScrollControls_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiScrollControls)();
};
_TuiScrollControls.ɵcmp = ɵɵdefineComponent({
  type: _TuiScrollControls,
  selectors: [["tui-scroll-controls"]],
  decls: 3,
  vars: 2,
  consts: [["custom", ""], [4, "ngIf", "ngIfElse"], [4, "ngIf"], ["tuiAnimated", "", "class", "t-bar t-bar_vertical", 3, "t-bar_has-horizontal", "mousedown.capture.prevent", 4, "ngIf"], ["tuiAnimated", "", "class", "t-bar t-bar_horizontal", 3, "t-bar_has-vertical", "mousedown.capture.prevent", 4, "ngIf"], ["tuiAnimated", "", 1, "t-bar", "t-bar_vertical", 3, "mousedown.capture.prevent"], ["tuiScrollbar", "vertical", 1, "t-thumb"], ["tuiAnimated", "", 1, "t-bar", "t-bar_horizontal", 3, "mousedown.capture.prevent"], ["tuiScrollbar", "horizontal", 1, "t-thumb"]],
  template: function TuiScrollControls_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, TuiScrollControls_ng_container_0_Template, 1, 0, "ng-container", 1)(1, TuiScrollControls_ng_template_1_Template, 2, 3, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      const custom_r5 = ɵɵreference(2);
      ɵɵproperty("ngIf", ctx.nativeScrollbar)("ngIfElse", custom_r5);
    }
  },
  dependencies: [AsyncPipe, NgIf, TuiAnimated, TuiScrollbarDirective],
  styles: ["[_nghost-%COMP%]{position:sticky;top:0;left:0;z-index:1;inset-inline-start:0;min-inline-size:calc(100% - 1px);min-block-size:calc(100% - 1px);max-inline-size:calc(100% - 1px);max-block-size:calc(100% - 1px);margin-inline-end:calc(-100% + 1px);pointer-events:none;overflow:hidden;color:var(--tui-text-primary)}.t-bar[_ngcontent-%COMP%]{position:absolute;right:0;bottom:0;pointer-events:auto}.t-bar.tui-enter[_ngcontent-%COMP%], .t-bar.tui-leave[_ngcontent-%COMP%]{animation-name:tuiFade}.t-bar_vertical[_ngcontent-%COMP%]{top:0;inline-size:.875rem}@supports (inset-inline-end: 0){.t-bar_vertical[_ngcontent-%COMP%]{right:unset;inset-inline-end:0}}.t-bar_horizontal[_ngcontent-%COMP%]{left:0;inset-inline-start:0;block-size:.875rem}.t-bar_has-horizontal[_ngcontent-%COMP%]{bottom:.5rem}.t-bar_has-vertical[_ngcontent-%COMP%]{right:.5rem}.t-thumb[_ngcontent-%COMP%]{transition-property:all;transition-duration:.15s;transition-timing-function:ease-in-out;position:absolute;border-radius:6.25rem;border:.25rem solid transparent;cursor:pointer;pointer-events:auto;-webkit-user-select:none;user-select:none;background:currentColor;background-clip:content-box;box-sizing:border-box;transition-property:width,height,opacity;opacity:.2}.t-thumb[_ngcontent-%COMP%]:hover{opacity:.24}.t-thumb[_ngcontent-%COMP%]:active{opacity:.48}.t-bar_vertical[_ngcontent-%COMP%]   .t-thumb[_ngcontent-%COMP%]{right:0;inset-inline-end:0;inline-size:.75rem;min-block-size:1.25rem}.t-bar_vertical[_ngcontent-%COMP%]:hover   .t-thumb[_ngcontent-%COMP%], .t-bar_vertical[_ngcontent-%COMP%]   .t-thumb[_ngcontent-%COMP%]:active{inline-size:.875rem}.t-bar_horizontal[_ngcontent-%COMP%]   .t-thumb[_ngcontent-%COMP%]{bottom:0;block-size:.75rem;min-inline-size:1.25rem}.t-bar_horizontal[_ngcontent-%COMP%]:hover   .t-thumb[_ngcontent-%COMP%], .t-bar_horizontal[_ngcontent-%COMP%]   .t-thumb[_ngcontent-%COMP%]:active{block-size:.875rem}"],
  changeDetection: 0
});
var TuiScrollControls = _TuiScrollControls;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiScrollControls, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-scroll-controls",
      imports: [AsyncPipe, NgIf, TuiAnimated, TuiScrollbarDirective],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<ng-container *ngIf="nativeScrollbar; else custom" />\n<ng-template #custom>\n    <ng-container *ngIf="refresh$ | async as bars">\n        <div\n            *ngIf="bars[0]"\n            tuiAnimated\n            class="t-bar t-bar_vertical"\n            [class.t-bar_has-horizontal]="bars[1]"\n            (mousedown.capture.prevent)="(0)"\n        >\n            <div\n                tuiScrollbar="vertical"\n                class="t-thumb"\n            ></div>\n        </div>\n        <div\n            *ngIf="bars[1]"\n            tuiAnimated\n            class="t-bar t-bar_horizontal"\n            [class.t-bar_has-vertical]="bars[0]"\n            (mousedown.capture.prevent)="(0)"\n        >\n            <div\n                tuiScrollbar="horizontal"\n                class="t-thumb"\n            ></div>\n        </div>\n    </ng-container>\n</ng-template>\n',
      styles: [":host{position:sticky;top:0;left:0;z-index:1;inset-inline-start:0;min-inline-size:calc(100% - 1px);min-block-size:calc(100% - 1px);max-inline-size:calc(100% - 1px);max-block-size:calc(100% - 1px);margin-inline-end:calc(-100% + 1px);pointer-events:none;overflow:hidden;color:var(--tui-text-primary)}.t-bar{position:absolute;right:0;bottom:0;pointer-events:auto}.t-bar.tui-enter,.t-bar.tui-leave{animation-name:tuiFade}.t-bar_vertical{top:0;inline-size:.875rem}@supports (inset-inline-end: 0){.t-bar_vertical{right:unset;inset-inline-end:0}}.t-bar_horizontal{left:0;inset-inline-start:0;block-size:.875rem}.t-bar_has-horizontal{bottom:.5rem}.t-bar_has-vertical{right:.5rem}.t-thumb{transition-property:all;transition-duration:.15s;transition-timing-function:ease-in-out;position:absolute;border-radius:6.25rem;border:.25rem solid transparent;cursor:pointer;pointer-events:auto;-webkit-user-select:none;user-select:none;background:currentColor;background-clip:content-box;box-sizing:border-box;transition-property:width,height,opacity;opacity:.2}.t-thumb:hover{opacity:.24}.t-thumb:active{opacity:.48}.t-bar_vertical .t-thumb{right:0;inset-inline-end:0;inline-size:.75rem;min-block-size:1.25rem}.t-bar_vertical:hover .t-thumb,.t-bar_vertical .t-thumb:active{inline-size:.875rem}.t-bar_horizontal .t-thumb{bottom:0;block-size:.75rem;min-inline-size:1.25rem}.t-bar_horizontal:hover .t-thumb,.t-bar_horizontal .t-thumb:active{block-size:.875rem}\n"]
    }]
  }], null, null);
})();
var TUI_SCROLL_INTO_VIEW = "tui-scroll-into-view";
var TUI_SCROLLABLE = "tui-scrollable";
var _TuiScrollbar = class _TuiScrollbar {
  constructor() {
    this.el = tuiInjectElement();
    this.options = inject(TUI_SCROLLBAR_OPTIONS);
    this.isIOS = inject(TUI_IS_IOS);
    this.browserScrollRef = new ElementRef(this.el);
    this.hidden = this.options.mode === "hidden";
  }
  get delegated() {
    return this.scrollRef !== this.el || this.options.mode === "native";
  }
  get scrollRef() {
    return this.browserScrollRef.nativeElement;
  }
  set scrollRef(element) {
    this.browserScrollRef.nativeElement = element;
  }
  scrollIntoView(detail) {
    if (this.delegated) {
      return;
    }
    const {
      offsetHeight,
      offsetWidth
    } = detail;
    const {
      offsetTop,
      offsetLeft
    } = tuiGetElementOffset(this.scrollRef, detail);
    const scrollTop = offsetTop + offsetHeight / 2 - this.scrollRef.clientHeight / 2;
    const scrollLeft = offsetLeft + offsetWidth / 2 - this.scrollRef.clientWidth / 2;
    this.scrollRef.scrollTo?.(scrollLeft, scrollTop);
  }
};
_TuiScrollbar.ɵfac = function TuiScrollbar_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiScrollbar)();
};
_TuiScrollbar.ɵcmp = ɵɵdefineComponent({
  type: _TuiScrollbar,
  selectors: [["tui-scrollbar"]],
  hostVars: 2,
  hostBindings: function TuiScrollbar_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("tui-scrollable.stop", function TuiScrollbar_tui_scrollable_stop_HostBindingHandler($event) {
        return ctx.scrollRef = $event.detail;
      })("tui-scroll-into-view.stop", function TuiScrollbar_tui_scroll_into_view_stop_HostBindingHandler($event) {
        return ctx.scrollIntoView($event.detail);
      });
    }
    if (rf & 2) {
      ɵɵclassProp("_native-hidden", ctx.options.mode !== "native" && (!ctx.isIOS || ctx.hidden));
    }
  },
  inputs: {
    hidden: "hidden"
  },
  features: [ɵɵProvidersFeature([{
    provide: TUI_SCROLL_REF,
    useFactory: () => inject(_TuiScrollbar).browserScrollRef
  }])],
  ngContentSelectors: _c0,
  decls: 3,
  vars: 3,
  consts: [["class", "t-bars", 3, "t-hover-mode", 4, "ngIf"], [1, "t-content"], [1, "t-bars"]],
  template: function TuiScrollbar_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, TuiScrollbar_tui_scroll_controls_0_Template, 1, 2, "tui-scroll-controls", 0);
      ɵɵelementStart(1, "div", 1);
      ɵɵprojection(2);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", !ctx.hidden && !ctx.isIOS && ctx.options.mode !== "native");
      ɵɵadvance();
      ɵɵclassProp("t-content_delegated", ctx.delegated);
    }
  },
  dependencies: [NgIf, TuiScrollControls],
  styles: ["[_nghost-%COMP%]{position:relative;display:flex;max-block-size:100%;isolation:isolate;overflow:auto}._native-hidden[_nghost-%COMP%]{scrollbar-width:none;-ms-overflow-style:none}._native-hidden[_nghost-%COMP%]::-webkit-scrollbar, ._native-hidden[_nghost-%COMP%]::-webkit-scrollbar-thumb{display:none}[_nghost-%COMP%]   .t-hover-mode[_ngcontent-%COMP%]:not(:active){transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;opacity:0}[_nghost-%COMP%]:hover   .t-hover-mode[_ngcontent-%COMP%]{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;opacity:1}.t-content[_ngcontent-%COMP%]{isolation:isolate;flex:1;flex-basis:auto;inline-size:100%;block-size:-webkit-max-content;block-size:max-content}.t-content_delegated[_ngcontent-%COMP%]{block-size:100%}.t-bars[_ngcontent-%COMP%]{color:var(--tui-text-primary)}"],
  changeDetection: 0
});
var TuiScrollbar = _TuiScrollbar;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiScrollbar, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-scrollbar",
      imports: [NgIf, TuiScrollControls],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [{
        provide: TUI_SCROLL_REF,
        useFactory: () => inject(TuiScrollbar).browserScrollRef
      }],
      host: {
        "[class._native-hidden]": 'options.mode !== "native" && (!isIOS || hidden)',
        [`(${TUI_SCROLLABLE}.stop)`]: "scrollRef = $event.detail",
        [`(${TUI_SCROLL_INTO_VIEW}.stop)`]: "scrollIntoView($event.detail)"
      },
      template: `<tui-scroll-controls
    *ngIf="!hidden && !isIOS && options.mode !== 'native'"
    class="t-bars"
    [class.t-hover-mode]="options.mode === 'hover'"
/>
<div
    class="t-content"
    [class.t-content_delegated]="delegated"
>
    <ng-content />
</div>
`,
      styles: [":host{position:relative;display:flex;max-block-size:100%;isolation:isolate;overflow:auto}:host._native-hidden{scrollbar-width:none;-ms-overflow-style:none}:host._native-hidden::-webkit-scrollbar,:host._native-hidden::-webkit-scrollbar-thumb{display:none}:host .t-hover-mode:not(:active){transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;opacity:0}:host:hover .t-hover-mode{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;opacity:1}.t-content{isolation:isolate;flex:1;flex-basis:auto;inline-size:100%;block-size:-webkit-max-content;block-size:max-content}.t-content_delegated{block-size:100%}.t-bars{color:var(--tui-text-primary)}\n"]
    }]
  }], null, {
    hidden: [{
      type: Input
    }]
  });
})();
var _TuiScrollIntoView = class _TuiScrollIntoView {
  constructor() {
    this.el = tuiInjectElement();
    this.destroyRef = inject(DestroyRef);
  }
  set tuiScrollIntoView(scroll) {
    if (!scroll) {
      return;
    }
    timer(0).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.el.dispatchEvent(new CustomEvent(TUI_SCROLL_INTO_VIEW, {
        bubbles: true,
        detail: this.el
      }));
    });
  }
};
_TuiScrollIntoView.ɵfac = function TuiScrollIntoView_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiScrollIntoView)();
};
_TuiScrollIntoView.ɵdir = ɵɵdefineDirective({
  type: _TuiScrollIntoView,
  selectors: [["", "tuiScrollIntoView", ""]],
  inputs: {
    tuiScrollIntoView: "tuiScrollIntoView"
  }
});
var TuiScrollIntoView = _TuiScrollIntoView;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiScrollIntoView, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiScrollIntoView]"
    }]
  }], null, {
    tuiScrollIntoView: [{
      type: Input
    }]
  });
})();
var SCROLL_REF_SELECTOR = "[tuiScrollRef]";
var _TuiScrollRef = class _TuiScrollRef {
};
_TuiScrollRef.ɵfac = function TuiScrollRef_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiScrollRef)();
};
_TuiScrollRef.ɵdir = ɵɵdefineDirective({
  type: _TuiScrollRef,
  selectors: [["", "tuiScrollRef", ""]],
  features: [ɵɵProvidersFeature([tuiProvide(TUI_SCROLL_REF, ElementRef)])]
});
var TuiScrollRef = _TuiScrollRef;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiScrollRef, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiScrollRef]",
      providers: [tuiProvide(TUI_SCROLL_REF, ElementRef)]
    }]
  }], null, null);
})();
var _TuiScrollable = class _TuiScrollable {
  constructor() {
    this.el = tuiInjectElement();
  }
  ngOnInit() {
    this.el.dispatchEvent(new CustomEvent(TUI_SCROLLABLE, {
      bubbles: true,
      detail: this.el
    }));
  }
};
_TuiScrollable.ɵfac = function TuiScrollable_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiScrollable)();
};
_TuiScrollable.ɵdir = ɵɵdefineDirective({
  type: _TuiScrollable,
  selectors: [["", "tuiScrollable", ""]]
});
var TuiScrollable = _TuiScrollable;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiScrollable, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiScrollable]"
    }]
  }], null, null);
})();

export {
  TuiScrollbarService,
  TuiScrollbarDirective,
  TUI_DEFAULT_SCROLLBAR_OPTIONS,
  TUI_SCROLLBAR_OPTIONS,
  tuiScrollbarOptionsProvider,
  TuiScrollControls,
  TUI_SCROLL_INTO_VIEW,
  TUI_SCROLLABLE,
  TuiScrollbar,
  TuiScrollIntoView,
  SCROLL_REF_SELECTOR,
  TuiScrollRef,
  TuiScrollable
};
//# sourceMappingURL=chunk-ZX26QIOR.js.map
