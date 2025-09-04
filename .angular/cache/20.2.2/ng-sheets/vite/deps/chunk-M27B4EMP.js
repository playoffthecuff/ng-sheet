import {
  shouldCall
} from "./chunk-CGRAKRVX.js";
import {
  TuiScrollbar
} from "./chunk-ZX26QIOR.js";
import {
  PolymorpheusComponent,
  PolymorpheusOutlet,
  PolymorpheusTemplate,
  TuiActiveZone,
  TuiObscured,
  TuiPortalService,
  TuiPortals,
  tuiAsPortal,
  tuiIsEditingKey,
  tuiOverrideOptions
} from "./chunk-XLE6HMXC.js";
import {
  TUI_IS_TOUCH,
  TUI_IS_WEBKIT,
  TUI_RANGE,
  TUI_WINDOW_SIZE,
  TuiAnimated
} from "./chunk-HABJD475.js";
import {
  tuiGetClosestFocusable,
  tuiGetNativeFocused,
  tuiIsNativeFocusedIn,
  tuiIsNativeKeyboardFocusable
} from "./chunk-2JKV5ZCN.js";
import {
  coerceArray,
  tuiGetActualTarget,
  tuiInjectElement,
  tuiIsElement,
  tuiIsElementEditable,
  tuiIsHTMLElement,
  tuiIsTextNode,
  tuiIsTextfield,
  tuiPointToClientRect
} from "./chunk-JSMOXT4E.js";
import {
  TUI_DARK_MODE,
  TUI_DEFAULT_NUMBER_FORMAT,
  TUI_MEDIA,
  TUI_SELECTION_STREAM,
  TUI_VIEWPORT,
  tuiCloseWatcher,
  tuiIfMap,
  tuiTypedFromEvent,
  tuiWatch,
  tuiZoneOptimized,
  tuiZonefree,
  tuiZonefreeScheduler,
  tuiZonefull
} from "./chunk-VHLRK7UT.js";
import {
  WA_ANIMATION_FRAME,
  WA_WINDOW
} from "./chunk-5MMGTIYT.js";
import {
  CHAR_HYPHEN,
  CHAR_NO_BREAK_SPACE,
  CHAR_ZERO_WIDTH_SPACE,
  EMPTY_CLIENT_RECT,
  TUI_TRUE_HANDLER,
  svgNodeFilter,
  tuiClamp,
  tuiDirectiveBinding,
  tuiIsNumber,
  tuiIsString,
  tuiProvide,
  tuiProvideOptions,
  tuiPure,
  tuiPx,
  tuiRoundWith
} from "./chunk-XYVFFOET.js";
import {
  takeUntilDestroyed,
  toObservable
} from "./chunk-KSDZZ3AX.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  Directive,
  ElementRef,
  EventEmitter,
  Injectable,
  Input,
  LOCALE_ID,
  NgZone,
  Optional,
  Output,
  Self,
  SkipSelf,
  TemplateRef,
  ViewContainerRef,
  setClassMetadata,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdomElementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵresolveDocument,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-H2LFSO26.js";
