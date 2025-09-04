import {
  PolymorpheusComponent
} from "./chunk-XLE6HMXC.js";
import {
  TUI_IS_MOBILE
} from "./chunk-HABJD475.js";
import {
  tuiInjectElement,
  tuiIsElement
} from "./chunk-JSMOXT4E.js";
import {
  tuiTakeUntilDestroyed,
  tuiTypedFromEvent,
  tuiWatch,
  tuiZoneOptimized,
  tuiZonefree,
  tuiZonefreeScheduler
} from "./chunk-VHLRK7UT.js";
import {
  Meta
} from "./chunk-BJJ62CP2.js";
import {
  WA_ANIMATION_FRAME,
  WA_PERFORMANCE
} from "./chunk-5MMGTIYT.js";
import {
  EMPTY_FUNCTION,
  TUI_FALSE_HANDLER,
  TUI_TRUE_HANDLER,
  tuiClamp,
  tuiEaseInOutQuad,
  tuiProvide
} from "./chunk-XYVFFOET.js";
import {
  toSignal
} from "./chunk-KSDZZ3AX.js";
import {
  NG_VALIDATORS,
  Validators
} from "./chunk-7FISS3KI.js";
import {
  Directive,
  Injectable,
  Input,
  NgZone,
  Output,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵdefineDirective,
  ɵɵinvalidFactory,
  ɵɵlistener
} from "./chunk-H2LFSO26.js";
import {
  DOCUMENT,
  INJECTOR$1,
  InjectionToken,
  inject,
  ɵɵdefineInjectable
} from "./chunk-VNPPOK4A.js";
import {
  BehaviorSubject,
  Observable,
  defer,
  delay,
  distinctUntilChanged,
  endWith,
  filter,
  map,
  merge,
  of,
  switchMap,
  takeUntil,
  tap,
  timer
} from "./chunk-WQ5CZGEH.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-native-validator.mjs
var _TuiNativeValidator = class _TuiNativeValidator {
  constructor() {
    this.el = tuiInjectElement();
    this.control$ = new BehaviorSubject(null);
    this.sub = this.control$.pipe(switchMap((control) => control?.events || of(null)), delay(0), tuiZonefree(), tuiTakeUntilDestroyed()).subscribe(() => this.handleValidation());
    this.tuiNativeValidator = "Invalid";
  }
  validate(control) {
    this.control$.next(control);
    return null;
  }
  handleValidation() {
    const invalid = !!this.control$.value?.touched && this.control$.value?.invalid;
    this.el.closest("tui-textfield")?.classList.toggle("tui-invalid", invalid);
    this.el.setCustomValidity?.(invalid ? this.tuiNativeValidator : "");
  }
};
_TuiNativeValidator.ɵfac = function TuiNativeValidator_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiNativeValidator)();
};
_TuiNativeValidator.ɵdir = ɵɵdefineDirective({
  type: _TuiNativeValidator,
  selectors: [["", "tuiNativeValidator", ""]],
  hostBindings: function TuiNativeValidator_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("focusout", function TuiNativeValidator_focusout_HostBindingHandler() {
        return ctx.handleValidation();
      });
    }
  },
  inputs: {
    tuiNativeValidator: "tuiNativeValidator"
  },
  features: [ɵɵProvidersFeature([tuiProvide(NG_VALIDATORS, _TuiNativeValidator, true)])]
});
var TuiNativeValidator = _TuiNativeValidator;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiNativeValidator, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiNativeValidator]",
      providers: [tuiProvide(NG_VALIDATORS, TuiNativeValidator, true)],
      host: {
        "(focusout)": "handleValidation()"
      }
    }]
  }], null, {
    tuiNativeValidator: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-validator.mjs
var _TuiValidator = class _TuiValidator {
  constructor() {
    this.onChange = EMPTY_FUNCTION;
    this.validate = Validators.nullValidator;
  }
  registerOnValidatorChange(onChange) {
    this.onChange = onChange;
  }
  ngOnChanges() {
    this.onChange();
  }
};
_TuiValidator.ɵfac = function TuiValidator_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiValidator)();
};
_TuiValidator.ɵdir = ɵɵdefineDirective({
  type: _TuiValidator,
  selectors: [["", "tuiValidator", ""]],
  inputs: {
    validate: [0, "tuiValidator", "validate"]
  },
  features: [ɵɵProvidersFeature([tuiProvide(NG_VALIDATORS, _TuiValidator, true)]), ɵɵNgOnChangesFeature]
});
var TuiValidator = _TuiValidator;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiValidator, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiValidator]",
      inputs: ["validate: tuiValidator"],
      providers: [tuiProvide(NG_VALIDATORS, TuiValidator, true)]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-services.mjs
