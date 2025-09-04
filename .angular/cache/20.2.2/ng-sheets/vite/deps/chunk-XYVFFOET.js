import {
  toSignal
} from "./chunk-KSDZZ3AX.js";
import {
  FormArray,
  FormGroup
} from "./chunk-7FISS3KI.js";
import {
  QueryList,
  VERSION,
  createComponent
} from "./chunk-H2LFSO26.js";
import {
  DestroyRef,
  EnvironmentInjector,
  InjectionToken,
  effect,
  inject,
  isSignal,
  signal
} from "./chunk-VNPPOK4A.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-constants.mjs
var TUI_ALLOW_SIGNAL_WRITES = parseInt(VERSION.major, 10) >= 19 ? {} : { allowSignalWrites: true };
var rect = {
  bottom: 0,
  height: 0,
  left: 0,
  right: 0,
  top: 0,
  width: 0,
  x: 0,
  y: 0
};
var EMPTY_QUERY = new QueryList();
var EMPTY_ARRAY = [];
var EMPTY_FUNCTION = () => {
};
var EMPTY_CLIENT_RECT = __spreadProps(__spreadValues({}, rect), {
  toJSON: () => rect
});
var TUI_FALSE_HANDLER = () => false;
var TUI_TRUE_HANDLER = () => true;
function bothEmpty(item1, item2) {
  return Array.isArray(item1) && Array.isArray(item2) && !item1.length && !item2.length;
}
var TUI_DEFAULT_MATCHER = (item, search, stringify = String) => stringify(item).toLowerCase().includes(search.toLowerCase());
var TUI_STRICT_MATCHER = (item, search, stringify = String) => stringify(item).toLowerCase() === search.toLowerCase();
var TUI_DEFAULT_IDENTITY_MATCHER = (item1, item2) => item1 === item2 || bothEmpty(item1, item2);
var TUI_DIGIT_REGEXP = /\d/;
var TUI_NON_DIGIT_REGEXP = /\D/;
var TUI_NON_DIGITS_REGEXP = /\D+/g;
var svgNodeFilter = {
  acceptNode(node) {
    return "ownerSVGElement" in node ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
  }
};
var CHAR_NO_BREAK_SPACE = " ";
var CHAR_EN_DASH = "–";
var CHAR_EM_DASH = "—";
var CHAR_LAQUO = "«";
var CHAR_RAQUO = "»";
var CHAR_HYPHEN = "-";
var CHAR_MINUS = "−";
var CHAR_PLUS = "+";
var CHAR_BULLET = "•";
var CHAR_ELLIPSIS = "…";
var CHAR_CURRENCY_SIGN = "¤";
var CHAR_ZERO_WIDTH_SPACE = "​";
var TUI_USED_ICONS = [
  "@tui.mir",
  "@tui.visa",
  "@tui.electron",
  "@tui.mastercard",
  "@tui.maestro",
  "@tui.amex",
  "@tui.diners-club",
  "@tui.discover",
  "@tui.humo",
  "@tui.jcb",
  "@tui.ru-pay",
  "@tui.union-pay",
  "@tui.uzcard",
  "@tui.verve",
  "@tui.search",
  "@tui.sun",
  "@tui.moon",
  "@tui.code",
  "@tui.menu",
  "@tui.copy",
  "@tui.check",
  "@tui.link",
  "@tui.external-link",
  "@tui.languages",
  "@tui.shrink",
  "@tui.expand",
  "@tui.a-large-small",
  "@tui.arrow-right-left",
  "@tui.eye-off",
  "@tui.eye",
  "@tui.grip-vertical",
  "@tui.chevron-up",
  "@tui.chevron-down",
  "@tui.chevrons-up-down",
  "@tui.info",
  "@tui.circle-check",
  "@tui.circle-x",
  "@tui.circle-alert",
  "@tui.circle-help",
  "@tui.x",
  "@tui.chevron-right",
  "@tui.ellipsis",
  "@tui.chevron-left",
  "@tui.clock",
  "@tui.trash",
  "@tui.minus",
  "@tui.file",
  "@tui.calendar",
  "@tui.plus",
  "@tui.phone",
  "@tui.heart",
  "@tui.heart-filled",
  "@tui.star",
  "@tui.rotate-ccw-square",
  "@tui.arrow-left",
  "@tui.arrow-right",
  "@tui.minimize",
  "@tui.filter",
  "@tui.layout-grid",
  "@tui.move-up-right",
  "@tui.move-right",
  "@tui.move-down-right",
  "@tui.move-down",
  "@tui.move-down-left",
  "@tui.move-left",
  "@tui.move-up-left",
  "@tui.move-up"
];
var TUI_VERSION = "4.52.0";

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-utils-math.mjs
function tuiClamp(value, min, max) {
  ngDevMode && console.assert(!Number.isNaN(value));
  ngDevMode && console.assert(!Number.isNaN(min));
  ngDevMode && console.assert(!Number.isNaN(max));
  ngDevMode && console.assert(max >= min);
  return Math.min(max, Math.max(min, value));
}
function tuiInRange(value, fromInclude, toExclude) {
  ngDevMode && console.assert(!Number.isNaN(value));
  ngDevMode && console.assert(!Number.isNaN(fromInclude));
  ngDevMode && console.assert(!Number.isNaN(toExclude));
  ngDevMode && console.assert(fromInclude < toExclude);
  return value >= fromInclude && value < toExclude;
}
function tuiNormalizeToIntNumber(value, min, max) {
  ngDevMode && console.assert(Number.isInteger(min));
  ngDevMode && console.assert(Number.isInteger(max));
  ngDevMode && console.assert(min <= max);
  if (Number.isNaN(value) || value <= min) {
    return min;
  }
  if (value >= max) {
    return max;
  }
  return Math.round(value);
}
function tuiQuantize(value, quantum) {
  ngDevMode && console.assert(Number.isFinite(value));
  ngDevMode && console.assert(Number.isFinite(quantum));
  ngDevMode && console.assert(quantum > 0);
  const remainder = value % quantum;
  return remainder < quantum / 2 ? value - remainder : value + quantum - remainder;
}
var MAX_PRECISION = 292;
function calculate(value, precision, func) {
  if (value === Infinity) {
    return value;
  }
  ngDevMode && console.assert(!Number.isNaN(value), "Value must be number");
  ngDevMode && console.assert(Number.isInteger(precision), "Precision must be integer");
  precision = Math.min(precision, MAX_PRECISION);
  const [significand, exponent = ""] = `${value}`.split("e");
  const roundedInt = func(Number(`${significand}e${Number(exponent) + precision}`));
  ngDevMode && console.assert(Number.isSafeInteger(roundedInt), "Impossible to correctly round such a large number");
  const processedPair = `${roundedInt}e`.split("e");
  return Number(`${processedPair[0]}e${Number(processedPair[1]) - precision}`);
}
function tuiRound(value, precision = 0) {
  return calculate(value, precision, Math.round);
}
function tuiCeil(value, precision = 0) {
  return calculate(value, precision, Math.ceil);
}
function tuiFloor(value, precision = 0) {
  return calculate(value, precision, Math.floor);
}
function tuiTrunc(value, precision = 0) {
  return calculate(value, precision, Math.trunc);
}
function tuiIsSafeToRound(value, precision = 0) {
  return Number.isSafeInteger(Math.trunc(value * 10 ** precision));
}
function tuiRoundWith({ value, precision, method }) {
  switch (method) {
    case "ceil":
      return tuiCeil(value, precision);
    case "floor":
      return tuiFloor(value, precision);
    case "round":
      return tuiRound(value, precision);
    default:
      return tuiTrunc(value, precision);
  }
}
function tuiSum(...args) {
  return args.reduce((a, b) => a + b, 0);
}
function tuiToInt(bool) {
  return bool ? 1 : 0;
}
function tuiToInteger(value) {
  return parseInt(value, 10);
}
function tuiToRadians(deg) {
  return deg * Math.PI / 180;
}

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-utils-miscellaneous.mjs
function tuiArrayRemove(array, index) {
  return array.slice(0, Math.max(index, 0)).concat(array.slice(Math.max(index + 1, 0)));
}
function tuiArrayShallowEquals(a, b) {
  return a.length === b.length && a.every((item, index) => item === b[index]);
}
function tuiArrayToggle(array, item, identity) {
  const index = identity ? array.findIndex((it) => identity(it, item)) : array.indexOf(item);
  return index === -1 ? [...array, item] : tuiArrayRemove(array, index);
}
var changeDateSeparator = (dateString, newDateSeparator) => dateString.replaceAll(/[^0-9A-Za-zА-Яа-я]/gi, newDateSeparator);
function tuiIsControlEmpty({ value = null }) {
  return value === null || value === "" || Array.isArray(value) && !value.length;
}
function tuiCountFilledControls(control) {
  if (control instanceof FormArray) {
    return control.controls.reduce((acc, nestedControl) => acc + tuiCountFilledControls(nestedControl), 0);
  }
  if (control instanceof FormGroup) {
    return Object.values(control.controls).reduce((acc, nestedControl) => acc + tuiCountFilledControls(nestedControl), 0);
  }
  return tuiToInt(!tuiIsControlEmpty(control));
}
function tuiCreateToken(defaults) {
  return defaults === void 0 ? new InjectionToken("") : tuiCreateTokenFromFactory(() => defaults);
}
function tuiCreateTokenFromFactory(factory) {
  return factory ? new InjectionToken("", { factory }) : new InjectionToken("");
}
function tuiIsString(value) {
  return typeof value === "string";
}
function tuiDefaultSort(x, y) {
  if (x === y) {
    return 0;
  }
  if (tuiIsString(x) && tuiIsString(y)) {
    return x.localeCompare(y);
  }
  return x > y ? 1 : -1;
}
function tuiDirectiveBinding(token, key, initial, options = { self: true }) {
  const result = isSignal(initial) ? initial : signal(initial);
  const directive = inject(token, options);
  const output = directive[`${key.toString()}Change`];
  let previous;
  effect(() => {
    const value = result();
    if (previous === value) {
      return;
    }
    if (isSignal(directive[key])) {
      directive[key].set(value);
    } else {
      directive[key] = value;
    }
    directive.ngOnChanges?.({});
    output?.emit?.(value);
    previous = value;
  }, TUI_ALLOW_SIGNAL_WRITES);
  return result;
}
function tuiDirectiveListener(token, key, options = { self: true }) {
  const prop = inject(token, options)?.[key];
  return isSignal(prop) ? prop : toSignal(prop);
}
function tuiDistanceBetweenTouches({ touches }) {
  return Math.hypot((touches[0]?.clientX ?? 0) - (touches[1]?.clientX ?? 0), (touches[0]?.clientY ?? 0) - (touches[1]?.clientY ?? 0));
}
function tuiEaseInOutQuad(t) {
  ngDevMode && console.assert(t >= 0 && t <= 1, "Input must be between 0 and 1 inclusive but received ", t);
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}
function tuiFlatLength(array) {
  return array.reduce((count, section) => count + section.length, 0);
}
var IFRAME = "position: fixed; visibility: hidden; pointer-events: none";
var BODY = "height: fit-content; line-height: 1em;";
var CLASS = "tui-font-size-watcher";
function tuiFontSizeWatcher(callback, win = window) {
  if (win.document.querySelector(`.${CLASS}`)) {
    return () => {
    };
  }
  const iframe = win.document.createElement("iframe");
  const resize = () => {
    const { innerWidth, outerWidth, devicePixelRatio } = win;
    iframe.width = `${innerWidth === outerWidth ? innerWidth : innerWidth / devicePixelRatio}`;
  };
  win.document.body.append(iframe);
  win.addEventListener("resize", resize);
  const doc = iframe.contentWindow?.document;
  const observer = new ResizeObserver(() => callback(doc?.body.offsetHeight || 0));
  iframe.setAttribute("class", CLASS);
  iframe.setAttribute("style", IFRAME);
  doc?.documentElement.style.setProperty("font", "-apple-system-body");
  doc?.body.setAttribute("style", BODY);
  doc?.body.insertAdjacentText("beforeend", ".".repeat(1e3));
  observer.observe(doc?.body || iframe);
  resize();
  return () => {
    observer.disconnect();
    iframe.remove();
    win.removeEventListener("resize", resize);
  };
}
function tuiGetOriginalArrayFromQueryList(queryList) {
  let array = [];
  queryList.find((_item, _index, originalArray) => {
    array = originalArray;
    return true;
  });
  return array;
}
function tuiIsFalsy(value) {
  return !value;
}
function tuiIsNumber(value) {
  return typeof value === "number";
}
function tuiIsObject(value) {
  return typeof value === "object" && !!value;
}
function tuiIsPresent(value) {
  return value !== null && value !== void 0;
}
function tuiIsValidUrl(url) {
  return new RegExp(
    String.raw`^([a-zA-Z]+:\/\/)?` + // protocol
    String.raw`((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|localhost|` + // domain name
    String.raw`((\d{1,3}\.){3}\d{1,3}))` + // OR IP (v4) address
    String.raw`(\:\d+)?(\/[-a-z\d%_.~+\:]*)*` + // port and path
    String.raw`(\?[)(;&a-z\d%_.~+=-]*)?` + // query string
    String.raw`(\#[-a-z\d_]*)?$`,
    // fragment locator
    "i"
  ).test(url);
}
function tuiMarkControlAsTouchedAndValidate(control) {
  if (control instanceof FormArray) {
    control.controls.forEach((nestedControl) => {
      tuiMarkControlAsTouchedAndValidate(nestedControl);
    });
  }
  if (control instanceof FormGroup) {
    Object.values(control.controls).forEach((nestedControl) => {
      tuiMarkControlAsTouchedAndValidate(nestedControl);
    });
  }
  control.markAsTouched();
  control.updateValueAndValidity();
}
function tuiNullableSame(a, b, handler) {
  if (a === null) {
    return b === null;
  }
  if (b === null) {
    return false;
  }
  return handler(a, b);
}
function tuiObfuscate(value, symbol) {
  if (!value) {
    return value;
  }
  const match = /[\p{L}\p{N}]/gu;
  let visible = 0;
  let obfuscateIndexes = getObfuscateIndexes(value, match);
  if (obfuscateIndexes.length >= 8) {
    visible = 2;
  } else if (obfuscateIndexes.length >= 4) {
    visible = 1;
  }
  obfuscateIndexes = obfuscateIndexes.slice(visible, obfuscateIndexes.length);
  const lastIndex = obfuscateIndexes.length - visible;
  obfuscateIndexes = obfuscateIndexes.slice(0, lastIndex < 0 ? 0 : lastIndex);
  const result = value.split("");
  obfuscateIndexes.forEach((index) => {
    result[index] = symbol;
  });
  return result.join("");
}
function getObfuscateIndexes(value, match) {
  if (!match) {
    return Array.from({ length: value.length }).map((_, index) => index);
  }
  const obfuscateIndexes = [];
  let matchResult;
  let count = 0;
  while ((matchResult = match.exec(value)) !== null && count < value.length) {
    const start = matchResult.index;
    const end = match.lastIndex - 1;
    for (let i = start; i <= end; i++) {
      obfuscateIndexes.push(i);
    }
    count++;
  }
  return obfuscateIndexes;
}
function tuiProvide(provide, useExisting, multi = false) {
  return { provide, useExisting, multi };
}
function tuiProvideOptions(provide, options, fallback) {
  return {
    provide,
    useFactory: () => __spreadValues(__spreadValues({}, inject(provide, { optional: true, skipSelf: true }) || fallback), inject(options, { optional: true }) || // @ts-ignore
    (typeof options === "function" ? options() : options))
  };
}
function decorateMethod(originalMethod) {
  let previousArgs = [];
  let originalFnWasCalledLeastAtOnce = false;
  let pureValue;
  return function tuiPureMethodPatched(...args) {
    const isPure = originalFnWasCalledLeastAtOnce && previousArgs.length === args.length && args.every((arg, index) => arg === previousArgs[index]);
    if (isPure) {
      return pureValue;
    }
    previousArgs = args;
    pureValue = originalMethod.apply(this, args);
    originalFnWasCalledLeastAtOnce = true;
    return pureValue;
  };
}
function decorateGetter(originalGetter, propertyKey, enumerable = true) {
  return function tuiPureGetterPatched() {
    const value = originalGetter.call(this);
    Object.defineProperty(this, propertyKey, { enumerable, value });
    return value;
  };
}
function tuiPure(target, propertyKeyOrContext, descriptor) {
  if (typeof target === "function") {
    const context = propertyKeyOrContext;
    if (context.kind === "getter") {
      return decorateGetter(target, context.name);
    }
    if (context.kind === "method") {
      return decorateMethod(target);
    }
    throw new TuiPureException();
  }
  const { get, enumerable, value } = descriptor;
  const propertyKey = propertyKeyOrContext;
  if (get) {
    return {
      configurable: true,
      enumerable,
      get: decorateGetter(get, propertyKey, enumerable)
    };
  }
  if (typeof value !== "function") {
    throw new TuiPureException();
  }
  const original = value;
  return {
    configurable: true,
    enumerable,
    get() {
      let previousArgs = [];
      let originalFnWasCalledLeastAtOnce = false;
      let pureValue;
      const patched = (...args) => {
        const isPure = originalFnWasCalledLeastAtOnce && previousArgs.length === args.length && args.every((arg, index) => arg === previousArgs[index]);
        if (isPure) {
          return pureValue;
        }
        previousArgs = args;
        pureValue = original.apply(this, args);
        originalFnWasCalledLeastAtOnce = true;
        return pureValue;
      };
      Object.defineProperty(this, propertyKey, {
        configurable: true,
        value: patched
      });
      return patched;
    }
  };
}
var TuiPureException = class extends Error {
  constructor() {
    super(ngDevMode ? "tuiPure can only be used with functions or getters" : "");
  }
};
function tuiPx(value) {
  ngDevMode && console.assert(Number.isFinite(value), "Value must be finite number");
  return `${value}px`;
}
function tuiUniqBy(array, key) {
  return Array.from(array.reduce((map, item) => map.has(item[key]) ? map : map.set(item[key], item), /* @__PURE__ */ new Map()).values());
}
var MAP = new InjectionToken(ngDevMode ? "MAP" : "", {
  factory: () => {
    const map = /* @__PURE__ */ new Map();
    inject(DestroyRef).onDestroy(() => map.forEach((component) => component.destroy()));
    return map;
  }
});
function tuiWithStyles(component) {
  const map = inject(MAP);
  const environmentInjector = inject(EnvironmentInjector);
  if (!map.has(component)) {
    map.set(component, createComponent(component, { environmentInjector }));
  }
  return void 0;
}

