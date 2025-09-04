import {
  TUI_ACTIVE_ELEMENT,
  TUI_FALLBACK_VALUE
} from "./chunk-HABJD475.js";
import {
  tuiGetElementObscures,
  tuiInjectElement
} from "./chunk-JSMOXT4E.js";
import {
  TUI_ANIMATIONS_SPEED,
  tuiIfMap,
  tuiZoneOptimized,
  tuiZonefreeScheduler
} from "./chunk-VHLRK7UT.js";
import {
  WA_ANIMATION_FRAME,
  WA_WINDOW
} from "./chunk-5MMGTIYT.js";
import {
  EMPTY_FUNCTION,
  tuiArrayRemove,
  tuiClamp,
  tuiFontSizeWatcher,
  tuiProvide,
  tuiPure
} from "./chunk-XYVFFOET.js";
import {
  takeUntilDestroyed
} from "./chunk-KSDZZ3AX.js";
import {
  NgControl,
  NgModel
} from "./chunk-7FISS3KI.js";
import {
  isPlatformBrowser
} from "./chunk-O7OBBIEJ.js";
import {
  ChangeDetectorRef,
  Directive,
  Injectable,
  Input,
  NgZone,
  Output,
  PLATFORM_ID,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵdefineDirective,
  ɵɵdirectiveInject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵqueryRefresh,
  ɵɵresolveDocument,
  ɵɵviewQuery
} from "./chunk-H2LFSO26.js";
import {
  DOCUMENT,
  DestroyRef,
  INJECTOR$1,
  InjectionToken,
  Injector,
  computed,
  inject,
  signal,
  untracked,
  ɵɵdefineInjectable
} from "./chunk-VNPPOK4A.js";
import {
  BehaviorSubject,
  EMPTY,
  Observable,
  Subject,
  __decorate,
  delay,
  distinctUntilChanged,
  filter,
  identity,
  map,
  merge,
  share,
  skip,
  startWith,
  switchMap,
  tap,
  throttleTime
} from "./chunk-WQ5CZGEH.js";
import {
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@taiga-ui/polymorpheus/fesm2022/taiga-ui-polymorpheus.mjs
var POLYMORPHEUS_CONTEXT = new InjectionToken("");
function injectContext(options = {}) {
  return inject(POLYMORPHEUS_CONTEXT, options);
}
var PolymorpheusComponent = class {
  constructor(component, i) {
    this.component = component;
    this.i = i;
  }
  createInjector(injector, useValue) {
    return Injector.create({
      parent: this.i || injector,
      providers: [{
        provide: POLYMORPHEUS_CONTEXT,
        useValue
      }]
    });
  }
};
var PolymorpheusContext = class {
  constructor($implicit) {
    this.$implicit = $implicit;
  }
  get polymorpheusOutlet() {
    return this.$implicit;
  }
};
function isPrimitive(value) {
  return Object(value) !== value;
}
var _PolymorpheusTemplate = class _PolymorpheusTemplate {
  constructor(template = inject(TemplateRef, {
    self: true
  }), cdr = inject(ChangeDetectorRef)) {
    this.template = template;
    this.cdr = cdr;
    this.polymorpheus = "";
  }
  static ngTemplateContextGuard(_dir, _ctx) {
    return true;
  }
  check() {
    this.cdr.markForCheck();
  }
};
_PolymorpheusTemplate.ɵfac = function PolymorpheusTemplate_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PolymorpheusTemplate)(ɵɵdirectiveInject(TemplateRef), ɵɵdirectiveInject(ChangeDetectorRef));
};
_PolymorpheusTemplate.ɵdir = ɵɵdefineDirective({
  type: _PolymorpheusTemplate,
  selectors: [["ng-template", "polymorpheus", ""]],
  inputs: {
    polymorpheus: "polymorpheus"
  },
  exportAs: ["polymorpheus"]
});
var PolymorpheusTemplate = _PolymorpheusTemplate;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PolymorpheusTemplate, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "ng-template[polymorpheus]",
      inputs: ["polymorpheus"],
      exportAs: "polymorpheus"
    }]
  }], function() {
    return [{
      type: TemplateRef
    }, {
      type: ChangeDetectorRef
    }];
  }, null);
})();
var _PolymorpheusOutlet = class _PolymorpheusOutlet {
  constructor() {
    this.vcr = inject(ViewContainerRef);
    this.i = inject(INJECTOR$1);
    this.t = inject(TemplateRef);
    this.content = "";
  }
  static ngTemplateContextGuard(_dir, _ctx) {
    return true;
  }
  ngOnChanges({
    content
  }) {
    const context = this.getContext();
    this.c?.injector.get(ChangeDetectorRef).markForCheck();
    if (!content) {
      return;
    }
    this.vcr.clear();
    const proxy = context && new Proxy(ensureContext(context), {
      get: (_, key) => ensureContext(this.getContext())?.[key]
    });
    if (isComponent(this.content)) {
      this.process(this.content, proxy);
    } else if ((context instanceof PolymorpheusContext && context.$implicit) != null) {
      this.vcr.createEmbeddedView(this.template, proxy, {
        injector: this.i
      });
    }
  }
  ngDoCheck() {
    if (isDirective(this.content)) {
      this.content.check();
    }
  }
  get template() {
    if (isDirective(this.content)) {
      return this.content.template;
    }
    return this.content instanceof TemplateRef ? this.content : this.t;
  }
  getContext() {
    if (isTemplate(this.content) || isComponent(this.content)) {
      return this.context;
    }
    return new PolymorpheusContext(typeof this.content === "function" ? this.content(this.context ?? {}) : this.content);
  }
  process(content, proxy) {
    const injector = content.createInjector(this.i, proxy);
    this.c = this.vcr.createComponent(content.component, {
      injector
    });
  }
};
_PolymorpheusOutlet.ɵfac = function PolymorpheusOutlet_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PolymorpheusOutlet)();
};
_PolymorpheusOutlet.ɵdir = ɵɵdefineDirective({
  type: _PolymorpheusOutlet,
  selectors: [["", "polymorpheusOutlet", ""]],
  inputs: {
    content: [0, "polymorpheusOutlet", "content"],
    context: [0, "polymorpheusOutletContext", "context"]
  },
  features: [ɵɵNgOnChangesFeature]
});
var PolymorpheusOutlet = _PolymorpheusOutlet;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PolymorpheusOutlet, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[polymorpheusOutlet]"
    }]
  }], null, {
    content: [{
      type: Input,
      args: ["polymorpheusOutlet"]
    }],
    context: [{
      type: Input,
      args: ["polymorpheusOutletContext"]
    }]
  });
})();
function isDirective(content) {
  return content instanceof PolymorpheusTemplate;
}
function isComponent(content) {
  return content instanceof PolymorpheusComponent;
}
function isTemplate(content) {
  return isDirective(content) || content instanceof TemplateRef;
}
function ensureContext(context) {
  if (context && isPrimitive(context)) {
    return new PolymorpheusContext(context);
  }
  return context;
}

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-active-zone.mjs
var _TuiActiveZone = class _TuiActiveZone {
  constructor() {
    this.control = inject(NgControl, {
      self: true,
      optional: true
    });
    this.active$ = inject(TUI_ACTIVE_ELEMENT);
    this.zone = inject(NgZone);
    this.el = tuiInjectElement();
    this.tuiActiveZoneParent = null;
    this.subActiveZones = [];
    this.directParentActiveZone = inject(_TuiActiveZone, {
      skipSelf: true,
      optional: true
    });
    this.tuiActiveZoneChange = this.active$.pipe(map((element) => !!element && this.contains(element)), startWith(false), distinctUntilChanged(), skip(1), tap((active) => {
      if (!active && typeof this.control?.valueAccessor.onTouched === "function") {
        this.control.valueAccessor.onTouched();
      }
    }), tuiZoneOptimized(this.zone), share());
    this.directParentActiveZone?.addSubActiveZone(this);
  }
  set tuiActiveZoneParentSetter(zone) {
    this.setZone(zone);
  }
  ngOnDestroy() {
    this.directParentActiveZone?.removeSubActiveZone(this);
    this.tuiActiveZoneParent?.removeSubActiveZone(this);
  }
  contains(node) {
    return this.el.contains(node) || this.subActiveZones.some((item, index, array) => array.indexOf(item) === index && item.contains(node));
  }
  setZone(zone) {
    this.tuiActiveZoneParent?.removeSubActiveZone(this);
    zone?.addSubActiveZone(this);
    this.tuiActiveZoneParent = zone;
  }
  addSubActiveZone(activeZone) {
    this.subActiveZones = [...this.subActiveZones, activeZone];
  }
  removeSubActiveZone(activeZone) {
    this.subActiveZones = tuiArrayRemove(this.subActiveZones, this.subActiveZones.indexOf(activeZone));
  }
};
_TuiActiveZone.ɵfac = function TuiActiveZone_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiActiveZone)();
};
_TuiActiveZone.ɵdir = ɵɵdefineDirective({
  type: _TuiActiveZone,
  selectors: [["", "tuiActiveZone", "", 5, "ng-container"], ["", "tuiActiveZoneChange", "", 5, "ng-container"], ["", "tuiActiveZoneParent", "", 5, "ng-container"]],
  hostBindings: function TuiActiveZone_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("mousedown.zoneless", function TuiActiveZone_mousedown_zoneless_HostBindingHandler() {
        return 0;
      }, ɵɵresolveDocument);
    }
  },
  inputs: {
    tuiActiveZoneParentSetter: [0, "tuiActiveZoneParent", "tuiActiveZoneParentSetter"]
  },
  outputs: {
    tuiActiveZoneChange: "tuiActiveZoneChange"
  },
  exportAs: ["tuiActiveZone"]
});
var TuiActiveZone = _TuiActiveZone;
__decorate([tuiPure], TuiActiveZone.prototype, "setZone", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiActiveZone, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiActiveZone]:not(ng-container), [tuiActiveZoneChange]:not(ng-container), [tuiActiveZoneParent]:not(ng-container)",
      exportAs: "tuiActiveZone",
      host: {
        "(document:mousedown.zoneless)": "(0)"
      }
    }]
  }], function() {
    return [];
  }, {
    tuiActiveZoneChange: [{
      type: Output
    }],
    tuiActiveZoneParentSetter: [{
      type: Input,
      args: ["tuiActiveZoneParent"]
    }],
    setZone: []
  });
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-font-size.mjs
var TUI_FONT_SIZE_HANDLER = new InjectionToken(ngDevMode ? "TUI_FONT_SIZE_HANDLER" : "");
var _TuiFontSize = class _TuiFontSize {
  constructor() {
    this.handler = inject(TUI_FONT_SIZE_HANDLER, {
      optional: true
    });
    this.nothing = inject(DestroyRef).onDestroy(this.handler && isPlatformBrowser(inject(PLATFORM_ID)) && typeof ResizeObserver !== "undefined" ? tuiFontSizeWatcher(this.handler, inject(WA_WINDOW)) : EMPTY_FUNCTION);
  }
};
_TuiFontSize.ɵfac = function TuiFontSize_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiFontSize)();
};
_TuiFontSize.ɵdir = ɵɵdefineDirective({
  type: _TuiFontSize
});
var TuiFontSize = _TuiFontSize;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFontSize, [{
    type: Directive,
    args: [{
      standalone: true
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-utils-miscellaneous.mjs
function tuiEnableFontScaling() {
  return {
    provide: TUI_FONT_SIZE_HANDLER,
    useFactory: ({ documentElement } = inject(DOCUMENT)) => (size) => documentElement.style.setProperty("--tui-font-offset", `${tuiClamp(size, 17, 28) - 17}px`)
  };
}
var KEYS = [
  "Spacebar",
  "Backspace",
  "Delete",
  "ArrowLeft",
  "ArrowRight",
  "Left",
  "Right",
  "End",
  "Home"
];
function tuiIsEditingKey(key = "") {
  return key.length === 1 || KEYS.includes(key);
}
function tuiIsObscured(el, exceptSelector = "tui-hints") {
  return !!tuiGetElementObscures(el)?.some((el2) => !el2.closest(exceptSelector));
}
function tuiOverrideOptions(override, fallback) {
  return (directive, options) => {
    const result = directive || __spreadValues({}, options || fallback);
    Object.keys(override).forEach((key) => {
      result[key] = override[key];
    });
    return result;
  };
}
var SIZES = {
  xxs: 0,
  xs: 1,
  s: 2,
  m: 3,
  l: 4,
  xl: 5,
  xxl: 6
};
function tuiSizeBigger(size, biggerThanSize = "s") {
  return SIZES[size] > SIZES[biggerThanSize];
}
var TUI_ANIMATIONS_DEFAULT_DURATION = 300;
function tuiToAnimationOptions(speed = inject(TUI_ANIMATIONS_SPEED), easing) {
  return {
    value: "",
    params: {
      duration: tuiGetDuration(speed),
      easing
    }
  };
}
function tuiGetDuration(speed) {
  return speed && TUI_ANIMATIONS_DEFAULT_DURATION / speed;
}

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-classes.mjs
var _c0 = ["viewContainer"];
var TuiValueTransformer = class {
};
function tuiValueTransformerFrom(token) {
  return {
    provide: TuiValueTransformer,
    useFactory: () => inject(token).valueTransformer
  };
}
var TuiNonNullableValueTransformer = class extends TuiValueTransformer {
  fromControlValue(value) {
    this.prevValue = value;
    return value;
  }
  toControlValue(value) {
    this.prevValue = value ?? this.prevValue;
    return this.prevValue;
  }
};
var TUI_IDENTITY_VALUE_TRANSFORMER = {
  fromControlValue: identity,
  toControlValue: identity
};
var FLAGS = {
  self: true,
  optional: true
};
var _TuiControl = class _TuiControl {
  constructor() {
    this.fallback = inject(TUI_FALLBACK_VALUE, FLAGS);
    this.refresh$ = new Subject();
    this.pseudoInvalid = signal(null);
    this.internal = signal(this.fallback);
    this.control = inject(NgControl, {
      self: true
    });
    this.cdr = inject(ChangeDetectorRef);
    this.transformer = inject(TuiValueTransformer, FLAGS) ?? TUI_IDENTITY_VALUE_TRANSFORMER;
    this.value = computed(() => this.internal() ?? this.fallback);
    this.readOnly = signal(false);
    this.touched = signal(false);
    this.status = signal(void 0);
    this.disabled = computed(() => this.status() === "DISABLED");
    this.interactive = computed(() => !this.disabled() && !this.readOnly());
    this.invalid = computed(() => this.pseudoInvalid() !== null ? !!this.pseudoInvalid() && this.interactive() : this.interactive() && this.touched() && this.status() === "INVALID");
    this.mode = computed(() => (
      // eslint-disable-next-line no-nested-ternary
      this.readOnly() ? "readonly" : this.invalid() ? "invalid" : "valid"
    ));
    this.onTouched = EMPTY_FUNCTION;
    this.onChange = EMPTY_FUNCTION;
    this.control.valueAccessor = this;
    this.refresh$.pipe(delay(0), startWith(null), map(() => this.control.control), filter(Boolean), distinctUntilChanged(), switchMap((c) => merge(c.valueChanges, c.statusChanges, c.events || EMPTY).pipe(startWith(null))), takeUntilDestroyed()).subscribe(() => this.update());
  }
  set readOnlySetter(readOnly) {
    this.readOnly.set(readOnly);
  }
  set invalidSetter(invalid) {
    this.pseudoInvalid.set(invalid);
  }
  registerOnChange(onChange) {
    this.refresh$.next();
    this.onChange = (value) => {
      const internal = untracked(() => this.internal());
      if (value === internal) {
        return;
      }
      onChange(this.transformer.toControlValue(value));
      this.internal.set(value);
      this.update();
    };
  }
  registerOnTouched(onTouched) {
    this.onTouched = () => {
      onTouched();
      this.update();
    };
  }
  setDisabledState() {
    this.update();
  }
  writeValue(value) {
    const safe = this.control instanceof NgModel ? this.control.model : value;
    this.internal.set(this.transformer.fromControlValue(safe));
    this.update();
  }
  update() {
    this.status.set(this.control.control?.status);
    this.touched.set(!!this.control.control?.touched);
    this.cdr.markForCheck();
  }
};
_TuiControl.ɵfac = function TuiControl_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiControl)();
};
_TuiControl.ɵdir = ɵɵdefineDirective({
  type: _TuiControl,
  inputs: {
    readOnlySetter: [0, "readOnly", "readOnlySetter"],
    invalidSetter: [0, "invalid", "invalidSetter"]
  },
  standalone: false
});
var TuiControl = _TuiControl;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiControl, [{
    type: Directive
  }], function() {
    return [];
  }, {
    readOnlySetter: [{
      type: Input,
      args: ["readOnly"]
    }],
    invalidSetter: [{
      type: Input,
      args: ["invalid"]
    }]
  });
})();
function tuiAsControl(control) {
  return tuiProvide(TuiControl, control);
}
var _TuiPortals = class _TuiPortals {
  constructor() {
    this.injector = inject(INJECTOR$1);
    this.nothing = inject(TuiPortalService).attach(this);
  }
  addComponentChild(component) {
    const injector = component.createInjector(this.injector);
    const ref = this.vcr.createComponent(component.component, {
      injector
    });
    ref.changeDetectorRef.detectChanges();
    return ref;
  }
  addTemplateChild(templateRef, context) {
    return this.vcr.createEmbeddedView(templateRef, context);
  }
};
_TuiPortals.ɵfac = function TuiPortals_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiPortals)();
};
_TuiPortals.ɵdir = ɵɵdefineDirective({
  type: _TuiPortals,
  viewQuery: function TuiPortals_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 5, ViewContainerRef);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.vcr = _t.first);
    }
  },
  standalone: false
});
var TuiPortals = _TuiPortals;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPortals, [{
    type: Directive
  }], null, {
    vcr: [{
      type: ViewChild,
      args: ["viewContainer", {
        read: ViewContainerRef
      }]
    }]
  });
})();
var _TuiPortalService = class _TuiPortalService {
  attach(host) {
    this.host = host;
  }
  add(component) {
    return this.safeHost.addComponentChild(component);
  }
  remove({
    hostView
  }) {
    this.removeTemplate(hostView);
  }
  addTemplate(templateRef, context) {
    return this.safeHost.addTemplateChild(templateRef, context);
  }
  removeTemplate(viewRef) {
    if (!viewRef.destroyed) {
      viewRef.destroy();
    }
  }
  get safeHost() {
    if (!this.host) {
      throw new TuiNoHostException();
    }
    return this.host;
  }
};
_TuiPortalService.ɵfac = function TuiPortalService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiPortalService)();
};
_TuiPortalService.ɵprov = ɵɵdefineInjectable({
  token: _TuiPortalService,
  factory: _TuiPortalService.ɵfac
});
var TuiPortalService = _TuiPortalService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPortalService, [{
    type: Injectable
  }], null, null);
})();
function tuiAsPortal(portal) {
  return tuiProvide(TuiPortalService, portal);
}
var TuiNoHostException = class extends Error {
  constructor() {
    super(ngDevMode ? "Portals cannot be used without TuiPortalHostComponent; perhaps you forgot to wrap your application with tui-root." : "");
  }
};
var TuiValidationError = class {
  constructor(message, context = {}) {
    this.message = message;
    this.context = context;
  }
};

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-obscured.mjs
var _TuiObscuredService = class _TuiObscuredService extends Observable {
  constructor() {
    super((subscriber) => this.obscured$.subscribe(subscriber));
    this.el = tuiInjectElement();
    this.obscured$ = inject(WA_ANIMATION_FRAME).pipe(throttleTime(100, tuiZonefreeScheduler()), map(() => tuiGetElementObscures(this.el)), startWith(null), distinctUntilChanged(), tuiZoneOptimized());
  }
};
_TuiObscuredService.ɵfac = function TuiObscuredService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiObscuredService)();
};
_TuiObscuredService.ɵprov = ɵɵdefineInjectable({
  token: _TuiObscuredService,
  factory: _TuiObscuredService.ɵfac
});
var TuiObscuredService = _TuiObscuredService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiObscuredService, [{
    type: Injectable
  }], function() {
    return [];
  }, null);
})();
var _TuiObscured = class _TuiObscured {
  constructor() {
    this.activeZone = inject(TuiActiveZone, {
      optional: true
    });
    this.enabled$ = new BehaviorSubject(false);
    this.obscured$ = inject(TuiObscuredService, {
      self: true
    }).pipe(map((by) => !!by?.every((el) => !this.activeZone?.contains(el))));
    this.tuiObscured = this.enabled$.pipe(tuiIfMap(() => this.obscured$));
  }
  set tuiObscuredEnabled(enabled) {
    this.enabled$.next(enabled);
  }
};
_TuiObscured.ɵfac = function TuiObscured_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiObscured)();
};
_TuiObscured.ɵdir = ɵɵdefineDirective({
  type: _TuiObscured,
  selectors: [["", "tuiObscured", ""]],
  inputs: {
    tuiObscuredEnabled: "tuiObscuredEnabled"
  },
  outputs: {
    tuiObscured: "tuiObscured"
  },
  features: [ɵɵProvidersFeature([TuiObscuredService])]
});
var TuiObscured = _TuiObscured;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiObscured, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiObscured]",
      providers: [TuiObscuredService]
    }]
  }], null, {
    tuiObscured: [{
      type: Output
    }],
    tuiObscuredEnabled: [{
      type: Input
    }]
  });
})();

export {
  POLYMORPHEUS_CONTEXT,
  injectContext,
  PolymorpheusComponent,
  PolymorpheusTemplate,
  PolymorpheusOutlet,
  TuiActiveZone,
  TUI_FONT_SIZE_HANDLER,
  TuiFontSize,
  tuiEnableFontScaling,
  tuiIsEditingKey,
  tuiIsObscured,
  tuiOverrideOptions,
  tuiSizeBigger,
  TUI_ANIMATIONS_DEFAULT_DURATION,
  tuiToAnimationOptions,
  tuiGetDuration,
  TuiValueTransformer,
  tuiValueTransformerFrom,
  TuiNonNullableValueTransformer,
  TUI_IDENTITY_VALUE_TRANSFORMER,
  TuiControl,
  tuiAsControl,
  TuiPortals,
  TuiPortalService,
  tuiAsPortal,
  TuiNoHostException,
  TuiValidationError,
  TuiObscuredService,
  TuiObscured
};
//# sourceMappingURL=chunk-XLE6HMXC.js.map
