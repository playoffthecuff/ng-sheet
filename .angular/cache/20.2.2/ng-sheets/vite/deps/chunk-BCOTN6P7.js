import {
  tuiCheckboxOptionsProvider
} from "./chunk-HMRLPAR4.js";
import {
  ResizeObserverService
} from "./chunk-ZIHJU63D.js";
import {
  tuiButtonOptionsProvider
} from "./chunk-BKBEOYHT.js";
import {
  TuiAppearance,
  TuiWithAppearance,
  tuiAppearanceOptionsProvider
} from "./chunk-ZGA3WRGT.js";
import {
  TuiIcons,
  TuiWithIcons
} from "./chunk-UNZWBBVK.js";
import {
  TuiDropdownDirective
} from "./chunk-M27B4EMP.js";
import {
  shouldCall
} from "./chunk-CGRAKRVX.js";
import {
  TuiNativeValidator
} from "./chunk-2DYIH4P4.js";
import {
  TuiTransitioned
} from "./chunk-NJW6Q2NF.js";
import {
  MutationObserverService,
  WA_MUTATION_OBSERVER_INIT
} from "./chunk-HABJD475.js";
import {
  coerceBooleanProperty,
  tuiGetActualTarget,
  tuiInjectElement,
  tuiIsElement
} from "./chunk-JSMOXT4E.js";
import {
  TUI_ICON_END,
  tuiInjectIconResolver,
  tuiWatch,
  tuiZonefree,
  tuiZonefreeScheduler,
  tuiZonefull
} from "./chunk-VHLRK7UT.js";
import {
  WA_WINDOW
} from "./chunk-5MMGTIYT.js";
import {
  tuiArrayShallowEquals,
  tuiIsString,
  tuiProvide,
  tuiProvideOptions,
  tuiPure,
  tuiPx,
  tuiWithStyles
} from "./chunk-XYVFFOET.js";
import {
  takeUntilDestroyed,
  toSignal
} from "./chunk-KSDZZ3AX.js";
import {
  NgControl
} from "./chunk-7FISS3KI.js";
import {
  NgForOf,
  NgIf,
  isPlatformBrowser
} from "./chunk-O7OBBIEJ.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Directive,
  ElementRef,
  Injectable,
  Input,
  NgModule,
  Output,
  PLATFORM_ID,
  ViewChild,
  ViewEncapsulation,
  setClassMetadata,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineNgModule,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresolveDocument,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-H2LFSO26.js";