export {
  TUI_ALLOW_SIGNAL_WRITES,
  EMPTY_QUERY,
  EMPTY_ARRAY,
  EMPTY_FUNCTION,
  EMPTY_CLIENT_RECT,
  TUI_FALSE_HANDLER,
  TUI_TRUE_HANDLER,
  TUI_DEFAULT_MATCHER,
  TUI_STRICT_MATCHER,
  TUI_DEFAULT_IDENTITY_MATCHER,
  TUI_DIGIT_REGEXP,
  TUI_NON_DIGIT_REGEXP,
  TUI_NON_DIGITS_REGEXP,
  svgNodeFilter,
  CHAR_NO_BREAK_SPACE,
  CHAR_EN_DASH,
  CHAR_EM_DASH,
  CHAR_LAQUO,
  CHAR_RAQUO,
  CHAR_HYPHEN,
  CHAR_MINUS,
  CHAR_PLUS,
  CHAR_BULLET,
  CHAR_ELLIPSIS,
  CHAR_CURRENCY_SIGN,
  CHAR_ZERO_WIDTH_SPACE,
  TUI_USED_ICONS,
  TUI_VERSION,
  tuiClamp,
  tuiInRange,
  tuiNormalizeToIntNumber,
  tuiQuantize,
  tuiRound,
  tuiCeil,
  tuiFloor,
  tuiTrunc,
  tuiIsSafeToRound,
  tuiRoundWith,
  tuiSum,
  tuiToInt,
  tuiToInteger,
  tuiToRadians,
  tuiArrayRemove,
  tuiArrayShallowEquals,
  tuiArrayToggle,
  changeDateSeparator,
  tuiIsControlEmpty,
  tuiCountFilledControls,
  tuiCreateToken,
  tuiCreateTokenFromFactory,
  tuiIsString,
  tuiDefaultSort,
  tuiDirectiveBinding,
  tuiDirectiveListener,
  tuiDistanceBetweenTouches,
  tuiEaseInOutQuad,
  tuiFlatLength,
  tuiFontSizeWatcher,
  tuiGetOriginalArrayFromQueryList,
  tuiIsFalsy,
  tuiIsNumber,
  tuiIsObject,
  tuiIsPresent,
  tuiIsValidUrl,
  tuiMarkControlAsTouchedAndValidate,
  tuiNullableSame,
  tuiObfuscate,
  tuiProvide,
  tuiProvideOptions,
  tuiPure,
  TuiPureException,
  tuiPx,
  tuiUniqBy,
  tuiWithStyles
};
//# sourceMappingURL=chunk-XYVFFOET.js.map
