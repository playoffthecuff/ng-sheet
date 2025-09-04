import {
  TuiIcon
} from "./chunk-ESOFPUTF.js";
import {
  TuiHintDirective,
  TuiTextfieldComponent
} from "./chunk-37RJCKTW.js";
import {
  TUI_APPEARANCE_OPTIONS,
  TuiWithAppearance
} from "./chunk-ZGA3WRGT.js";
import {
  TUI_DROPDOWN_COMPONENT
} from "./chunk-M27B4EMP.js";
import {
  TUI_IDENTITY_VALUE_TRANSFORMER
} from "./chunk-XLE6HMXC.js";
import {
  TUI_IS_MOBILE
} from "./chunk-HABJD475.js";
import {
  tuiCreateOptions
} from "./chunk-2JKV5ZCN.js";
import {
  TUI_FIRST_DAY,
  TUI_LAST_DAY,
  TUI_MONTHS,
  tuiControlValue
} from "./chunk-VHLRK7UT.js";
import {
  tuiExtractI18n
} from "./chunk-7P6YVAAR.js";
import {
  TUI_DEFAULT_IDENTITY_MATCHER,
  TUI_FALSE_HANDLER,
  tuiDirectiveBinding,
  tuiIsString,
  tuiProvideOptions
} from "./chunk-XYVFFOET.js";
import {
  toSignal
} from "./chunk-KSDZZ3AX.js";
import {
  NgControl
} from "./chunk-7FISS3KI.js";
import {
  Directive,
  Optional,
  Self,
  setClassMetadata,
  ɵɵHostDirectivesFeature,
  ɵɵProvidersFeature,
  ɵɵdefineDirective,
  ɵɵlistener,
  ɵɵstyleProp
} from "./chunk-H2LFSO26.js";
import {
  InjectionToken,
  computed,
  inject,
  signal
} from "./chunk-VNPPOK4A.js";
import {
  map,
  of
} from "./chunk-WQ5CZGEH.js";

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-tokens.mjs
var TUI_CALENDAR_DATE_STREAM = new InjectionToken(ngDevMode ? "TUI_CALENDAR_DATE_STREAM" : "");
function tuiDateStreamWithTransformer(transformer) {
  return {
    provide: TUI_CALENDAR_DATE_STREAM,
    deps: [
      [new Optional(), new Self(), NgControl],
      [new Optional(), transformer]
    ],
    useFactory: tuiControlValueFactory
  };
}
function tuiControlValueFactory(control, transformer) {
  return control ? tuiControlValue(control).pipe(map((value) => transformer ? transformer?.fromControlValue(value) : value)) : of(null);
}
var TUI_DATE_VALUE_TRANSFORMER = new InjectionToken(ngDevMode ? "TUI_DATE_VALUE_TRANSFORMER" : "", {
  factory: () => TUI_IDENTITY_VALUE_TRANSFORMER
});
var TUI_DATE_RANGE_VALUE_TRANSFORMER = new InjectionToken(ngDevMode ? "TUI_DATE_RANGE_VALUE_TRANSFORMER" : "");
var TUI_DATE_TIME_VALUE_TRANSFORMER = new InjectionToken(ngDevMode ? "TUI_DATE_TIME_VALUE_TRANSFORMER" : "");
var TUI_TIME_VALUE_TRANSFORMER = new InjectionToken(ngDevMode ? "TUI_TIME_VALUE_TRANSFORMER" : "");
var TUI_CONFIRM_WORDS = new InjectionToken(ngDevMode ? "TUI_CONFIRM_WORDS" : "", {
  factory: tuiExtractI18n("confirm")
});
var TUI_CANCEL_WORD = new InjectionToken(ngDevMode ? "TUI_CANCEL_WORD" : "", {
  factory: tuiExtractI18n("cancel")
});
var TUI_DONE_WORD = new InjectionToken(ngDevMode ? "TUI_DONE_WORD" : "", {
  factory: tuiExtractI18n("done")
});
var TUI_MORE_WORD = new InjectionToken(ngDevMode ? "TUI_MORE_WORD" : "", {
  factory: tuiExtractI18n("more")
});
var TUI_HIDE_TEXT = new InjectionToken(ngDevMode ? "TUI_HIDE_TEXT" : "", {
  factory: tuiExtractI18n("hide")
});
var TUI_SHOW_ALL_TEXT = new InjectionToken(ngDevMode ? "TUI_SHOW_ALL_TEXT" : "", {
  factory: tuiExtractI18n("showAll")
});
var TUI_OTHER_DATE_TEXT = new InjectionToken(ngDevMode ? "TUI_OTHER_DATE_TEXT" : "", {
  factory: tuiExtractI18n("otherDate")
});
var TUI_CHOOSE_DAY_OR_RANGE_TEXTS = new InjectionToken(ngDevMode ? "TUI_CHOOSE_DAY_OR_RANGE_TEXTS" : "", {
  factory: tuiExtractI18n("mobileCalendarTexts")
});
var TUI_FROM_TO_TEXTS = new InjectionToken(ngDevMode ? "TUI_FROM_TO_TEXTS" : "", {
  factory: tuiExtractI18n("range")
});
var TUI_PLUS_MINUS_TEXTS = new InjectionToken(ngDevMode ? "TUI_PLUS_MINUS_TEXTS" : "", {
  factory: tuiExtractI18n("countTexts")
});
var TUI_TIME_TEXTS = new InjectionToken(ngDevMode ? "TUI_TIME_TEXTS" : "", {
  factory: tuiExtractI18n("time")
});
var TUI_DATE_TEXTS = new InjectionToken(ngDevMode ? "TUI_DATE_TEXTS" : "", {
  factory: tuiExtractI18n("dateTexts")
});
var TUI_DIGITAL_INFORMATION_UNITS = new InjectionToken(ngDevMode ? "TUI_DIGITAL_INFORMATION_UNITS" : "", {
  factory: tuiExtractI18n("digitalInformationUnits")
});
var TUI_COPY_TEXTS = new InjectionToken(ngDevMode ? "TUI_COPY_TEXTS" : "", {
  factory: tuiExtractI18n("copyTexts")
});
var TUI_PASSWORD_TEXTS = new InjectionToken(ngDevMode ? "TUI_PASSWORD_TEXTS" : "", {
  factory: tuiExtractI18n("passwordTexts")
});
var TUI_CALENDAR_MONTHS = new InjectionToken(ngDevMode ? "TUI_CALENDAR_MONTHS" : "", {
  factory: tuiExtractI18n("shortCalendarMonths")
});
var TUI_FILE_TEXTS = new InjectionToken(ngDevMode ? "TUI_FILE_TEXTS" : "", {
  factory: tuiExtractI18n("fileTexts")
});
var TUI_PAGINATION_TEXTS = new InjectionToken(ngDevMode ? "TUI_PAGINATION_TEXTS" : "", {
  factory: tuiExtractI18n("pagination")
});
var TUI_INPUT_FILE_TEXTS = new InjectionToken(ngDevMode ? "TUI_INPUT_FILE_TEXTS" : "", {
  factory: tuiExtractI18n("inputFileTexts")
});
var TUI_MULTI_SELECT_TEXTS = new InjectionToken(ngDevMode ? "TUI_MULTI_SELECT_TEXTS" : "", {
  factory: tuiExtractI18n("multiSelectTexts")
});
var TUI_COUNTRIES = new InjectionToken(ngDevMode ? "TUI_COUNTRIES" : "", {
  factory: tuiExtractI18n("countries")
});
var TUI_PREVIEW_TEXTS = new InjectionToken(ngDevMode ? "TUI_PREVIEW_TEXTS" : "", {
  factory: tuiExtractI18n("previewTexts")
});
var TUI_PREVIEW_ZOOM_TEXTS = new InjectionToken(ngDevMode ? "TUI_PREVIEW_ZOOM_TEXTS" : "", {
  factory: tuiExtractI18n("zoomTexts")
});
var TUI_INTERNATIONAL_SEARCH = new InjectionToken(ngDevMode ? "TUI_INTERNATIONAL_SEARCH" : "", {
  factory: tuiExtractI18n("phoneSearch")
});
var TUI_INPUT_DATE_DEFAULT_OPTIONS = {
  icon: () => "@tui.calendar",
  min: TUI_FIRST_DAY,
  max: TUI_LAST_DAY,
  nativePicker: false
};
var [TUI_INPUT_DATE_OPTIONS, tuiInputDateOptionsProvider] = tuiCreateOptions(TUI_INPUT_DATE_DEFAULT_OPTIONS);
var TUI_DEFAULT_ITEMS_HANDLERS = {
  stringify: String,
  identityMatcher: TUI_DEFAULT_IDENTITY_MATCHER,
  disabledItemHandler: TUI_FALSE_HANDLER
};
var TUI_ITEMS_HANDLERS = new InjectionToken(ngDevMode ? "TUI_ITEMS_HANDLERS" : "", {
  factory: () => TUI_DEFAULT_ITEMS_HANDLERS
});
function tuiItemsHandlersProvider(options) {
  return tuiProvideOptions(TUI_ITEMS_HANDLERS, options, TUI_DEFAULT_ITEMS_HANDLERS);
}
var TUI_MOBILE_CALENDAR = new InjectionToken(ngDevMode ? "TUI_MOBILE_CALENDAR" : "");
var TUI_MOBILE_CALENDAR_PROVIDER = {
  provide: TUI_DROPDOWN_COMPONENT,
  useFactory: () => inject(TUI_IS_MOBILE) && inject(TUI_MOBILE_CALENDAR, { optional: true }) || inject(TUI_DROPDOWN_COMPONENT, { skipSelf: true })
};
var TUI_MONTH_FORMATTER = new InjectionToken(ngDevMode ? "TUI_MONTH_FORMATTER" : "", {
  factory: () => inject(TUI_MONTHS).pipe(map((months) => (date) => {
    if (!date) {
      return "";
    }
    return `${months[date.month] ?? ""} ${date.formattedYear}`;
  }))
});
var TUI_PREVIEW_ICONS_DEFAULT = {
  rotate: "@tui.rotate-ccw-square",
  prev: "@tui.arrow-left",
  next: "@tui.arrow-right",
  zoomIn: "@tui.plus",
  zoomOut: "@tui.minus",
  zoomReset: "@tui.minimize"
};
var TUI_PREVIEW_ICONS = new InjectionToken(ngDevMode ? "TUI_PREVIEW_ICONS" : "", {
  factory: () => TUI_PREVIEW_ICONS_DEFAULT
});
function tuiPreviewIconsProvider(icons) {
  return tuiProvideOptions(TUI_PREVIEW_ICONS, icons, TUI_PREVIEW_ICONS_DEFAULT);
}
var TUI_VALIDATION_ERRORS = new InjectionToken(ngDevMode ? "TUI_VALIDATION_ERRORS" : "", {
  factory: () => ({})
});
var tuiValidationErrorsProvider = (useValue) => ({ provide: TUI_VALIDATION_ERRORS, useValue });

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-directives-password.mjs
var [TUI_PASSWORD_OPTIONS, tuiPasswordOptionsProvider] = tuiCreateOptions({
  icons: {
    hide: "@tui.eye-off",
    show: "@tui.eye"
  }
});
var _TuiPassword = class _TuiPassword {
  constructor() {
    this.options = inject(TUI_PASSWORD_OPTIONS);
    this.texts = toSignal(inject(TUI_PASSWORD_TEXTS), {
      initialValue: ["", ""]
    });
    this.textfield = inject(TuiTextfieldComponent);
    this.hidden = signal(true);
    this.icon = tuiDirectiveBinding(TuiIcon, "icon", computed((size = this.textfield.options.size()) => {
      const icon = this.hidden() ? this.options.icons.show : this.options.icons.hide;
      return tuiIsString(icon) ? icon : icon(size);
    }));
    this.hint = tuiDirectiveBinding(TuiHintDirective, "tuiHint", computed(() => this.hidden() ? this.texts()[0] : this.texts()[1]));
  }
  toggle() {
    this.hidden.set(!this.hidden());
    this.textfield.input?.nativeElement.setAttribute("type", this.hidden() ? "password" : "text");
  }
};
_TuiPassword.ɵfac = function TuiPassword_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiPassword)();
};
_TuiPassword.ɵdir = ɵɵdefineDirective({
  type: _TuiPassword,
  selectors: [["tui-icon", "tuiPassword", ""]],
  hostAttrs: [2, "cursor", "pointer"],
  hostVars: 2,
  hostBindings: function TuiPassword_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function TuiPassword_click_HostBindingHandler() {
        return ctx.toggle();
      });
    }
    if (rf & 2) {
      ɵɵstyleProp("border", ctx.textfield.options.size() === "s" ? "0.25rem solid transparent" : null);
    }
  },
  features: [ɵɵProvidersFeature([{
    provide: TUI_APPEARANCE_OPTIONS,
    useValue: {
      appearance: "icon"
    }
  }]), ɵɵHostDirectivesFeature([TuiWithAppearance, {
    directive: TuiHintDirective,
    inputs: ["tuiHintAppearance", "tuiHintAppearance", "tuiHintContext", "tuiHintContext"]
  }])]
});
var TuiPassword = _TuiPassword;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPassword, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "tui-icon[tuiPassword]",
      providers: [{
        provide: TUI_APPEARANCE_OPTIONS,
        useValue: {
          appearance: "icon"
        }
      }],
      hostDirectives: [TuiWithAppearance, {
        directive: TuiHintDirective,
        inputs: ["tuiHintAppearance", "tuiHintContext"]
      }],
      host: {
        style: "cursor: pointer",
        "(click)": "toggle()",
        "[style.border]": 'textfield.options.size() === "s" ? "0.25rem solid transparent" : null'
      }
    }]
  }], null, null);
})();

