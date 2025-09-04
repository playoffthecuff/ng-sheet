import {
  TUI_ENGLISH_LANGUAGE
} from "./chunk-GNFBZJNR.js";
import {
  WA_LOCAL_STORAGE
} from "./chunk-5MMGTIYT.js";
import {
  Injectable,
  setClassMetadata
} from "./chunk-H2LFSO26.js";
import {
  InjectionToken,
  inject,
  ɵɵdefineInjectable
} from "./chunk-VNPPOK4A.js";
import {
  BehaviorSubject,
  from,
  map,
  of,
  switchAll
} from "./chunk-WQ5CZGEH.js";

// node_modules/@taiga-ui/i18n/fesm2022/taiga-ui-i18n-tokens.mjs
var TUI_DEFAULT_LANGUAGE = new InjectionToken(ngDevMode ? "TUI_DEFAULT_LANGUAGE" : "", {
  factory: () => TUI_ENGLISH_LANGUAGE
});
var TUI_LANGUAGE = new InjectionToken(ngDevMode ? "TUI_LANGUAGE" : "", {
  factory: () => of(inject(TUI_DEFAULT_LANGUAGE))
});
var TUI_LANGUAGE_LOADER = new InjectionToken(ngDevMode ? "TUI_LANGUAGE_LOADER" : "");
var TUI_LANGUAGE_STORAGE_KEY = new InjectionToken(ngDevMode ? "TUI_LANGUAGE_STORAGE_KEY" : "", {
  factory: () => "tuiLanguage"
});

// node_modules/@taiga-ui/i18n/fesm2022/taiga-ui-i18n-utils.mjs
function tuiExtractI18n(key) {
  return () => inject(TUI_LANGUAGE).pipe(map((lang) => lang[key]));
}
async function normalizeCommonJSImport(importPromise) {
  return importPromise.then((m) => m.default || m);
}
function tuiLoadLanguage(language, loader) {
  return from(normalizeCommonJSImport(loader(language))).pipe(map((module) => module?.[`TUI_${language.toUpperCase()}_LANGUAGE`]));
}
function tuiAsyncLoadLanguage(language, loader, fallback) {
  return language && loader ? tuiLoadLanguage(language, loader) : of(fallback);
}
function tuiLanguageSwitcher(loader) {
  return [{
    provide: TUI_LANGUAGE_LOADER,
    useFactory: () => loader
  }, {
    provide: TUI_LANGUAGE,
    useFactory: () => inject(TuiLanguageSwitcherService).pipe(switchAll())
  }];
}
var _TuiLanguageSwitcherService = class _TuiLanguageSwitcherService extends BehaviorSubject {
  constructor() {
    super(tuiAsyncLoadLanguage(inject(WA_LOCAL_STORAGE)?.getItem(inject(TUI_LANGUAGE_STORAGE_KEY)), inject(TUI_LANGUAGE_LOADER, {
      optional: true
    }), inject(TUI_DEFAULT_LANGUAGE)));
    this.fallback = inject(TUI_DEFAULT_LANGUAGE);
    this.key = inject(TUI_LANGUAGE_STORAGE_KEY);
    this.storage = inject(WA_LOCAL_STORAGE);
    this.loader = inject(TUI_LANGUAGE_LOADER, {
      optional: true
    });
  }
  get language() {
    return this.storage?.getItem(this.key) || this.fallback.name;
  }
  setLanguage(language) {
    this.storage?.setItem(this.key, language);
    this.next(tuiAsyncLoadLanguage(language, this.loader, this.fallback));
  }
  clear() {
    this.storage?.removeItem(this.key);
    this.next(of(this.fallback));
  }
};
_TuiLanguageSwitcherService.ɵfac = function TuiLanguageSwitcherService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiLanguageSwitcherService)();
};
_TuiLanguageSwitcherService.ɵprov = ɵɵdefineInjectable({
  token: _TuiLanguageSwitcherService,
  factory: _TuiLanguageSwitcherService.ɵfac,
  providedIn: "root"
});
var TuiLanguageSwitcherService = _TuiLanguageSwitcherService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiLanguageSwitcherService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [];
  }, null);
})();

export {
  TUI_DEFAULT_LANGUAGE,
  TUI_LANGUAGE,
  TUI_LANGUAGE_LOADER,
  TUI_LANGUAGE_STORAGE_KEY,
  tuiExtractI18n,
  tuiLoadLanguage,
  tuiAsyncLoadLanguage,
  tuiLanguageSwitcher,
  TuiLanguageSwitcherService
};
//# sourceMappingURL=chunk-7P6YVAAR.js.map
