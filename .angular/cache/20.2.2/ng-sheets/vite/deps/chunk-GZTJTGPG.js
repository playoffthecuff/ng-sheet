import {
  TuiWithIcons
} from "./chunk-UNZWBBVK.js";
import {
  TuiDropdownDirective
} from "./chunk-M27B4EMP.js";
import {
  PolymorpheusOutlet
} from "./chunk-XLE6HMXC.js";
import {
  TUI_IS_MOBILE
} from "./chunk-HABJD475.js";
import {
  tuiIsNativeFocused,
  tuiIsNativeFocusedIn,
  tuiMoveFocus
} from "./chunk-2JKV5ZCN.js";
import {
  tuiInjectElement
} from "./chunk-JSMOXT4E.js";
import {
  TUI_NOTHING_FOUND_MESSAGE,
  tuiAsAuxiliary,
  tuiQueryListChanges,
  tuiTakeUntilDestroyed,
  tuiZonefree
} from "./chunk-VHLRK7UT.js";
import {
  EMPTY_QUERY,
  tuiIsPresent,
  tuiProvide
} from "./chunk-XYVFFOET.js";
import {
  toSignal
} from "./chunk-KSDZZ3AX.js";
import {
  NgIf
} from "./chunk-O7OBBIEJ.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  Directive,
  Input,
  NgZone,
  ViewContainerRef,
  ViewEncapsulation,
  createComponent,
  setClassMetadata,
  ɵɵHostDirectivesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
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
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-H2LFSO26.js";
import {
  DestroyRef,
  EnvironmentInjector,
  INJECTOR$1,
  InjectionToken,
  forwardRef,
  inject,
  isSignal,
  signal
} from "./chunk-VNPPOK4A.js";
import {
  ReplaySubject,
  combineLatest,
  map,
  startWith,
  switchMap,
  timer
} from "./chunk-WQ5CZGEH.js";

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-data-list.mjs
var _c0 = ["tuiOption", ""];
var _c1 = ["*"];
var _c2 = (a0) => ({
  $implicit: a0
});
function TuiOption_ng_container_0_Template(rf, ctx) {
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
function TuiOption_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
  }
}
function TuiDataListComponent_div_1_ng_container_1_Template(rf, ctx) {
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
function TuiDataListComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵtemplate(1, TuiDataListComponent_div_1_ng_container_1_Template, 2, 1, "ng-container", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", ctx_r1.emptyContent || ctx_r1.fallback());
  }
}
var TUI_DATA_LIST_ACCESSOR = new InjectionToken(ngDevMode ? "TUI_DATA_LIST_ACCESSOR" : "");
function tuiAsDataListAccessor(accessor) {
  return [tuiProvide(TUI_DATA_LIST_ACCESSOR, accessor), tuiAsAuxiliary(accessor)];
}
var TUI_DATA_LIST_HOST = new InjectionToken(ngDevMode ? "TUI_DATA_LIST_HOST" : "");
function tuiAsDataListHost(host) {
  return tuiProvide(TUI_DATA_LIST_HOST, host);
}
var TUI_OPTION_CONTENT = new InjectionToken(ngDevMode ? "TUI_OPTION_CONTENT" : "");
function tuiAsOptionContent(useValue) {
  return {
    provide: TUI_OPTION_CONTENT,
    useValue
  };
}
var _TuiWithOptionContent = class _TuiWithOptionContent {
  constructor() {
    this.localContent = null;
    this.globalContent = inject(TUI_OPTION_CONTENT, {
      optional: true
    });
  }
  get content() {
    return this.globalContent ?? this.localContent;
  }
};
_TuiWithOptionContent.ɵfac = function TuiWithOptionContent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiWithOptionContent)();
};
_TuiWithOptionContent.ɵdir = ɵɵdefineDirective({
  type: _TuiWithOptionContent,
  contentQueries: function TuiWithOptionContent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, TUI_OPTION_CONTENT, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.localContent = _t.first);
    }
  }
});
var TuiWithOptionContent = _TuiWithOptionContent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiWithOptionContent, [{
    type: Directive,
    args: [{
      standalone: true
    }]
  }], null, {
    localContent: [{
      type: ContentChild,
      args: [TUI_OPTION_CONTENT, {
        descendants: true
      }]
    }]
  });
})();
var _TuiOptionNew = class _TuiOptionNew {
  constructor() {
    this.vcr = inject(ViewContainerRef);
    this.isMobile = inject(TUI_IS_MOBILE);
    this.el = tuiInjectElement();
    this.dataList = inject(forwardRef(() => TuiDataListComponent), {
      optional: true
    });
    this.content = inject(TUI_OPTION_CONTENT, {
      optional: true
    });
    this.ref = this.content && createComponent(this.content, {
      environmentInjector: inject(EnvironmentInjector),
      elementInjector: inject(INJECTOR$1),
      hostElement: tuiInjectElement()
    });
    this.dropdown = inject(TuiDropdownDirective, {
      self: true,
      optional: true
    })?.ref;
    this.disabled = false;
    if (this.ref) {
      this.vcr.insert(this.ref.hostView);
      this.ref.changeDetectorRef.detectChanges();
    }
  }
  // Preventing focus loss upon focused option removal
  ngOnDestroy() {
    this.dataList?.handleFocusLossIfNecessary(this.el);
  }
  onMouseMove() {
    if (!this.isMobile && !tuiIsNativeFocused(this.el) && this.dataList && this.el.closest("[tuiDataListDropdownManager]")) {
      this.el.focus({
        preventScroll: true
      });
    }
  }
};
_TuiOptionNew.ɵfac = function TuiOptionNew_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiOptionNew)();
};
_TuiOptionNew.ɵdir = ɵɵdefineDirective({
  type: _TuiOptionNew,
  selectors: [["button", "tuiOption", "", "new", ""], ["a", "tuiOption", "", "new", ""], ["label", "tuiOption", "", "new", ""]],
  hostAttrs: ["type", "button", "role", "option"],
  hostVars: 3,
  hostBindings: function TuiOptionNew_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("mousemove.zoneless", function TuiOptionNew_mousemove_zoneless_HostBindingHandler() {
        return ctx.onMouseMove();
      });
    }
    if (rf & 2) {
      ɵɵattribute("disabled", ctx.disabled || null);
      ɵɵclassProp("_with-dropdown", ctx.dropdown == null ? null : ctx.dropdown());
    }
  },
  inputs: {
    disabled: "disabled"
  },
  features: [ɵɵHostDirectivesFeature([TuiWithIcons])]
});
var TuiOptionNew = _TuiOptionNew;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiOptionNew, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "button[tuiOption][new], a[tuiOption][new], label[tuiOption][new]",
      hostDirectives: [TuiWithIcons],
      host: {
        type: "button",
        role: "option",
        "[attr.disabled]": "disabled || null",
        "[class._with-dropdown]": "dropdown?.()",
        "(mousemove.zoneless)": "onMouseMove()"
      }
    }]
  }], function() {
    return [];
  }, {
    disabled: [{
      type: Input
    }]
  });
})();
var _TuiOptionWithValue = class _TuiOptionWithValue {
  constructor() {
    this.host = inject(TUI_DATA_LIST_HOST, {
      optional: true
    });
    this.disabled = false;
    this.value = signal(void 0);
  }
  // TODO(v5): use `input.required<T>()` to remove `undefined` from `this.value()`
  set valueSetter(x) {
    this.value.set(x);
  }
  onClick(value = this.value()) {
    if (this.host?.handleOption && value !== void 0) {
      this.host.handleOption(value);
    }
  }
};
_TuiOptionWithValue.ɵfac = function TuiOptionWithValue_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiOptionWithValue)();
};
_TuiOptionWithValue.ɵdir = ɵɵdefineDirective({
  type: _TuiOptionWithValue,
  selectors: [["button", "tuiOption", "", "value", "", "new", ""], ["a", "tuiOption", "", "value", "", "new", ""], ["label", "tuiOption", "", "value", "", "new", ""]],
  hostBindings: function TuiOptionWithValue_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function TuiOptionWithValue_click_HostBindingHandler() {
        return ctx.onClick();
      });
    }
  },
  inputs: {
    disabled: "disabled",
    valueSetter: [0, "value", "valueSetter"]
  }
});
var TuiOptionWithValue = _TuiOptionWithValue;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiOptionWithValue, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "button[tuiOption][value][new], a[tuiOption][value][new], label[tuiOption][value][new]",
      host: {
        "(click)": "onClick()"
      }
    }]
  }], null, {
    disabled: [{
      type: Input
    }],
    valueSetter: [{
      type: Input,
      args: [{
        alias: "value",
        required: true
      }]
    }]
  });
})();
var _TuiOption = class _TuiOption {
  constructor() {
    this.isMobile = inject(TUI_IS_MOBILE);
    this.el = tuiInjectElement();
    this.dataList = inject(forwardRef(() => TuiDataListComponent), {
      optional: true
    });
    this.host = inject(TUI_DATA_LIST_HOST, {
      optional: true
    });
    this.content = inject(TUI_OPTION_CONTENT, {
      optional: true
    });
    this.dropdown = inject(TuiDropdownDirective, {
      self: true,
      optional: true
    })?.ref;
    this.disabled = false;
  }
  // Preventing focus loss upon focused option removal
  ngOnDestroy() {
    this.dataList?.handleFocusLossIfNecessary(this.el);
  }
  onClick() {
    if (this.host?.handleOption && this.value !== void 0) {
      this.host.handleOption(this.value);
    }
  }
  onMouseMove() {
    if (!this.isMobile && !tuiIsNativeFocused(this.el) && this.dataList && this.el.closest("[tuiDataListDropdownManager]")) {
      this.el.focus({
        preventScroll: true
      });
    }
  }
};
_TuiOption.ɵfac = function TuiOption_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiOption)();
};
_TuiOption.ɵcmp = ɵɵdefineComponent({
  type: _TuiOption,
  selectors: [["button", "tuiOption", "", 3, "new", ""], ["a", "tuiOption", "", 3, "new", ""], ["label", "tuiOption", "", 3, "new", ""]],
  hostAttrs: ["type", "button", "role", "option"],
  hostVars: 3,
  hostBindings: function TuiOption_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function TuiOption_click_HostBindingHandler() {
        return ctx.onClick();
      })("mousemove.zoneless", function TuiOption_mousemove_zoneless_HostBindingHandler() {
        return ctx.onMouseMove();
      });
    }
    if (rf & 2) {
      ɵɵattribute("disabled", ctx.disabled || null);
      ɵɵclassProp("_with-dropdown", ctx.dropdown == null ? null : ctx.dropdown());
    }
  },
  inputs: {
    disabled: "disabled",
    value: "value"
  },
  features: [ɵɵHostDirectivesFeature([TuiWithIcons])],
  attrs: _c0,
  ngContentSelectors: _c1,
  decls: 3,
  vars: 4,
  consts: [["t", ""], [4, "polymorpheusOutlet", "polymorpheusOutletContext"]],
  template: function TuiOption_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, TuiOption_ng_container_0_Template, 2, 1, "ng-container", 1)(1, TuiOption_ng_template_1_Template, 1, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      const t_r2 = ɵɵreference(2);
      ɵɵproperty("polymorpheusOutlet", ctx.content || t_r2)("polymorpheusOutletContext", ɵɵpureFunction1(2, _c2, t_r2));
    }
  },
  dependencies: [PolymorpheusOutlet],
  encapsulation: 2,
  changeDetection: 0
});
var TuiOption = _TuiOption;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiOption, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "button[tuiOption]:not([new]), a[tuiOption]:not([new]), label[tuiOption]:not([new])",
      imports: [PolymorpheusOutlet],
      template: `
        <ng-container *polymorpheusOutlet="content || t as text; context: {$implicit: t}">
            {{ text }}
        </ng-container>
        <ng-template #t>
            <ng-content />
        </ng-template>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      hostDirectives: [TuiWithIcons],
      host: {
        type: "button",
        role: "option",
        "[attr.disabled]": "disabled || null",
        "[class._with-dropdown]": "dropdown?.()",
        "(click)": "onClick()",
        "(mousemove.zoneless)": "onMouseMove()"
      }
    }]
  }], null, {
    disabled: [{
      type: Input
    }],
    value: [{
      type: Input
    }]
  });
})();
function tuiInjectDataListSize() {
  const sizes = ["s", "m", "l"];
  const size = inject(TUI_DATA_LIST_HOST, {
    optional: true
  })?.size;
  return size && sizes.includes(size) ? size : "l";
}
var _TuiDataListComponent = class _TuiDataListComponent {
  constructor() {
    this.legacyOptionsQuery = EMPTY_QUERY;
    this.optionsQuery = EMPTY_QUERY;
    this.ngZone = inject(NgZone);
    this.destroyRef = inject(DestroyRef);
    this.el = tuiInjectElement();
    this.cdr = inject(ChangeDetectorRef);
    this.contentReady$ = new ReplaySubject(1);
    this.fallback = toSignal(inject(TUI_NOTHING_FOUND_MESSAGE));
    this.empty = signal(false);
    this.size = tuiInjectDataListSize();
    this.options = toSignal(this.contentReady$.pipe(switchMap(() => combineLatest([tuiQueryListChanges(this.legacyOptionsQuery), tuiQueryListChanges(this.optionsQuery)])), map(([legacyOptions, options]) => [...legacyOptions.map(({
      value
    }) => value), ...options.map(({
      value
    }) => value())].filter(tuiIsPresent)), startWith([])), {
      requireSync: true
    });
  }
  onKeyDownArrow(current, step) {
    const {
      elements
    } = this;
    tuiMoveFocus(elements.indexOf(current), elements, step);
  }
  handleFocusLossIfNecessary(element = this.el) {
    if (tuiIsNativeFocusedIn(element)) {
      this.origin?.focus({
        preventScroll: true
      });
    }
  }
  ngAfterContentInit() {
    this.contentReady$.next(true);
  }
  // TODO: Refactor to :has after Safari support bumped to 15
  ngAfterContentChecked() {
    timer(0).pipe(tuiZonefree(this.ngZone), tuiTakeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.empty.set(!this.elements.length);
      this.cdr.detectChanges();
    });
  }
  // TODO(v5): delete
  getOptions(includeDisabled = false) {
    return [...this.legacyOptionsQuery, ...this.optionsQuery].filter(({
      disabled
    }) => includeDisabled || !disabled).map(({
      value
    }) => isSignal(value) ? value() : value).filter(tuiIsPresent);
  }
  onFocusIn(relatedTarget, currentTarget) {
    if (!currentTarget.contains(relatedTarget) && !this.origin) {
      this.origin = relatedTarget;
    }
  }
  get elements() {
    return Array.from(this.el.querySelectorAll("[tuiOption]"));
  }
};
_TuiDataListComponent.ɵfac = function TuiDataListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiDataListComponent)();
};
_TuiDataListComponent.ɵcmp = ɵɵdefineComponent({
  type: _TuiDataListComponent,
  selectors: [["tui-data-list"]],
  contentQueries: function TuiDataListComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, TuiOption, 5);
      ɵɵcontentQuery(dirIndex, TuiOptionWithValue, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.legacyOptionsQuery = _t);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.optionsQuery = _t);
    }
  },
  hostAttrs: ["role", "listbox"],
  hostVars: 1,
  hostBindings: function TuiDataListComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("focusin", function TuiDataListComponent_focusin_HostBindingHandler($event) {
        return ctx.onFocusIn($event.relatedTarget, $event.currentTarget);
      })("mousedown.prevent", function TuiDataListComponent_mousedown_prevent_HostBindingHandler() {
        return 0;
      })("wheel.zoneless.passive", function TuiDataListComponent_wheel_zoneless_passive_HostBindingHandler() {
        return ctx.handleFocusLossIfNecessary();
      })("mouseleave", function TuiDataListComponent_mouseleave_HostBindingHandler($event) {
        return ctx.handleFocusLossIfNecessary($event.target);
      })("keydown.tab", function TuiDataListComponent_keydown_tab_HostBindingHandler() {
        return ctx.handleFocusLossIfNecessary();
      })("keydown.shift.tab", function TuiDataListComponent_keydown_shift_tab_HostBindingHandler() {
        return ctx.handleFocusLossIfNecessary();
      })("keydown.arrowDown.prevent", function TuiDataListComponent_keydown_arrowDown_prevent_HostBindingHandler($event) {
        return ctx.onKeyDownArrow($event.target, 1);
      })("keydown.arrowUp.prevent", function TuiDataListComponent_keydown_arrowUp_prevent_HostBindingHandler($event) {
        return ctx.onKeyDownArrow($event.target, -1);
      });
    }
    if (rf & 2) {
      ɵɵattribute("data-size", ctx.size);
    }
  },
  inputs: {
    emptyContent: "emptyContent",
    size: "size"
  },
  features: [ɵɵProvidersFeature([tuiAsDataListAccessor(_TuiDataListComponent), {
    provide: TUI_OPTION_CONTENT,
    useFactory: () => inject(TuiWithOptionContent, {
      optional: true
    })?.content ?? // TODO(v5): remove when all legacy controls are deleted
    inject(TUI_OPTION_CONTENT, {
      host: true,
      skipSelf: true,
      optional: true
    }) ?? inject(TUI_OPTION_CONTENT, {
      skipSelf: true,
      optional: true
    })
  }])],
  ngContentSelectors: _c1,
  decls: 2,
  vars: 1,
  consts: [["class", "t-empty", 4, "ngIf"], [1, "t-empty"], [4, "polymorpheusOutlet"]],
  template: function TuiDataListComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
      ɵɵtemplate(1, TuiDataListComponent_div_1_Template, 2, 1, "div", 0);
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.empty());
    }
  },
  dependencies: [NgIf, PolymorpheusOutlet],
  styles: ['tui-data-list{--tui-data-list-padding: .25rem;--tui-data-list-margin: .0625rem;display:flex;font:var(--tui-font-text-m);flex-direction:column;padding:calc(var(--tui-data-list-padding) - var(--tui-data-list-margin)) var(--tui-data-list-padding);color:var(--tui-text-tertiary)}tui-data-list:focus-within .t-trap{display:none}tui-data-list:focus-within [tuiOption]._with-dropdown:not(:focus){background-color:transparent}tui-data-list[data-size=s]{--tui-data-list-margin: 0rem}tui-data-list[data-size=s] [tuiOption][new]:not([tuiCell]){gap:.5rem}tui-data-list[data-size=s]>.t-empty,tui-data-list[data-size=s] [tuiOption]{--t-option-padding-inline: .375rem;font:var(--tui-font-text-s);min-block-size:2rem;padding-block-start:.3125rem;padding-block-end:.3125rem}tui-data-list[data-size=s]>.t-empty:before,tui-data-list[data-size=s] [tuiOption]:before{font-size:1rem}tui-data-list[data-size=m] [tuiOption][new]:not([tuiCell]){gap:.75rem}tui-data-list[data-size=m]>.t-empty,tui-data-list[data-size=m] [tuiOption]{--t-option-padding-inline: .5rem;font:var(--tui-font-text-s);min-block-size:2.5rem;padding-block-start:.375rem;padding-block-end:.375rem}tui-data-list[data-size=l]{--tui-data-list-padding: .375rem;--tui-data-list-margin: .125rem}tui-data-list[data-size=l] [tuiOption][new]:not([tuiCell]){gap:1rem}tui-data-list[data-size=l]>.t-empty,tui-data-list[data-size=l] [tuiOption]{--t-option-padding-inline: .625rem;font:var(--tui-font-text-m);min-block-size:2.75rem;padding-block-start:.375rem;padding-block-end:.375rem}tui-data-list>.t-empty{display:flex;align-items:center;box-sizing:border-box;margin:var(--tui-data-list-margin) 0}tui-data-list [tuiOption]:not([new]){justify-content:space-between}tui-data-list [tuiOption]{-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font:inherit;line-height:inherit;text-decoration:none;transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:flex;align-items:center;box-sizing:border-box;margin:var(--tui-data-list-margin) 0;text-align:start;color:var(--tui-text-primary);border-radius:var(--tui-radius-s);outline:none;cursor:pointer;background-clip:padding-box}tui-data-list [tuiOption]:disabled{opacity:var(--tui-disabled-opacity);cursor:default}@media (hover: hover) and (pointer: fine){tui-data-list [tuiOption]:hover:not(:disabled){background-color:var(--tui-background-neutral-1)}}tui-data-list [tuiOption]:active:not(:disabled),tui-data-list [tuiOption]:focus-within,tui-data-list [tuiOption]._with-dropdown{background-color:var(--tui-background-neutral-1)}tui-data-list [tuiOption]:not([new]):before{margin-inline-end:.5rem}tui-data-list [tuiOption]:after{font-size:1rem;margin:0 -.625rem 0 auto;border-inline-start:.5rem solid;border-inline-end:.5rem solid}tui-data-list>.t-empty,tui-data-list [tuiOption]{padding-inline-start:var(--t-option-padding-inline);padding-inline-end:var(--t-option-padding-inline)}tui-opt-group{position:relative;display:flex;font:var(--tui-font-text-xs);font-weight:700;color:var(--tui-text-primary);flex-direction:column;line-height:1rem}tui-data-list[data-size=l] tui-opt-group{font:var(--tui-font-text-m);font-weight:700;line-height:1.25rem}tui-data-list[data-size=l] tui-opt-group:before{padding-inline-start:.625rem;padding-inline-end:.625rem}tui-data-list[data-size=l] tui-opt-group:after{left:.625rem;right:.625rem}tui-opt-group:empty:before,tui-opt-group:empty:after{display:none}tui-opt-group:before{content:attr(data-label);padding:var(--tui-data-list-padding) .5rem var(--tui-data-list-padding);margin:var(--tui-data-list-margin) 0;white-space:normal;word-break:break-word}tui-opt-group:after{position:absolute;left:.5rem;right:.5rem;top:var(--tui-data-list-padding);block-size:1px;background:var(--tui-border-normal)}tui-opt-group:not(:empty)~tui-opt-group:before{padding-block-start:calc(.75rem + var(--tui-data-list-padding))}tui-opt-group:not(:empty)~tui-opt-group[data-label=""]:before,tui-opt-group:not(:empty)~tui-opt-group:not([data-label]):before{padding:var(--tui-data-list-padding) 0}tui-opt-group:not(:empty)~tui-opt-group:after{content:""}tui-opt-group[data-label=""]:before,tui-opt-group:not([data-label]):before{content:"";padding:0;margin:0}\n'],
  encapsulation: 2,
  changeDetection: 0
});
var TuiDataListComponent = _TuiDataListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDataListComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-data-list",
      imports: [NgIf, PolymorpheusOutlet],
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiAsDataListAccessor(TuiDataListComponent), {
        provide: TUI_OPTION_CONTENT,
        useFactory: () => inject(TuiWithOptionContent, {
          optional: true
        })?.content ?? // TODO(v5): remove when all legacy controls are deleted
        inject(TUI_OPTION_CONTENT, {
          host: true,
          skipSelf: true,
          optional: true
        }) ?? inject(TUI_OPTION_CONTENT, {
          skipSelf: true,
          optional: true
        })
      }],
      host: {
        role: "listbox",
        "[attr.data-size]": "size",
        "(focusin)": "onFocusIn($event.relatedTarget, $event.currentTarget)",
        "(mousedown.prevent)": "(0)",
        "(wheel.zoneless.passive)": "handleFocusLossIfNecessary()",
        "(mouseleave)": "handleFocusLossIfNecessary($event.target)",
        "(keydown.tab)": "handleFocusLossIfNecessary()",
        "(keydown.shift.tab)": "handleFocusLossIfNecessary()",
        "(keydown.arrowDown.prevent)": "onKeyDownArrow($event.target, 1)",
        "(keydown.arrowUp.prevent)": "onKeyDownArrow($event.target, -1)"
      },
      template: '<ng-content />\n<div\n    *ngIf="empty()"\n    class="t-empty"\n>\n    <ng-container *polymorpheusOutlet="emptyContent || fallback() as text">\n        {{ text }}\n    </ng-container>\n</div>\n',
      styles: ['tui-data-list{--tui-data-list-padding: .25rem;--tui-data-list-margin: .0625rem;display:flex;font:var(--tui-font-text-m);flex-direction:column;padding:calc(var(--tui-data-list-padding) - var(--tui-data-list-margin)) var(--tui-data-list-padding);color:var(--tui-text-tertiary)}tui-data-list:focus-within .t-trap{display:none}tui-data-list:focus-within [tuiOption]._with-dropdown:not(:focus){background-color:transparent}tui-data-list[data-size=s]{--tui-data-list-margin: 0rem}tui-data-list[data-size=s] [tuiOption][new]:not([tuiCell]){gap:.5rem}tui-data-list[data-size=s]>.t-empty,tui-data-list[data-size=s] [tuiOption]{--t-option-padding-inline: .375rem;font:var(--tui-font-text-s);min-block-size:2rem;padding-block-start:.3125rem;padding-block-end:.3125rem}tui-data-list[data-size=s]>.t-empty:before,tui-data-list[data-size=s] [tuiOption]:before{font-size:1rem}tui-data-list[data-size=m] [tuiOption][new]:not([tuiCell]){gap:.75rem}tui-data-list[data-size=m]>.t-empty,tui-data-list[data-size=m] [tuiOption]{--t-option-padding-inline: .5rem;font:var(--tui-font-text-s);min-block-size:2.5rem;padding-block-start:.375rem;padding-block-end:.375rem}tui-data-list[data-size=l]{--tui-data-list-padding: .375rem;--tui-data-list-margin: .125rem}tui-data-list[data-size=l] [tuiOption][new]:not([tuiCell]){gap:1rem}tui-data-list[data-size=l]>.t-empty,tui-data-list[data-size=l] [tuiOption]{--t-option-padding-inline: .625rem;font:var(--tui-font-text-m);min-block-size:2.75rem;padding-block-start:.375rem;padding-block-end:.375rem}tui-data-list>.t-empty{display:flex;align-items:center;box-sizing:border-box;margin:var(--tui-data-list-margin) 0}tui-data-list [tuiOption]:not([new]){justify-content:space-between}tui-data-list [tuiOption]{-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font:inherit;line-height:inherit;text-decoration:none;transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:flex;align-items:center;box-sizing:border-box;margin:var(--tui-data-list-margin) 0;text-align:start;color:var(--tui-text-primary);border-radius:var(--tui-radius-s);outline:none;cursor:pointer;background-clip:padding-box}tui-data-list [tuiOption]:disabled{opacity:var(--tui-disabled-opacity);cursor:default}@media (hover: hover) and (pointer: fine){tui-data-list [tuiOption]:hover:not(:disabled){background-color:var(--tui-background-neutral-1)}}tui-data-list [tuiOption]:active:not(:disabled),tui-data-list [tuiOption]:focus-within,tui-data-list [tuiOption]._with-dropdown{background-color:var(--tui-background-neutral-1)}tui-data-list [tuiOption]:not([new]):before{margin-inline-end:.5rem}tui-data-list [tuiOption]:after{font-size:1rem;margin:0 -.625rem 0 auto;border-inline-start:.5rem solid;border-inline-end:.5rem solid}tui-data-list>.t-empty,tui-data-list [tuiOption]{padding-inline-start:var(--t-option-padding-inline);padding-inline-end:var(--t-option-padding-inline)}tui-opt-group{position:relative;display:flex;font:var(--tui-font-text-xs);font-weight:700;color:var(--tui-text-primary);flex-direction:column;line-height:1rem}tui-data-list[data-size=l] tui-opt-group{font:var(--tui-font-text-m);font-weight:700;line-height:1.25rem}tui-data-list[data-size=l] tui-opt-group:before{padding-inline-start:.625rem;padding-inline-end:.625rem}tui-data-list[data-size=l] tui-opt-group:after{left:.625rem;right:.625rem}tui-opt-group:empty:before,tui-opt-group:empty:after{display:none}tui-opt-group:before{content:attr(data-label);padding:var(--tui-data-list-padding) .5rem var(--tui-data-list-padding);margin:var(--tui-data-list-margin) 0;white-space:normal;word-break:break-word}tui-opt-group:after{position:absolute;left:.5rem;right:.5rem;top:var(--tui-data-list-padding);block-size:1px;background:var(--tui-border-normal)}tui-opt-group:not(:empty)~tui-opt-group:before{padding-block-start:calc(.75rem + var(--tui-data-list-padding))}tui-opt-group:not(:empty)~tui-opt-group[data-label=""]:before,tui-opt-group:not(:empty)~tui-opt-group:not([data-label]):before{padding:var(--tui-data-list-padding) 0}tui-opt-group:not(:empty)~tui-opt-group:after{content:""}tui-opt-group[data-label=""]:before,tui-opt-group:not([data-label]):before{content:"";padding:0;margin:0}\n']
    }]
  }], null, {
    legacyOptionsQuery: [{
      type: ContentChildren,
      args: [forwardRef(() => TuiOption), {
        descendants: true
      }]
    }],
    optionsQuery: [{
      type: ContentChildren,
      args: [forwardRef(() => TuiOptionWithValue), {
        descendants: true
      }]
    }],
    emptyContent: [{
      type: Input
    }],
    size: [{
      type: Input
    }]
  });
})();
var _TuiDataListDirective = class _TuiDataListDirective {
};
_TuiDataListDirective.ɵfac = function TuiDataListDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiDataListDirective)();
};
_TuiDataListDirective.ɵdir = ɵɵdefineDirective({
  type: _TuiDataListDirective,
  selectors: [["ng-template", "tuiDataList", ""]]
});
var TuiDataListDirective = _TuiDataListDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDataListDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "ng-template[tuiDataList]"
    }]
  }], null, null);
})();
function tuiAsDataList(list) {
  return tuiProvide(TuiDataListDirective, list);
}
var _TuiOptGroup = class _TuiOptGroup {
};
_TuiOptGroup.ɵfac = function TuiOptGroup_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiOptGroup)();
};
_TuiOptGroup.ɵdir = ɵɵdefineDirective({
  type: _TuiOptGroup,
  selectors: [["tui-opt-group"]],
  hostAttrs: ["role", "group"],
  hostVars: 1,
  hostBindings: function TuiOptGroup_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("data-label", ctx.label);
    }
  },
  inputs: {
    label: "label"
  }
});
var TuiOptGroup = _TuiOptGroup;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiOptGroup, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "tui-opt-group",
      host: {
        role: "group",
        "[attr.data-label]": "label"
      }
    }]
  }], null, {
    label: [{
      type: Input
    }]
  });
})();
var TuiDataList = [TuiDataListComponent, TuiDataListDirective, TuiOption, TuiOptionNew, TuiOptionWithValue, TuiOptGroup];

export {
  TUI_DATA_LIST_ACCESSOR,
  tuiAsDataListAccessor,
  TUI_DATA_LIST_HOST,
  tuiAsDataListHost,
  TUI_OPTION_CONTENT,
  tuiAsOptionContent,
  TuiWithOptionContent,
  TuiOptionNew,
  TuiOptionWithValue,
  TuiOption,
  tuiInjectDataListSize,
  TuiDataListComponent,
  TuiDataListDirective,
  tuiAsDataList,
  TuiOptGroup,
  TuiDataList
};
//# sourceMappingURL=chunk-GZTJTGPG.js.map
