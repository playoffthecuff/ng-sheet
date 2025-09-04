import {
  TUI_ICON_END,
  TUI_ICON_START,
  tuiGetIconMode,
  tuiInjectIconResolver
} from "./chunk-VHLRK7UT.js";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Pipe,
  ViewEncapsulation,
  setClassMetadata,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdefinePipe,
  ɵɵstyleProp
} from "./chunk-H2LFSO26.js";
import {
  computed,
  inject,
  signal
} from "./chunk-VNPPOK4A.js";

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-icon.mjs
var _TuiIcon = class _TuiIcon {
  constructor() {
    this.resolver = tuiInjectIconResolver();
    this.src = signal(inject(TUI_ICON_START, {
      self: true,
      optional: true
    }) || inject(TUI_ICON_END, {
      self: true,
      optional: true
    }));
    this.bg = signal(null);
    this.resource = computed(() => this.resolve(this.src()));
    this.mode = computed(() => tuiGetIconMode(this.src()));
    this.bgResource = computed(() => this.resolve(this.bg()));
  }
  set icon(icon) {
    this.src.set(icon);
  }
  set background(background) {
    this.bg.set(background);
  }
  resolve(value) {
    if (!value) {
      return null;
    }
    return tuiGetIconMode(value) === "font" ? `'${this.resolver(value)}'` : `url(${this.resolver(value)})`;
  }
};
_TuiIcon.ɵfac = function TuiIcon_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiIcon)();
};
_TuiIcon.ɵcmp = ɵɵdefineComponent({
  type: _TuiIcon,
  selectors: [["tui-icon"]],
  hostVars: 5,
  hostBindings: function TuiIcon_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("data-icon", ctx.mode());
      ɵɵstyleProp("--t-icon", ctx.resource() || "url()")("--t-icon-bg", ctx.bgResource());
    }
  },
  inputs: {
    icon: "icon",
    background: "background"
  },
  decls: 0,
  vars: 0,
  template: function TuiIcon_Template(rf, ctx) {
  },
  styles: ['tui-icon{position:relative;display:inline-block;inline-size:1em;block-size:1em;font-size:1.5rem;flex-shrink:0;border:0 solid transparent;vertical-align:middle;box-sizing:border-box;-webkit-mask:var(--t-icon-bg) no-repeat center / contain;mask:var(--t-icon-bg) no-repeat center / contain}@media (hover: hover) and (pointer: fine){tui-icon[data-appearance=icon]:hover{color:var(--tui-text-secondary)}}tui-icon:after,tui-icon[tuiIcons]:after{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;content:"";display:block;-webkit-mask:var(--t-icon) no-repeat center / contain;mask:var(--t-icon) no-repeat center / contain;background:currentColor}tui-icon[data-icon=image]:after{-webkit-mask:none;mask:none;background:var(--t-icon) no-repeat center / contain}tui-icon[data-icon=font]:after{content:var(--t-icon);-webkit-mask:none;mask:none;background:none;font:1em/1 var(--tui-font-icon, inherit);text-align:center;text-transform:none}\n'],
  encapsulation: 2,
  changeDetection: 0
});
var TuiIcon = _TuiIcon;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiIcon, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-icon",
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[style.--t-icon]": 'resource() || "url()"',
        "[style.--t-icon-bg]": "bgResource()",
        "[attr.data-icon]": "mode()"
      },
      styles: ['tui-icon{position:relative;display:inline-block;inline-size:1em;block-size:1em;font-size:1.5rem;flex-shrink:0;border:0 solid transparent;vertical-align:middle;box-sizing:border-box;-webkit-mask:var(--t-icon-bg) no-repeat center / contain;mask:var(--t-icon-bg) no-repeat center / contain}@media (hover: hover) and (pointer: fine){tui-icon[data-appearance=icon]:hover{color:var(--tui-text-secondary)}}tui-icon:after,tui-icon[tuiIcons]:after{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;content:"";display:block;-webkit-mask:var(--t-icon) no-repeat center / contain;mask:var(--t-icon) no-repeat center / contain;background:currentColor}tui-icon[data-icon=image]:after{-webkit-mask:none;mask:none;background:var(--t-icon) no-repeat center / contain}tui-icon[data-icon=font]:after{content:var(--t-icon);-webkit-mask:none;mask:none;background:none;font:1em/1 var(--tui-font-icon, inherit);text-align:center;text-transform:none}\n']
    }]
  }], null, {
    icon: [{
      type: Input
    }],
    background: [{
      type: Input
    }]
  });
})();
var _TuiIconPipe = class _TuiIconPipe {
  constructor() {
    this.transform = tuiInjectIconResolver();
  }
};
_TuiIconPipe.ɵfac = function TuiIconPipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiIconPipe)();
};
_TuiIconPipe.ɵpipe = ɵɵdefinePipe({
  name: "tuiIcon",
  type: _TuiIconPipe,
  pure: true
});
var TuiIconPipe = _TuiIconPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiIconPipe, [{
    type: Pipe,
    args: [{
      standalone: true,
      name: "tuiIcon"
    }]
  }], null, null);
})();

export {
  TuiIcon,
  TuiIconPipe
};
//# sourceMappingURL=chunk-ESOFPUTF.js.map