import {
  DOCUMENT,
  DestroyRef,
  INJECTOR$1,
  InjectionToken,
  computed,
  inject,
  signal,
  ɵɵdefineInjectable
} from "./chunk-VNPPOK4A.js";
import {
  BehaviorSubject,
  Observable,
  Subject,
  __decorate,
  combineLatest,
  delay,
  distinctUntilChanged,
  filter,
  finalize,
  fromEvent,
  map,
  merge,
  of,
  share,
  shareReplay,
  startWith,
  switchMap,
  takeUntil,
  takeWhile,
  tap,
  throttleTime
} from "./chunk-WQ5CZGEH.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-classes.mjs
var TuiAccessor = class {
};
var TuiPositionAccessor = class extends TuiAccessor {
};
var TuiRectAccessor = class extends TuiAccessor {
};
function tuiProvideAccessor(provide, type, fallback) {
  return {
    provide,
    deps: [[new SkipSelf(), new Optional(), provide], fallback],
    useFactory: tuiFallbackAccessor(type)
  };
}
function tuiFallbackAccessor(type) {
  return (accessors, fallback) => accessors?.find?.((accessor) => accessor !== fallback && accessor.type === type) || fallback;
}
function tuiPositionAccessorFor(type, fallback) {
  return tuiProvideAccessor(TuiPositionAccessor, type, fallback);
}
function tuiRectAccessorFor(type, fallback) {
  return tuiProvideAccessor(TuiRectAccessor, type, fallback);
}
function tuiAsPositionAccessor(accessor) {
  return tuiProvide(TuiPositionAccessor, accessor, true);
}
function tuiAsRectAccessor(accessor) {
  return tuiProvide(TuiRectAccessor, accessor, true);
}
var TuiVehicle = class {
};
function tuiAsVehicle(vehicle) {
  return tuiProvide(TuiVehicle, vehicle, true);
}
var TuiDriver = class extends Observable {
};
function tuiAsDriver(driver) {
  return tuiProvide(TuiDriver, driver, true);
}
var _TuiDriverDirective = class _TuiDriverDirective {
  constructor() {
    this.destroyRef = inject(DestroyRef);
    this.drivers = inject(TuiDriver, {
      self: true,
      optional: true
    }) || [];
    this.vehicles = inject(TuiVehicle, {
      self: true,
      optional: true
    });
  }
  ngAfterViewInit() {
    const vehicle = this.vehicles?.find(({
      type
    }) => type === this.type);
    merge(...this.drivers.filter(({
      type
    }) => type === this.type)).pipe(distinctUntilChanged(), takeUntilDestroyed(this.destroyRef)).subscribe((value) => {
      vehicle?.toggle(value);
    });
  }
};
_TuiDriverDirective.ɵfac = function TuiDriverDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiDriverDirective)();
};
_TuiDriverDirective.ɵdir = ɵɵdefineDirective({
  type: _TuiDriverDirective,
  standalone: false
});
var TuiDriverDirective = _TuiDriverDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDriverDirective, [{
    type: Directive
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-services.mjs
var _TuiBreakpointService = class _TuiBreakpointService extends Observable {
  constructor() {
    super((subscriber) => this.stream$.subscribe(subscriber));
    this.media = inject(TUI_MEDIA);
    this.sorted = Object.values(this.media).sort((a, b) => a - b);
    this.invert = Object.keys(this.media).reduce((ret, key) => __spreadProps(__spreadValues({}, ret), {
      [this.media[key]]: key
    }), {});
    this.stream$ = inject(TUI_WINDOW_SIZE).pipe(map(({
      width
    }) => this.sorted.find((size) => size > width)), map((key) => this.invert[key || this.sorted[this.sorted.length - 1] || 0] ?? null), distinctUntilChanged(), tuiZoneOptimized(), shareReplay({
      bufferSize: 1,
      refCount: true
    }));
  }
};
_TuiBreakpointService.ɵfac = function TuiBreakpointService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiBreakpointService)();
};
_TuiBreakpointService.ɵprov = ɵɵdefineInjectable({
  token: _TuiBreakpointService,
  factory: _TuiBreakpointService.ɵfac,
  providedIn: "root"
});
var TuiBreakpointService = _TuiBreakpointService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiBreakpointService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [];
  }, null);
})();
var _TuiDarkThemeService = class _TuiDarkThemeService extends Observable {
  constructor() {
    const media = inject(WA_WINDOW).matchMedia("(prefers-color-scheme: dark)");
    const media$ = fromEvent(media, "change").pipe(startWith(null), map(() => media.matches), shareReplay({
      bufferSize: 1,
      refCount: true
    }));
    super((subscriber) => media$.subscribe(subscriber));
  }
};
_TuiDarkThemeService.ɵfac = function TuiDarkThemeService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiDarkThemeService)();
};
_TuiDarkThemeService.ɵprov = ɵɵdefineInjectable({
  token: _TuiDarkThemeService,
  factory: _TuiDarkThemeService.ɵfac,
  providedIn: "root"
});
var TuiDarkThemeService = _TuiDarkThemeService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDarkThemeService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [];
  }, null);
})();
var _TuiFormatDateService = class _TuiFormatDateService {
  constructor() {
    this.locale = inject(LOCALE_ID);
  }
  format(timestamp) {
    return of(new Date(timestamp).toLocaleTimeString(this.locale, {
      hour: "numeric",
      minute: "2-digit"
    }));
  }
};
_TuiFormatDateService.ɵfac = function TuiFormatDateService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiFormatDateService)();
};
_TuiFormatDateService.ɵprov = ɵɵdefineInjectable({
  token: _TuiFormatDateService,
  factory: _TuiFormatDateService.ɵfac,
  providedIn: "root"
});
var TuiFormatDateService = _TuiFormatDateService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFormatDateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _TuiPositionService = class _TuiPositionService extends Observable {
  constructor() {
    const animationFrame$ = inject(WA_ANIMATION_FRAME);
    const zone = inject(NgZone);
    super((subscriber) => animationFrame$.pipe(startWith(null), map(() => this.accessor.getPosition(this.el.getBoundingClientRect(), this.el)), tuiZonefree(zone), finalize(() => this.accessor.getPosition(EMPTY_CLIENT_RECT))).subscribe(subscriber));
    this.el = tuiInjectElement();
    this.accessor = inject(TuiPositionAccessor);
  }
};
_TuiPositionService.ɵfac = function TuiPositionService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiPositionService)();
};
_TuiPositionService.ɵprov = ɵɵdefineInjectable({
  token: _TuiPositionService,
  factory: _TuiPositionService.ɵfac
});
var TuiPositionService = _TuiPositionService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPositionService, [{
    type: Injectable
  }], function() {
    return [];
  }, null);
})();
var _TuiVisualViewportService = class _TuiVisualViewportService {
  constructor() {
    this.isWebkit = inject(TUI_IS_WEBKIT);
    this.win = inject(WA_WINDOW);
  }
  // https://bugs.webkit.org/show_bug.cgi?id=207089
  correct(point) {
    return this.isWebkit ? [point[0] + (this.win.visualViewport?.offsetTop ?? 0), point[1] + (this.win.visualViewport?.offsetLeft ?? 0)] : point;
  }
};
_TuiVisualViewportService.ɵfac = function TuiVisualViewportService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiVisualViewportService)();
};
_TuiVisualViewportService.ɵprov = ɵɵdefineInjectable({
  token: _TuiVisualViewportService,
  factory: _TuiVisualViewportService.ɵfac,
  providedIn: "root"
});
var TuiVisualViewportService = _TuiVisualViewportService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiVisualViewportService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-utils-dom.mjs
function tuiCheckFixedPosition(element) {
  return !!element && (isFixed(element) || tuiCheckFixedPosition(element.parentElement));
}
function isFixed(element) {
  return element.ownerDocument.defaultView?.getComputedStyle(element).getPropertyValue("position") === "fixed";
}
function tuiGetViewportHeight({ document, innerHeight }) {
  return Math.max(document.documentElement.clientHeight || 0, innerHeight || 0);
}
function tuiGetViewportWidth({ document, innerWidth }) {
  return Math.max(document.documentElement.clientWidth || 0, innerWidth || 0);
}
function tuiGetWordRange(currentRange) {
  const range = currentRange.cloneRange();
  const { startContainer, startOffset, endContainer, endOffset } = range;
  const { ownerDocument } = startContainer;
  if (!ownerDocument) {
    return range;
  }
  const treeWalker = ownerDocument.createTreeWalker(ownerDocument.body, NodeFilter.SHOW_TEXT, svgNodeFilter);
  treeWalker.currentNode = startContainer;
  do {
    const container = treeWalker.currentNode;
    const textContent = container.textContent || "";
    const content = container === startContainer ? textContent.slice(0, Math.max(0, startOffset + 1)) : textContent;
    const offset = Math.max(content.lastIndexOf(" "), content.lastIndexOf("\n"), content.lastIndexOf(CHAR_NO_BREAK_SPACE), content.lastIndexOf(CHAR_ZERO_WIDTH_SPACE)) + 1;
    range.setStart(container, 0);
    if (offset) {
      range.setStart(container, offset);
      break;
    }
  } while (treeWalker.previousNode());
  treeWalker.currentNode = endContainer;
  do {
    const container = treeWalker.currentNode;
    const textContent = container.textContent || "";
    const content = container === endContainer ? textContent.slice(endOffset + 1) : textContent;
    const offset = [
      content.indexOf(" "),
      content.lastIndexOf("\n"),
      content.indexOf(CHAR_NO_BREAK_SPACE),
      content.indexOf(CHAR_ZERO_WIDTH_SPACE)
    ].reduce((result, item) => result === -1 || item === -1 ? Math.max(result, item) : Math.min(result, item), -1);
    range.setEnd(container, textContent.length);
    if (offset !== -1) {
      range.setEnd(container, offset + textContent.length - content.length);
      break;
    }
  } while (treeWalker.nextNode());
  return range;
}

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-utils-format.mjs
function tuiNumberToStringWithoutExp(value) {
  const valueAsString = String(value);
  const [numberPart, expPart] = valueAsString.split("e-");
  let valueWithoutExp = valueAsString;
  if (expPart) {
    const [, fractionalPart = ""] = numberPart?.split(".") ?? [];
    const decimalDigits = Number(expPart) + (fractionalPart?.length || 0);
    valueWithoutExp = value.toFixed(decimalDigits);
  }
  return valueWithoutExp;
}
function tuiGetFractionPartPadded(value, precision) {
  const [, fractionPartPadded = ""] = tuiNumberToStringWithoutExp(value).split(".");
  return tuiIsNumber(precision) ? fractionPartPadded.slice(0, Math.max(0, precision)) : fractionPartPadded;
}
function tuiFormatNumber(value, settings = {}) {
  const { precision, decimalSeparator, thousandSeparator, decimalMode, rounding } = __spreadValues(__spreadProps(__spreadValues({}, TUI_DEFAULT_NUMBER_FORMAT), {
    decimalMode: "always",
    precision: Infinity
  }), settings);
  const rounded = Number.isFinite(precision) ? tuiRoundWith({ value, precision, method: rounding }) : value;
  const integerPartString = String(Math.floor(Math.abs(rounded)));
  let fractionPartPadded = tuiGetFractionPartPadded(rounded, precision);
  const hasFraction = Number(fractionPartPadded) > 0;
  if (Number.isFinite(precision)) {
    if (decimalMode === "always" || hasFraction && decimalMode === "pad") {
      const zeroPaddingSize = Math.max(precision - fractionPartPadded.length, 0);
      const zeroPartString = "0".repeat(zeroPaddingSize);
      fractionPartPadded = `${fractionPartPadded}${zeroPartString}`;
    } else {
      fractionPartPadded = fractionPartPadded.replace(/0*$/, "");
    }
  }
  const remainder = integerPartString.length % 3;
  const sign = value < 0 ? CHAR_HYPHEN : "";
  let result = sign + integerPartString.charAt(0);
  for (let i = 1; i < integerPartString.length; i++) {
    if (i % 3 === remainder && integerPartString.length > 3) {
      result += thousandSeparator;
    }
    result += integerPartString.charAt(i);
  }
  return fractionPartPadded ? result + decimalSeparator + fractionPartPadded : result;
}
function tuiStringHashToHsl(value) {
  if (value === "") {
    return "";
  }
  let hash = 0;
  for (let i = 0; i < value.length; i++) {
    hash = value.charCodeAt(i) + ((hash << 5) - hash);
    hash &= hash;
  }
  const hue = hash % 360;
  const saturation = 60 + hash % 5;
  const lightness = 80 + hash % 5;
  return `hsl(${hue},${saturation}%,${lightness}%)`;
}

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-directives-dropdown.mjs
var _c0 = (a0) => ({
  $implicit: a0
});
function TuiDropdownComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const text_r1 = ctx.polymorpheusOutlet;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", text_r1, " ");
  }
}
var _c1 = ["tuiDropdownHost"];
var _TuiDropdownDriver = class _TuiDropdownDriver extends BehaviorSubject {
  constructor() {
    super(false);
    this.type = "dropdown";
  }
};
_TuiDropdownDriver.ɵfac = function TuiDropdownDriver_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiDropdownDriver)();
};
_TuiDropdownDriver.ɵprov = ɵɵdefineInjectable({
  token: _TuiDropdownDriver,
  factory: _TuiDropdownDriver.ɵfac
});
var TuiDropdownDriver = _TuiDropdownDriver;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownDriver, [{
    type: Injectable
  }], function() {
    return [];
  }, null);
})();
var _TuiDropdownDriverDirective = class _TuiDropdownDriverDirective extends TuiDriverDirective {
  constructor() {
    super(...arguments);
    this.type = "dropdown";
  }
};
_TuiDropdownDriverDirective.ɵfac = /* @__PURE__ */ (() => {
  let ɵTuiDropdownDriverDirective_BaseFactory;
  return function TuiDropdownDriverDirective_Factory(__ngFactoryType__) {
    return (ɵTuiDropdownDriverDirective_BaseFactory || (ɵTuiDropdownDriverDirective_BaseFactory = ɵɵgetInheritedFactory(_TuiDropdownDriverDirective)))(__ngFactoryType__ || _TuiDropdownDriverDirective);
  };
})();
_TuiDropdownDriverDirective.ɵdir = ɵɵdefineDirective({
  type: _TuiDropdownDriverDirective,
  features: [ɵɵInheritDefinitionFeature]
});
var TuiDropdownDriverDirective = _TuiDropdownDriverDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownDriverDirective, [{
    type: Directive,
    args: [{
      standalone: true
    }]
  }], null, null);
})();
var TUI_DROPDOWN_COMPONENT = new InjectionToken(ngDevMode ? "TUI_DROPDOWN_COMPONENT" : "", {
  factory: () => TuiDropdownComponent
});
var TUI_DROPDOWN_CONTEXT = new InjectionToken(ngDevMode ? "TUI_DROPDOWN_CONTEXT" : "");
var _TuiDropdownService = class _TuiDropdownService extends TuiPortalService {
};
_TuiDropdownService.ɵfac = /* @__PURE__ */ (() => {
  let ɵTuiDropdownService_BaseFactory;
  return function TuiDropdownService_Factory(__ngFactoryType__) {
    return (ɵTuiDropdownService_BaseFactory || (ɵTuiDropdownService_BaseFactory = ɵɵgetInheritedFactory(_TuiDropdownService)))(__ngFactoryType__ || _TuiDropdownService);
  };
})();
_TuiDropdownService.ɵprov = ɵɵdefineInjectable({
  token: _TuiDropdownService,
  factory: _TuiDropdownService.ɵfac,
  providedIn: "root"
});
var TuiDropdownService = _TuiDropdownService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var TUI_DROPDOWN_DEFAULT_OPTIONS = {
  align: "left",
  direction: null,
  limitWidth: "auto",
  maxHeight: 400,
  minHeight: 80,
  offset: 4,
  appearance: ""
};
var TUI_DROPDOWN_OPTIONS = new InjectionToken(ngDevMode ? "TUI_DROPDOWN_OPTIONS" : "", {
  factory: () => TUI_DROPDOWN_DEFAULT_OPTIONS
});
var tuiDropdownOptionsProvider = (override) => ({
  provide: TUI_DROPDOWN_OPTIONS,
  deps: [[new Optional(), new Self(), TuiDropdownOptionsDirective], [new Optional(), new SkipSelf(), TUI_DROPDOWN_OPTIONS]],
  useFactory: tuiOverrideOptions(override, TUI_DROPDOWN_DEFAULT_OPTIONS)
});
var _TuiDropdownOptionsDirective = class _TuiDropdownOptionsDirective {
  constructor() {
    this.options = inject(TUI_DROPDOWN_OPTIONS, {
      skipSelf: true
    });
    this.align = this.options.align;
    this.appearance = this.options.appearance;
    this.direction = this.options.direction;
    this.limitWidth = this.options.limitWidth;
    this.minHeight = this.options.minHeight;
    this.maxHeight = this.options.maxHeight;
    this.offset = this.options.offset;
  }
};
_TuiDropdownOptionsDirective.ɵfac = function TuiDropdownOptionsDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiDropdownOptionsDirective)();
};
_TuiDropdownOptionsDirective.ɵdir = ɵɵdefineDirective({
  type: _TuiDropdownOptionsDirective,
  selectors: [["", "tuiDropdownAlign", ""], ["", "tuiDropdownAppearance", ""], ["", "tuiDropdownDirection", ""], ["", "tuiDropdownLimitWidth", ""], ["", "tuiDropdownMinHeight", ""], ["", "tuiDropdownMaxHeight", ""], ["", "tuiDropdownOffset", ""]],
  inputs: {
    align: [0, "tuiDropdownAlign", "align"],
    appearance: [0, "tuiDropdownAppearance", "appearance"],
    direction: [0, "tuiDropdownDirection", "direction"],
    limitWidth: [0, "tuiDropdownLimitWidth", "limitWidth"],
    minHeight: [0, "tuiDropdownMinHeight", "minHeight"],
    maxHeight: [0, "tuiDropdownMaxHeight", "maxHeight"],
    offset: [0, "tuiDropdownOffset", "offset"]
  },
  features: [ɵɵProvidersFeature([tuiProvide(TUI_DROPDOWN_OPTIONS, _TuiDropdownOptionsDirective)])]
});
var TuiDropdownOptionsDirective = _TuiDropdownOptionsDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownOptionsDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiDropdownAlign], [tuiDropdownAppearance], [tuiDropdownDirection], [tuiDropdownLimitWidth], [tuiDropdownMinHeight], [tuiDropdownMaxHeight], [tuiDropdownOffset]",
      providers: [tuiProvide(TUI_DROPDOWN_OPTIONS, TuiDropdownOptionsDirective)]
    }]
  }], null, {
    align: [{
      type: Input,
      args: ["tuiDropdownAlign"]
    }],
    appearance: [{
      type: Input,
      args: ["tuiDropdownAppearance"]
    }],
    direction: [{
      type: Input,
      args: ["tuiDropdownDirection"]
    }],
    limitWidth: [{
      type: Input,
      args: ["tuiDropdownLimitWidth"]
    }],
    minHeight: [{
      type: Input,
      args: ["tuiDropdownMinHeight"]
    }],
    maxHeight: [{
      type: Input,
      args: ["tuiDropdownMaxHeight"]
    }],
    offset: [{
      type: Input,
      args: ["tuiDropdownOffset"]
    }]
  });
})();
var _TuiDropdownPosition = class _TuiDropdownPosition extends TuiPositionAccessor {
  constructor() {
    super(...arguments);
    this.el = tuiInjectElement();
    this.options = inject(TUI_DROPDOWN_OPTIONS);
    this.viewport = inject(TUI_VIEWPORT);
    this.directionChange = new EventEmitter();
    this.type = "dropdown";
    this.accessor = tuiFallbackAccessor("dropdown")(inject(TuiRectAccessor), inject(TuiDropdownDirective, {
      optional: true
    }));
  }
  emitDirection(direction) {
    this.directionChange.emit(direction);
  }
  getPosition({
    width,
    height
  }) {
    if (!width && !height) {
      this.previous = void 0;
    }
    const hostRect = this.accessor?.getClientRect() ?? EMPTY_CLIENT_RECT;
    const viewportRect = this.viewport.getClientRect();
    const {
      minHeight,
      direction,
      offset,
      limitWidth
    } = this.options;
    const align = this.getAlign(this.options.align);
    const viewport = {
      top: viewportRect.top - offset,
      bottom: viewportRect.bottom + offset,
      right: viewportRect.right - offset,
      left: viewportRect.left + offset
    };
    const previous = this.previous || direction || "bottom";
    const available = {
      top: hostRect.top - 2 * offset - viewport.top,
      bottom: viewport.bottom - hostRect.bottom - 2 * offset
    };
    const rectWidth = limitWidth === "fixed" ? hostRect.width : width;
    const right = Math.max(hostRect.right - rectWidth, offset);
    const left = hostRect.left + width < viewport.right ? hostRect.left : right;
    const position = {
      top: hostRect.top - offset - height,
      bottom: hostRect.bottom + offset,
      right: Math.max(viewport.left, right),
      center: hostRect.left + hostRect.width / 2 + width / 2 < viewport.right ? hostRect.left + hostRect.width / 2 - width / 2 : right,
      left: Math.max(viewport.left, left)
    };
    const better = available.top > available.bottom ? "top" : "bottom";
    if (available[previous] > minHeight && direction || available[previous] > height) {
      this.emitDirection(previous);
      return [position[previous], position[align]];
    }
    this.previous = better;
    this.emitDirection(better);
    return [position[better], position[align]];
  }
  getAlign(align) {
    const rtl = this.el.matches('[dir="rtl"] :scope');
    if (rtl && align === "left") {
      return "right";
    }
    return rtl && align === "right" ? "left" : align;
  }
};
_TuiDropdownPosition.ɵfac = /* @__PURE__ */ (() => {
  let ɵTuiDropdownPosition_BaseFactory;
  return function TuiDropdownPosition_Factory(__ngFactoryType__) {
    return (ɵTuiDropdownPosition_BaseFactory || (ɵTuiDropdownPosition_BaseFactory = ɵɵgetInheritedFactory(_TuiDropdownPosition)))(__ngFactoryType__ || _TuiDropdownPosition);
  };
})();
_TuiDropdownPosition.ɵdir = ɵɵdefineDirective({
  type: _TuiDropdownPosition,
  outputs: {
    directionChange: "tuiDropdownDirectionChange"
  },
  features: [ɵɵInheritDefinitionFeature]
});
var TuiDropdownPosition = _TuiDropdownPosition;
__decorate([tuiPure], TuiDropdownPosition.prototype, "emitDirection", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownPosition, [{
    type: Directive,
    args: [{
      standalone: true
    }]
  }], null, {
    directionChange: [{
      type: Output,
      args: ["tuiDropdownDirectionChange"]
    }],
    emitDirection: []
  });
})();
var _TuiDropdownDirective = class _TuiDropdownDirective {
  constructor() {
    this.refresh$ = new Subject();
    this.service = inject(TuiDropdownService);
    this.cdr = inject(ChangeDetectorRef);
    this.drivers = coerceArray(inject(TuiDropdownDriver, {
      self: true,
      optional: true
    }));
    this.sub = this.refresh$.pipe(throttleTime(0, tuiZonefreeScheduler()), takeUntilDestroyed()).subscribe(() => {
      this.ref()?.changeDetectorRef.detectChanges();
      this.ref()?.changeDetectorRef.markForCheck();
    });
    this.el = tuiInjectElement();
    this.type = "dropdown";
    this.component = new PolymorpheusComponent(inject(TUI_DROPDOWN_COMPONENT), inject(INJECTOR$1));
    this.ref = signal(null);
    this._content = signal(null);
  }
  set tuiDropdown(content) {
    this._content.set(content instanceof TemplateRef ? new PolymorpheusTemplate(content, this.cdr) : content);
    if (!this._content()) {
      this.toggle(false);
    }
  }
  get position() {
    return tuiCheckFixedPosition(this.el) ? "fixed" : "absolute";
  }
  // TODO(v5): delete
  get content() {
    return this._content();
  }
  // TODO(v5): delete
  set content(x) {
    this._content.set(x);
  }
  ngAfterViewChecked() {
    this.refresh$.next();
  }
  ngOnDestroy() {
    this.toggle(false);
  }
  getClientRect() {
    return this.el.getBoundingClientRect();
  }
  toggle(show) {
    const ref = this.ref();
    if (show && this._content() && !ref) {
      this.ref.set(this.service.add(this.component));
    } else if (!show && ref) {
      this.ref.set(null);
      this.service.remove(ref);
    }
    this.drivers.forEach((driver) => driver?.next(show));
    this.cdr.markForCheck();
  }
};
_TuiDropdownDirective.ɵfac = function TuiDropdownDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiDropdownDirective)();
};
_TuiDropdownDirective.ɵdir = ɵɵdefineDirective({
  type: _TuiDropdownDirective,
  selectors: [["", "tuiDropdown", "", 5, "ng-container", 5, "ng-template"]],
  hostVars: 2,
  hostBindings: function TuiDropdownDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("tui-dropdown-open", ctx.ref());
    }
  },
  inputs: {
    tuiDropdown: "tuiDropdown"
  },
  exportAs: ["tuiDropdown"],
  features: [ɵɵProvidersFeature([tuiAsRectAccessor(_TuiDropdownDirective), tuiAsVehicle(_TuiDropdownDirective)]), ɵɵHostDirectivesFeature([TuiDropdownDriverDirective, {
    directive: TuiDropdownPosition,
    outputs: ["tuiDropdownDirectionChange", "tuiDropdownDirectionChange"]
  }])]
});
var TuiDropdownDirective = _TuiDropdownDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiDropdown]:not(ng-container):not(ng-template)",
      providers: [tuiAsRectAccessor(TuiDropdownDirective), tuiAsVehicle(TuiDropdownDirective)],
      exportAs: "tuiDropdown",
      hostDirectives: [TuiDropdownDriverDirective, {
        directive: TuiDropdownPosition,
        outputs: ["tuiDropdownDirectionChange"]
      }],
      host: {
        "[class.tui-dropdown-open]": "ref()"
      }
    }]
  }], null, {
    tuiDropdown: [{
      type: Input
    }]
  });
})();
var _TuiDropdownComponent = class _TuiDropdownComponent {
  constructor() {
    this.el = tuiInjectElement();
    this.accessor = inject(TuiRectAccessor);
    this.viewport = inject(TUI_VIEWPORT);
    this.vvs = inject(TuiVisualViewportService);
    this.styles$ = inject(TuiPositionService).pipe(takeWhile(() => this.directive.el.isConnected && !!this.directive.el.getBoundingClientRect().height), map((v) => this.position === "fixed" ? this.vvs.correct(v) : v), map(([top, left]) => this.getStyles(left, top)), takeUntilDestroyed());
    this.options = inject(TUI_DROPDOWN_OPTIONS);
    this.directive = inject(TuiDropdownDirective);
    this.context = inject(TUI_DROPDOWN_CONTEXT, {
      optional: true
    });
    this.darkMode = inject(TUI_DARK_MODE);
    this.position = this.directive.position;
    this.theme = computed((_ = this.darkMode()) => this.directive.el.closest("[tuiTheme]")?.getAttribute("tuiTheme"));
    this.close = () => this.directive.toggle(false);
  }
  ngAfterViewInit() {
    this.styles$.subscribe({
      next: (styles) => Object.assign(this.el.style, styles),
      complete: () => this.close?.()
    });
  }
  getStyles(x, y) {
    const {
      maxHeight,
      minHeight,
      offset,
      limitWidth
    } = this.options;
    const parent = this.el.offsetParent?.getBoundingClientRect() || EMPTY_CLIENT_RECT;
    const {
      left = 0,
      top = 0
    } = this.position === "fixed" ? {} : parent;
    const rect = this.accessor.getClientRect();
    const viewport = this.viewport.getClientRect();
    const above = rect.top - viewport.top - 2 * offset;
    const below = viewport.top + viewport.height - y - offset;
    const available = y > rect.bottom ? below : above;
    const height = this.el.getBoundingClientRect().right <= rect.left || x >= rect.right ? maxHeight : tuiClamp(available, minHeight, maxHeight);
    y -= top;
    x -= left;
    return {
      position: this.position,
      top: tuiPx(Math.round(Math.max(y, offset - top))),
      left: tuiPx(Math.round(x)),
      maxHeight: tuiPx(Math.round(height)),
      width: limitWidth === "fixed" ? tuiPx(Math.round(rect.width)) : "",
      minWidth: limitWidth === "min" ? tuiPx(Math.round(rect.width)) : "",
      maxWidth: tuiPx(Math.round(viewport.width) - 16)
      // 8px min gap from each side
    };
  }
};
_TuiDropdownComponent.ɵfac = function TuiDropdownComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiDropdownComponent)();
};
_TuiDropdownComponent.ɵcmp = ɵɵdefineComponent({
  type: _TuiDropdownComponent,
  selectors: [["tui-dropdown"]],
  hostVars: 2,
  hostBindings: function TuiDropdownComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("data-appearance", ctx.options.appearance)("tuiTheme", ctx.theme());
    }
  },
  features: [ɵɵProvidersFeature([TuiPositionService, tuiPositionAccessorFor("dropdown", TuiDropdownPosition), tuiRectAccessorFor("dropdown", TuiDropdownDirective)]), ɵɵHostDirectivesFeature([TuiActiveZone, TuiAnimated])],
  decls: 2,
  vars: 4,
  consts: [[1, "t-scroll"], ["class", "t-primitive", 4, "polymorpheusOutlet", "polymorpheusOutletContext"], [1, "t-primitive"]],
  template: function TuiDropdownComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "tui-scrollbar", 0);
      ɵɵtemplate(1, TuiDropdownComponent_div_1_Template, 2, 1, "div", 1);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵproperty("polymorpheusOutlet", ctx.directive._content())("polymorpheusOutletContext", ɵɵpureFunction1(2, _c0, ctx.close));
    }
  },
  dependencies: [PolymorpheusOutlet, TuiScrollbar],
  styles: ["[_nghost-%COMP%]{position:absolute;display:flex;box-shadow:var(--tui-shadow-medium);color:var(--tui-text-primary);background:var(--tui-background-elevation-3);border-radius:var(--tui-radius-m);overflow:hidden;border:1px solid var(--tui-border-normal);box-sizing:border-box;isolation:isolate;pointer-events:auto;--tui-from: translateY(-1rem)}.tui-enter[_nghost-%COMP%], .tui-leave[_nghost-%COMP%]{animation-name:tuiFade,tuiSlide}[_nghost-%COMP%]:not([style*=top]){visibility:hidden}.t-scroll[_ngcontent-%COMP%]{flex-grow:1;max-inline-size:100%;inline-size:-webkit-max-content;inline-size:max-content;overscroll-behavior:none}.t-primitive[_ngcontent-%COMP%]{padding:1rem}"]
});
var TuiDropdownComponent = _TuiDropdownComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-dropdown",
      imports: [PolymorpheusOutlet, TuiScrollbar],
      changeDetection: ChangeDetectionStrategy.Default,
      providers: [TuiPositionService, tuiPositionAccessorFor("dropdown", TuiDropdownPosition), tuiRectAccessorFor("dropdown", TuiDropdownDirective)],
      hostDirectives: [TuiActiveZone, TuiAnimated],
      host: {
        "[attr.data-appearance]": "options.appearance",
        "[attr.tuiTheme]": "theme()"
      },
      template: '<tui-scrollbar class="t-scroll">\n    <div\n        *polymorpheusOutlet="directive._content() as text; context: {$implicit: close}"\n        class="t-primitive"\n    >\n        {{ text }}\n    </div>\n</tui-scrollbar>\n',
      styles: [":host{position:absolute;display:flex;box-shadow:var(--tui-shadow-medium);color:var(--tui-text-primary);background:var(--tui-background-elevation-3);border-radius:var(--tui-radius-m);overflow:hidden;border:1px solid var(--tui-border-normal);box-sizing:border-box;isolation:isolate;pointer-events:auto;--tui-from: translateY(-1rem)}:host.tui-enter,:host.tui-leave{animation-name:tuiFade,tuiSlide}:host:not([style*=top]){visibility:hidden}.t-scroll{flex-grow:1;max-inline-size:100%;inline-size:-webkit-max-content;inline-size:max-content;overscroll-behavior:none}.t-primitive{padding:1rem}\n"]
    }]
  }], null, null);
})();
function activeZoneFilter(event) {
  return !event || this.driver.value && !this.activeZone.contains(tuiGetActualTarget(event));
}
var _TuiDropdownContext = class _TuiDropdownContext extends TuiRectAccessor {
  constructor() {
    super(...arguments);
    this.isTouch = inject(TUI_IS_TOUCH);
    this.currentRect = EMPTY_CLIENT_RECT;
    this.userSelect = computed(() => this.isTouch() ? "none" : null);
    this.activeZone = inject(TuiActiveZone);
    this.driver = inject(TuiDropdownDriver);
    this.doc = inject(DOCUMENT);
    this.sub = merge(tuiTypedFromEvent(this.doc, "pointerdown"), tuiTypedFromEvent(this.doc, "contextmenu", {
      capture: true
    })).pipe(tuiZonefree(), takeUntilDestroyed()).subscribe((event) => this.closeDropdown(event));
    this.type = "dropdown";
  }
  getClientRect() {
    return this.currentRect;
  }
  closeDropdown(_event) {
    this.driver.next(false);
    this.currentRect = EMPTY_CLIENT_RECT;
  }
  onContextMenu(x, y) {
    this.currentRect = tuiPointToClientRect(x, y);
    this.driver.next(true);
  }
};
_TuiDropdownContext.ɵfac = /* @__PURE__ */ (() => {
  let ɵTuiDropdownContext_BaseFactory;
  return function TuiDropdownContext_Factory(__ngFactoryType__) {
    return (ɵTuiDropdownContext_BaseFactory || (ɵTuiDropdownContext_BaseFactory = ɵɵgetInheritedFactory(_TuiDropdownContext)))(__ngFactoryType__ || _TuiDropdownContext);
  };
})();
_TuiDropdownContext.ɵdir = ɵɵdefineDirective({
  type: _TuiDropdownContext,
  selectors: [["", "tuiDropdownContext", ""]],
  hostVars: 6,
  hostBindings: function TuiDropdownContext_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("keydown.esc", function TuiDropdownContext_keydown_esc_HostBindingHandler() {
        return ctx.closeDropdown();
      }, ɵɵresolveDocument)("longtap", function TuiDropdownContext_longtap_HostBindingHandler($event) {
        return ctx.onContextMenu($event.detail.clientX, $event.detail.clientY);
      });
    }
    if (rf & 2) {
      ɵɵstyleProp("user-select", ctx.userSelect())("-webkit-user-select", ctx.userSelect())("-webkit-touch-callout", ctx.userSelect());
    }
  },
  features: [ɵɵProvidersFeature([TuiActiveZone, TuiDropdownDriver, tuiAsDriver(TuiDropdownDriver), tuiAsRectAccessor(_TuiDropdownContext)]), ɵɵInheritDefinitionFeature]
});
var TuiDropdownContext = _TuiDropdownContext;
__decorate([shouldCall(activeZoneFilter)], TuiDropdownContext.prototype, "closeDropdown", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownContext, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiDropdownContext]",
      providers: [TuiActiveZone, TuiDropdownDriver, tuiAsDriver(TuiDropdownDriver), tuiAsRectAccessor(TuiDropdownContext)],
      host: {
        "[style.user-select]": "userSelect()",
        "[style.-webkit-user-select]": "userSelect()",
        "[style.-webkit-touch-callout]": "userSelect()",
        "(document:keydown.esc)": "closeDropdown()",
        "(longtap)": "onContextMenu($event.detail.clientX, $event.detail.clientY)"
      }
    }]
  }], null, {
    closeDropdown: []
  });
})();
var TUI_DROPDOWN_HOVER_DEFAULT_OPTIONS = {
  showDelay: 200,
  hideDelay: 500
};
var TUI_DROPDOWN_HOVER_OPTIONS = new InjectionToken(ngDevMode ? "TUI_DROPDOWN_HOVER_OPTIONS" : "", {
  factory: () => TUI_DROPDOWN_HOVER_DEFAULT_OPTIONS
});
function tuiDropdownHoverOptionsProvider(options) {
  return tuiProvideOptions(TUI_DROPDOWN_HOVER_OPTIONS, options, TUI_DROPDOWN_HOVER_DEFAULT_OPTIONS);
}
function shouldClose(event) {
  return (
    // @ts-ignore
    typeof CloseWatcher === "undefined" && // ?. for auto fill events
    event.key?.toLowerCase() === "escape" && this.tuiDropdownEnabled && !!this.tuiDropdownOpen && !this["dropdown"]()?.nextElementSibling
  );
}
var _TuiDropdownOpen = class _TuiDropdownOpen {
  constructor() {
    this.directive = inject(TuiDropdownDirective);
    this.el = tuiInjectElement();
    this.obscured = inject(TuiObscured);
    this.activeZone = inject(TuiActiveZone);
    this.dropdown = computed(() => this.directive.ref()?.location.nativeElement);
    this.tuiDropdownEnabled = true;
    this.tuiDropdownOpen = false;
    this.tuiDropdownOpenChange = new EventEmitter();
    this.driver = inject(TuiDropdownDriver);
    this.sub = this.driver.pipe(tuiIfMap(() => merge(tuiCloseWatcher(), this.obscured.tuiObscured.pipe(filter(Boolean)), this.activeZone.tuiActiveZoneChange.pipe(filter((a) => !a)), fromEvent(this.el, "focusin").pipe(filter((event) => !this.host.contains(tuiGetActualTarget(event)) || !this.directive.ref())))), tuiZonefull(), tuiWatch(), takeUntilDestroyed()).subscribe(() => this.toggle(false));
    this.sync = this.driver.pipe(takeUntilDestroyed()).subscribe((open) => {
      if (open !== this.tuiDropdownOpen) {
        this.update(open);
      }
    });
  }
  ngOnChanges() {
    this.drive(!!this.tuiDropdownOpen);
    this.tuiDropdownOpenChange.emit(!!this.tuiDropdownOpen);
  }
  toggle(open) {
    if (this.focused && !open) {
      this.host.focus({
        preventScroll: true
      });
    }
    this.update(open);
  }
  onEsc(event) {
    event.preventDefault();
    this.toggle(false);
  }
  onClick(target) {
    if (!this.editable && this.host.contains(target)) {
      this.update(!this.tuiDropdownOpen);
    }
  }
  onArrow(event, up) {
    if (!tuiIsElement(event.target) || !this.host.contains(event.target) || !this.tuiDropdownEnabled || !this.directive._content()) {
      return;
    }
    event.preventDefault();
    this.focusDropdown(up);
  }
  onKeydown(event) {
    const target = tuiGetActualTarget(event);
    if (!event.defaultPrevented && tuiIsEditingKey(event.key) && this.editable && this.focused && tuiIsHTMLElement(target) && !tuiIsElementEditable(target)) {
      this.host.focus({
        preventScroll: true
      });
    }
  }
  get host() {
    const initial = this.dropdownHost?.nativeElement || this.el;
    const focusable = tuiIsNativeKeyboardFocusable(initial) ? initial : tuiGetClosestFocusable({
      initial,
      root: this.el
    });
    return this.dropdownHost?.nativeElement || focusable || this.el;
  }
  get editable() {
    return tuiIsElementEditable(this.host);
  }
  get focused() {
    return tuiIsNativeFocusedIn(this.host) || tuiIsNativeFocusedIn(this.dropdown());
  }
  update(open) {
    if (open && !this.tuiDropdownEnabled) {
      return this.drive();
    }
    this.tuiDropdownOpen = open;
    this.tuiDropdownOpenChange.emit(open);
    this.drive();
  }
  drive(open = !!this.tuiDropdownOpen && this.tuiDropdownEnabled) {
    this.obscured.tuiObscuredEnabled = open;
    this.driver.next(open);
  }
  focusDropdown(previous) {
    const root = this.dropdown();
    if (!root) {
      this.update(true);
      return;
    }
    const doc = this.el.ownerDocument;
    const child = root.appendChild(doc.createElement("div"));
    const initial = previous ? child : root;
    const focusable = tuiGetClosestFocusable({
      initial,
      previous,
      root
    });
    child.remove();
    focusable?.focus();
  }
};
_TuiDropdownOpen.ɵfac = function TuiDropdownOpen_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiDropdownOpen)();
};
_TuiDropdownOpen.ɵdir = ɵɵdefineDirective({
  type: _TuiDropdownOpen,
  selectors: [["", "tuiDropdown", "", "tuiDropdownOpen", ""], ["", "tuiDropdown", "", "tuiDropdownOpenChange", ""]],
  contentQueries: function TuiDropdownOpen_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, _c1, 5, ElementRef);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.dropdownHost = _t.first);
    }
  },
  hostBindings: function TuiDropdownOpen_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function TuiDropdownOpen_click_HostBindingHandler($event) {
        return ctx.onClick($event.target);
      })("keydown.arrowDown", function TuiDropdownOpen_keydown_arrowDown_HostBindingHandler($event) {
        return ctx.onArrow($event, false);
      })("keydown.arrowUp", function TuiDropdownOpen_keydown_arrowUp_HostBindingHandler($event) {
        return ctx.onArrow($event, true);
      })("keydown.zoneless.capture", function TuiDropdownOpen_keydown_zoneless_capture_HostBindingHandler($event) {
        return ctx.onEsc($event);
      }, ɵɵresolveDocument)("keydown.zoneless", function TuiDropdownOpen_keydown_zoneless_HostBindingHandler($event) {
        return ctx.onKeydown($event);
      }, ɵɵresolveDocument)("tuiActiveZoneChange", function TuiDropdownOpen_tuiActiveZoneChange_HostBindingHandler() {
        return 0;
      });
    }
  },
  inputs: {
    tuiDropdownEnabled: "tuiDropdownEnabled",
    tuiDropdownOpen: "tuiDropdownOpen"
  },
  outputs: {
    tuiDropdownOpenChange: "tuiDropdownOpenChange"
  },
  features: [ɵɵProvidersFeature([TuiDropdownDriver, tuiAsDriver(TuiDropdownDriver)]), ɵɵHostDirectivesFeature([TuiObscured, {
    directive: TuiActiveZone,
    inputs: ["tuiActiveZoneParent", "tuiActiveZoneParent"],
    outputs: ["tuiActiveZoneChange", "tuiActiveZoneChange"]
  }]), ɵɵNgOnChangesFeature]
});
var TuiDropdownOpen = _TuiDropdownOpen;
__decorate([shouldCall(shouldClose)], TuiDropdownOpen.prototype, "onEsc", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownOpen, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiDropdown][tuiDropdownOpen],[tuiDropdown][tuiDropdownOpenChange]",
      providers: [TuiDropdownDriver, tuiAsDriver(TuiDropdownDriver)],
      hostDirectives: [TuiObscured, {
        directive: TuiActiveZone,
        inputs: ["tuiActiveZoneParent"],
        outputs: ["tuiActiveZoneChange"]
      }],
      host: {
        "(click)": "onClick($event.target)",
        "(keydown.arrowDown)": "onArrow($event, false)",
        "(keydown.arrowUp)": "onArrow($event, true)",
        "(document:keydown.zoneless.capture)": "onEsc($event)",
        "(document:keydown.zoneless)": "onKeydown($event)",
        // TODO: Necessary because startWith(false) + distinctUntilChanged() in TuiActiveZone, think of better solution
        "(tuiActiveZoneChange)": "0"
      }
    }]
  }], null, {
    dropdownHost: [{
      type: ContentChild,
      args: ["tuiDropdownHost", {
        descendants: true,
        read: ElementRef
      }]
    }],
    tuiDropdownEnabled: [{
      type: Input
    }],
    tuiDropdownOpen: [{
      type: Input
    }],
    tuiDropdownOpenChange: [{
      type: Output
    }],
    onEsc: []
  });
})();
var _TuiDropdownHover = class _TuiDropdownHover extends TuiDriver {
  constructor() {
    super((subscriber) => this.stream$.subscribe(subscriber));
    this.el = tuiInjectElement();
    this.doc = inject(DOCUMENT);
    this.options = inject(TUI_DROPDOWN_HOVER_OPTIONS);
    this.activeZone = inject(TuiActiveZone);
    this.open = inject(TuiDropdownOpen, {
      optional: true
    });
    this.dropdownExternalRemoval$ = toObservable(inject(TuiDropdownDirective).ref).pipe(filter((x) => !x && this.hovered));
    this.stream$ = merge(this.dropdownExternalRemoval$.pipe(switchMap(() => tuiTypedFromEvent(this.doc, "pointerdown").pipe(map(tuiGetActualTarget), delay(this.hideDelay), startWith(null), takeUntil(fromEvent(this.doc, "mouseover"))))), tuiTypedFromEvent(this.doc, "mouseover").pipe(map(tuiGetActualTarget)), tuiTypedFromEvent(this.doc, "mouseout").pipe(map((e) => e.relatedTarget))).pipe(map((element) => tuiIsElement(element) && this.isHovered(element)), distinctUntilChanged(), switchMap((v) => of(v).pipe(delay(v ? this.showDelay : this.hideDelay))), tuiZoneOptimized(), tap((hovered) => {
      this.hovered = hovered;
      this.open?.toggle(hovered);
    }), share());
    this.showDelay = this.options.showDelay;
    this.hideDelay = this.options.hideDelay;
    this.hovered = false;
    this.type = "dropdown";
  }
  onClick(event) {
    if (this.hovered && this.open) {
      event.preventDefault();
    }
  }
  isHovered(element) {
    const host = this.dropdownHost?.nativeElement || this.el;
    const hovered = host.contains(element);
    const child = !this.el.contains(element) && this.activeZone.contains(element);
    return hovered || child;
  }
};
_TuiDropdownHover.ɵfac = function TuiDropdownHover_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiDropdownHover)();
};
_TuiDropdownHover.ɵdir = ɵɵdefineDirective({
  type: _TuiDropdownHover,
  selectors: [["", "tuiDropdownHover", ""]],
  contentQueries: function TuiDropdownHover_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, _c1, 5, ElementRef);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.dropdownHost = _t.first);
    }
  },
  hostBindings: function TuiDropdownHover_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click.capture", function TuiDropdownHover_click_capture_HostBindingHandler($event) {
        return ctx.onClick($event);
      });
    }
  },
  inputs: {
    showDelay: [0, "tuiDropdownShowDelay", "showDelay"],
    hideDelay: [0, "tuiDropdownHideDelay", "hideDelay"]
  },
  features: [ɵɵProvidersFeature([TuiActiveZone, tuiAsDriver(_TuiDropdownHover)]), ɵɵInheritDefinitionFeature]
});
var TuiDropdownHover = _TuiDropdownHover;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownHover, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiDropdownHover]",
      providers: [TuiActiveZone, tuiAsDriver(TuiDropdownHover)],
      host: {
        "(click.capture)": "onClick($event)"
      }
    }]
  }], function() {
    return [];
  }, {
    dropdownHost: [{
      type: ContentChild,
      args: ["tuiDropdownHost", {
        descendants: true,
        read: ElementRef
      }]
    }],
    showDelay: [{
      type: Input,
      args: ["tuiDropdownShowDelay"]
    }],
    hideDelay: [{
      type: Input,
      args: ["tuiDropdownHideDelay"]
    }]
  });
})();
var _TuiDropdownManual = class _TuiDropdownManual {
  constructor() {
    this.driver = inject(TuiDropdownDriver);
    this.tuiDropdownManual = false;
  }
  ngOnChanges() {
    this.driver.next(!!this.tuiDropdownManual);
  }
};
_TuiDropdownManual.ɵfac = function TuiDropdownManual_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiDropdownManual)();
};
_TuiDropdownManual.ɵdir = ɵɵdefineDirective({
  type: _TuiDropdownManual,
  selectors: [["", "tuiDropdownManual", ""]],
  inputs: {
    tuiDropdownManual: "tuiDropdownManual"
  },
  features: [ɵɵProvidersFeature([TuiDropdownDriver, tuiAsDriver(TuiDropdownDriver)]), ɵɵNgOnChangesFeature]
});
var TuiDropdownManual = _TuiDropdownManual;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownManual, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiDropdownManual]",
      providers: [TuiDropdownDriver, tuiAsDriver(TuiDropdownDriver)]
    }]
  }], null, {
    tuiDropdownManual: [{
      type: Input
    }]
  });
})();
var _TuiDropdownOpenLegacy = class _TuiDropdownOpenLegacy {
  constructor() {
    this.openStateSub = new Subject();
    this.tuiDropdownOpenChange = this.openStateSub.pipe(distinctUntilChanged());
  }
  set tuiDropdownOpen(open) {
    this.emitOpenChange(open);
  }
  emitOpenChange(open) {
    this.openStateSub.next(open);
  }
};
_TuiDropdownOpenLegacy.ɵfac = function TuiDropdownOpenLegacy_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiDropdownOpenLegacy)();
};
_TuiDropdownOpenLegacy.ɵdir = ɵɵdefineDirective({
  type: _TuiDropdownOpenLegacy,
  selectors: [["", "tuiDropdownOpen", "", 3, "tuiDropdown", ""], ["", "tuiDropdownOpenChange", "", 3, "tuiDropdown", ""]],
  inputs: {
    tuiDropdownOpen: "tuiDropdownOpen"
  },
  outputs: {
    tuiDropdownOpenChange: "tuiDropdownOpenChange"
  }
});
var TuiDropdownOpenLegacy = _TuiDropdownOpenLegacy;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownOpenLegacy, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiDropdownOpen]:not([tuiDropdown]),[tuiDropdownOpenChange]:not([tuiDropdown])"
    }]
  }], null, {
    tuiDropdownOpenChange: [{
      type: Output
    }],
    tuiDropdownOpen: [{
      type: Input
    }]
  });
})();
var _TuiDropdownPortal = class _TuiDropdownPortal {
  constructor() {
    this.template = inject(TemplateRef);
    this.service = inject(TuiDropdownService);
  }
  set tuiDropdown(show) {
    this.viewRef?.destroy();
    if (show) {
      this.viewRef = this.service.addTemplate(this.template);
    }
  }
  ngOnDestroy() {
    this.viewRef?.destroy();
  }
};
_TuiDropdownPortal.ɵfac = function TuiDropdownPortal_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiDropdownPortal)();
};
_TuiDropdownPortal.ɵdir = ɵɵdefineDirective({
  type: _TuiDropdownPortal,
  selectors: [["ng-template", "tuiDropdown", ""]],
  inputs: {
    tuiDropdown: "tuiDropdown"
  }
});
var TuiDropdownPortal = _TuiDropdownPortal;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownPortal, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "ng-template[tuiDropdown]"
    }]
  }], null, {
    tuiDropdown: [{
      type: Input
    }]
  });
})();
var _TuiDropdownPositionSided = class _TuiDropdownPositionSided extends TuiPositionAccessor {
  constructor() {
    super(...arguments);
    this.options = inject(TUI_DROPDOWN_OPTIONS);
    this.viewport = inject(TUI_VIEWPORT);
    this.vertical = inject(TuiDropdownPosition);
    this.previous = this.options.direction || "bottom";
    this.tuiDropdownSided = "";
    this.tuiDropdownSidedOffset = 4;
    this.type = "dropdown";
  }
  getPosition(rect) {
    if (this.tuiDropdownSided === false) {
      return this.vertical.getPosition(rect);
    }
    const {
      height,
      width
    } = rect;
    const hostRect = this.vertical.accessor?.getClientRect() ?? EMPTY_CLIENT_RECT;
    const viewport = this.viewport.getClientRect();
    const {
      direction,
      offset
    } = this.options;
    const adjusted = this.vertical.getAlign(this.options.align);
    const align = adjusted === "center" ? "left" : adjusted;
    const available = {
      top: hostRect.bottom - viewport.top,
      left: hostRect.left - offset - viewport.left,
      right: viewport.right - hostRect.right - offset,
      bottom: viewport.bottom - hostRect.top
    };
    const position = {
      top: hostRect.bottom - height + this.tuiDropdownSidedOffset + 1,
      left: hostRect.left - width - offset,
      right: hostRect.right + offset,
      bottom: hostRect.top - this.tuiDropdownSidedOffset - 1
      // 1 for border
    };
    const better = available.top > available.bottom ? "top" : "bottom";
    const maxLeft = available.left > available.right ? position.left : position.right;
    const left = available[align] > width ? position[align] : maxLeft;
    if (available[this.previous] > height && direction || this.previous === better) {
      this.vertical.emitDirection(this.previous);
      return [position[this.previous], left];
    }
    this.previous = better;
    this.vertical.emitDirection(better);
    return [position[better], left];
  }
};
_TuiDropdownPositionSided.ɵfac = /* @__PURE__ */ (() => {
  let ɵTuiDropdownPositionSided_BaseFactory;
  return function TuiDropdownPositionSided_Factory(__ngFactoryType__) {
    return (ɵTuiDropdownPositionSided_BaseFactory || (ɵTuiDropdownPositionSided_BaseFactory = ɵɵgetInheritedFactory(_TuiDropdownPositionSided)))(__ngFactoryType__ || _TuiDropdownPositionSided);
  };
})();
_TuiDropdownPositionSided.ɵdir = ɵɵdefineDirective({
  type: _TuiDropdownPositionSided,
  selectors: [["", "tuiDropdownSided", ""]],
  inputs: {
    tuiDropdownSided: "tuiDropdownSided",
    tuiDropdownSidedOffset: "tuiDropdownSidedOffset"
  },
  features: [ɵɵProvidersFeature([TuiDropdownPosition, tuiAsPositionAccessor(_TuiDropdownPositionSided)]), ɵɵInheritDefinitionFeature]
});
var TuiDropdownPositionSided = _TuiDropdownPositionSided;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownPositionSided, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiDropdownSided]",
      providers: [TuiDropdownPosition, tuiAsPositionAccessor(TuiDropdownPositionSided)]
    }]
  }], null, {
    tuiDropdownSided: [{
      type: Input
    }],
    tuiDropdownSidedOffset: [{
      type: Input
    }]
  });
})();
var _TuiDropdownSelection = class _TuiDropdownSelection extends TuiDriver {
  constructor() {
    super((subscriber) => this.stream$.subscribe(subscriber));
    this.doc = inject(DOCUMENT);
    this.vcr = inject(ViewContainerRef);
    this.dropdown = inject(TuiDropdownDirective);
    this.el = tuiInjectElement();
    this.handler$ = new BehaviorSubject(TUI_TRUE_HANDLER);
    this.stream$ = combineLatest([this.handler$, inject(TUI_SELECTION_STREAM).pipe(map(() => this.getRange()), filter((range) => this.isValid(range)), distinctUntilChanged((x, y) => x.startOffset === y.startOffset && x.endOffset === y.endOffset && x.commonAncestorContainer === y.commonAncestorContainer))]).pipe(map(([handler, range]) => {
      const contained = this.el.contains(range.commonAncestorContainer);
      this.range = contained && tuiIsTextNode(range.commonAncestorContainer) ? range : this.range;
      return contained && handler(this.range) || this.inDropdown(range);
    }));
    this.range = inject(TUI_RANGE);
    this.position = "selection";
    this.type = "dropdown";
  }
  set tuiDropdownSelection(visible) {
    if (!tuiIsString(visible)) {
      this.handler$.next(visible);
    }
  }
  getClientRect() {
    switch (this.position) {
      case "tag": {
        const {
          commonAncestorContainer
        } = this.range;
        const element = tuiIsElement(commonAncestorContainer) ? commonAncestorContainer : commonAncestorContainer.parentNode;
        return element && tuiIsElement(element) ? element.getBoundingClientRect() : EMPTY_CLIENT_RECT;
      }
      case "word":
        return tuiGetWordRange(this.range).getBoundingClientRect();
      default:
        return this.range.getBoundingClientRect();
    }
  }
  ngOnDestroy() {
    if (this.ghost) {
      this.ghostHost.removeChild(this.ghost);
    }
  }
  get ghostHost() {
    return this.el.querySelector("tui-textfield .t-ghost") || this.el;
  }
  getRange() {
    const active = tuiGetNativeFocused(this.doc);
    const selection = this.doc.getSelection();
    const range = active && tuiIsTextfield(active) && this.el.contains(active) ? this.veryVerySadInputFix(active) : selection?.rangeCount && selection.getRangeAt(0) || this.range;
    return range.cloneRange();
  }
  /**
   * Check if given range is at least partially inside dropdown
   */
  inDropdown(range) {
    const {
      startContainer,
      endContainer
    } = range;
    const inDropdown = this.boxContains(range.commonAncestorContainer);
    const hostToDropdown = this.boxContains(endContainer) && this.el.contains(startContainer);
    const dropdownToHost = this.boxContains(startContainer) && this.el.contains(endContainer);
    return inDropdown || hostToDropdown || dropdownToHost;
  }
  /**
   * Check if Node is inside dropdown
   */
  boxContains(node) {
    return !!this.dropdown.ref()?.location.nativeElement.contains(node);
  }
  /**
   * Check if range is not inside tui-textfield's DOM elements
   */
  isValid(range) {
    return !this.el.contains(range.commonAncestorContainer) || !this.el.closest("tui-textfield") || range.intersectsNode(this.ghost || this.el);
  }
  veryVerySadInputFix(element) {
    const {
      ghost = this.initGhost(this.ghostHost)
    } = this;
    const {
      top,
      left,
      width,
      height
    } = this.ghostHost.getBoundingClientRect();
    const {
      selectionStart,
      selectionEnd,
      value
    } = element;
    const range = this.doc.createRange();
    const hostRect = this.ghostHost.getBoundingClientRect();
    ghost.style.top = tuiPx(top - hostRect.top);
    ghost.style.left = tuiPx(left - hostRect.left);
    ghost.style.width = tuiPx(width);
    ghost.style.height = tuiPx(height);
    ghost.textContent = CHAR_ZERO_WIDTH_SPACE + value + CHAR_NO_BREAK_SPACE;
    range.setStart(ghost.firstChild, selectionStart || 0);
    range.setEnd(ghost.firstChild, selectionEnd || 0);
    return range;
  }
  /**
   * Create an invisible DIV styled exactly like input/textarea element inside directive
   */
  initGhost(element) {
    const ghost = this.doc.createElement("div");
    const {
      font,
      letterSpacing,
      textTransform,
      padding,
      borderTop
    } = getComputedStyle(element);
    ghost.style.position = "absolute";
    ghost.style.pointerEvents = "none";
    ghost.style.opacity = "0";
    ghost.style.whiteSpace = "pre-wrap";
    ghost.style.boxSizing = "border-box";
    ghost.style.borderTop = borderTop;
    ghost.style.font = font;
    ghost.style.letterSpacing = letterSpacing;
    ghost.style.textTransform = textTransform;
    ghost.style.padding = padding;
    this.ghostHost.appendChild(ghost);
    this.ghost = ghost;
    return ghost;
  }
};
_TuiDropdownSelection.ɵfac = function TuiDropdownSelection_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiDropdownSelection)();
};
_TuiDropdownSelection.ɵdir = ɵɵdefineDirective({
  type: _TuiDropdownSelection,
  selectors: [["", "tuiDropdownSelection", ""]],
  inputs: {
    position: [0, "tuiDropdownSelectionPosition", "position"],
    tuiDropdownSelection: "tuiDropdownSelection"
  },
  features: [ɵɵProvidersFeature([tuiAsDriver(_TuiDropdownSelection), tuiAsRectAccessor(_TuiDropdownSelection)]), ɵɵInheritDefinitionFeature]
});
var TuiDropdownSelection = _TuiDropdownSelection;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownSelection, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiDropdownSelection]",
      providers: [tuiAsDriver(TuiDropdownSelection), tuiAsRectAccessor(TuiDropdownSelection)]
    }]
  }], function() {
    return [];
  }, {
    position: [{
      type: Input,
      args: ["tuiDropdownSelectionPosition"]
    }],
    tuiDropdownSelection: [{
      type: Input
    }]
  });
})();
var TuiDropdown = [TuiDropdownOptionsDirective, TuiDropdownDriverDirective, TuiDropdownDirective, TuiDropdownComponent, TuiDropdownOpen, TuiDropdownOpenLegacy, TuiDropdownPortal, TuiDropdownManual, TuiDropdownHover, TuiDropdownContext, TuiDropdownPosition, TuiDropdownPositionSided, TuiDropdownSelection];
function tuiDropdown(value) {
  return tuiDirectiveBinding(TuiDropdownDirective, "tuiDropdown", value, {});
}
function tuiDropdownEnabled(value) {
  return tuiDirectiveBinding(TuiDropdownOpen, "tuiDropdownEnabled", value, {});
}
function tuiDropdownOpen() {
  const open = tuiDirectiveBinding(TuiDropdownOpen, "tuiDropdownOpen", false, {});
  inject(TuiDropdownOpen).tuiDropdownOpenChange.pipe(takeUntilDestroyed()).subscribe((value) => open.set(value));
  return open;
}
var _TuiDropdownFixed = class _TuiDropdownFixed {
  constructor() {
    const override = tuiOverrideOptions({
      limitWidth: "fixed"
    }, TUI_DROPDOWN_DEFAULT_OPTIONS);
    override(inject(TUI_DROPDOWN_OPTIONS, {
      self: true,
      optional: true
    }), null);
  }
};
_TuiDropdownFixed.ɵfac = function TuiDropdownFixed_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiDropdownFixed)();
};
_TuiDropdownFixed.ɵdir = ɵɵdefineDirective({
  type: _TuiDropdownFixed,
  features: [ɵɵProvidersFeature([tuiDropdownOptionsProvider({})])]
});
var TuiDropdownFixed = _TuiDropdownFixed;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownFixed, [{
    type: Directive,
    args: [{
      standalone: true,
      providers: [tuiDropdownOptionsProvider({})]
    }]
  }], function() {
    return [];
  }, null);
})();
var _TuiDropdownAuto = class _TuiDropdownAuto {
  constructor() {
    inject(TUI_DROPDOWN_OPTIONS).limitWidth = "auto";
  }
};
_TuiDropdownAuto.ɵfac = function TuiDropdownAuto_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiDropdownAuto)();
};
_TuiDropdownAuto.ɵdir = ɵɵdefineDirective({
  type: _TuiDropdownAuto
});
var TuiDropdownAuto = _TuiDropdownAuto;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownAuto, [{
    type: Directive,
    args: [{
      standalone: true
    }]
  }], function() {
    return [];
  }, null);
})();
var _TuiDropdowns = class _TuiDropdowns extends TuiPortals {
};
_TuiDropdowns.ɵfac = /* @__PURE__ */ (() => {
  let ɵTuiDropdowns_BaseFactory;
  return function TuiDropdowns_Factory(__ngFactoryType__) {
    return (ɵTuiDropdowns_BaseFactory || (ɵTuiDropdowns_BaseFactory = ɵɵgetInheritedFactory(_TuiDropdowns)))(__ngFactoryType__ || _TuiDropdowns);
  };
})();
_TuiDropdowns.ɵcmp = ɵɵdefineComponent({
  type: _TuiDropdowns,
  selectors: [["tui-dropdowns"]],
  hostAttrs: [2, "position", "absolute", "width", "100%", "top", "0"],
  features: [ɵɵProvidersFeature([tuiAsPortal(TuiDropdownService)]), ɵɵInheritDefinitionFeature],
  decls: 2,
  vars: 0,
  consts: [["viewContainer", ""]],
  template: function TuiDropdowns_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵdomElementContainer(0, null, 0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var TuiDropdowns = _TuiDropdowns;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdowns, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-dropdowns",
      template: "<ng-container #viewContainer />",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiAsPortal(TuiDropdownService)],
      host: {
        style: "position: absolute; width: 100%; top: 0"
      }
    }]
  }], null, null);
})();
var _TuiWithDropdownOpen = class _TuiWithDropdownOpen {
};
_TuiWithDropdownOpen.ɵfac = function TuiWithDropdownOpen_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiWithDropdownOpen)();
};
_TuiWithDropdownOpen.ɵdir = ɵɵdefineDirective({
  type: _TuiWithDropdownOpen,
  features: [ɵɵHostDirectivesFeature([{
    directive: TuiDropdownOpen,
    inputs: ["tuiDropdownOpen", "open", "tuiDropdownEnabled", "tuiDropdownEnabled"],
    outputs: ["tuiDropdownOpenChange", "openChange"]
  }])]
});
var TuiWithDropdownOpen = _TuiWithDropdownOpen;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiWithDropdownOpen, [{
    type: Directive,
    args: [{
      standalone: true,
      hostDirectives: [{
        directive: TuiDropdownOpen,
        inputs: ["tuiDropdownOpen: open", "tuiDropdownEnabled"],
        outputs: ["tuiDropdownOpenChange: openChange"]
      }]
    }]
  }], null, null);
})();