export {
  TUI_CALENDAR_DATE_STREAM,
  tuiDateStreamWithTransformer,
  TUI_DATE_VALUE_TRANSFORMER,
  TUI_DATE_RANGE_VALUE_TRANSFORMER,
  TUI_DATE_TIME_VALUE_TRANSFORMER,
  TUI_TIME_VALUE_TRANSFORMER,
  TUI_CONFIRM_WORDS,
  TUI_CANCEL_WORD,
  TUI_DONE_WORD,
  TUI_MORE_WORD,
  TUI_HIDE_TEXT,
  TUI_SHOW_ALL_TEXT,
  TUI_OTHER_DATE_TEXT,
  TUI_CHOOSE_DAY_OR_RANGE_TEXTS,
  TUI_FROM_TO_TEXTS,
  TUI_PLUS_MINUS_TEXTS,
  TUI_TIME_TEXTS,
  TUI_DATE_TEXTS,
  TUI_DIGITAL_INFORMATION_UNITS,
  TUI_COPY_TEXTS,
  TUI_PASSWORD_TEXTS,
  TUI_CALENDAR_MONTHS,
  TUI_FILE_TEXTS,
  TUI_PAGINATION_TEXTS,
  TUI_INPUT_FILE_TEXTS,
  TUI_MULTI_SELECT_TEXTS,
  TUI_COUNTRIES,
  TUI_PREVIEW_TEXTS,
  TUI_PREVIEW_ZOOM_TEXTS,
  TUI_INTERNATIONAL_SEARCH,
  TUI_INPUT_DATE_DEFAULT_OPTIONS,
  TUI_INPUT_DATE_OPTIONS,
  tuiInputDateOptionsProvider,
  TUI_DEFAULT_ITEMS_HANDLERS,
  TUI_ITEMS_HANDLERS,
  tuiItemsHandlersProvider,
  TUI_MOBILE_CALENDAR,
  TUI_MOBILE_CALENDAR_PROVIDER,
  TUI_MONTH_FORMATTER,
  TUI_PREVIEW_ICONS_DEFAULT,
  TUI_PREVIEW_ICONS,
  tuiPreviewIconsProvider,
  TUI_VALIDATION_ERRORS,
  tuiValidationErrorsProvider,
  TUI_PASSWORD_OPTIONS,
  tuiPasswordOptionsProvider,
  TuiPassword
};
//# sourceMappingURL=chunk-H5GH4ZXQ.js.map