import {
  DestroyRef,
  InjectionToken,
  effect,
  inject,
  signal,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵnamespaceSVG,
  ɵɵresetView,
  ɵɵrestoreView
} from "./chunk-VNPPOK4A.js";
import {
  BehaviorSubject,
  Observable,
  Subject,
  Subscription,
  __decorate,
  combineLatest,
  debounce,
  debounceTime,
  delay,
  distinctUntilChanged,
  filter,
  fromEvent,
  map,
  merge,
  of,
  share,
  skip,
  startWith,
  timer
} from "./chunk-WQ5CZGEH.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-tiles.mjs
var _c0 = ["*"];
var _c1 = ["wrapper"];
var tuiTilesSwap = (order, currentIndex, newIndex) => {
  if (!order.has(currentIndex) || !order.has(newIndex)) {
    return order;
  }
  const dragged = order.get(currentIndex) ?? currentIndex;
  const placement = order.get(newIndex) ?? newIndex;
  const newOrder = new Map(order);
  newOrder.set(currentIndex, placement);
  newOrder.set(newIndex, dragged);
  return newOrder;
};
var tuiTilesShift = (order, currentIndex, newIndex) => {
  if (!order.has(currentIndex) || !order.has(newIndex)) {
    return order;
  }
  const dragged = order.get(currentIndex) ?? currentIndex;
  const placement = order.get(newIndex) ?? newIndex;
  const newOrder = new Map(order);
  const flipped = new Map(Array.from(order).map(([a, b]) => [b, a]));
  if ((placement - dragged) / Math.abs(placement - dragged) > 0) {
    for (let i = placement; i > dragged; i--) {
      newOrder.set(flipped.get(i) ?? i, i - 1);
    }
  } else {
    for (let i = placement; i < dragged; i++) {
      newOrder.set(flipped.get(i) ?? i, i + 1);
    }
  }
  newOrder.set(currentIndex, placement);
  return newOrder;
};
var TUI_TILES_REORDER = new InjectionToken(ngDevMode ? "TUI_TILES_REORDER" : "", {
  factory: () => tuiTilesSwap
});
var _TuiTilesComponent = class _TuiTilesComponent {
  constructor() {
    this.el$ = new Subject();
    this.handler = inject(TUI_TILES_REORDER);
    this.debounce = 0;
    this.orderChange = this.el$.pipe(debounce(() => timer(this.debounce)), filter(this.filter.bind(this)), map((element) => this.reorder(element)));
    this.element = signal(null);
    this.el = tuiInjectElement();
    this.order$ = new BehaviorSubject(/* @__PURE__ */ new Map());
  }
  set order(map2) {
    this.order$.next(map2);
  }
  get order() {
    return this.order$.value;
  }
  rearrange(element) {
    this.el$.next(element);
  }
  filter(element) {
    return !!this.element() && !!element && this.element() !== element;
  }
  reorder(element) {
    const elements = Array.from(this.el.children);
    const currentIndex = elements.indexOf(this.element() || element);
    const newIndex = elements.indexOf(element);
    const order = this.order.size ? new Map(this.order) : new Map(elements.map((_, index) => [index, index]));
    this.order$.next(this.handler(order, currentIndex, newIndex));
    return this.order$.value;
  }
};
_TuiTilesComponent.ɵfac = function TuiTilesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiTilesComponent)();
};
_TuiTilesComponent.ɵcmp = ɵɵdefineComponent({
  type: _TuiTilesComponent,
  selectors: [["tui-tiles"]],
  hostBindings: function TuiTilesComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("pointerleave.zoneless", function TuiTilesComponent_pointerleave_zoneless_HostBindingHandler() {
        return ctx.rearrange();
      });
    }
  },
  inputs: {
    debounce: "debounce",
    order: "order"
  },
  outputs: {
    orderChange: "orderChange"
  },
  features: [ɵɵProvidersFeature([ResizeObserverService, MutationObserverService, {
    provide: WA_MUTATION_OBSERVER_INIT,
    useValue: {
      childList: true
    }
  }])],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function TuiTilesComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  styles: ["tui-tiles{position:relative;z-index:0;display:grid;grid-auto-flow:dense;justify-items:stretch}tui-tiles._dragged tui-tile>.t-wrapper{pointer-events:none}tui-tiles._dragged tui-tile:not(._dragged)>.t-wrapper,tui-tiles:not(._dragged) tui-tile._dragged>.t-wrapper{transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;transition-delay:1ms}tui-tile>.t-wrapper{position:absolute;z-index:0;border-radius:inherit}tui-tile._dragged>.t-wrapper,tui-tile:has(tui-tile._dragged)>.t-wrapper{z-index:1}\n"],
  encapsulation: 2,
  changeDetection: 0
});
var TuiTilesComponent = _TuiTilesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTilesComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-tiles",
      template: "<ng-content />",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [ResizeObserverService, MutationObserverService, {
        provide: WA_MUTATION_OBSERVER_INIT,
        useValue: {
          childList: true
        }
      }],
      host: {
        "(pointerleave.zoneless)": "rearrange()"
      },
      styles: ["tui-tiles{position:relative;z-index:0;display:grid;grid-auto-flow:dense;justify-items:stretch}tui-tiles._dragged tui-tile>.t-wrapper{pointer-events:none}tui-tiles._dragged tui-tile:not(._dragged)>.t-wrapper,tui-tiles:not(._dragged) tui-tile._dragged>.t-wrapper{transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;transition-delay:1ms}tui-tile>.t-wrapper{position:absolute;z-index:0;border-radius:inherit}tui-tile._dragged>.t-wrapper,tui-tile:has(tui-tile._dragged)>.t-wrapper{z-index:1}\n"]
    }]
  }], null, {
    debounce: [{
      type: Input
    }],
    orderChange: [{
      type: Output
    }],
    order: [{
      type: Input
    }]
  });
})();
var _TuiTileService = class _TuiTileService {
  constructor() {
    this.isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
    this.el = tuiInjectElement();
    this.tiles = inject(TuiTilesComponent);
    this.sub = new Subscription();
    this.offset$ = new BehaviorSubject([NaN, NaN]);
    this.position$ = combineLatest([this.offset$.pipe(distinctUntilChanged(tuiArrayShallowEquals)), inject(ResizeObserverService).pipe(startWith(null)), inject(MutationObserverService).pipe(startWith(null)), this.tiles.order$.pipe(debounceTime(0, tuiZonefreeScheduler()))]).pipe(map(([offset]) => offset));
  }
  init(element) {
    if (this.isBrowser) {
      this.sub.add(this.position$.subscribe((offset) => {
        this.setPosition(element, offset);
        this.setRect(element, offset);
      }));
    } else {
      this.el.style.setProperty("position", "relative");
    }
  }
  setOffset(offset) {
    this.offset$.next(offset);
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  getRect([left, top]) {
    const elTop = Number.isNaN(top) ? this.el.offsetTop : top;
    const elLeft = Number.isNaN(left) ? this.el.offsetLeft : left;
    const rect = {
      top: elTop,
      left: elLeft,
      width: this.el.clientWidth,
      height: this.el.clientHeight,
      right: NaN,
      bottom: NaN,
      y: elTop,
      x: elLeft
    };
    return __spreadProps(__spreadValues({}, rect), {
      toJSON: () => JSON.stringify(rect)
    });
  }
  setRect({
    style
  }, offset) {
    const {
      top,
      left,
      width,
      height
    } = this.getRect(offset);
    style.top = tuiPx(top);
    style.left = tuiPx(left);
    style.width = tuiPx(width);
    style.height = tuiPx(height);
  }
  setPosition(element, [left]) {
    if (!Number.isNaN(left)) {
      element.style.setProperty("position", "fixed");
      element.style.setProperty("transition", "none");
      return;
    }
    const {
      style
    } = element;
    const rect = element.getBoundingClientRect();
    const host = this.el.getBoundingClientRect();
    style.removeProperty("position");
    style.removeProperty("transition");
    style.removeProperty("top");
    style.removeProperty("left");
    style.top = tuiPx(rect.top - host.top + this.el.offsetTop);
    style.left = tuiPx(rect.left - host.left + this.el.offsetLeft);
  }
};
_TuiTileService.ɵfac = function TuiTileService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiTileService)();
};
_TuiTileService.ɵprov = ɵɵdefineInjectable({
  token: _TuiTileService,
  factory: _TuiTileService.ɵfac
});
var TuiTileService = _TuiTileService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTileService, [{
    type: Injectable
  }], null, null);
})();
var _TuiTile = class _TuiTile {
  constructor() {
    this.service = inject(TuiTileService);
    this.tiles = inject(TuiTilesComponent);
    this.dragged = signal(false);
    this.width = 1;
    this.height = 1;
    this.element = tuiInjectElement();
  }
  onDrag(offset) {
    const dragged = !Number.isNaN(offset[0]);
    this.dragged.set(this.dragged() || dragged);
    this.tiles.element.set(dragged ? this.element : null);
    this.service.setOffset(offset);
    if (dragged) {
      this.tiles.el.classList.add("_dragged");
    } else {
      this.tiles.el.classList.remove("_dragged");
    }
  }
  ngAfterViewInit() {
    if (this.wrapper) {
      this.service.init(this.wrapper.nativeElement);
    }
  }
  ngOnDestroy() {
    if (this.tiles.element() === this.element) {
      this.tiles.element.set(null);
    }
  }
  get column() {
    return `span var(--tui-width, ${this.width})`;
  }
  get row() {
    return `span var(--tui-height, ${this.height})`;
  }
  onEnter() {
    this.tiles.rearrange(this.element);
  }
  onTransitionEnd() {
    this.dragged.set(false);
  }
};
_TuiTile.ɵfac = function TuiTile_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiTile)();
};
_TuiTile.ɵcmp = ɵɵdefineComponent({
  type: _TuiTile,
  selectors: [["tui-tile"]],
  viewQuery: function TuiTile_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c1, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.wrapper = _t.first);
    }
  },
  hostVars: 6,
  hostBindings: function TuiTile_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("pointerenter", function TuiTile_pointerenter_HostBindingHandler() {
        return ctx.onEnter();
      });
    }
    if (rf & 2) {
      ɵɵstyleProp("grid-column", ctx.column)("grid-row", ctx.row);
      ɵɵclassProp("_dragged", ctx.dragged());
    }
  },
  inputs: {
    width: "width",
    height: "height"
  },
  features: [ɵɵProvidersFeature([TuiTileService])],
  ngContentSelectors: _c0,
  decls: 3,
  vars: 0,
  consts: [["wrapper", ""], [1, "t-wrapper", 3, "transitionend.self"]],
  template: function TuiTile_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵprojectionDef();
      ɵɵdomElementStart(0, "div", 1, 0);
      ɵɵdomListener("transitionend.self", function TuiTile_Template_div_transitionend_self_0_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onTransitionEnd());
      });
      ɵɵprojection(2);
      ɵɵdomElementEnd();
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var TuiTile = _TuiTile;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTile, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-tile",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [TuiTileService],
      host: {
        "[class._dragged]": "dragged()",
        "[style.gridColumn]": "column",
        "[style.gridRow]": "row",
        "(pointerenter)": "onEnter()"
      },
      template: '<div\n    #wrapper\n    class="t-wrapper"\n    (transitionend.self)="onTransitionEnd()"\n>\n    <ng-content />\n</div>\n'
    }]
  }], null, {
    wrapper: [{
      type: ViewChild,
      args: ["wrapper"]
    }],
    width: [{
      type: Input
    }],
    height: [{
      type: Input
    }]
  });
})();
function isInteracting(x = NaN) {
  return !Number.isNaN(x) || !Number.isNaN(this["x"]);
}
function isDragging() {
  return !Number.isNaN(this["x"]);
}
var _TuiTileHandle = class _TuiTileHandle {
  constructor() {
    this.tile = inject(TuiTile);
    this.x = NaN;
    this.y = NaN;
  }
  onPointer(x = NaN, y = NaN) {
    const {
      left,
      top
    } = this.tile.element.getBoundingClientRect();
    this.x = x - left;
    this.y = y - top;
    this.tile.onDrag([NaN, NaN]);
  }
  onMove(x, y) {
    this.tile.onDrag([x - this.x, y - this.y]);
  }
  onStart(event) {
    const target = tuiGetActualTarget(event);
    const {
      x,
      y,
      pointerId
    } = event;
    if (tuiIsElement(target)) {
      target.releasePointerCapture(pointerId);
    }
    this.onPointer(x, y);
  }
};
_TuiTileHandle.ɵfac = function TuiTileHandle_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiTileHandle)();
};
_TuiTileHandle.ɵdir = ɵɵdefineDirective({
  type: _TuiTileHandle,
  selectors: [["", "tuiTileHandle", ""]],
  hostVars: 4,
  hostBindings: function TuiTileHandle_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("pointerdown.zoneless.prevent", function TuiTileHandle_pointerdown_zoneless_prevent_HostBindingHandler($event) {
        return ctx.onStart($event);
      })("pointerup.zoneless", function TuiTileHandle_pointerup_zoneless_HostBindingHandler() {
        return ctx.onPointer();
      }, ɵɵresolveDocument)("pointermove.zoneless", function TuiTileHandle_pointermove_zoneless_HostBindingHandler($event) {
        return ctx.onMove($event.x, $event.y);
      }, ɵɵresolveDocument);
    }
    if (rf & 2) {
      ɵɵstyleProp("touch-action", "none")("user-select", "none");
    }
  }
});
var TuiTileHandle = _TuiTileHandle;
__decorate([shouldCall(isInteracting)], TuiTileHandle.prototype, "onPointer", null);
__decorate([shouldCall(isDragging)], TuiTileHandle.prototype, "onMove", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTileHandle, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiTileHandle]",
      host: {
        "[style.touchAction]": '"none"',
        "[style.userSelect]": '"none"',
        "(pointerdown.zoneless.prevent)": "onStart($event)",
        "(document:pointerup.zoneless)": "onPointer()",
        "(document:pointermove.zoneless)": "onMove($event.x, $event.y)"
      }
    }]
  }], null, {
    onPointer: [],
    onMove: []
  });
})();
var TuiTiles = [TuiTilesComponent, TuiTile, TuiTileHandle];

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-directives-fade.mjs
var BUFFER = 1;
var _TuiFadeStyles = class _TuiFadeStyles {
};
_TuiFadeStyles.ɵfac = function TuiFadeStyles_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiFadeStyles)();
};
_TuiFadeStyles.ɵcmp = ɵɵdefineComponent({
  type: _TuiFadeStyles,
  selectors: [["ng-component"]],
  hostAttrs: [1, "tui-fade-styles"],
  decls: 0,
  vars: 0,
  template: function TuiFadeStyles_Template(rf, ctx) {
  },
  styles: ["[tuiFade]{scrollbar-width:none;-ms-overflow-style:none;transition-property:-webkit-mask-position;transition-property:mask-position;transition-property:mask-position,-webkit-mask-position;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;overflow:auto;text-overflow:unset!important;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}[tuiFade]::-webkit-scrollbar,[tuiFade]::-webkit-scrollbar-thumb{display:none}[tuiFade]:not([data-orientation=vertical]){overflow-y:hidden;-webkit-mask-image:linear-gradient(to right,transparent var(--t-fade-offset),#000 calc(var(--t-fade-size) + var(--t-fade-offset))),linear-gradient(to left,transparent var(--t-fade-offset),#000 calc(var(--t-fade-size) + var(--t-fade-offset))),linear-gradient(#000,#000);mask-image:linear-gradient(to right,transparent var(--t-fade-offset),#000 calc(var(--t-fade-size) + var(--t-fade-offset))),linear-gradient(to left,transparent var(--t-fade-offset),#000 calc(var(--t-fade-size) + var(--t-fade-offset))),linear-gradient(#000,#000);-webkit-mask-position:calc(-1 * var(--t-fade-size) - var(--t-fade-offset)) bottom,calc(100% + var(--t-fade-size) + var(--t-fade-offset)) bottom,top;mask-position:calc(-1 * var(--t-fade-size) - var(--t-fade-offset)) bottom,calc(100% + var(--t-fade-size) + var(--t-fade-offset)) bottom,top;-webkit-mask-size:calc(51% + var(--t-fade-size) + var(--t-fade-offset)) var(--t-line-height, 100%),calc(50% + var(--t-fade-size) + var(--t-fade-offset)) var(--t-line-height, 100%),100% calc(100% - var(--t-line-height, 100%));mask-size:calc(51% + var(--t-fade-size) + var(--t-fade-offset)) var(--t-line-height, 100%),calc(50% + var(--t-fade-size) + var(--t-fade-offset)) var(--t-line-height, 100%),100% calc(100% - var(--t-line-height, 100%))}[tuiFade]:not([data-orientation=vertical])._start{-webkit-mask-position:left bottom,calc(100% + var(--t-fade-size) + var(--t-fade-offset)) bottom,top;mask-position:left bottom,calc(100% + var(--t-fade-size) + var(--t-fade-offset)) bottom,top}[tuiFade]:not([data-orientation=vertical])._end{-webkit-mask-position:calc(-1 * var(--t-fade-size) - var(--t-fade-offset)) bottom,right bottom,top;mask-position:calc(-1 * var(--t-fade-size) - var(--t-fade-offset)) bottom,right bottom,top}[tuiFade]:not([data-orientation=vertical])._start._end{-webkit-mask-position:left bottom,right bottom,top;mask-position:left bottom,right bottom,top}[dir=rtl] [tuiFade]:not([data-orientation=vertical])._end{-webkit-mask-position:left bottom,calc(100% + var(--t-fade-size) + var(--t-fade-offset)) bottom,top;mask-position:left bottom,calc(100% + var(--t-fade-size) + var(--t-fade-offset)) bottom,top}[dir=rtl] [tuiFade]:not([data-orientation=vertical])._start{-webkit-mask-position:calc(-1 * var(--t-fade-size) - var(--t-fade-offset)) bottom,right bottom,top;mask-position:calc(-1 * var(--t-fade-size) - var(--t-fade-offset)) bottom,right bottom,top}[dir=rtl] [tuiFade]:not([data-orientation=vertical])._start._end{-webkit-mask-position:left bottom,right bottom,top;mask-position:left bottom,right bottom,top}[tuiFade][data-orientation=vertical]{overflow-x:hidden;-webkit-mask-image:linear-gradient(to bottom,transparent var(--t-fade-offset),#000 calc(var(--t-fade-size) + var(--t-fade-offset))),linear-gradient(to top,transparent var(--t-fade-offset),#000 calc(var(--t-fade-size) + var(--t-fade-offset)));mask-image:linear-gradient(to bottom,transparent var(--t-fade-offset),#000 calc(var(--t-fade-size) + var(--t-fade-offset))),linear-gradient(to top,transparent var(--t-fade-offset),#000 calc(var(--t-fade-size) + var(--t-fade-offset)));-webkit-mask-position:left calc(-1 * var(--t-fade-size) - var(--t-fade-offset)),left calc(100% + var(--t-fade-size) + var(--t-fade-offset));mask-position:left calc(-1 * var(--t-fade-size) - var(--t-fade-offset)),left calc(100% + var(--t-fade-size) + var(--t-fade-offset));-webkit-mask-size:100% calc(51% + var(--t-fade-size) + var(--t-fade-offset));mask-size:100% calc(51% + var(--t-fade-size) + var(--t-fade-offset))}[tuiFade][data-orientation=vertical]._start{-webkit-mask-position:left top,left calc(100% + var(--t-fade-size) + var(--t-fade-offset));mask-position:left top,left calc(100% + var(--t-fade-size) + var(--t-fade-offset))}[tuiFade][data-orientation=vertical]._end{-webkit-mask-position:left calc(-1 * var(--t-fade-size) - var(--t-fade-offset)),left bottom;mask-position:left calc(-1 * var(--t-fade-size) - var(--t-fade-offset)),left bottom}[tuiFade][data-orientation=vertical]._start._end{-webkit-mask-position:left top,left bottom;mask-position:left top,left bottom}\n"],
  encapsulation: 2,
  changeDetection: 0
});
var TuiFadeStyles = _TuiFadeStyles;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFadeStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-fade-styles"
      },
      styles: ["[tuiFade]{scrollbar-width:none;-ms-overflow-style:none;transition-property:-webkit-mask-position;transition-property:mask-position;transition-property:mask-position,-webkit-mask-position;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;overflow:auto;text-overflow:unset!important;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}[tuiFade]::-webkit-scrollbar,[tuiFade]::-webkit-scrollbar-thumb{display:none}[tuiFade]:not([data-orientation=vertical]){overflow-y:hidden;-webkit-mask-image:linear-gradient(to right,transparent var(--t-fade-offset),#000 calc(var(--t-fade-size) + var(--t-fade-offset))),linear-gradient(to left,transparent var(--t-fade-offset),#000 calc(var(--t-fade-size) + var(--t-fade-offset))),linear-gradient(#000,#000);mask-image:linear-gradient(to right,transparent var(--t-fade-offset),#000 calc(var(--t-fade-size) + var(--t-fade-offset))),linear-gradient(to left,transparent var(--t-fade-offset),#000 calc(var(--t-fade-size) + var(--t-fade-offset))),linear-gradient(#000,#000);-webkit-mask-position:calc(-1 * var(--t-fade-size) - var(--t-fade-offset)) bottom,calc(100% + var(--t-fade-size) + var(--t-fade-offset)) bottom,top;mask-position:calc(-1 * var(--t-fade-size) - var(--t-fade-offset)) bottom,calc(100% + var(--t-fade-size) + var(--t-fade-offset)) bottom,top;-webkit-mask-size:calc(51% + var(--t-fade-size) + var(--t-fade-offset)) var(--t-line-height, 100%),calc(50% + var(--t-fade-size) + var(--t-fade-offset)) var(--t-line-height, 100%),100% calc(100% - var(--t-line-height, 100%));mask-size:calc(51% + var(--t-fade-size) + var(--t-fade-offset)) var(--t-line-height, 100%),calc(50% + var(--t-fade-size) + var(--t-fade-offset)) var(--t-line-height, 100%),100% calc(100% - var(--t-line-height, 100%))}[tuiFade]:not([data-orientation=vertical])._start{-webkit-mask-position:left bottom,calc(100% + var(--t-fade-size) + var(--t-fade-offset)) bottom,top;mask-position:left bottom,calc(100% + var(--t-fade-size) + var(--t-fade-offset)) bottom,top}[tuiFade]:not([data-orientation=vertical])._end{-webkit-mask-position:calc(-1 * var(--t-fade-size) - var(--t-fade-offset)) bottom,right bottom,top;mask-position:calc(-1 * var(--t-fade-size) - var(--t-fade-offset)) bottom,right bottom,top}[tuiFade]:not([data-orientation=vertical])._start._end{-webkit-mask-position:left bottom,right bottom,top;mask-position:left bottom,right bottom,top}[dir=rtl] [tuiFade]:not([data-orientation=vertical])._end{-webkit-mask-position:left bottom,calc(100% + var(--t-fade-size) + var(--t-fade-offset)) bottom,top;mask-position:left bottom,calc(100% + var(--t-fade-size) + var(--t-fade-offset)) bottom,top}[dir=rtl] [tuiFade]:not([data-orientation=vertical])._start{-webkit-mask-position:calc(-1 * var(--t-fade-size) - var(--t-fade-offset)) bottom,right bottom,top;mask-position:calc(-1 * var(--t-fade-size) - var(--t-fade-offset)) bottom,right bottom,top}[dir=rtl] [tuiFade]:not([data-orientation=vertical])._start._end{-webkit-mask-position:left bottom,right bottom,top;mask-position:left bottom,right bottom,top}[tuiFade][data-orientation=vertical]{overflow-x:hidden;-webkit-mask-image:linear-gradient(to bottom,transparent var(--t-fade-offset),#000 calc(var(--t-fade-size) + var(--t-fade-offset))),linear-gradient(to top,transparent var(--t-fade-offset),#000 calc(var(--t-fade-size) + var(--t-fade-offset)));mask-image:linear-gradient(to bottom,transparent var(--t-fade-offset),#000 calc(var(--t-fade-size) + var(--t-fade-offset))),linear-gradient(to top,transparent var(--t-fade-offset),#000 calc(var(--t-fade-size) + var(--t-fade-offset)));-webkit-mask-position:left calc(-1 * var(--t-fade-size) - var(--t-fade-offset)),left calc(100% + var(--t-fade-size) + var(--t-fade-offset));mask-position:left calc(-1 * var(--t-fade-size) - var(--t-fade-offset)),left calc(100% + var(--t-fade-size) + var(--t-fade-offset));-webkit-mask-size:100% calc(51% + var(--t-fade-size) + var(--t-fade-offset));mask-size:100% calc(51% + var(--t-fade-size) + var(--t-fade-offset))}[tuiFade][data-orientation=vertical]._start{-webkit-mask-position:left top,left calc(100% + var(--t-fade-size) + var(--t-fade-offset));mask-position:left top,left calc(100% + var(--t-fade-size) + var(--t-fade-offset))}[tuiFade][data-orientation=vertical]._end{-webkit-mask-position:left calc(-1 * var(--t-fade-size) - var(--t-fade-offset)),left bottom;mask-position:left calc(-1 * var(--t-fade-size) - var(--t-fade-offset)),left bottom}[tuiFade][data-orientation=vertical]._start._end{-webkit-mask-position:left top,left bottom;mask-position:left top,left bottom}\n"]
    }]
  }], null, null);
})();
var _TuiFade = class _TuiFade {
  constructor() {
    this.lineHeight = null;
    this.size = "1.5em";
    this.offset = "0em";
    this.orientation = "horizontal";
    const el = tuiInjectElement();
    tuiWithStyles(TuiFadeStyles);
    merge(inject(ResizeObserverService, {
      self: true
    }), inject(MutationObserverService, {
      self: true
    }), fromEvent(el, "scroll")).pipe(filter(() => !!el.scrollWidth), tuiZonefree(), takeUntilDestroyed()).subscribe(() => {
      el.classList.toggle("_end", this.isEnd(el));
      el.classList.toggle("_start", !!Math.floor(el.scrollLeft) || !!Math.floor(el.scrollTop));
    });
  }
  isEnd({
    scrollTop,
    scrollLeft,
    scrollHeight,
    scrollWidth,
    clientHeight,
    clientWidth
  }) {
    return this.orientation === "vertical" ? Math.round(scrollTop) < scrollHeight - clientHeight - BUFFER : Math.ceil(Math.abs(scrollLeft)) < scrollWidth - clientWidth - BUFFER || // horizontal multiline fade can kick in early due to hanging elements of fonts so using bigger buffer
    scrollHeight > clientHeight + 4 * BUFFER;
  }
};
_TuiFade.ɵfac = function TuiFade_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiFade)();
};
_TuiFade.ɵdir = ɵɵdefineDirective({
  type: _TuiFade,
  selectors: [["", "tuiFade", ""]],
  hostVars: 9,
  hostBindings: function TuiFade_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("data-orientation", ctx.orientation);
      ɵɵstyleProp("line-height", ctx.lineHeight)("--t-line-height", ctx.lineHeight)("--t-fade-size", ctx.size)("--t-fade-offset", ctx.offset);
    }
  },
  inputs: {
    lineHeight: [0, "tuiFadeHeight", "lineHeight"],
    size: [0, "tuiFadeSize", "size"],
    offset: [0, "tuiFadeOffset", "offset"],
    orientation: [0, "tuiFade", "orientation"]
  },
  features: [ɵɵProvidersFeature([ResizeObserverService, MutationObserverService, {
    provide: WA_MUTATION_OBSERVER_INIT,
    useValue: {
      characterData: true,
      subtree: true
    }
  }]), ɵɵHostDirectivesFeature([TuiTransitioned])]
});
var TuiFade = _TuiFade;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFade, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiFade]",
      providers: [ResizeObserverService, MutationObserverService, {
        provide: WA_MUTATION_OBSERVER_INIT,
        useValue: {
          characterData: true,
          subtree: true
        }
      }],
      hostDirectives: [TuiTransitioned],
      host: {
        "[style.line-height]": "lineHeight",
        "[style.--t-line-height]": "lineHeight",
        "[style.--t-fade-size]": "size",
        "[style.--t-fade-offset]": "offset",
        "[attr.data-orientation]": "orientation"
      }
    }]
  }], function() {
    return [];
  }, {
    lineHeight: [{
      type: Input,
      args: ["tuiFadeHeight"]
    }],
    size: [{
      type: Input,
      args: ["tuiFadeSize"]
    }],
    offset: [{
      type: Input,
      args: ["tuiFadeOffset"]
    }],
    orientation: [{
      type: Input,
      args: ["tuiFade"]
    }]
  });
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-avatar.mjs
var _c02 = ["*"];
function TuiAvatar_img_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "img", 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("src", ctx_r0.value, ɵɵsanitizeUrl);
  }
}
function TuiAvatar_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.value);
  }
}
function TuiAvatarLabeled_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 2);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", item_r1, " ");
  }
}
function TuiAvatarLabeled_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TuiAvatarLabeled_ng_container_1_span_1_Template, 2, 1, "span", 1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.split(ctx_r1.label));
  }
}
var TUI_AVATAR_DEFAULT_OPTIONS = {
  appearance: "",
  round: true,
  size: "l"
};
var TUI_AVATAR_OPTIONS = new InjectionToken(ngDevMode ? "TUI_AVATAR_OPTIONS" : "", {
  factory: () => TUI_AVATAR_DEFAULT_OPTIONS
});
function tuiAvatarOptionsProvider(options) {
  return tuiProvideOptions(TUI_AVATAR_OPTIONS, options, TUI_AVATAR_DEFAULT_OPTIONS);
}
var _TuiAvatar = class _TuiAvatar {
  constructor() {
    this.options = inject(TUI_AVATAR_OPTIONS);
    this.size = this.options.size;
    this.round = this.options.round;
  }
  get value() {
    return this.src || "";
  }
  get svg() {
    return tuiIsString(this.value) && this.value.endsWith(".svg");
  }
  get type() {
    if (this.value && !tuiIsString(this.value)) {
      return "img";
    }
    if (this.value.startsWith("@tui.")) {
      return "icon";
    }
    if (this.value.length > 0 && this.value.length < 3) {
      return "text";
    }
    return this.value.length ? "img" : "content";
  }
};
_TuiAvatar.ɵfac = function TuiAvatar_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiAvatar)();
};
_TuiAvatar.ɵcmp = ɵɵdefineComponent({
  type: _TuiAvatar,
  selectors: [["tui-avatar"], ["button", "tuiAvatar", ""], ["a", "tuiAvatar", ""]],
  hostVars: 6,
  hostBindings: function TuiAvatar_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("data-size", ctx.size)("data-type", ctx.type);
      ɵɵclassProp("_round", ctx.round)("_svg", ctx.svg);
    }
  },
  inputs: {
    size: "size",
    round: "round",
    src: "src"
  },
  features: [ɵɵProvidersFeature([tuiAppearanceOptionsProvider(TUI_AVATAR_OPTIONS)]), ɵɵHostDirectivesFeature([TuiWithAppearance, {
    directive: TuiIcons,
    inputs: ["iconStart", "src"]
  }])],
  ngContentSelectors: _c02,
  decls: 3,
  vars: 2,
  consts: [["alt", "", "loading", "lazy", 3, "src", 4, "ngIf"], [4, "ngIf"], ["alt", "", "loading", "lazy", 3, "src"]],
  template: function TuiAvatar_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, TuiAvatar_img_0_Template, 1, 1, "img", 0)(1, TuiAvatar_ng_container_1_Template, 2, 1, "ng-container", 1);
      ɵɵprojection(2);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.type === "img");
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.type === "text");
    }
  },
  dependencies: [NgIf],
  styles: ['[_nghost-%COMP%]{--t-size: 3.5rem;--t-radius: .75rem;position:relative;display:inline-flex;flex-shrink:0;inline-size:var(--t-size);block-size:var(--t-size);align-items:center;justify-content:center;overflow:hidden;white-space:nowrap;border-radius:var(--t-radius);border:none;background:var(--tui-background-neutral-1);color:var(--tui-text-secondary);vertical-align:middle;box-sizing:border-box;padding:.25rem;opacity:.999}[data-size=xs][_nghost-%COMP%]{--t-size: var(--tui-height-xs);--t-radius: .5rem;font:var(--tui-font-text-xs);font-weight:700}[data-size=xs][data-type=content][_nghost-%COMP%]{font:var(--tui-font-text-m);font-size:.5625rem}[data-size=s][_nghost-%COMP%]{--t-size: var(--tui-height-s);--t-radius: .5rem;font:var(--tui-font-text-s);font-weight:700}[data-size=s][data-type=content][_nghost-%COMP%]{font:var(--tui-font-text-xs);font-weight:700}[data-size=m][_nghost-%COMP%]{--t-size: calc(var(--tui-height-m) - .25rem);--t-radius: .75rem;font:var(--tui-font-text-l);font-weight:700}[data-size=m][data-type=content][_nghost-%COMP%]{font:var(--tui-font-text-m);font-weight:700}[data-size=l][_nghost-%COMP%]{--t-size: var(--tui-height-l);--t-radius: .75rem;font:var(--tui-font-heading-5)}[data-size=l][data-type=content][_nghost-%COMP%]{font:var(--tui-font-text-l);font-weight:700}[data-size=xl][_nghost-%COMP%]{--t-size: 5rem;--t-radius: .75rem;font:var(--tui-font-heading-3)}[data-size=xl][data-type=content][_nghost-%COMP%]{font:var(--tui-font-heading-4)}[data-size=xxl][_nghost-%COMP%]{--t-size: 6rem;--t-radius: 1rem;font:var(--tui-font-heading-3)}[data-size=xxl][data-type=content][_nghost-%COMP%]{font:var(--tui-font-heading-3)}[data-size=xxxl][_nghost-%COMP%]{--t-size: 8rem;--t-radius: 1.25rem;font:var(--tui-font-heading-2)}[data-size=xxxl][data-type=content][_nghost-%COMP%]{font:var(--tui-font-heading-3)}[data-type][_nghost-%COMP%]:before{display:none}[_nghost-%COMP%]:not([data-type=icon]):before{-webkit-mask:none;mask:none}[data-type=img][_nghost-%COMP%]:not(._svg){background:transparent}[data-type=icon][_nghost-%COMP%]:before{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;content:"";display:block;font-size:calc(var(--t-size) * .6);-webkit-mask-size:1em;mask-size:1em}._round[_nghost-%COMP%]{--t-radius: calc(var(--t-size) / 2)}[_nghost-%COMP%]     img, [_nghost-%COMP%]     picture, [_nghost-%COMP%]     video{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;object-fit:cover;box-sizing:border-box;border-radius:inherit}._svg[_nghost-%COMP%]   img[_ngcontent-%COMP%]{padding:20%;object-fit:contain;border-radius:unset}'],
  changeDetection: 0
});
var TuiAvatar = _TuiAvatar;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAvatar, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-avatar,button[tuiAvatar],a[tuiAvatar]",
      imports: [NgIf],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiAppearanceOptionsProvider(TUI_AVATAR_OPTIONS)],
      hostDirectives: [TuiWithAppearance, {
        directive: TuiIcons,
        inputs: ["iconStart: src"]
      }],
      host: {
        "[attr.data-size]": "size",
        "[attr.data-type]": "type",
        "[class._round]": "round",
        "[class._svg]": "svg"
      },
      template: `<img
    *ngIf="type === 'img'"
    alt=""
    loading="lazy"
    [src]="value"
/>
<ng-container *ngIf="type === 'text'">{{ value }}</ng-container>
<ng-content />
`,
      styles: [':host{--t-size: 3.5rem;--t-radius: .75rem;position:relative;display:inline-flex;flex-shrink:0;inline-size:var(--t-size);block-size:var(--t-size);align-items:center;justify-content:center;overflow:hidden;white-space:nowrap;border-radius:var(--t-radius);border:none;background:var(--tui-background-neutral-1);color:var(--tui-text-secondary);vertical-align:middle;box-sizing:border-box;padding:.25rem;opacity:.999}:host[data-size=xs]{--t-size: var(--tui-height-xs);--t-radius: .5rem;font:var(--tui-font-text-xs);font-weight:700}:host[data-size=xs][data-type=content]{font:var(--tui-font-text-m);font-size:.5625rem}:host[data-size=s]{--t-size: var(--tui-height-s);--t-radius: .5rem;font:var(--tui-font-text-s);font-weight:700}:host[data-size=s][data-type=content]{font:var(--tui-font-text-xs);font-weight:700}:host[data-size=m]{--t-size: calc(var(--tui-height-m) - .25rem);--t-radius: .75rem;font:var(--tui-font-text-l);font-weight:700}:host[data-size=m][data-type=content]{font:var(--tui-font-text-m);font-weight:700}:host[data-size=l]{--t-size: var(--tui-height-l);--t-radius: .75rem;font:var(--tui-font-heading-5)}:host[data-size=l][data-type=content]{font:var(--tui-font-text-l);font-weight:700}:host[data-size=xl]{--t-size: 5rem;--t-radius: .75rem;font:var(--tui-font-heading-3)}:host[data-size=xl][data-type=content]{font:var(--tui-font-heading-4)}:host[data-size=xxl]{--t-size: 6rem;--t-radius: 1rem;font:var(--tui-font-heading-3)}:host[data-size=xxl][data-type=content]{font:var(--tui-font-heading-3)}:host[data-size=xxxl]{--t-size: 8rem;--t-radius: 1.25rem;font:var(--tui-font-heading-2)}:host[data-size=xxxl][data-type=content]{font:var(--tui-font-heading-3)}:host[data-type]:before{display:none}:host:not([data-type=icon]):before{-webkit-mask:none;mask:none}:host[data-type=img]:not(._svg){background:transparent}:host[data-type=icon]:before{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;content:"";display:block;font-size:calc(var(--t-size) * .6);-webkit-mask-size:1em;mask-size:1em}:host._round{--t-radius: calc(var(--t-size) / 2)}:host ::ng-deep img,:host ::ng-deep picture,:host ::ng-deep video{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;object-fit:cover;box-sizing:border-box;border-radius:inherit}:host._svg img{padding:20%;object-fit:contain;border-radius:unset}\n']
    }]
  }], null, {
    size: [{
      type: Input
    }],
    round: [{
      type: Input
    }],
    src: [{
      type: Input
    }]
  });
})();
var _TuiAvatarLabeled = class _TuiAvatarLabeled {
  constructor() {
    this.label = "";
  }
  split(label) {
    return label.split(" ");
  }
};
_TuiAvatarLabeled.ɵfac = function TuiAvatarLabeled_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiAvatarLabeled)();
};
_TuiAvatarLabeled.ɵcmp = ɵɵdefineComponent({
  type: _TuiAvatarLabeled,
  selectors: [["tui-avatar-labeled"]],
  inputs: {
    label: "label"
  },
  ngContentSelectors: _c02,
  decls: 2,
  vars: 1,
  consts: [[4, "ngIf"], ["tuiFade", "", 4, "ngFor", "ngForOf"], ["tuiFade", ""]],
  template: function TuiAvatarLabeled_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
      ɵɵtemplate(1, TuiAvatarLabeled_ng_container_1_Template, 2, 1, "ng-container", 0);
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.label.length);
    }
  },
  dependencies: [NgForOf, NgIf, TuiFade],
  styles: ["tui-avatar-labeled{display:flex;inline-size:3.5rem;box-sizing:content-box;flex-direction:column;text-align:center;align-items:center;line-height:.895rem;font-size:.75rem;padding:0 .5rem;white-space:nowrap}tui-avatar-labeled tui-avatar{margin-block-end:.375rem}tui-avatar-labeled [tuiFade]{inline-size:calc(100% + 1rem)}\n"],
  encapsulation: 2,
  changeDetection: 0
});
var TuiAvatarLabeled = _TuiAvatarLabeled;
__decorate([tuiPure], TuiAvatarLabeled.prototype, "split", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAvatarLabeled, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-avatar-labeled",
      imports: [NgForOf, NgIf, TuiFade],
      template: `
        <ng-content />
        <ng-container *ngIf="label.length">
            <span
                *ngFor="let item of split(label)"
                tuiFade
            >
                {{ item }}
            </span>
        </ng-container>
    `,
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      styles: ["tui-avatar-labeled{display:flex;inline-size:3.5rem;box-sizing:content-box;flex-direction:column;text-align:center;align-items:center;line-height:.895rem;font-size:.75rem;padding:0 .5rem;white-space:nowrap}tui-avatar-labeled tui-avatar{margin-block-end:.375rem}tui-avatar-labeled [tuiFade]{inline-size:calc(100% + 1rem)}\n"]
    }]
  }], null, {
    label: [{
      type: Input
    }],
    split: []
  });
})();
var _TuiAvatarOutlineStyles = class _TuiAvatarOutlineStyles {
};
_TuiAvatarOutlineStyles.ɵfac = function TuiAvatarOutlineStyles_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiAvatarOutlineStyles)();
};
_TuiAvatarOutlineStyles.ɵcmp = ɵɵdefineComponent({
  type: _TuiAvatarOutlineStyles,
  selectors: [["ng-component"]],
  hostAttrs: [1, "tui-avatar-outline"],
  decls: 0,
  vars: 0,
  template: function TuiAvatarOutlineStyles_Template(rf, ctx) {
  },
  styles: ['[tuiAvatarOutline]{--t-outline: .1875rem;--t-gap: .125rem}[tuiAvatarOutline][data-size=xs],[tuiAvatarOutline][data-size=s],[tuiAvatarOutline][data-size=m]{--t-outline: .125rem;--t-gap: .0625rem}[tuiAvatarOutline]._outline{-webkit-mask:radial-gradient(closest-side,#000,#000 calc(100% - var(--t-gap) - var(--t-outline) - .5px),transparent calc(100% - var(--t-gap) - var(--t-outline)),transparent calc(100% - var(--t-outline) - .5px),#000 calc(100% - var(--t-outline)));mask:radial-gradient(closest-side,#000,#000 calc(100% - var(--t-gap) - var(--t-outline) - .5px),transparent calc(100% - var(--t-gap) - var(--t-outline)),transparent calc(100% - var(--t-outline) - .5px),#000 calc(100% - var(--t-outline)))}[tuiAvatarOutline]._outline:after{content:"";position:absolute;top:0;left:0;inline-size:100%;block-size:100%;background:var(--t-fill);-webkit-mask:radial-gradient(closest-side,transparent,transparent calc(100% - var(--t-outline) - .5px),#000 calc(100% - var(--t-outline)));mask:radial-gradient(closest-side,transparent,transparent calc(100% - var(--t-outline) - .5px),#000 calc(100% - var(--t-outline)))}\n'],
  encapsulation: 2,
  changeDetection: 0
});
var TuiAvatarOutlineStyles = _TuiAvatarOutlineStyles;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAvatarOutlineStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-avatar-outline"
      },
      styles: ['[tuiAvatarOutline]{--t-outline: .1875rem;--t-gap: .125rem}[tuiAvatarOutline][data-size=xs],[tuiAvatarOutline][data-size=s],[tuiAvatarOutline][data-size=m]{--t-outline: .125rem;--t-gap: .0625rem}[tuiAvatarOutline]._outline{-webkit-mask:radial-gradient(closest-side,#000,#000 calc(100% - var(--t-gap) - var(--t-outline) - .5px),transparent calc(100% - var(--t-gap) - var(--t-outline)),transparent calc(100% - var(--t-outline) - .5px),#000 calc(100% - var(--t-outline)));mask:radial-gradient(closest-side,#000,#000 calc(100% - var(--t-gap) - var(--t-outline) - .5px),transparent calc(100% - var(--t-gap) - var(--t-outline)),transparent calc(100% - var(--t-outline) - .5px),#000 calc(100% - var(--t-outline)))}[tuiAvatarOutline]._outline:after{content:"";position:absolute;top:0;left:0;inline-size:100%;block-size:100%;background:var(--t-fill);-webkit-mask:radial-gradient(closest-side,transparent,transparent calc(100% - var(--t-outline) - .5px),#000 calc(100% - var(--t-outline)));mask:radial-gradient(closest-side,transparent,transparent calc(100% - var(--t-outline) - .5px),#000 calc(100% - var(--t-outline)))}\n']
    }]
  }], null, null);
})();
var _TuiAvatarOutline = class _TuiAvatarOutline {
  constructor() {
    this.nothing = tuiWithStyles(TuiAvatarOutlineStyles);
    this.tuiAvatarOutline = "";
  }
  get value() {
    return this.tuiAvatarOutline === "" ? "var(--tui-background-accent-1)" : this.tuiAvatarOutline;
  }
};
_TuiAvatarOutline.ɵfac = function TuiAvatarOutline_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiAvatarOutline)();
};
_TuiAvatarOutline.ɵdir = ɵɵdefineDirective({
  type: _TuiAvatarOutline,
  selectors: [["", "tuiAvatarOutline", ""]],
  hostVars: 4,
  hostBindings: function TuiAvatarOutline_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵstyleProp("--t-fill", ctx.value);
      ɵɵclassProp("_outline", ctx.value);
    }
  },
  inputs: {
    tuiAvatarOutline: "tuiAvatarOutline"
  }
});
var TuiAvatarOutline = _TuiAvatarOutline;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAvatarOutline, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiAvatarOutline]",
      host: {
        "[style.--t-fill]": "value",
        "[class._outline]": "value"
      }
    }]
  }], null, {
    tuiAvatarOutline: [{
      type: Input
    }]
  });
})();
var _TuiAvatarStack = class _TuiAvatarStack {
  constructor() {
    this.direction = "right";
  }
};
_TuiAvatarStack.ɵfac = function TuiAvatarStack_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiAvatarStack)();
};
_TuiAvatarStack.ɵcmp = ɵɵdefineComponent({
  type: _TuiAvatarStack,
  selectors: [["tui-avatar-stack"]],
  hostVars: 1,
  hostBindings: function TuiAvatarStack_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("data-direction", ctx.direction);
    }
  },
  inputs: {
    direction: "direction"
  },
  ngContentSelectors: _c02,
  decls: 1,
  vars: 0,
  template: function TuiAvatarStack_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  styles: ["tui-avatar-stack{display:flex;--t-gap: .125rem}tui-avatar-stack tui-avatar{--t-offset: 2.5rem}tui-avatar-stack tui-avatar[data-size=xl]{--t-offset: 2.125rem}tui-avatar-stack tui-avatar[data-size=l]{--t-offset: 1.5rem}tui-avatar-stack tui-avatar[data-size=m]{--t-offset: .75rem}tui-avatar-stack tui-avatar[data-size=s]{--t-offset: .575rem}tui-avatar-stack tui-avatar[data-size=xs]{--t-offset: .375rem}tui-avatar-stack tui-avatar._round{-webkit-mask-image:radial-gradient(circle at calc(50% - calc(var(--tui-inline) * (var(--t-size) - var(--t-offset)))) 50%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px));mask-image:radial-gradient(circle at calc(50% - calc(var(--tui-inline) * (var(--t-size) - var(--t-offset)))) 50%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px))}tui-avatar-stack[data-direction=right] tui-avatar._round{--tui-inline: -1}[dir=rtl] tui-avatar-stack[data-direction=right] tui-avatar._round{--tui-inline: 1}tui-avatar-stack[data-direction=right] tui-avatar._round:last-child{-webkit-mask-image:none;mask-image:none}tui-avatar-stack[data-direction=left] tui-avatar._round:first-child{-webkit-mask-image:none;mask-image:none}tui-avatar-stack[data-direction=left] tui-avatar:not(._round):not(:first-child),[dir=rtl] tui-avatar-stack[data-direction=right] tui-avatar:not(._round):not(:last-child){-webkit-mask-image:radial-gradient(circle at 0% 100%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),radial-gradient(circle at 0% 0%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),linear-gradient(to right,transparent calc(var(--t-offset) + var(--t-gap)),#000 calc(var(--t-offset) + var(--t-gap)));mask-image:radial-gradient(circle at 0% 100%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),radial-gradient(circle at 0% 0%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),linear-gradient(to right,transparent calc(var(--t-offset) + var(--t-gap)),#000 calc(var(--t-offset) + var(--t-gap)));-webkit-mask-position:calc(var(--t-offset) - var(--t-radius)) calc(-1 * (var(--t-size) - var(--t-radius))),calc(var(--t-offset) - var(--t-radius)) calc(var(--t-size) - var(--t-radius)),bottom;mask-position:calc(var(--t-offset) - var(--t-radius)) calc(-1 * (var(--t-size) - var(--t-radius))),calc(var(--t-offset) - var(--t-radius)) calc(var(--t-size) - var(--t-radius)),bottom}tui-avatar-stack[data-direction=right] tui-avatar:not(._round):not(:last-child),[dir=rtl] tui-avatar-stack[data-direction=left] tui-avatar:not(._round):not(:first-child){-webkit-mask-image:radial-gradient(circle at 150% 100%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),radial-gradient(circle at 150% 0%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),linear-gradient(to left,transparent calc(var(--t-offset) + var(--t-gap)),#000 calc(var(--t-offset) + var(--t-gap)));mask-image:radial-gradient(circle at 150% 100%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),radial-gradient(circle at 150% 0%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),linear-gradient(to left,transparent calc(var(--t-offset) + var(--t-gap)),#000 calc(var(--t-offset) + var(--t-gap)));-webkit-mask-position:calc((var(--t-offset) - var(--t-size) + var(--t-radius) / 2 + var(--t-gap) + 1px) * -1) calc(-1 * var(--t-gap)),calc((var(--t-offset) - var(--t-size) + var(--t-radius) / 2 + var(--t-gap) + 1px) * -1) calc(100% + var(--t-gap)),bottom;mask-position:calc((var(--t-offset) - var(--t-size) + var(--t-radius) / 2 + var(--t-gap) + 1px) * -1) calc(-1 * var(--t-gap)),calc((var(--t-offset) - var(--t-size) + var(--t-radius) / 2 + var(--t-gap) + 1px) * -1) calc(100% + var(--t-gap)),bottom}tui-avatar-stack tui-avatar:not(._round){-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}[dir=rtl] tui-avatar-stack[data-direction=left] tui-avatar:not(._round),tui-avatar-stack[data-direction=right] tui-avatar:not(._round){-webkit-mask-size:calc(var(--t-radius) + var(--t-gap)) calc(var(--t-radius) + var(--t-gap)),calc(var(--t-radius) + var(--t-gap)) calc(var(--t-radius) + var(--t-gap)),100%;mask-size:calc(var(--t-radius) + var(--t-gap)) calc(var(--t-radius) + var(--t-gap)),calc(var(--t-radius) + var(--t-gap)) calc(var(--t-radius) + var(--t-gap)),100%}[dir=rtl] tui-avatar-stack[data-direction=right] tui-avatar:not(._round){-webkit-mask-size:unset;mask-size:unset}tui-avatar-stack tui-avatar:not(:last-child){margin-inline-end:calc(-1 * var(--t-offset))}\n"],
  encapsulation: 2,
  changeDetection: 0
});
var TuiAvatarStack = _TuiAvatarStack;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAvatarStack, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-avatar-stack",
      template: "<ng-content />",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[attr.data-direction]": "direction"
      },
      styles: ["tui-avatar-stack{display:flex;--t-gap: .125rem}tui-avatar-stack tui-avatar{--t-offset: 2.5rem}tui-avatar-stack tui-avatar[data-size=xl]{--t-offset: 2.125rem}tui-avatar-stack tui-avatar[data-size=l]{--t-offset: 1.5rem}tui-avatar-stack tui-avatar[data-size=m]{--t-offset: .75rem}tui-avatar-stack tui-avatar[data-size=s]{--t-offset: .575rem}tui-avatar-stack tui-avatar[data-size=xs]{--t-offset: .375rem}tui-avatar-stack tui-avatar._round{-webkit-mask-image:radial-gradient(circle at calc(50% - calc(var(--tui-inline) * (var(--t-size) - var(--t-offset)))) 50%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px));mask-image:radial-gradient(circle at calc(50% - calc(var(--tui-inline) * (var(--t-size) - var(--t-offset)))) 50%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px))}tui-avatar-stack[data-direction=right] tui-avatar._round{--tui-inline: -1}[dir=rtl] tui-avatar-stack[data-direction=right] tui-avatar._round{--tui-inline: 1}tui-avatar-stack[data-direction=right] tui-avatar._round:last-child{-webkit-mask-image:none;mask-image:none}tui-avatar-stack[data-direction=left] tui-avatar._round:first-child{-webkit-mask-image:none;mask-image:none}tui-avatar-stack[data-direction=left] tui-avatar:not(._round):not(:first-child),[dir=rtl] tui-avatar-stack[data-direction=right] tui-avatar:not(._round):not(:last-child){-webkit-mask-image:radial-gradient(circle at 0% 100%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),radial-gradient(circle at 0% 0%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),linear-gradient(to right,transparent calc(var(--t-offset) + var(--t-gap)),#000 calc(var(--t-offset) + var(--t-gap)));mask-image:radial-gradient(circle at 0% 100%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),radial-gradient(circle at 0% 0%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),linear-gradient(to right,transparent calc(var(--t-offset) + var(--t-gap)),#000 calc(var(--t-offset) + var(--t-gap)));-webkit-mask-position:calc(var(--t-offset) - var(--t-radius)) calc(-1 * (var(--t-size) - var(--t-radius))),calc(var(--t-offset) - var(--t-radius)) calc(var(--t-size) - var(--t-radius)),bottom;mask-position:calc(var(--t-offset) - var(--t-radius)) calc(-1 * (var(--t-size) - var(--t-radius))),calc(var(--t-offset) - var(--t-radius)) calc(var(--t-size) - var(--t-radius)),bottom}tui-avatar-stack[data-direction=right] tui-avatar:not(._round):not(:last-child),[dir=rtl] tui-avatar-stack[data-direction=left] tui-avatar:not(._round):not(:first-child){-webkit-mask-image:radial-gradient(circle at 150% 100%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),radial-gradient(circle at 150% 0%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),linear-gradient(to left,transparent calc(var(--t-offset) + var(--t-gap)),#000 calc(var(--t-offset) + var(--t-gap)));mask-image:radial-gradient(circle at 150% 100%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),radial-gradient(circle at 150% 0%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),linear-gradient(to left,transparent calc(var(--t-offset) + var(--t-gap)),#000 calc(var(--t-offset) + var(--t-gap)));-webkit-mask-position:calc((var(--t-offset) - var(--t-size) + var(--t-radius) / 2 + var(--t-gap) + 1px) * -1) calc(-1 * var(--t-gap)),calc((var(--t-offset) - var(--t-size) + var(--t-radius) / 2 + var(--t-gap) + 1px) * -1) calc(100% + var(--t-gap)),bottom;mask-position:calc((var(--t-offset) - var(--t-size) + var(--t-radius) / 2 + var(--t-gap) + 1px) * -1) calc(-1 * var(--t-gap)),calc((var(--t-offset) - var(--t-size) + var(--t-radius) / 2 + var(--t-gap) + 1px) * -1) calc(100% + var(--t-gap)),bottom}tui-avatar-stack tui-avatar:not(._round){-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}[dir=rtl] tui-avatar-stack[data-direction=left] tui-avatar:not(._round),tui-avatar-stack[data-direction=right] tui-avatar:not(._round){-webkit-mask-size:calc(var(--t-radius) + var(--t-gap)) calc(var(--t-radius) + var(--t-gap)),calc(var(--t-radius) + var(--t-gap)) calc(var(--t-radius) + var(--t-gap)),100%;mask-size:calc(var(--t-radius) + var(--t-gap)) calc(var(--t-radius) + var(--t-gap)),calc(var(--t-radius) + var(--t-gap)) calc(var(--t-radius) + var(--t-gap)),100%}[dir=rtl] tui-avatar-stack[data-direction=right] tui-avatar:not(._round){-webkit-mask-size:unset;mask-size:unset}tui-avatar-stack tui-avatar:not(:last-child){margin-inline-end:calc(-1 * var(--t-offset))}\n"]
    }]
  }], null, {
    direction: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-switch.mjs
var _c03 = ["type", "checkbox", "tuiSwitch", ""];
var TUI_SWITCH_DEFAULT_OPTIONS = {
  showIcons: true,
  size: "m",
  icon: "@tui.check",
  appearance: (el) => el.checked ? "primary" : "secondary"
};
var TUI_SWITCH_OPTIONS = new InjectionToken(ngDevMode ? "TUI_SWITCH_OPTIONS" : "", {
  factory: () => TUI_SWITCH_DEFAULT_OPTIONS
});
function tuiSwitchOptionsProvider(options) {
  return tuiProvideOptions(TUI_SWITCH_OPTIONS, options, TUI_SWITCH_DEFAULT_OPTIONS);
}
var _TuiSwitch = class _TuiSwitch {
  constructor() {
    this.appearance = inject(TuiAppearance);
    this.resolver = tuiInjectIconResolver();
    this.destroyRef = inject(DestroyRef);
    this.cdr = inject(ChangeDetectorRef);
    this.options = inject(TUI_SWITCH_OPTIONS);
    this.el = tuiInjectElement();
    this.control = inject(NgControl, {
      self: true,
      optional: true
    });
    this.size = this.options.size;
    this.showIcons = this.options.showIcons;
  }
  ngOnInit() {
    this.control?.valueChanges?.pipe(tuiWatch(this.cdr), takeUntilDestroyed(this.destroyRef)).subscribe();
  }
  ngDoCheck() {
    this.appearance.tuiAppearance = this.options.appearance(this.el);
  }
  get icon() {
    const {
      options,
      resolver,
      size
    } = this;
    const icon = tuiIsString(options.icon) ? options.icon : options.icon(size);
    return this.showIcons && icon ? `url(${resolver(icon)})` : null;
  }
};
_TuiSwitch.ɵfac = function TuiSwitch_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiSwitch)();
};
_TuiSwitch.ɵcmp = ɵɵdefineComponent({
  type: _TuiSwitch,
  selectors: [["input", "type", "checkbox", "tuiSwitch", ""]],
  hostAttrs: ["role", "switch"],
  hostVars: 6,
  hostBindings: function TuiSwitch_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵdomProperty("disabled", !ctx.control || ctx.control.disabled);
      ɵɵattribute("data-size", ctx.size);
      ɵɵstyleProp("--t-checked-icon", ctx.icon);
      ɵɵclassProp("_readonly", !ctx.control);
    }
  },
  inputs: {
    size: "size",
    showIcons: "showIcons"
  },
  features: [ɵɵHostDirectivesFeature([{
    directive: TuiAppearance,
    inputs: ["tuiAppearanceState", "tuiAppearanceState", "tuiAppearanceFocus", "tuiAppearanceFocus", "tuiAppearanceMode", "tuiAppearanceMode"]
  }, TuiNativeValidator])],
  attrs: _c03,
  decls: 0,
  vars: 0,
  template: function TuiSwitch_Template(rf, ctx) {
  },
  styles: ['[tuiSwitch]{transition-property:background,box-shadow;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;inline-size:3rem;block-size:1.5rem;border-radius:2rem;overflow:hidden;cursor:pointer;margin:0;flex-shrink:0;color:#fff!important}[tuiSwitch][data-size=s]{block-size:1rem;inline-size:2rem}[tuiSwitch][data-size=s]:before{inline-size:1.125rem;transform:translate(-1rem);-webkit-mask-size:.75rem;mask-size:.75rem}[tuiSwitch][data-size=s]:after{inline-size:1rem;box-shadow:-2.625rem 0 0 .5rem var(--tui-background-base);outline-width:.167rem;transform:scale(.375)}[tuiSwitch][data-size=s]:checked:after{transform:scale(.375) translate(2.625rem)}[tuiSwitch]:checked:before{transform:none}[tuiSwitch]:checked:after{transform:scale(.33333) translate(4.5rem)}[tuiSwitch]:disabled._readonly{opacity:1}[tuiSwitch]:before,[tuiSwitch]:after{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:"";position:absolute;block-size:100%;inline-size:1.5rem}[tuiSwitch]:before{display:var(--t-checked-icon, none);background:currentColor;-webkit-mask:var(--t-checked-icon) no-repeat center;mask:var(--t-checked-icon) no-repeat center;-webkit-mask-size:1rem;mask-size:1rem;inline-size:1.375rem;transform:translate(-1.5rem)}[tuiSwitch]:after{right:0;border-radius:100%;transform:scale(.33333);box-shadow:-4.5rem 0 0 .75rem var(--tui-background-base);outline:.375rem solid var(--tui-background-neutral-2-pressed);outline-offset:var(--t-checked-icon, 20rem)}[tuiSwitch]:invalid:not([data-mode]),[tuiSwitch][data-mode~=invalid]{color:#fff}\n'],
  encapsulation: 2,
  changeDetection: 0
});
var TuiSwitch = _TuiSwitch;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSwitch, [{
    type: Component,
    args: [{
      standalone: true,
      selector: 'input[type="checkbox"][tuiSwitch]',
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      hostDirectives: [{
        directive: TuiAppearance,
        inputs: ["tuiAppearanceState", "tuiAppearanceFocus", "tuiAppearanceMode"]
      }, TuiNativeValidator],
      host: {
        role: "switch",
        "[disabled]": "!control || control.disabled",
        "[attr.data-size]": "size",
        "[class._readonly]": "!control",
        "[style.--t-checked-icon]": "icon"
      },
      styles: ['[tuiSwitch]{transition-property:background,box-shadow;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;inline-size:3rem;block-size:1.5rem;border-radius:2rem;overflow:hidden;cursor:pointer;margin:0;flex-shrink:0;color:#fff!important}[tuiSwitch][data-size=s]{block-size:1rem;inline-size:2rem}[tuiSwitch][data-size=s]:before{inline-size:1.125rem;transform:translate(-1rem);-webkit-mask-size:.75rem;mask-size:.75rem}[tuiSwitch][data-size=s]:after{inline-size:1rem;box-shadow:-2.625rem 0 0 .5rem var(--tui-background-base);outline-width:.167rem;transform:scale(.375)}[tuiSwitch][data-size=s]:checked:after{transform:scale(.375) translate(2.625rem)}[tuiSwitch]:checked:before{transform:none}[tuiSwitch]:checked:after{transform:scale(.33333) translate(4.5rem)}[tuiSwitch]:disabled._readonly{opacity:1}[tuiSwitch]:before,[tuiSwitch]:after{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:"";position:absolute;block-size:100%;inline-size:1.5rem}[tuiSwitch]:before{display:var(--t-checked-icon, none);background:currentColor;-webkit-mask:var(--t-checked-icon) no-repeat center;mask:var(--t-checked-icon) no-repeat center;-webkit-mask-size:1rem;mask-size:1rem;inline-size:1.375rem;transform:translate(-1.5rem)}[tuiSwitch]:after{right:0;border-radius:100%;transform:scale(.33333);box-shadow:-4.5rem 0 0 .75rem var(--tui-background-base);outline:.375rem solid var(--tui-background-neutral-2-pressed);outline-offset:var(--t-checked-icon, 20rem)}[tuiSwitch]:invalid:not([data-mode]),[tuiSwitch][data-mode~=invalid]{color:#fff}\n']
    }]
  }], null, {
    size: [{
      type: Input
    }],
    showIcons: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-chip.mjs
var TUI_CHIP_DEFAULT_OPTIONS = {
  appearance: "neutral",
  size: "s"
};
var TUI_CHIP_OPTIONS = new InjectionToken(ngDevMode ? "TUI_CHIP_OPTIONS" : "", {
  factory: () => TUI_CHIP_DEFAULT_OPTIONS
});
function tuiChipOptionsProvider(options) {
  return tuiProvideOptions(TUI_CHIP_OPTIONS, options, TUI_CHIP_DEFAULT_OPTIONS);
}
var _TuiChipStyles = class _TuiChipStyles {
};
_TuiChipStyles.ɵfac = function TuiChipStyles_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiChipStyles)();
};
_TuiChipStyles.ɵcmp = ɵɵdefineComponent({
  type: _TuiChipStyles,
  selectors: [["ng-component"]],
  hostAttrs: [1, "tui-chip"],
  decls: 0,
  vars: 0,
  template: function TuiChipStyles_Template(rf, ctx) {
  },
  styles: ["tui-chip,[tuiChip]{--t-gap: .125rem;--t-margin: -.125rem;--t-icon-size: 1rem;--t-padding: 0 .625rem;--t-size: var(--tui-height-s);-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font:inherit;line-height:inherit;text-decoration:none;position:relative;display:inline-flex;align-items:center;flex-shrink:0;box-sizing:border-box;white-space:nowrap;overflow:hidden;vertical-align:middle;max-inline-size:100%;gap:calc(var(--t-gap, 0rem) - 2 * var(--t-margin, 0rem));font:var(--tui-font-text-s);border-radius:var(--tui-radius-m);padding:var(--t-padding);block-size:var(--t-size);inline-size:-webkit-fit-content;inline-size:-moz-fit-content;inline-size:fit-content;isolation:isolate}tui-chip>img,[tuiChip]>img,tui-chip>tui-svg,[tuiChip]>tui-svg,tui-chip>tui-icon,[tuiChip]>tui-icon,tui-chip>tui-avatar,[tuiChip]>tui-avatar,tui-chip>tui-badge,[tuiChip]>tui-badge,tui-chip>[tuiBadge],[tuiChip]>[tuiBadge],tui-chip>[tuiRadio],[tuiChip]>[tuiRadio],tui-chip>[tuiSwitch],[tuiChip]>[tuiSwitch],tui-chip>[tuiCheckbox],[tuiChip]>[tuiCheckbox],tui-chip[tuiIcons]:before,[tuiChip][tuiIcons]:before,tui-chip[tuiIcons]:after,[tuiChip][tuiIcons]:after{margin:var(--t-margin)}tui-chip:matches(a,button,select,textarea,input,label,.tui-interactive):not(:disabled),[tuiChip]:matches(a,button,select,textarea,input,label,.tui-interactive):not(:disabled){cursor:pointer}tui-chip:is(a,button,select,textarea,input,label,.tui-interactive):not(:disabled),[tuiChip]:is(a,button,select,textarea,input,label,.tui-interactive):not(:disabled){cursor:pointer}tui-chip>tui-icon,[tuiChip]>tui-icon,tui-chip[tuiIcons]:before,[tuiChip][tuiIcons]:before,tui-chip[tuiIcons]:after,[tuiChip][tuiIcons]:after{font-size:var(--t-icon-size)!important}tui-chip>[tuiIconButton],[tuiChip]>[tuiIconButton]{margin:-.375rem}tui-chip[data-size=xxs],[tuiChip][data-size=xxs]{--t-gap: 0rem;--t-padding: 0 .25rem;--t-size: 1rem;--t-icon-size: .75rem;font:var(--tui-font-text-xs);border-radius:var(--tui-radius-xs)}tui-chip[data-size=xxs]>[tuiIconButton],[tuiChip][data-size=xxs]>[tuiIconButton]{margin:-.5rem;transform:scale(.75)}tui-chip[data-size=xs],[tuiChip][data-size=xs]{--t-padding: 0 .375rem;--t-size: var(--tui-height-xs);border-radius:var(--tui-radius-xs)}tui-chip[data-size=xs]>[tuiIconButton],[tuiChip][data-size=xs]>[tuiIconButton]{margin:-.375rem}tui-chip[data-size=m],[tuiChip][data-size=m]{--t-margin: -.375rem;--t-icon-size: 1.5rem;--t-padding: 0 1rem;--t-size: var(--tui-height-m);font:var(--tui-font-text-m)}tui-chip[data-size=m]>[tuiIconButton],[tuiChip][data-size=m]>[tuiIconButton]{margin:-.75rem}tui-chip>img,[tuiChip]>img,tui-chip tui-avatar,[tuiChip] tui-avatar{inline-size:1.5rem;margin-inline-start:-.375rem}tui-chip>[tuiFade]:first-of-type,[tuiChip]>[tuiFade]:first-of-type{flex:1 0 30%;max-inline-size:-webkit-fit-content;max-inline-size:-moz-fit-content;max-inline-size:fit-content}tui-chip>[tuiFade]:last-of-type,[tuiChip]>[tuiFade]:last-of-type{flex:0 1 auto}tui-chip>input[tuiChip],[tuiChip]>input[tuiChip]{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;margin:0}tui-chip>input[tuiChip][type=checkbox],[tuiChip]>input[tuiChip][type=checkbox],tui-chip>input[tuiChip][type=radio],[tuiChip]>input[tuiChip][type=radio]{z-index:-1}tui-chip[tuiAppearance][data-appearance=error],[tuiChip][tuiAppearance][data-appearance=error],tui-chip[tuiAppearance][data-appearance=success],[tuiChip][tuiAppearance][data-appearance=success],tui-chip[tuiAppearance][data-appearance=negative],[tuiChip][tuiAppearance][data-appearance=negative],tui-chip[tuiAppearance][data-appearance=positive],[tuiChip][tuiAppearance][data-appearance=positive],tui-chip[tuiAppearance][data-appearance=warning],[tuiChip][tuiAppearance][data-appearance=warning],tui-chip[tuiAppearance][data-appearance=info],[tuiChip][tuiAppearance][data-appearance=info],tui-chip[tuiAppearance][data-appearance=neutral],[tuiChip][tuiAppearance][data-appearance=neutral]{color:var(--tui-text-primary)}input[tuiChip]:matches(a,button,select,textarea,input,label,.tui-interactive):not(:disabled){cursor:text}input[tuiChip]:is(a,button,select,textarea,input,label,.tui-interactive):not(:disabled){cursor:text}\n"],
  encapsulation: 2,
  changeDetection: 0
});
var TuiChipStyles = _TuiChipStyles;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiChipStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-chip"
      },
      styles: ["tui-chip,[tuiChip]{--t-gap: .125rem;--t-margin: -.125rem;--t-icon-size: 1rem;--t-padding: 0 .625rem;--t-size: var(--tui-height-s);-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font:inherit;line-height:inherit;text-decoration:none;position:relative;display:inline-flex;align-items:center;flex-shrink:0;box-sizing:border-box;white-space:nowrap;overflow:hidden;vertical-align:middle;max-inline-size:100%;gap:calc(var(--t-gap, 0rem) - 2 * var(--t-margin, 0rem));font:var(--tui-font-text-s);border-radius:var(--tui-radius-m);padding:var(--t-padding);block-size:var(--t-size);inline-size:-webkit-fit-content;inline-size:-moz-fit-content;inline-size:fit-content;isolation:isolate}tui-chip>img,[tuiChip]>img,tui-chip>tui-svg,[tuiChip]>tui-svg,tui-chip>tui-icon,[tuiChip]>tui-icon,tui-chip>tui-avatar,[tuiChip]>tui-avatar,tui-chip>tui-badge,[tuiChip]>tui-badge,tui-chip>[tuiBadge],[tuiChip]>[tuiBadge],tui-chip>[tuiRadio],[tuiChip]>[tuiRadio],tui-chip>[tuiSwitch],[tuiChip]>[tuiSwitch],tui-chip>[tuiCheckbox],[tuiChip]>[tuiCheckbox],tui-chip[tuiIcons]:before,[tuiChip][tuiIcons]:before,tui-chip[tuiIcons]:after,[tuiChip][tuiIcons]:after{margin:var(--t-margin)}tui-chip:matches(a,button,select,textarea,input,label,.tui-interactive):not(:disabled),[tuiChip]:matches(a,button,select,textarea,input,label,.tui-interactive):not(:disabled){cursor:pointer}tui-chip:is(a,button,select,textarea,input,label,.tui-interactive):not(:disabled),[tuiChip]:is(a,button,select,textarea,input,label,.tui-interactive):not(:disabled){cursor:pointer}tui-chip>tui-icon,[tuiChip]>tui-icon,tui-chip[tuiIcons]:before,[tuiChip][tuiIcons]:before,tui-chip[tuiIcons]:after,[tuiChip][tuiIcons]:after{font-size:var(--t-icon-size)!important}tui-chip>[tuiIconButton],[tuiChip]>[tuiIconButton]{margin:-.375rem}tui-chip[data-size=xxs],[tuiChip][data-size=xxs]{--t-gap: 0rem;--t-padding: 0 .25rem;--t-size: 1rem;--t-icon-size: .75rem;font:var(--tui-font-text-xs);border-radius:var(--tui-radius-xs)}tui-chip[data-size=xxs]>[tuiIconButton],[tuiChip][data-size=xxs]>[tuiIconButton]{margin:-.5rem;transform:scale(.75)}tui-chip[data-size=xs],[tuiChip][data-size=xs]{--t-padding: 0 .375rem;--t-size: var(--tui-height-xs);border-radius:var(--tui-radius-xs)}tui-chip[data-size=xs]>[tuiIconButton],[tuiChip][data-size=xs]>[tuiIconButton]{margin:-.375rem}tui-chip[data-size=m],[tuiChip][data-size=m]{--t-margin: -.375rem;--t-icon-size: 1.5rem;--t-padding: 0 1rem;--t-size: var(--tui-height-m);font:var(--tui-font-text-m)}tui-chip[data-size=m]>[tuiIconButton],[tuiChip][data-size=m]>[tuiIconButton]{margin:-.75rem}tui-chip>img,[tuiChip]>img,tui-chip tui-avatar,[tuiChip] tui-avatar{inline-size:1.5rem;margin-inline-start:-.375rem}tui-chip>[tuiFade]:first-of-type,[tuiChip]>[tuiFade]:first-of-type{flex:1 0 30%;max-inline-size:-webkit-fit-content;max-inline-size:-moz-fit-content;max-inline-size:fit-content}tui-chip>[tuiFade]:last-of-type,[tuiChip]>[tuiFade]:last-of-type{flex:0 1 auto}tui-chip>input[tuiChip],[tuiChip]>input[tuiChip]{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;margin:0}tui-chip>input[tuiChip][type=checkbox],[tuiChip]>input[tuiChip][type=checkbox],tui-chip>input[tuiChip][type=radio],[tuiChip]>input[tuiChip][type=radio]{z-index:-1}tui-chip[tuiAppearance][data-appearance=error],[tuiChip][tuiAppearance][data-appearance=error],tui-chip[tuiAppearance][data-appearance=success],[tuiChip][tuiAppearance][data-appearance=success],tui-chip[tuiAppearance][data-appearance=negative],[tuiChip][tuiAppearance][data-appearance=negative],tui-chip[tuiAppearance][data-appearance=positive],[tuiChip][tuiAppearance][data-appearance=positive],tui-chip[tuiAppearance][data-appearance=warning],[tuiChip][tuiAppearance][data-appearance=warning],tui-chip[tuiAppearance][data-appearance=info],[tuiChip][tuiAppearance][data-appearance=info],tui-chip[tuiAppearance][data-appearance=neutral],[tuiChip][tuiAppearance][data-appearance=neutral]{color:var(--tui-text-primary)}input[tuiChip]:matches(a,button,select,textarea,input,label,.tui-interactive):not(:disabled){cursor:text}input[tuiChip]:is(a,button,select,textarea,input,label,.tui-interactive):not(:disabled){cursor:text}\n"]
    }]
  }], null, null);
})();
var _TuiChip = class _TuiChip {
  constructor() {
    this.options = inject(TUI_CHIP_OPTIONS);
    this.nothing = tuiWithStyles(TuiChipStyles);
    this.size = this.options.size;
  }
};
_TuiChip.ɵfac = function TuiChip_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiChip)();
};
_TuiChip.ɵdir = ɵɵdefineDirective({
  type: _TuiChip,
  selectors: [["tui-chip"], ["", "tuiChip", ""]],
  hostVars: 1,
  hostBindings: function TuiChip_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("data-size", ctx.size);
    }
  },
  inputs: {
    size: "size"
  },
  features: [ɵɵProvidersFeature([tuiAppearanceOptionsProvider(TUI_CHIP_OPTIONS), tuiSwitchOptionsProvider({
    size: "s"
  }), tuiCheckboxOptionsProvider({
    size: "s"
  }), tuiAvatarOptionsProvider({
    size: "xs"
  }), tuiButtonOptionsProvider({
    size: "xs",
    appearance: "icon"
  })]), ɵɵHostDirectivesFeature([TuiWithAppearance, TuiWithIcons])]
});
var TuiChip = _TuiChip;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiChip, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "tui-chip,[tuiChip]",
      providers: [tuiAppearanceOptionsProvider(TUI_CHIP_OPTIONS), tuiSwitchOptionsProvider({
        size: "s"
      }), tuiCheckboxOptionsProvider({
        size: "s"
      }), tuiAvatarOptionsProvider({
        size: "xs"
      }), tuiButtonOptionsProvider({
        size: "xs",
        appearance: "icon"
      })],
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

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-progress.mjs
var _c04 = ["tuiProgressBar", ""];
var _c12 = ["tuiProgressLabel", ""];
var _c2 = [[["progress"]], [["tui-progress-circle"]], "*"];
var _c3 = ["progress", "tui-progress-circle", "*"];
var _TuiProgressFixedGradientStyles = class _TuiProgressFixedGradientStyles {
};
_TuiProgressFixedGradientStyles.ɵfac = function TuiProgressFixedGradientStyles_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiProgressFixedGradientStyles)();
};
_TuiProgressFixedGradientStyles.ɵcmp = ɵɵdefineComponent({
  type: _TuiProgressFixedGradientStyles,
  selectors: [["ng-component"]],
  hostAttrs: [1, "tui-fixed-gradient"],
  decls: 0,
  vars: 0,
  template: function TuiProgressFixedGradientStyles_Template(rf, ctx) {
  },
  styles: ["[tuiProgressFixedGradient]::-moz-progress-bar{inline-size:100%!important;clip-path:inset(0 calc(100% - var(--tui-progress-percent)) 0 0 round var(--tui-radius-m));-moz-transition:clip-path var(--tui-duration) linear;transition:clip-path var(--tui-duration) linear;margin-inline-end:calc(-100% + var(--tui-progress-percent))}[tuiProgressFixedGradient]::-webkit-progress-value{inline-size:100%!important;clip-path:inset(0 calc(100% - var(--tui-progress-percent)) 0 0 round var(--tui-radius-m));-webkit-transition:clip-path var(--tui-duration) linear;transition:clip-path var(--tui-duration) linear}\n"],
  encapsulation: 2,
  changeDetection: 0
});
var TuiProgressFixedGradientStyles = _TuiProgressFixedGradientStyles;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiProgressFixedGradientStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-fixed-gradient"
      },
      styles: ["[tuiProgressFixedGradient]::-moz-progress-bar{inline-size:100%!important;clip-path:inset(0 calc(100% - var(--tui-progress-percent)) 0 0 round var(--tui-radius-m));-moz-transition:clip-path var(--tui-duration) linear;transition:clip-path var(--tui-duration) linear;margin-inline-end:calc(-100% + var(--tui-progress-percent))}[tuiProgressFixedGradient]::-webkit-progress-value{inline-size:100%!important;clip-path:inset(0 calc(100% - var(--tui-progress-percent)) 0 0 round var(--tui-radius-m));-webkit-transition:clip-path var(--tui-duration) linear;transition:clip-path var(--tui-duration) linear}\n"]
    }]
  }], null, null);
})();
var _TuiProgressFixedGradientDirective = class _TuiProgressFixedGradientDirective {
  constructor() {
    this.nativeProgress = tuiInjectElement();
    this.nothing = tuiWithStyles(TuiProgressFixedGradientStyles);
  }
  get progressPercent() {
    const {
      value
    } = this.nativeProgress;
    const max = this.nativeProgress.max ?? 1;
    return Math.min(value / max * 100, 100);
  }
};
_TuiProgressFixedGradientDirective.ɵfac = function TuiProgressFixedGradientDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiProgressFixedGradientDirective)();
};
_TuiProgressFixedGradientDirective.ɵdir = ɵɵdefineDirective({
  type: _TuiProgressFixedGradientDirective,
  selectors: [["progress", "tuiProgressBar", "", "tuiProgressFixedGradient", ""]],
  hostVars: 2,
  hostBindings: function TuiProgressFixedGradientDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵstyleProp("--tui-progress-percent", ctx.progressPercent, "%");
    }
  }
});
var TuiProgressFixedGradientDirective = _TuiProgressFixedGradientDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiProgressFixedGradientDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "progress[tuiProgressBar][tuiProgressFixedGradient]",
      host: {
        "[style.--tui-progress-percent.%]": "progressPercent"
      }
    }]
  }], null, null);
})();
var TUI_PROGRESS_DEFAULT_OPTIONS = {
  color: null,
  size: "m"
};
var TUI_PROGRESS_OPTIONS = new InjectionToken(ngDevMode ? "TUI_PROGRESS_OPTIONS" : "", {
  factory: () => TUI_PROGRESS_DEFAULT_OPTIONS
});
function tuiProgressOptionsProvider(options) {
  return tuiProvideOptions(TUI_PROGRESS_OPTIONS, options, TUI_PROGRESS_DEFAULT_OPTIONS);
}
var _TuiProgressBar = class _TuiProgressBar {
  constructor() {
    this.options = inject(TUI_PROGRESS_OPTIONS);
    this.color = this.options.color;
    this.size = this.options.size;
  }
};
_TuiProgressBar.ɵfac = function TuiProgressBar_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiProgressBar)();
};
_TuiProgressBar.ɵcmp = ɵɵdefineComponent({
  type: _TuiProgressBar,
  selectors: [["progress", "tuiProgressBar", ""]],
  hostVars: 3,
  hostBindings: function TuiProgressBar_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("data-size", ctx.size);
      ɵɵstyleProp("--tui-progress-color", ctx.color);
    }
  },
  inputs: {
    color: "color",
    size: "size"
  },
  attrs: _c04,
  decls: 0,
  vars: 0,
  template: function TuiProgressBar_Template(rf, ctx) {
  },
  styles: ["@keyframes tuiIndeterminateAnimation{50%{background-position:left}}[tuiProgressBar]{-webkit-appearance:none;appearance:none;border:none;--t-height: .75rem;display:block;inline-size:100%;block-size:var(--t-height);color:var(--tui-background-accent-1);background:var(--tui-background-neutral-2);clip-path:inset(0 .5px round var(--tui-radius-m));overflow:hidden;border-radius:1rem;flex-shrink:0}[tuiProgressBar]::-webkit-progress-value{-webkit-transition:inline-size var(--tui-duration) linear;transition:inline-size var(--tui-duration) linear}[tuiProgressBar]::-webkit-progress-value{background:var(--tui-progress-color, currentColor);border-radius:inherit}[tuiProgressBar]::-moz-progress-bar{background:var(--tui-progress-color, currentColor);border-radius:inherit}[tuiProgressBar][data-size=xxs]{--t-height: .125rem}[tuiProgressBar][data-size=xs]{--t-height: .25rem}[tuiProgressBar][data-size=s]{--t-height: .5rem}[tuiProgressBar][data-size=l]{--t-height: 1rem}[tuiProgressBar][data-size=xl]{--t-height: 1.25rem}[tuiProgressBar][data-size=xxl]{--t-height: 1.5rem}[tuiProgressBar]:indeterminate{background:linear-gradient(to right,var(--tui-background-neutral-2) 0 45%,var(--tui-progress-color, currentColor) 45% 55%,var(--tui-background-neutral-2) 55% 100%) right;background-size:225%;animation:tuiIndeterminateAnimation 3s infinite ease-in-out}[tuiProgressBar]:indeterminate::-webkit-progress-value{background:transparent}[tuiProgressBar]:indeterminate::-moz-progress-bar{background:transparent}[tuiProgressBar]::-webkit-progress-inner-element{border-radius:inherit}[tuiProgressBar]::-webkit-progress-bar{background:transparent;border-radius:inherit}label[tuiProgressLabel] [tuiProgressBar]:not(:first-child){position:absolute;top:0;left:0;inline-size:100%;block-size:100%;background:transparent}\n"],
  encapsulation: 2,
  changeDetection: 0
});
var TuiProgressBar = _TuiProgressBar;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiProgressBar, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "progress[tuiProgressBar]",
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[style.--tui-progress-color]": "color",
        "[attr.data-size]": "size"
      },
      styles: ["@keyframes tuiIndeterminateAnimation{50%{background-position:left}}[tuiProgressBar]{-webkit-appearance:none;appearance:none;border:none;--t-height: .75rem;display:block;inline-size:100%;block-size:var(--t-height);color:var(--tui-background-accent-1);background:var(--tui-background-neutral-2);clip-path:inset(0 .5px round var(--tui-radius-m));overflow:hidden;border-radius:1rem;flex-shrink:0}[tuiProgressBar]::-webkit-progress-value{-webkit-transition:inline-size var(--tui-duration) linear;transition:inline-size var(--tui-duration) linear}[tuiProgressBar]::-webkit-progress-value{background:var(--tui-progress-color, currentColor);border-radius:inherit}[tuiProgressBar]::-moz-progress-bar{background:var(--tui-progress-color, currentColor);border-radius:inherit}[tuiProgressBar][data-size=xxs]{--t-height: .125rem}[tuiProgressBar][data-size=xs]{--t-height: .25rem}[tuiProgressBar][data-size=s]{--t-height: .5rem}[tuiProgressBar][data-size=l]{--t-height: 1rem}[tuiProgressBar][data-size=xl]{--t-height: 1.25rem}[tuiProgressBar][data-size=xxl]{--t-height: 1.5rem}[tuiProgressBar]:indeterminate{background:linear-gradient(to right,var(--tui-background-neutral-2) 0 45%,var(--tui-progress-color, currentColor) 45% 55%,var(--tui-background-neutral-2) 55% 100%) right;background-size:225%;animation:tuiIndeterminateAnimation 3s infinite ease-in-out}[tuiProgressBar]:indeterminate::-webkit-progress-value{background:transparent}[tuiProgressBar]:indeterminate::-moz-progress-bar{background:transparent}[tuiProgressBar]::-webkit-progress-inner-element{border-radius:inherit}[tuiProgressBar]::-webkit-progress-bar{background:transparent;border-radius:inherit}label[tuiProgressLabel] [tuiProgressBar]:not(:first-child){position:absolute;top:0;left:0;inline-size:100%;block-size:100%;background:transparent}\n"]
    }]
  }], null, {
    color: [{
      type: Input
    }],
    size: [{
      type: Input
    }]
  });
})();
var _TuiProgressColorSegments = class _TuiProgressColorSegments {
  constructor() {
    this.colors$ = new BehaviorSubject([]);
    this.el = tuiInjectElement();
    this.color = toSignal(combineLatest([this.colors$, inject(ResizeObserverService, {
      self: true
    }).pipe(map(() => this.el.offsetWidth), distinctUntilChanged())]).pipe(map(([colors, width]) => {
      const segmentWidth = Math.ceil(width / colors.length);
      const colorsString = colors.reduce((acc, color, i) => `${acc}, ${color} ${i * segmentWidth}px ${(i + 1) * segmentWidth}px`, "");
      return `linear-gradient(to right ${colorsString})`;
    }), tuiZonefull(), tuiWatch()));
  }
  set colors(colors) {
    this.colors$.next(colors);
  }
};
_TuiProgressColorSegments.ɵfac = function TuiProgressColorSegments_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiProgressColorSegments)();
};
_TuiProgressColorSegments.ɵdir = ɵɵdefineDirective({
  type: _TuiProgressColorSegments,
  selectors: [["progress", "tuiProgressBar", "", "tuiProgressColorSegments", ""]],
  hostVars: 2,
  hostBindings: function TuiProgressColorSegments_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵstyleProp("--tui-progress-color", ctx.color());
    }
  },
  inputs: {
    colors: [0, "tuiProgressColorSegments", "colors"]
  },
  features: [ɵɵProvidersFeature([ResizeObserverService])]
});
var TuiProgressColorSegments = _TuiProgressColorSegments;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiProgressColorSegments, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "progress[tuiProgressBar][tuiProgressColorSegments]",
      providers: [ResizeObserverService],
      host: {
        "[style.--tui-progress-color]": "color()"
      }
    }]
  }], null, {
    colors: [{
      type: Input,
      args: ["tuiProgressColorSegments"]
    }]
  });
})();
var _TuiProgressCircle = class _TuiProgressCircle {
  constructor() {
    this.options = inject(TUI_PROGRESS_OPTIONS);
    this.animationDelay = toSignal(of(true).pipe(delay(0)));
    this.value = 0;
    this.max = 1;
    this.color = this.options.color;
    this.size = this.options.size;
    this.arc = false;
  }
  get progressRatio() {
    const ratio = this.value / this.max;
    return Number.isFinite(ratio) ? ratio : 0;
  }
};
_TuiProgressCircle.ɵfac = function TuiProgressCircle_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiProgressCircle)();
};
_TuiProgressCircle.ɵcmp = ɵɵdefineComponent({
  type: _TuiProgressCircle,
  selectors: [["tui-progress-circle"]],
  hostVars: 7,
  hostBindings: function TuiProgressCircle_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("data-size", ctx.size);
      ɵɵstyleProp("--tui-progress-color", ctx.color)("--t-progress-ratio", ctx.progressRatio);
      ɵɵclassProp("_arc", ctx.arc);
    }
  },
  inputs: {
    value: "value",
    max: "max",
    color: "color",
    size: "size",
    arc: [2, "arc", "arc", coerceBooleanProperty]
  },
  decls: 4,
  vars: 4,
  consts: [[1, "t-hidden-progress", 3, "max", "value"], ["aria-hidden", "true", "height", "100%", "width", "100%", 1, "t-svg"], ["cx", "50%", "cy", "50%", 1, "t-track"], ["cx", "50%", "cy", "50%", 1, "t-progress"]],
  template: function TuiProgressCircle_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵdomElement(0, "progress", 0);
      ɵɵnamespaceSVG();
      ɵɵdomElementStart(1, "svg", 1);
      ɵɵdomElement(2, "circle", 2)(3, "circle", 3);
      ɵɵdomElementEnd();
    }
    if (rf & 2) {
      ɵɵdomProperty("max", ctx.max)("value", ctx.value);
      ɵɵadvance(3);
      ɵɵclassProp("t-progress_filled", ctx.animationDelay());
    }
  },
  styles: ["[_nghost-%COMP%]{--t-stroke-width: var(--tui-thickness, .375em);position:relative;display:block;color:var(--tui-background-accent-1);transform:rotate(-90deg);transform-origin:center;font-size:1rem;inline-size:var(--t-diameter);min-inline-size:var(--t-diameter);block-size:var(--t-diameter);border-radius:100%;-webkit-mask:radial-gradient(closest-side,transparent calc(100% - var(--t-stroke-width)),#000 calc(100% - var(--t-stroke-width) + .5px));mask:radial-gradient(closest-side,transparent calc(100% - var(--t-stroke-width)),#000 calc(100% - var(--t-stroke-width) + .5px))}._arc[_nghost-%COMP%]{transform:rotate(135deg)}[data-size=xxs][_nghost-%COMP%]{--t-diameter: 2em}[data-size=xs][_nghost-%COMP%]{--t-diameter: 2.5em}[data-size=s][_nghost-%COMP%]{--t-diameter: 3.5em}[data-size=m][_nghost-%COMP%]{--t-diameter: 4em}[data-size=l][_nghost-%COMP%]{--t-diameter: 5em}[data-size=xl][_nghost-%COMP%]{--t-diameter: 6em}[data-size=xxl][_nghost-%COMP%]{--t-diameter: 8em}.t-track[_ngcontent-%COMP%], .t-progress[_ngcontent-%COMP%]{fill:transparent;stroke-linecap:round;stroke-width:var(--t-stroke-width);r:calc((var(--t-diameter) - var(--t-stroke-width)) / 2)}.t-track[_ngcontent-%COMP%]{stroke:var(--tui-background-neutral-1)}._arc[_nghost-%COMP%]   .t-track[_ngcontent-%COMP%]{stroke-dasharray:calc(.75 * calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-stroke-width)) / 2))) calc(.25 * calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-stroke-width)) / 2)))}.t-progress[_ngcontent-%COMP%]{stroke:var(--tui-progress-color, currentColor);stroke-dasharray:calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-stroke-width)) / 2));stroke-dashoffset:calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-stroke-width)) / 2))}.t-progress_filled[_ngcontent-%COMP%]{transition-property:stroke-dashoffset,stroke-dasharray;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;transition-timing-function:linear;stroke-dashoffset:calc(calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-stroke-width)) / 2)) - var(--t-progress-ratio) * calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-stroke-width)) / 2)))}._arc[_nghost-%COMP%]   .t-progress[_ngcontent-%COMP%]{stroke-dashoffset:.1px;stroke-dasharray:calc(.75 * var(--t-progress-ratio) * calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-stroke-width)) / 2))) calc(calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-stroke-width)) / 2)))}.t-hidden-progress[_ngcontent-%COMP%]{position:absolute;clip:rect(1px,1px,1px,1px);clip-path:inset(50%);block-size:1px;inline-size:1px;margin:-1px;overflow:hidden;padding:0}.t-svg[_ngcontent-%COMP%]{overflow:unset}"],
  changeDetection: 0
});
var TuiProgressCircle = _TuiProgressCircle;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiProgressCircle, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-progress-circle",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[attr.data-size]": "size",
        "[style.--tui-progress-color]": "color",
        "[style.--t-progress-ratio]": "progressRatio",
        "[class._arc]": "arc"
      },
      template: '<progress\n    class="t-hidden-progress"\n    [max]="max"\n    [value]="value"\n></progress>\n\n<svg\n    aria-hidden="true"\n    height="100%"\n    width="100%"\n    class="t-svg"\n>\n    <circle\n        cx="50%"\n        cy="50%"\n        class="t-track"\n    />\n\n    <circle\n        cx="50%"\n        cy="50%"\n        class="t-progress"\n        [class.t-progress_filled]="animationDelay()"\n    />\n</svg>\n',
      styles: [":host{--t-stroke-width: var(--tui-thickness, .375em);position:relative;display:block;color:var(--tui-background-accent-1);transform:rotate(-90deg);transform-origin:center;font-size:1rem;inline-size:var(--t-diameter);min-inline-size:var(--t-diameter);block-size:var(--t-diameter);border-radius:100%;-webkit-mask:radial-gradient(closest-side,transparent calc(100% - var(--t-stroke-width)),#000 calc(100% - var(--t-stroke-width) + .5px));mask:radial-gradient(closest-side,transparent calc(100% - var(--t-stroke-width)),#000 calc(100% - var(--t-stroke-width) + .5px))}:host._arc{transform:rotate(135deg)}:host[data-size=xxs]{--t-diameter: 2em}:host[data-size=xs]{--t-diameter: 2.5em}:host[data-size=s]{--t-diameter: 3.5em}:host[data-size=m]{--t-diameter: 4em}:host[data-size=l]{--t-diameter: 5em}:host[data-size=xl]{--t-diameter: 6em}:host[data-size=xxl]{--t-diameter: 8em}.t-track,.t-progress{fill:transparent;stroke-linecap:round;stroke-width:var(--t-stroke-width);r:calc((var(--t-diameter) - var(--t-stroke-width)) / 2)}.t-track{stroke:var(--tui-background-neutral-1)}:host._arc .t-track{stroke-dasharray:calc(.75 * calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-stroke-width)) / 2))) calc(.25 * calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-stroke-width)) / 2)))}.t-progress{stroke:var(--tui-progress-color, currentColor);stroke-dasharray:calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-stroke-width)) / 2));stroke-dashoffset:calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-stroke-width)) / 2))}.t-progress_filled{transition-property:stroke-dashoffset,stroke-dasharray;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;transition-timing-function:linear;stroke-dashoffset:calc(calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-stroke-width)) / 2)) - var(--t-progress-ratio) * calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-stroke-width)) / 2)))}:host._arc .t-progress{stroke-dashoffset:.1px;stroke-dasharray:calc(.75 * var(--t-progress-ratio) * calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-stroke-width)) / 2))) calc(calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-stroke-width)) / 2)))}.t-hidden-progress{position:absolute;clip:rect(1px,1px,1px,1px);clip-path:inset(50%);block-size:1px;inline-size:1px;margin:-1px;overflow:hidden;padding:0}.t-svg{overflow:unset}\n"]
    }]
  }], null, {
    value: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    color: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    arc: [{
      type: Input,
      args: [{
        transform: coerceBooleanProperty
      }]
    }]
  });
})();
var _TuiProgressLabel = class _TuiProgressLabel {
};
_TuiProgressLabel.ɵfac = function TuiProgressLabel_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiProgressLabel)();
};
_TuiProgressLabel.ɵcmp = ɵɵdefineComponent({
  type: _TuiProgressLabel,
  selectors: [["label", "tuiProgressLabel", ""]],
  attrs: _c12,
  ngContentSelectors: _c3,
  decls: 4,
  vars: 0,
  consts: [[1, "t-label"]],
  template: function TuiProgressLabel_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef(_c2);
      ɵɵprojection(0);
      ɵɵprojection(1, 1);
      ɵɵdomElementStart(2, "span", 0);
      ɵɵprojection(3, 2);
      ɵɵdomElementEnd();
    }
  },
  styles: ["[_nghost-%COMP%]{position:relative;display:inline-block;color:var(--tui-text-primary)}.t-label[_ngcontent-%COMP%]{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;display:flex;font:var(--tui-font-text-s);flex-direction:column;justify-content:center;align-items:center}"],
  changeDetection: 0
});
var TuiProgressLabel = _TuiProgressLabel;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiProgressLabel, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "label[tuiProgressLabel]",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<ng-content select="progress" />\n<ng-content select="tui-progress-circle" />\n<span class="t-label">\n    <ng-content />\n</span>\n',
      styles: [":host{position:relative;display:inline-block;color:var(--tui-text-primary)}.t-label{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;display:flex;font:var(--tui-font-text-s);flex-direction:column;justify-content:center;align-items:center}\n"]
    }]
  }], null, null);
})();
var _TuiProgressSegmentedStyles = class _TuiProgressSegmentedStyles {
};
_TuiProgressSegmentedStyles.ɵfac = function TuiProgressSegmentedStyles_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiProgressSegmentedStyles)();
};
_TuiProgressSegmentedStyles.ɵcmp = ɵɵdefineComponent({
  type: _TuiProgressSegmentedStyles,
  selectors: [["ng-component"]],
  hostAttrs: [1, "tui-progress-segmented"],
  decls: 0,
  vars: 0,
  template: function TuiProgressSegmentedStyles_Template(rf, ctx) {
  },
  styles: ["[tuiProgressBar]._segmented{--tui-segment-gap: .5rem;-webkit-mask-image:radial-gradient(circle closest-side at calc(var(--t-height) / 2) center,#999 0 99%,transparent calc(99% + .6px) 100%),radial-gradient(circle closest-side at calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)) center,#999 0 99%,transparent calc(99% + .6px) 100%),linear-gradient(to right,transparent 0 calc(var(--t-height) / 2),#999 calc(var(--t-height) / 2) calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)),transparent calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)));mask-image:radial-gradient(circle closest-side at calc(var(--t-height) / 2) center,#999 0 99%,transparent calc(99% + .6px) 100%),radial-gradient(circle closest-side at calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)) center,#999 0 99%,transparent calc(99% + .6px) 100%),linear-gradient(to right,transparent 0 calc(var(--t-height) / 2),#999 calc(var(--t-height) / 2) calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)),transparent calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)));-webkit-mask-size:calc(100% * var(--t-segment-width) + var(--tui-segment-gap) * var(--t-segment-width));mask-size:calc(100% * var(--t-segment-width) + var(--tui-segment-gap) * var(--t-segment-width))}\n"],
  encapsulation: 2,
  changeDetection: 0
});
var TuiProgressSegmentedStyles = _TuiProgressSegmentedStyles;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiProgressSegmentedStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-progress-segmented"
      },
      styles: ["[tuiProgressBar]._segmented{--tui-segment-gap: .5rem;-webkit-mask-image:radial-gradient(circle closest-side at calc(var(--t-height) / 2) center,#999 0 99%,transparent calc(99% + .6px) 100%),radial-gradient(circle closest-side at calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)) center,#999 0 99%,transparent calc(99% + .6px) 100%),linear-gradient(to right,transparent 0 calc(var(--t-height) / 2),#999 calc(var(--t-height) / 2) calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)),transparent calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)));mask-image:radial-gradient(circle closest-side at calc(var(--t-height) / 2) center,#999 0 99%,transparent calc(99% + .6px) 100%),radial-gradient(circle closest-side at calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)) center,#999 0 99%,transparent calc(99% + .6px) 100%),linear-gradient(to right,transparent 0 calc(var(--t-height) / 2),#999 calc(var(--t-height) / 2) calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)),transparent calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)));-webkit-mask-size:calc(100% * var(--t-segment-width) + var(--tui-segment-gap) * var(--t-segment-width));mask-size:calc(100% * var(--t-segment-width) + var(--tui-segment-gap) * var(--t-segment-width))}\n"]
    }]
  }], null, null);
})();
var _TuiProgressSegmented = class _TuiProgressSegmented {
  constructor() {
    this.nothing = tuiWithStyles(TuiProgressSegmentedStyles);
    this.segments = 1;
  }
};
_TuiProgressSegmented.ɵfac = function TuiProgressSegmented_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiProgressSegmented)();
};
_TuiProgressSegmented.ɵdir = ɵɵdefineDirective({
  type: _TuiProgressSegmented,
  selectors: [["", "tuiProgressBar", "", "segments", ""]],
  hostAttrs: [1, "_segmented"],
  hostVars: 2,
  hostBindings: function TuiProgressSegmented_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵstyleProp("--t-segment-width", 1 / ctx.segments);
    }
  },
  inputs: {
    segments: "segments"
  }
});
var TuiProgressSegmented = _TuiProgressSegmented;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiProgressSegmented, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiProgressBar][segments]",
      host: {
        class: "_segmented",
        "[style.--t-segment-width]": "1 / segments"
      }
    }]
  }], null, {
    segments: [{
      type: Input
    }]
  });
})();
var TuiProgress = [TuiProgressBar, TuiProgressCircle, TuiProgressColorSegments, TuiProgressFixedGradientDirective, TuiProgressLabel, TuiProgressSegmented];

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-directives-present.mjs
var _TuiPresent = class _TuiPresent {
  constructor() {
    this.visibility$ = new BehaviorSubject(false);
    this.tuiPresentChange = this.visibility$.pipe(distinctUntilChanged(), skip(1));
  }
  ngOnDestroy() {
    this.visibility$.next(false);
  }
  onAnimation(visibility) {
    this.visibility$.next(visibility);
  }
};
_TuiPresent.ɵfac = function TuiPresent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiPresent)();
};
_TuiPresent.ɵdir = ɵɵdefineDirective({
  type: _TuiPresent,
  selectors: [["", "tuiPresentChange", ""]],
  hostVars: 2,
  hostBindings: function TuiPresent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("animationcancel.self", function TuiPresent_animationcancel_self_HostBindingHandler() {
        return ctx.onAnimation(false);
      })("animationstart.self", function TuiPresent_animationstart_self_HostBindingHandler() {
        return ctx.onAnimation(true);
      });
    }
    if (rf & 2) {
      ɵɵstyleProp("animation", "tuiPresent 1s infinite");
    }
  },
  outputs: {
    tuiPresentChange: "tuiPresentChange"
  }
});
var TuiPresent = _TuiPresent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPresent, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiPresentChange]",
      host: {
        "[style.animation]": '"tuiPresent 1s infinite"',
        "(animationcancel.self)": "onAnimation(false)",
        "(animationstart.self)": "onAnimation(true)"
      }
    }]
  }], null, {
    tuiPresentChange: [{
      type: Output
    }]
  });
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-directives-chevron.mjs
var TUI_CHEVRON = new InjectionToken(ngDevMode ? "TUI_CHEVRON" : "", {
  factory: () => "@tui.chevron-down"
});
var _TuiChevronStyles = class _TuiChevronStyles {
};
_TuiChevronStyles.ɵfac = function TuiChevronStyles_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiChevronStyles)();
};
_TuiChevronStyles.ɵcmp = ɵɵdefineComponent({
  type: _TuiChevronStyles,
  selectors: [["ng-component"]],
  hostAttrs: [1, "tui-chevron"],
  decls: 0,
  vars: 0,
  template: function TuiChevronStyles_Template(rf, ctx) {
  },
  styles: ['[tuiChevron][tuiIcons]:after,tui-icon[tuiChevron]:after{transition-property:transform,color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;cursor:pointer}tui-textfield[tuiChevron][tuiIcons]:after{font-size:1rem}tui-textfield[data-size=s][tuiChevron][tuiIcons]:after{margin-inline-end:calc(-.125rem - var(--t-padding))}tui-textfield[data-size=m][tuiChevron][tuiIcons]:after{margin-inline-end:calc(.125rem - var(--t-padding))}tui-textfield[data-size=l][tuiChevron][tuiIcons]:after{margin-inline-end:calc(.25rem - var(--t-padding))}[tuiChevron][tuiIcons]._chevron-rotated:after,tui-icon[tuiChevron]._chevron-rotated:after{transform:rotate(180deg)}[tuiChevron]:has(input[tuiAppearance]:read-only):after{cursor:default}tui-textfield[tuiChevron][style*="--t-icon-end:"][data-size=l]{--t-end: 1.875rem}tui-textfield[tuiChevron][style*="--t-icon-end:"][data-size=m]{--t-end: 1.5rem}\n'],
  encapsulation: 2,
  changeDetection: 0
});
var TuiChevronStyles = _TuiChevronStyles;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiChevronStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-chevron"
      },
      styles: ['[tuiChevron][tuiIcons]:after,tui-icon[tuiChevron]:after{transition-property:transform,color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;cursor:pointer}tui-textfield[tuiChevron][tuiIcons]:after{font-size:1rem}tui-textfield[data-size=s][tuiChevron][tuiIcons]:after{margin-inline-end:calc(-.125rem - var(--t-padding))}tui-textfield[data-size=m][tuiChevron][tuiIcons]:after{margin-inline-end:calc(.125rem - var(--t-padding))}tui-textfield[data-size=l][tuiChevron][tuiIcons]:after{margin-inline-end:calc(.25rem - var(--t-padding))}[tuiChevron][tuiIcons]._chevron-rotated:after,tui-icon[tuiChevron]._chevron-rotated:after{transform:rotate(180deg)}[tuiChevron]:has(input[tuiAppearance]:read-only):after{cursor:default}tui-textfield[tuiChevron][style*="--t-icon-end:"][data-size=l]{--t-end: 1.875rem}tui-textfield[tuiChevron][style*="--t-icon-end:"][data-size=m]{--t-end: 1.5rem}\n']
    }]
  }], null, null);
})();
var _TuiChevron = class _TuiChevron {
  constructor() {
    this.el = tuiInjectElement();
    this.dropdown = inject(TuiDropdownDirective, {
      optional: true
    });
    this.nothing = tuiWithStyles(TuiChevronStyles);
    this.toggle = effect(() => this.el.classList.toggle("_chevron-rotated", this.chevron() || this.chevron() === "" && !!this.dropdown?.ref()));
    this.chevron = signal("");
  }
  set tuiChevron(chevron) {
    this.chevron.set(chevron);
  }
};
_TuiChevron.ɵfac = function TuiChevron_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiChevron)();
};
_TuiChevron.ɵdir = ɵɵdefineDirective({
  type: _TuiChevron,
  selectors: [["", "tuiChevron", ""]],
  hostAttrs: ["tuiChevron", ""],
  inputs: {
    tuiChevron: "tuiChevron"
  },
  features: [ɵɵProvidersFeature([tuiProvide(TUI_ICON_END, TUI_CHEVRON)])]
});
var TuiChevron = _TuiChevron;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiChevron, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiChevron]",
      providers: [tuiProvide(TUI_ICON_END, TUI_CHEVRON)],
      host: {
        tuiChevron: ""
      }
    }]
  }], null, {
    tuiChevron: [{
      type: Input
    }]
  });
})();