export {
  TuiAccessor,
  TuiPositionAccessor,
  TuiRectAccessor,
  tuiProvideAccessor,
  tuiFallbackAccessor,
  tuiPositionAccessorFor,
  tuiRectAccessorFor,
  tuiAsPositionAccessor,
  tuiAsRectAccessor,
  TuiVehicle,
  tuiAsVehicle,
  TuiDriver,
  tuiAsDriver,
  TuiDriverDirective,
  TuiBreakpointService,
  TuiDarkThemeService,
  TuiFormatDateService,
  TuiPositionService,
  TuiVisualViewportService,
  tuiCheckFixedPosition,
  tuiGetViewportHeight,
  tuiGetViewportWidth,
  tuiGetWordRange,
  tuiNumberToStringWithoutExp,
  tuiGetFractionPartPadded,
  tuiFormatNumber,
  tuiStringHashToHsl,
  TuiDropdownDriver,
  TuiDropdownDriverDirective,
  TUI_DROPDOWN_COMPONENT,
  TUI_DROPDOWN_CONTEXT,
  TuiDropdownService,
  TUI_DROPDOWN_DEFAULT_OPTIONS,
  TUI_DROPDOWN_OPTIONS,
  tuiDropdownOptionsProvider,
  TuiDropdownOptionsDirective,
  TuiDropdownPosition,
  TuiDropdownDirective,
  TuiDropdownComponent,
  TuiDropdownContext,
  TUI_DROPDOWN_HOVER_DEFAULT_OPTIONS,
  TUI_DROPDOWN_HOVER_OPTIONS,
  tuiDropdownHoverOptionsProvider,
  TuiDropdownOpen,
  TuiDropdownHover,
  TuiDropdownManual,
  TuiDropdownOpenLegacy,
  TuiDropdownPortal,
  TuiDropdownPositionSided,
  TuiDropdownSelection,
  TuiDropdown,
  tuiDropdown,
  tuiDropdownEnabled,
  tuiDropdownOpen,
  TuiDropdownFixed,
  TuiDropdownAuto,
  TuiDropdowns,
  TuiWithDropdownOpen
};
//# sourceMappingURL=chunk-M27B4EMP.js.map