var _TuiIdService = class _TuiIdService {
  generate() {
    return `tui_${_TuiIdService.autoId++}${Date.now()}`;
  }
};
_TuiIdService.autoId = 0;
_TuiIdService.ɵfac = function TuiIdService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiIdService)();
};
_TuiIdService.ɵprov = ɵɵdefineInjectable({
  token: _TuiIdService,
  factory: _TuiIdService.ɵfac,
  providedIn: "root"
});
var TuiIdService = _TuiIdService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiIdService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
function tuiInjectId() {
  return inject(TuiIdService).generate();
}
var _TuiPopoverService = class _TuiPopoverService {
  constructor(items, component, options = {}) {
    this.options = options;
    this.id = inject(TuiIdService);
    this.component = new PolymorpheusComponent(component, inject(INJECTOR$1));
    this.items$ = inject(items);
  }
  open(content, options = {}) {
    return new Observable((observer) => {
      const item = __spreadProps(__spreadValues(__spreadValues({}, this.options), options), {
        content,
        $implicit: observer,
        component: this.component,
        createdAt: Date.now(),
        id: this.id.generate(),
        completeWith: (result) => {
          observer.next(result);
          observer.complete();
        }
      });
      this.items$.next([...this.items$.value, item]);
      return () => {
        this.items$.next(this.items$.value.filter((value) => value !== item));
      };
    });
  }
};
_TuiPopoverService.ɵfac = function TuiPopoverService_Factory(__ngFactoryType__) {
  ɵɵinvalidFactory();
};
_TuiPopoverService.ɵprov = ɵɵdefineInjectable({
  token: _TuiPopoverService,
  factory: _TuiPopoverService.ɵfac
});
var TuiPopoverService = _TuiPopoverService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPopoverService, [{
    type: Injectable
  }], function() {
    return [{
      type: void 0
    }, {
      type: void 0
    }, {
      type: void 0
    }];
  }, null);
})();
function tuiAsPopover(popover) {
  return tuiProvide(TuiPopoverService, popover);
}
var SCROLL_TIME = 300;
function getX(elementOrWindow) {
  return "scrollX" in elementOrWindow ? elementOrWindow.scrollX : elementOrWindow.scrollLeft;
}
function getY(elementOrWindow) {
  return "scrollY" in elementOrWindow ? elementOrWindow.scrollY : elementOrWindow.scrollTop;
}
var _TuiScrollService = class _TuiScrollService {
  constructor() {
    this.performanceRef = inject(WA_PERFORMANCE);
    this.animationFrame$ = inject(WA_ANIMATION_FRAME);
    this.zone = inject(NgZone);
  }
  scroll$(elementOrWindow, scrollTop, scrollLeft = getX(elementOrWindow), duration = SCROLL_TIME) {
    ngDevMode && console.assert(duration >= 0, "duration cannot be negative");
    ngDevMode && console.assert(scrollTop >= 0, "scrollTop cannot be negative");
    ngDevMode && console.assert(scrollLeft >= 0, "scrollLeft cannot be negative");
    const initialTop = getY(elementOrWindow);
    const initialLeft = getX(elementOrWindow);
    const deltaTop = scrollTop - initialTop;
    const deltaLeft = scrollLeft - initialLeft;
    const observable = !duration ? of([scrollTop, scrollLeft]) : defer(() => of(this.performanceRef.now())).pipe(switchMap((start) => this.animationFrame$.pipe(map((now) => now - start))), map((elapsed) => tuiEaseInOutQuad(tuiClamp(elapsed / duration, 0, 1))), map((percent) => [initialTop + deltaTop * percent, initialLeft + deltaLeft * percent]), takeUntil(timer(duration, tuiZonefreeScheduler(this.zone))), endWith([scrollTop, scrollLeft]));
    return observable.pipe(tap(([scrollTop2, scrollLeft2]) => {
      elementOrWindow.scrollTo?.(scrollLeft2, scrollTop2);
    }));
  }
};
_TuiScrollService.ɵfac = function TuiScrollService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiScrollService)();
};
_TuiScrollService.ɵprov = ɵɵdefineInjectable({
  token: _TuiScrollService,
  factory: _TuiScrollService.ɵfac,
  providedIn: "root"
});
var TuiScrollService = _TuiScrollService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiScrollService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var TUI_THEME_COLOR = new InjectionToken(ngDevMode ? "TUI_THEME_COLOR" : "", {
  factory: () => inject(Meta).getTag('name="theme-color"')?.content ?? ""
});
var _TuiThemeColorService = class _TuiThemeColorService {
  constructor() {
    this.current = inject(TUI_THEME_COLOR);
    this.doc = inject(DOCUMENT);
    this.meta = inject(Meta);
    this.color = this.current;
  }
  get color() {
    return this.current;
  }
  set color(content) {
    this.current = content;
    this.meta.updateTag({
      name: "theme-color",
      content
    });
    this.doc.documentElement.style.setProperty("--tui-theme-color", content);
  }
};
_TuiThemeColorService.ɵfac = function TuiThemeColorService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiThemeColorService)();
};
_TuiThemeColorService.ɵprov = ɵɵdefineInjectable({
  token: _TuiThemeColorService,
  factory: _TuiThemeColorService.ɵfac,
  providedIn: "root"
});
var TuiThemeColorService = _TuiThemeColorService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiThemeColorService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [];
  }, null);
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-hovered.mjs
function movedOut({
  currentTarget,
  relatedTarget
}) {
  return !tuiIsElement(relatedTarget) || !tuiIsElement(currentTarget) || !currentTarget.contains(relatedTarget);
}
var _TuiHoveredService = class _TuiHoveredService extends Observable {
  constructor() {
    super((subscriber) => this.stream$.subscribe(subscriber));
    this.el = tuiInjectElement();
    this.zone = inject(NgZone);
    this.stream$ = merge(
      tuiTypedFromEvent(this.el, "mouseenter").pipe(map(TUI_TRUE_HANDLER)),
      tuiTypedFromEvent(this.el, "mouseleave").pipe(map(TUI_FALSE_HANDLER)),
      // Hello, Safari
      tuiTypedFromEvent(this.el, "mouseout").pipe(filter(movedOut), map(TUI_FALSE_HANDLER))
    ).pipe(distinctUntilChanged(), tuiZoneOptimized(this.zone));
  }
};
_TuiHoveredService.ɵfac = function TuiHoveredService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiHoveredService)();
};
_TuiHoveredService.ɵprov = ɵɵdefineInjectable({
  token: _TuiHoveredService,
  factory: _TuiHoveredService.ɵfac
});
var TuiHoveredService = _TuiHoveredService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHoveredService, [{
    type: Injectable
  }], function() {
    return [];
  }, null);
})();
function tuiHovered() {
  return toSignal(inject(TUI_IS_MOBILE) ? of(false) : inject(TuiHoveredService).pipe(tuiWatch()), {
    initialValue: false
  });
}
var _TuiHovered = class _TuiHovered {
  constructor() {
    this.tuiHoveredChange = inject(TuiHoveredService);
  }
};
_TuiHovered.ɵfac = function TuiHovered_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiHovered)();
};
_TuiHovered.ɵdir = ɵɵdefineDirective({
  type: _TuiHovered,
  selectors: [["", "tuiHoveredChange", ""]],
  outputs: {
    tuiHoveredChange: "tuiHoveredChange"
  },
  features: [ɵɵProvidersFeature([TuiHoveredService])]
});
var TuiHovered = _TuiHovered;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHovered, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiHoveredChange]",
      providers: [TuiHoveredService]
    }]
  }], null, {
    tuiHoveredChange: [{
      type: Output
    }]
  });
})();

export {
  TuiNativeValidator,
  TuiValidator,
  TuiIdService,
  tuiInjectId,
  TuiPopoverService,
  tuiAsPopover,
  TuiScrollService,
  TUI_THEME_COLOR,
  TuiThemeColorService,
  TuiHoveredService,
  tuiHovered,
  TuiHovered
};
//# sourceMappingURL=chunk-2DYIH4P4.js.map