// node_modules/@ng-web-apis/intersection-observer/fesm2022/ng-web-apis-intersection-observer.mjs
var SafeObserver = typeof IntersectionObserver !== "undefined" ? IntersectionObserver : class {
  root = null;
  rootMargin = "";
  thresholds = [];
  observe() {
  }
  unobserve() {
  }
  disconnect() {
  }
  takeRecords() {
    return [];
  }
};
var WA_INTERSECTION_ROOT = new InjectionToken("[WA_INTERSECTION_ROOT]");
var INTERSECTION_ROOT = WA_INTERSECTION_ROOT;
var WA_INTERSECTION_ROOT_MARGIN_DEFAULT = "0px 0px 0px 0px";
var INTERSECTION_ROOT_MARGIN_DEFAULT = WA_INTERSECTION_ROOT_MARGIN_DEFAULT;
var WA_INTERSECTION_ROOT_MARGIN = new InjectionToken("[WA_INTERSECTION_ROOT_MARGIN]", {
  providedIn: "root",
  factory: () => INTERSECTION_ROOT_MARGIN_DEFAULT
});
var INTERSECTION_ROOT_MARGIN = WA_INTERSECTION_ROOT_MARGIN;
function rootMarginFactory() {
  return inject(ElementRef).nativeElement.getAttribute("waIntersectionRootMargin") || INTERSECTION_ROOT_MARGIN_DEFAULT;
}
var WA_INTERSECTION_THRESHOLD_DEFAULT = 0;
var INTERSECTION_THRESHOLD_DEFAULT = WA_INTERSECTION_THRESHOLD_DEFAULT;
var WA_INTERSECTION_THRESHOLD = new InjectionToken("[WA_INTERSECTION_THRESHOLD]", {
  providedIn: "root",
  factory: () => INTERSECTION_THRESHOLD_DEFAULT
});
var INTERSECTION_THRESHOLD = WA_INTERSECTION_THRESHOLD;
function thresholdFactory() {
  return inject(ElementRef).nativeElement.getAttribute("waIntersectionThreshold")?.split(",").map(parseFloat) || INTERSECTION_THRESHOLD_DEFAULT;
}
var WaIntersectionObserverDirective = class _WaIntersectionObserverDirective extends SafeObserver {
  callbacks = /* @__PURE__ */ new Map();
  margin = "";
  threshold = "";
  constructor() {
    const root = inject(INTERSECTION_ROOT, {
      optional: true
    });
    super((entries) => {
      this.callbacks.forEach((callback, element) => {
        const filtered = entries.filter(({
          target
        }) => target === element);
        return filtered.length && callback(filtered, this);
      });
    }, {
      root: root?.nativeElement,
      rootMargin: rootMarginFactory(),
      threshold: thresholdFactory()
    });
  }
  observe(target, callback = () => {
  }) {
    super.observe(target);
    this.callbacks.set(target, callback);
  }
  unobserve(target) {
    super.unobserve(target);
    this.callbacks.delete(target);
  }
  ngOnDestroy() {
    this.disconnect();
  }
  static ɵfac = function WaIntersectionObserverDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WaIntersectionObserverDirective)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _WaIntersectionObserverDirective,
    selectors: [["", "waIntersectionObserver", ""]],
    inputs: {
      margin: [0, "waIntersectionRootMargin", "margin"],
      threshold: [0, "waIntersectionThreshold", "threshold"]
    },
    exportAs: ["IntersectionObserver"],
    features: [ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WaIntersectionObserverDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[waIntersectionObserver]",
      inputs: ["margin: waIntersectionRootMargin", "threshold: waIntersectionThreshold"],
      exportAs: "IntersectionObserver"
    }]
  }], function() {
    return [];
  }, null);
})();
var IntersectionObserveeService = class _IntersectionObserveeService extends Observable {
  constructor() {
    const nativeElement = inject(ElementRef).nativeElement;
    const observer = inject(WaIntersectionObserverDirective);
    super((subscriber) => {
      observer.observe(nativeElement, (entries) => {
        subscriber.next(entries);
      });
      return () => {
        observer.unobserve(nativeElement);
      };
    });
    return this.pipe(share());
  }
  static ɵfac = function IntersectionObserveeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IntersectionObserveeService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _IntersectionObserveeService,
    factory: _IntersectionObserveeService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IntersectionObserveeService, [{
    type: Injectable
  }], function() {
    return [];
  }, null);
})();
var WaIntersectionObservee = class _WaIntersectionObservee {
  waIntersectionObservee = inject(IntersectionObserveeService);
  static ɵfac = function WaIntersectionObservee_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WaIntersectionObservee)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _WaIntersectionObservee,
    selectors: [["", "waIntersectionObservee", ""]],
    outputs: {
      waIntersectionObservee: "waIntersectionObservee"
    },
    features: [ɵɵProvidersFeature([IntersectionObserveeService])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WaIntersectionObservee, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[waIntersectionObservee]",
      outputs: ["waIntersectionObservee"],
      providers: [IntersectionObserveeService]
    }]
  }], null, null);
})();
var WaIntersectionRoot = class _WaIntersectionRoot {
  static ɵfac = function WaIntersectionRoot_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WaIntersectionRoot)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _WaIntersectionRoot,
    selectors: [["", "waIntersectionRoot", ""]],
    features: [ɵɵProvidersFeature([{
      provide: INTERSECTION_ROOT,
      useExisting: ElementRef
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WaIntersectionRoot, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[waIntersectionRoot]",
      providers: [{
        provide: INTERSECTION_ROOT,
        useExisting: ElementRef
      }]
    }]
  }], null, null);
})();
var WaIntersectionObserver = [WaIntersectionObserverDirective, WaIntersectionObservee, WaIntersectionRoot];
var IntersectionObserverModule = class _IntersectionObserverModule {
  static ɵfac = function IntersectionObserverModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IntersectionObserverModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _IntersectionObserverModule,
    imports: [WaIntersectionObserverDirective, WaIntersectionObservee, WaIntersectionRoot],
    exports: [WaIntersectionObserverDirective, WaIntersectionObservee, WaIntersectionRoot]
  });
  static ɵinj = ɵɵdefineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IntersectionObserverModule, [{
    type: NgModule,
    args: [{
      imports: [WaIntersectionObserverDirective, WaIntersectionObservee, WaIntersectionRoot],
      exports: [WaIntersectionObserverDirective, WaIntersectionObservee, WaIntersectionRoot]
    }]
  }], null, null);
})();
var IntersectionObserverService = class _IntersectionObserverService extends Observable {
  nativeElement = inject(ElementRef).nativeElement;
  rootMargin = inject(INTERSECTION_ROOT_MARGIN);
  threshold = inject(INTERSECTION_THRESHOLD);
  root = inject(INTERSECTION_ROOT, {
    optional: true
  })?.nativeElement ?? null;
  constructor() {
    super((subscriber) => {
      const observer = new SafeObserver((entries) => {
        subscriber.next(entries);
      }, {
        root: this.root,
        rootMargin: this.rootMargin,
        threshold: this.threshold
      });
      observer.observe(this.nativeElement);
      return () => {
        observer.disconnect();
      };
    });
  }
  static ɵfac = function IntersectionObserverService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IntersectionObserverService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _IntersectionObserverService,
    factory: _IntersectionObserverService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IntersectionObserverService, [{
    type: Injectable
  }], function() {
    return [];
  }, null);
})();
var WA_INTERSECTION_OBSERVER_SUPPORT = new InjectionToken("[WA_INTERSECTION_OBSERVER_SUPPORT]: [INTERSECTION_OBSERVER_SUPPORT]", {
  providedIn: "root",
  factory: () => !!inject(WA_WINDOW).IntersectionObserver
});

