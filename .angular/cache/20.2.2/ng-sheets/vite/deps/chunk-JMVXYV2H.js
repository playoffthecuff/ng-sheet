import {
  TuiPopoverService
} from "./chunk-2DYIH4P4.js";
import {
  PolymorpheusTemplate
} from "./chunk-XLE6HMXC.js";
import {
  TUI_IS_IOS
} from "./chunk-HABJD475.js";
import {
  tuiBlurNativeFocused,
  tuiCreateOptions,
  tuiGetClosestFocusable,
  tuiGetNativeFocused
} from "./chunk-2JKV5ZCN.js";
import {
  coerceBooleanProperty,
  tuiContainsOrAfter,
  tuiInjectElement,
  tuiIsHTMLElement
} from "./chunk-JSMOXT4E.js";
import {
  tuiIfMap,
  tuiZonefreeScheduler
} from "./chunk-VHLRK7UT.js";
import {
  WA_ANIMATION_FRAME,
  WA_WINDOW
} from "./chunk-5MMGTIYT.js";
import {
  tuiClamp,
  tuiIsPresent,
  tuiPx
} from "./chunk-XYVFFOET.js";
import {
  takeUntilDestroyed
} from "./chunk-KSDZZ3AX.js";
import {
  Directive,
  ElementRef,
  Input,
  NgZone,
  Pipe,
  Renderer2,
  TemplateRef,
  ViewContainerRef,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵdefineDirective,
  ɵɵdefinePipe,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵresolveWindow
} from "./chunk-H2LFSO26.js";
import {
  DOCUMENT,
  DestroyRef,
  InjectionToken,
  inject
} from "./chunk-VNPPOK4A.js";
import {
  Subject,
  distinctUntilChanged,
  endWith,
  ignoreElements,
  map,
  race,
  share,
  skipWhile,
  take,
  throttleTime,
  timer
} from "./chunk-WQ5CZGEH.js";

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-auto-focus.mjs
var AbstractTuiAutofocusHandler = class {
  constructor(el, options) {
    this.el = el;
    this.options = options;
  }
  get element() {
    const el = this.el.nativeElement.tagName.includes("-") ? this.el.nativeElement.querySelector(this.options.query) : this.el.nativeElement;
    return el || this.el.nativeElement;
  }
  get isTextFieldElement() {
    return this.element.matches(this.options.query);
  }
};
var TIMEOUT = 1e3;
var NG_ANIMATION_SELECTOR = ".ng-animating";
var TuiDefaultAutofocusHandler = class extends AbstractTuiAutofocusHandler {
  constructor(el, animationFrame$, zone, options) {
    super(el, options);
    this.animationFrame$ = animationFrame$;
    this.zone = zone;
  }
  setFocus() {
    if (this.isTextFieldElement) {
      race(timer(this.options.delay || TIMEOUT), this.animationFrame$.pipe(throttleTime(100, tuiZonefreeScheduler(this.zone)), map(() => this.element.closest(NG_ANIMATION_SELECTOR)), skipWhile(Boolean), take(1))).subscribe(() => this.element.focus({
        preventScroll: this.options.preventScroll
      }));
    } else {
      this.element.focus({
        preventScroll: true
      });
    }
  }
};
var TEXTFIELD_ATTRS = ["type", "inputMode", "autocomplete", "accept", "min", "max", "step", "pattern", "size", "maxlength"];
var TuiIosAutofocusHandler = class extends AbstractTuiAutofocusHandler {
  constructor(el, renderer, zone, win, options) {
    super(el, options);
    this.renderer = renderer;
    this.zone = zone;
    this.win = win;
  }
  setFocus() {
    if (this.isTextFieldElement) {
      this.zone.runOutsideAngular(() => this.iosWebkitAutofocus());
    } else {
      this.element.focus({
        preventScroll: true
      });
    }
  }
  iosWebkitAutofocus() {
    const fakeInput = this.makeFakeInput();
    const duration = this.getDurationTimeBeforeFocus();
    let fakeFocusTimeoutId = 0;
    let elementFocusTimeoutId = 0;
    const blurHandler = () => fakeInput.focus({
      preventScroll: true
    });
    const focusHandler = () => {
      clearTimeout(fakeFocusTimeoutId);
      fakeFocusTimeoutId = this.win.setTimeout(() => {
        clearTimeout(elementFocusTimeoutId);
        fakeInput.removeEventListener("blur", blurHandler);
        fakeInput.removeEventListener("focus", focusHandler);
        elementFocusTimeoutId = this.win.setTimeout(() => {
          this.element.focus({
            preventScroll: this.options.preventScroll
          });
          fakeInput.remove();
        }, duration);
      });
    };
    fakeInput.addEventListener("blur", blurHandler, {
      once: true
    });
    fakeInput.addEventListener("focus", focusHandler);
    if (this.insideDialog()) {
      this.win.document.body.appendChild(fakeInput);
    } else {
      this.element.parentElement?.appendChild(fakeInput);
    }
    fakeInput.focus({
      preventScroll: true
    });
  }
  /**
   * @note:
   * emulate textfield position in layout with cursor
   * before focus to real textfield element
   *
   * required note:
   * [fakeInput.readOnly = true] ~
   * don't use {readOnly: true} value, it's doesn't work for emulate autofill
   *
   * [fakeInput.style.opacity = 0] ~
   * don't use {opacity: 0}, sometimes it's doesn't work for emulate real input
   *
   * [fakeInput.style.fontSize = 16px] ~
   * disable possible auto zoom
   *
   * [fakeInput.style.top/left] ~
   * emulate position cursor before focus to real textfield element
   */
  makeFakeInput() {
    const fakeInput = this.renderer.createElement("input");
    const rect = this.element.getBoundingClientRect();
    this.patchFakeInputFromFocusableElement(fakeInput);
    fakeInput.style.height = tuiPx(rect.height);
    fakeInput.style.width = tuiPx(rect.width / 2);
    fakeInput.style.position = "fixed";
    fakeInput.style.zIndex = "-99999999";
    fakeInput.style.caretColor = "transparent";
    fakeInput.style.border = "none";
    fakeInput.style.outline = "none";
    fakeInput.style.color = "transparent";
    fakeInput.style.background = "transparent";
    fakeInput.style.cursor = "none";
    fakeInput.style.fontSize = tuiPx(16);
    fakeInput.style.top = tuiPx(rect.top);
    fakeInput.style.left = tuiPx(rect.left);
    return fakeInput;
  }
  getDurationTimeBeforeFocus() {
    return parseFloat(this.win.getComputedStyle(this.element).getPropertyValue("--tui-duration")) || 0;
  }
  /**
   * @note:
   * unfortunately, in older versions of iOS
   * there is a bug that the fake input cursor
   * will move along with the dialog animation
   * and then that dialog will be shaking
   */
  insideDialog() {
    return !!this.element.closest("tui-dialog");
  }
  /**
   * @note:
   * inherit basic attributes values from real input
   * for help iOS detect what do you want see on keyboard,
   * for example [inputMode=numeric, autocomplete=cc-number]
   */
  patchFakeInputFromFocusableElement(fakeInput) {
    TEXTFIELD_ATTRS.forEach((attr) => {
      const value = this.element.getAttribute(attr);
      if (tuiIsPresent(value)) {
        fakeInput.setAttribute(attr, value);
      }
    });
  }
};
var [TUI_AUTOFOCUS_OPTIONS, tuiAutoFocusOptionsProvider] = tuiCreateOptions({
  delay: NaN,
  query: "input, textarea, select, [contenteditable]",
  preventScroll: false
});
var TUI_AUTOFOCUS_HANDLER = new InjectionToken(ngDevMode ? "TUI_AUTOFOCUS_HANDLER" : "");
var TUI_AUTOFOCUS_PROVIDERS = [{
  provide: TUI_AUTOFOCUS_HANDLER,
  deps: [ElementRef, WA_ANIMATION_FRAME, Renderer2, NgZone, WA_WINDOW, TUI_IS_IOS, TUI_AUTOFOCUS_OPTIONS],
  // eslint-disable-next-line @typescript-eslint/max-params,max-params
  useFactory: (el, animationFrame$, renderer, zone, win, isIos, options) => isIos ? new TuiIosAutofocusHandler(el, renderer, zone, win, options) : new TuiDefaultAutofocusHandler(el, animationFrame$, zone, options)
}];
var _TuiAutoFocus = class _TuiAutoFocus {
  constructor() {
    this.handler = inject(TUI_AUTOFOCUS_HANDLER);
    this.options = inject(TUI_AUTOFOCUS_OPTIONS);
    this.destroyRef = inject(DestroyRef);
  }
  ngAfterViewInit() {
    if (this.autoFocus) {
      this.focus();
    }
  }
  focus() {
    if (Number.isNaN(this.options.delay)) {
      void Promise.resolve().then(() => this.handler.setFocus());
    } else {
      timer(this.options.delay).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => this.handler.setFocus());
    }
  }
};
_TuiAutoFocus.ɵfac = function TuiAutoFocus_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiAutoFocus)();
};
_TuiAutoFocus.ɵdir = ɵɵdefineDirective({
  type: _TuiAutoFocus,
  selectors: [["", "tuiAutoFocus", ""]],
  inputs: {
    autoFocus: [2, "tuiAutoFocus", "autoFocus", coerceBooleanProperty]
  },
  features: [ɵɵProvidersFeature(TUI_AUTOFOCUS_PROVIDERS)]
});
var TuiAutoFocus = _TuiAutoFocus;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAutoFocus, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiAutoFocus]",
      providers: TUI_AUTOFOCUS_PROVIDERS
    }]
  }], null, {
    autoFocus: [{
      type: Input,
      args: [{
        alias: "tuiAutoFocus",
        transform: coerceBooleanProperty
      }]
    }]
  });
})();
var TuiSynchronousAutofocusHandler = class extends AbstractTuiAutofocusHandler {
  setFocus() {
    this.element.focus({
      preventScroll: true
    });
  }
};

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-focus-trap.mjs
var _TuiFocusTrap = class _TuiFocusTrap {
  constructor() {
    this.doc = inject(DOCUMENT);
    this.el = tuiInjectElement();
    this.activeElement = null;
    this.initialized = false;
    Promise.resolve().then(() => {
      this.initialized = true;
      this.activeElement = tuiGetNativeFocused(this.doc);
      this.el.focus();
    });
  }
  ngOnDestroy() {
    tuiBlurNativeFocused(this.doc);
    Promise.resolve().then(() => {
      if (tuiIsHTMLElement(this.activeElement)) {
        this.activeElement.focus();
      }
    });
  }
  onFocusIn(node) {
    const {
      firstElementChild
    } = this.el;
    if (!tuiContainsOrAfter(this.el, node) && firstElementChild) {
      tuiGetClosestFocusable({
        initial: firstElementChild,
        root: this.el
      })?.focus();
    }
  }
};
_TuiFocusTrap.ɵfac = function TuiFocusTrap_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiFocusTrap)();
};
_TuiFocusTrap.ɵdir = ɵɵdefineDirective({
  type: _TuiFocusTrap,
  selectors: [["", "tuiFocusTrap", ""]],
  hostAttrs: ["tabIndex", "0"],
  hostBindings: function TuiFocusTrap_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("focusin.zoneless", function TuiFocusTrap_focusin_zoneless_HostBindingHandler($event) {
        return ctx.initialized && ctx.onFocusIn($event.target);
      }, ɵɵresolveWindow);
    }
  }
});
var TuiFocusTrap = _TuiFocusTrap;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFocusTrap, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiFocusTrap]",
      host: {
        tabIndex: "0",
        "(window:focusin.zoneless)": "initialized && onFocusIn($event.target)"
      }
    }]
  }], function() {
    return [];
  }, null);
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-let.mjs
var TuiLetContext = class {
  constructor(internalDirectiveInstance) {
    this.internalDirectiveInstance = internalDirectiveInstance;
  }
  get $implicit() {
    return this.internalDirectiveInstance.tuiLet;
  }
  get tuiLet() {
    return this.internalDirectiveInstance.tuiLet;
  }
};
var _TuiLet = class _TuiLet {
  constructor() {
    inject(ViewContainerRef).createEmbeddedView(inject(TemplateRef), new TuiLetContext(this));
  }
  /**
   * Asserts the correct type of the context for the template that `TuiLet` will render.
   *
   * The presence of this method is a signal to the Ivy template type-check compiler that the
   * `TuiLet` structural directive renders its template with a specific context type.
   */
  static ngTemplateContextGuard(_dir, _ctx) {
    return true;
  }
};
_TuiLet.ɵfac = function TuiLet_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiLet)();
};
_TuiLet.ɵdir = ɵɵdefineDirective({
  type: _TuiLet,
  selectors: [["", "tuiLet", ""]],
  inputs: {
    tuiLet: "tuiLet"
  }
});
var TuiLet = _TuiLet;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiLet, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiLet]"
    }]
  }], function() {
    return [];
  }, {
    tuiLet: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-popover.mjs
var _TuiPopoverDirective = class _TuiPopoverDirective extends PolymorpheusTemplate {
  constructor() {
    super(...arguments);
    this.service = inject(TuiPopoverService);
    this.open$ = new Subject();
    this.options = {};
    this.open = false;
    this.openChange = this.open$.pipe(distinctUntilChanged(), tuiIfMap(() => this.service.open(this, this.options).pipe(ignoreElements(), endWith(false))), share());
  }
  ngOnChanges() {
    this.open$.next(this.open);
  }
};
_TuiPopoverDirective.ɵfac = /* @__PURE__ */ (() => {
  let ɵTuiPopoverDirective_BaseFactory;
  return function TuiPopoverDirective_Factory(__ngFactoryType__) {
    return (ɵTuiPopoverDirective_BaseFactory || (ɵTuiPopoverDirective_BaseFactory = ɵɵgetInheritedFactory(_TuiPopoverDirective)))(__ngFactoryType__ || _TuiPopoverDirective);
  };
})();
_TuiPopoverDirective.ɵdir = ɵɵdefineDirective({
  type: _TuiPopoverDirective,
  standalone: false,
  features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature]
});
var TuiPopoverDirective = _TuiPopoverDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPopoverDirective, [{
    type: Directive
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-repeat-times.mjs
var MAX_VALUE = 65536;
var TuiRepeatTimesContext = class {
  constructor($implicit) {
    this.$implicit = $implicit;
  }
};
var _TuiRepeatTimes = class _TuiRepeatTimes {
  constructor() {
    this.viewContainer = inject(ViewContainerRef);
    this.templateRef = inject(TemplateRef);
  }
  set tuiRepeatTimesOf(count) {
    const safeCount = Math.floor(tuiClamp(count, 0, MAX_VALUE));
    const {
      length
    } = this.viewContainer;
    if (count < length) {
      this.removeContainers(length - count);
    } else {
      this.addContainers(safeCount);
    }
  }
  addContainers(count) {
    for (let index = this.viewContainer.length; index < count; index++) {
      this.viewContainer.createEmbeddedView(this.templateRef, new TuiRepeatTimesContext(index));
    }
  }
  removeContainers(amount) {
    for (let index = 0; index < amount; index++) {
      this.viewContainer.remove();
    }
  }
};
_TuiRepeatTimes.ɵfac = function TuiRepeatTimes_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiRepeatTimes)();
};
_TuiRepeatTimes.ɵdir = ɵɵdefineDirective({
  type: _TuiRepeatTimes,
  selectors: [["", "tuiRepeatTimes", "", "tuiRepeatTimesOf", ""]],
  inputs: {
    tuiRepeatTimesOf: "tuiRepeatTimesOf"
  }
});
var TuiRepeatTimes = _TuiRepeatTimes;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiRepeatTimes, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiRepeatTimes][tuiRepeatTimesOf]"
    }]
  }], null, {
    tuiRepeatTimesOf: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-pipes-mapper.mjs
var _TuiMapperPipe = class _TuiMapperPipe {
  /**
   * Maps object to an arbitrary result through a mapper function
   *
   * @param value an item to transform
   * @param mapper a mapping function
   * @param args arbitrary number of additional arguments
   */
  transform(value, mapper, ...args) {
    return mapper(value, ...args);
  }
};
_TuiMapperPipe.ɵfac = function TuiMapperPipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiMapperPipe)();
};
_TuiMapperPipe.ɵpipe = ɵɵdefinePipe({
  name: "tuiMapper",
  type: _TuiMapperPipe,
  pure: true
});
var TuiMapperPipe = _TuiMapperPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiMapperPipe, [{
    type: Pipe,
    args: [{
      standalone: true,
      name: "tuiMapper"
    }]
  }], null, null);
})();

export {
  AbstractTuiAutofocusHandler,
  TuiDefaultAutofocusHandler,
  TuiIosAutofocusHandler,
  TUI_AUTOFOCUS_OPTIONS,
  tuiAutoFocusOptionsProvider,
  TUI_AUTOFOCUS_HANDLER,
  TUI_AUTOFOCUS_PROVIDERS,
  TuiAutoFocus,
  TuiSynchronousAutofocusHandler,
  TuiFocusTrap,
  TuiLetContext,
  TuiLet,
  TuiPopoverDirective,
  TuiRepeatTimesContext,
  TuiRepeatTimes,
  TuiMapperPipe
};
//# sourceMappingURL=chunk-JMVXYV2H.js.map