export {
  tuiTilesSwap,
  tuiTilesShift,
  TUI_TILES_REORDER,
  TuiTilesComponent,
  TuiTileService,
  TuiTile,
  TuiTileHandle,
  TuiTiles,
  WA_INTERSECTION_ROOT_MARGIN,
  WA_INTERSECTION_THRESHOLD,
  WaIntersectionObserverDirective,
  WaIntersectionObservee,
  WaIntersectionObserver,
  IntersectionObserverService,
  TuiFade,
  TUI_AVATAR_DEFAULT_OPTIONS,
  TUI_AVATAR_OPTIONS,
  tuiAvatarOptionsProvider,
  TuiAvatar,
  TuiAvatarLabeled,
  TuiAvatarOutline,
  TuiAvatarStack,
  TUI_SWITCH_DEFAULT_OPTIONS,
  TUI_SWITCH_OPTIONS,
  tuiSwitchOptionsProvider,
  TuiSwitch,
  TUI_CHIP_DEFAULT_OPTIONS,
  TUI_CHIP_OPTIONS,
  tuiChipOptionsProvider,
  TuiChip,
  TuiProgressFixedGradientDirective,
  TUI_PROGRESS_DEFAULT_OPTIONS,
  TUI_PROGRESS_OPTIONS,
  tuiProgressOptionsProvider,
  TuiProgressBar,
  TuiProgressColorSegments,
  TuiProgressCircle,
  TuiProgressLabel,
  TuiProgressSegmented,
  TuiProgress,
  TuiPresent,
  TUI_CHEVRON,
  TuiChevron
};
//# sourceMappingURL=chunk-BCOTN6P7.js.map
