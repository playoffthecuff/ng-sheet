import {
  IntersectionObserverService,
  TUI_TILES_REORDER,
  TuiChevron,
  TuiPresent,
  TuiTile,
  TuiTileHandle,
  TuiTiles,
  TuiTilesComponent,
  WA_INTERSECTION_ROOT_MARGIN,
  WA_INTERSECTION_THRESHOLD,
  tuiChipOptionsProvider,
  tuiProgressOptionsProvider,
  tuiTilesShift
} from "./chunk-BCOTN6P7.js";
import {
  tuiBadgeOptionsProvider
} from "./chunk-7KFTYP4C.js";
import "./chunk-HMRLPAR4.js";
import {
  TuiLink
} from "./chunk-NSULG36T.js";
import {
  TuiIcon
} from "./chunk-ESOFPUTF.js";
import {
  TUI_TEXTFIELD_OPTIONS,
  TuiTextfieldComponent
} from "./chunk-37RJCKTW.js";
import {
  ResizeObserverService
} from "./chunk-ZIHJU63D.js";
import {
  TuiButton,
  tuiButtonOptionsProvider
} from "./chunk-BKBEOYHT.js";
import "./chunk-ZGA3WRGT.js";
import "./chunk-STDBWRIZ.js";
import {
  TuiDataList,
  TuiDataListComponent,
  TuiOption
} from "./chunk-GZTJTGPG.js";
import "./chunk-UNZWBBVK.js";
import {
  TuiDropdownDirective,
  TuiDropdownOpen
} from "./chunk-M27B4EMP.js";
import "./chunk-CGRAKRVX.js";
import "./chunk-ZX26QIOR.js";
import "./chunk-CUJU2C7J.js";
import "./chunk-2DYIH4P4.js";
import "./chunk-NJW6Q2NF.js";
import {
  PolymorpheusOutlet,
  TuiControl
} from "./chunk-XLE6HMXC.js";
import {
  tuiFallbackValueProvider
} from "./chunk-HABJD475.js";
import "./chunk-2JKV5ZCN.js";
import {
  coerceBooleanProperty,
  tuiInjectElement
} from "./chunk-JSMOXT4E.js";
import {
  TUI_COMMON_ICONS,
  TUI_SPIN_ICONS,
  TUI_SPIN_TEXTS,
  tuiPreventDefault,
  tuiQueryListChanges,
  tuiTypedFromEvent,
  tuiWatch,
  tuiZoneOptimized
} from "./chunk-VHLRK7UT.js";
import {
  tuiExtractI18n
} from "./chunk-7P6YVAAR.js";
import "./chunk-GNFBZJNR.js";
import "./chunk-BJJ62CP2.js";
import "./chunk-5MMGTIYT.js";
import {
  EMPTY_CLIENT_RECT,
  EMPTY_QUERY,
  TUI_TRUE_HANDLER,
  tuiArrayToggle,
  tuiDefaultSort,
  tuiProvide,
  tuiProvideOptions,
  tuiPure,
  tuiWithStyles
} from "./chunk-XYVFFOET.js";
import "./chunk-TH5SZDVV.js";
import {
  takeUntilDestroyed,
  toSignal
} from "./chunk-KSDZZ3AX.js";
import {
  NgControl,
  NgModel
} from "./chunk-7FISS3KI.js";
import {
  AsyncPipe,
  NgForOf,
  NgIf,
  NgTemplateOutlet,
  isPlatformServer
} from "./chunk-O7OBBIEJ.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  Directive,
  EventEmitter,
  Input,
  Output,
  PLATFORM_ID,
  Pipe,
  SkipSelf,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
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
  ɵɵdefinePipe,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresolveDocument,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-H2LFSO26.js";
import {
  DOCUMENT,
  InjectionToken,
  computed,
  forwardRef,
  inject,
  signal,
  ɵɵresetView,
  ɵɵrestoreView
} from "./chunk-VNPPOK4A.js";
import {
  EMPTY,
  ReplaySubject,
  Subject,
  __decorate,
  catchError,
  combineLatest,
  debounceTime,
  defer,
  delay,
  distinctUntilChanged,
  filter,
  identity,
  map,
  merge,
  of,
  startWith,
  switchMap,
  takeUntil,
  timer
} from "./chunk-WQ5CZGEH.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@taiga-ui/addon-table/fesm2022/taiga-ui-addon-table-tokens.mjs
var TUI_TABLE_SHOW_HIDE_MESSAGE = new InjectionToken(ngDevMode ? "TUI_TABLE_SHOW_HIDE_MESSAGE" : "", {
  factory: tuiExtractI18n("showHideText")
});
var TUI_TABLE_PAGINATION_TEXTS = new InjectionToken(ngDevMode ? "TUI_TABLE_PAGINATION_TEXTS" : "", {
  factory: tuiExtractI18n("paginationTexts")
});

// node_modules/@taiga-ui/addon-table/fesm2022/taiga-ui-addon-table-components-reorder.mjs
var _c0 = (a0, a1) => ({
  $implicit: a0,
  index: a1
});
function TuiReorder_tui_tile_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const template_r2 = ctx.polymorpheusOutlet;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", template_r2, " ");
  }
}
function TuiReorder_tui_tile_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tui-tile")(1, "div", 2)(2, "div", 3);
    ɵɵelement(3, "tui-icon", 4);
    ɵɵtemplate(4, TuiReorder_tui_tile_1_ng_container_4_Template, 2, 1, "ng-container", 5);
    ɵɵelementEnd();
    ɵɵelementStart(5, "button", 6);
    ɵɵlistener("click", function TuiReorder_tui_tile_1_Template_button_click_5_listener() {
      const item_r3 = ɵɵrestoreView(_r1).$implicit;
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.toggle(item_r3));
    })("keydown.arrowDown.prevent", function TuiReorder_tui_tile_1_Template_button_keydown_arrowDown_prevent_5_listener() {
      const index_r5 = ɵɵrestoreView(_r1).index;
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.move(index_r5, 1));
    })("keydown.arrowUp.prevent", function TuiReorder_tui_tile_1_Template_button_keydown_arrowUp_prevent_5_listener() {
      const index_r5 = ɵɵrestoreView(_r1).index;
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.move(index_r5, -1));
    });
    ɵɵtext(6);
    ɵɵpipe(7, "async");
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const index_r5 = ctx.index;
    const ctx_r3 = ɵɵnextContext();
    ɵɵstyleProp("order", ctx_r3.order.get(index_r5));
    ɵɵadvance();
    ɵɵclassProp("t-item_disabled", !ctx_r3.isEnabled(item_r3));
    ɵɵadvance(2);
    ɵɵproperty("icon", ctx_r3.options.icons.drag);
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", ctx_r3.content)("polymorpheusOutletContext", ɵɵpureFunction2(11, _c0, item_r3, index_r5));
    ɵɵadvance();
    ɵɵproperty("iconStart", ctx_r3.getIcon(item_r3));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(7, 9, ctx_r3.showHideText$), " ");
  }
}
var TUI_REORDER_DEFAULT_OPTIONS = {
  icons: {
    hide: "@tui.eye-off",
    show: "@tui.eye",
    drag: "@tui.grip-vertical"
  }
};
var TUI_REORDER_OPTIONS = new InjectionToken(ngDevMode ? "TUI_REORDER_OPTIONS" : "", {
  factory: () => TUI_REORDER_DEFAULT_OPTIONS
});
function tuiReorderOptionsProvider(options) {
  return tuiProvideOptions(TUI_REORDER_OPTIONS, options, TUI_REORDER_DEFAULT_OPTIONS);
}
var _TuiReorder = class _TuiReorder {
  constructor() {
    this.dragging = false;
    this.order = /* @__PURE__ */ new Map();
    this.unsortedItems = [];
    this.options = inject(TUI_REORDER_OPTIONS);
    this.showHideText$ = inject(TUI_TABLE_SHOW_HIDE_MESSAGE);
    this.enabled = [];
    this.itemsChange = new EventEmitter();
    this.enabledChange = new EventEmitter();
    this.content = ({
      $implicit
    }) => String($implicit);
  }
  set items(items) {
    if (items.length !== this.unsortedItems.length || !items.every((item) => this.unsortedItems.includes(item))) {
      this.unsortedItems = items;
    }
  }
  onDrag() {
    this.dragging = true;
  }
  onDrop() {
    if (!this.dragging) {
      return;
    }
    this.dragging = false;
    this.updateItems();
  }
  isEnabled(item) {
    return this.enabled.includes(item);
  }
  getIcon(item) {
    return this.isEnabled(item) ? this.options.icons.hide : this.options.icons.show;
  }
  toggle(toggled) {
    this.enabled = this.isEnabled(toggled) ? this.enabled.filter((item) => item !== toggled) : this.enabled.concat(toggled);
    this.updateEnabled();
  }
  move(index, direction) {
    const oldIndex = this.order.get(index) ?? index;
    if (!oldIndex && direction < 0 || oldIndex === this.unsortedItems.length - 1 && direction > 0) {
      return;
    }
    const newIndex = oldIndex + direction;
    const oldItem = Array.from(this.order.values()).findIndex((item) => item === newIndex);
    this.order.set(index, newIndex);
    this.order.set(oldItem, oldIndex);
    this.order = new Map(this.order);
    this.updateItems();
  }
  getSortedItems() {
    const items = new Array(this.unsortedItems.length);
    this.unsortedItems.forEach((item, index) => {
      items[this.order.get(index) ?? index] = item;
    });
    return items;
  }
  updateItems() {
    this.itemsChange.emit(this.getSortedItems());
    this.updateEnabled();
  }
  updateEnabled() {
    const enabled = this.getSortedItems().filter((item) => this.isEnabled(item));
    this.enabled = enabled;
    this.enabledChange.emit(enabled);
  }
};
_TuiReorder.ɵfac = function TuiReorder_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiReorder)();
};
_TuiReorder.ɵcmp = ɵɵdefineComponent({
  type: _TuiReorder,
  selectors: [["tui-reorder"]],
  hostBindings: function TuiReorder_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("focusout.stop", function TuiReorder_focusout_stop_HostBindingHandler() {
        return 0;
      })("pointerdown.zoneless", function TuiReorder_pointerdown_zoneless_HostBindingHandler() {
        return ctx.onDrag();
      })("pointerup.zoneless", function TuiReorder_pointerup_zoneless_HostBindingHandler() {
        return ctx.onDrop();
      }, ɵɵresolveDocument);
    }
  },
  inputs: {
    enabled: "enabled",
    items: "items",
    content: "content"
  },
  outputs: {
    itemsChange: "itemsChange",
    enabledChange: "enabledChange"
  },
  features: [ɵɵProvidersFeature([{
    provide: TUI_TILES_REORDER,
    useValue: tuiTilesShift
  }])],
  decls: 2,
  vars: 2,
  consts: [[1, "t-wrapper", 3, "orderChange", "order"], [3, "order", 4, "ngFor", "ngForOf"], [1, "t-item"], ["tuiTileHandle", "", 1, "t-draggable"], [1, "t-icon", 3, "icon"], [4, "polymorpheusOutlet", "polymorpheusOutletContext"], ["appearance", "icon", "size", "xs", "tuiIconButton", "", "type", "button", 1, "t-button", 3, "click", "keydown.arrowDown.prevent", "keydown.arrowUp.prevent", "iconStart"]],
  template: function TuiReorder_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "tui-tiles", 0);
      ɵɵtwoWayListener("orderChange", function TuiReorder_Template_tui_tiles_orderChange_0_listener($event) {
        ɵɵtwoWayBindingSet(ctx.order, $event) || (ctx.order = $event);
        return $event;
      });
      ɵɵtemplate(1, TuiReorder_tui_tile_1_Template, 8, 14, "tui-tile", 1);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵtwoWayProperty("order", ctx.order);
      ɵɵadvance();
      ɵɵproperty("ngForOf", ctx.unsortedItems);
    }
  },
  dependencies: [AsyncPipe, NgForOf, PolymorpheusOutlet, TuiButton, TuiIcon, TuiTilesComponent, TuiTile, TuiTileHandle],
  styles: ["[_nghost-%COMP%]{display:block;font:var(--tui-font-text-s);padding:.5rem 0;-webkit-user-select:none;user-select:none}.t-wrapper[_ngcontent-%COMP%]{grid-auto-rows:2rem}.t-draggable[_ngcontent-%COMP%]{cursor:ns-resize;flex:1 1 auto}.t-item[_ngcontent-%COMP%]{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:flex;block-size:2rem;align-items:center;padding:0 .75rem;background:var(--tui-background-base)}.t-item_disabled[_ngcontent-%COMP%]{opacity:var(--tui-disabled-opacity)}.t-item_disabled[_ngcontent-%COMP%]   .t-button[_ngcontent-%COMP%]{color:var(--tui-text-primary);opacity:1}.t-item[_ngcontent-%COMP%]:hover{background:var(--tui-background-base-alt)}.t-item[_ngcontent-%COMP%]:hover   .t-button[_ngcontent-%COMP%]{opacity:1}.t-icon[_ngcontent-%COMP%]{margin-inline-end:.5rem;color:var(--tui-text-tertiary);border-width:.25rem}.t-button[_ngcontent-%COMP%]{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;margin-inline-start:auto;opacity:0}.t-button[_ngcontent-%COMP%]:focus{opacity:1}"],
  changeDetection: 0
});
var TuiReorder = _TuiReorder;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiReorder, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-reorder",
      imports: [AsyncPipe, NgForOf, PolymorpheusOutlet, TuiButton, TuiIcon, TuiTiles],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [{
        provide: TUI_TILES_REORDER,
        useValue: tuiTilesShift
      }],
      host: {
        "(focusout.stop)": "(0)",
        "(pointerdown.zoneless)": "onDrag()",
        "(document:pointerup.zoneless)": "onDrop()"
      },
      template: '<tui-tiles\n    class="t-wrapper"\n    [(order)]="order"\n>\n    <tui-tile\n        *ngFor="let item of unsortedItems; let index = index"\n        [style.order]="order.get(index)"\n    >\n        <div\n            class="t-item"\n            [class.t-item_disabled]="!isEnabled(item)"\n        >\n            <div\n                tuiTileHandle\n                class="t-draggable"\n            >\n                <tui-icon\n                    class="t-icon"\n                    [icon]="options.icons.drag"\n                />\n                <ng-container *polymorpheusOutlet="content as template; context: {$implicit: item, index: index}">\n                    {{ template }}\n                </ng-container>\n            </div>\n            <button\n                appearance="icon"\n                size="xs"\n                tuiIconButton\n                type="button"\n                class="t-button"\n                [iconStart]="getIcon(item)"\n                (click)="toggle(item)"\n                (keydown.arrowDown.prevent)="move(index, 1)"\n                (keydown.arrowUp.prevent)="move(index, -1)"\n            >\n                {{ showHideText$ | async }}\n            </button>\n        </div>\n    </tui-tile>\n</tui-tiles>\n',
      styles: [":host{display:block;font:var(--tui-font-text-s);padding:.5rem 0;-webkit-user-select:none;user-select:none}.t-wrapper{grid-auto-rows:2rem}.t-draggable{cursor:ns-resize;flex:1 1 auto}.t-item{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:flex;block-size:2rem;align-items:center;padding:0 .75rem;background:var(--tui-background-base)}.t-item_disabled{opacity:var(--tui-disabled-opacity)}.t-item_disabled .t-button{color:var(--tui-text-primary);opacity:1}.t-item:hover{background:var(--tui-background-base-alt)}.t-item:hover .t-button{opacity:1}.t-icon{margin-inline-end:.5rem;color:var(--tui-text-tertiary);border-width:.25rem}.t-button{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;margin-inline-start:auto;opacity:0}.t-button:focus{opacity:1}\n"]
    }]
  }], null, {
    enabled: [{
      type: Input
    }],
    itemsChange: [{
      type: Output
    }],
    enabledChange: [{
      type: Output
    }],
    items: [{
      type: Input
    }],
    content: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/addon-table/fesm2022/taiga-ui-addon-table-components-table.mjs
var _c02 = ["tuiCaption", ""];
var _c1 = ["*"];
var _c2 = ["tuiTh", ""];
function TuiTableTh_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 3);
    ɵɵlistener("click", function TuiTableTh_button_0_Template_button_click_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.updateSorterAndDirection());
    });
    ɵɵelementContainer(1, 4);
    ɵɵtext(2);
    ɵɵpipe(3, "async");
    ɵɵelement(4, "tui-icon", 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    const content_r3 = ɵɵreference(2);
    ɵɵclassProp("t-sort_sorted", ctx_r1.isCurrent);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", content_r3);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 5, ctx_r1.table && ctx_r1.table.change$), " ");
    ɵɵadvance(2);
    ɵɵproperty("icon", ctx_r1.icon);
  }
}
function TuiTableTh_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
  }
}
function TuiTableTh_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 6);
    ɵɵlistener("tuiResized", function TuiTableTh_div_3_Template_div_tuiResized_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onResized($event));
    });
    ɵɵelementEnd();
  }
}
var _c3 = ["content"];
var _c4 = ["tuiTd", ""];
var _c5 = ["tuiTr", ""];
function TuiTableTr_ng_container_0_ng_container_1_ng_template_1_td_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td", 6);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.ngIf;
    const key_r2 = ɵɵnextContext(2).$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", item_r1[key_r2], " ");
  }
}
function TuiTableTr_ng_container_0_ng_container_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TuiTableTr_ng_container_0_ng_container_1_ng_template_1_td_0_Template, 2, 1, "td", 5);
    ɵɵpipe(1, "async");
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx_r2.item$));
  }
}
function TuiTableTr_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0, 4);
    ɵɵtemplate(1, TuiTableTr_ng_container_0_ng_container_1_ng_template_1_Template, 2, 3, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const key_r2 = ctx.$implicit;
    const plain_r4 = ɵɵreference(2);
    const items_r5 = ɵɵnextContext().ngIf;
    ɵɵproperty("ngTemplateOutlet", items_r5[key_r2] && items_r5[key_r2].template || plain_r4);
  }
}
function TuiTableTr_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TuiTableTr_ng_container_0_ng_container_1_Template, 3, 1, "ng-container", 3);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r2.table.columns);
  }
}
function TuiTableTr_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "td");
  }
}
var _c6 = ["tuiTbody", ""];
function TuiTableTbody_tr_0_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const text_r3 = ctx.polymorpheusOutlet;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", text_r3, " ");
  }
}
function TuiTableTbody_tr_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tr")(1, "th", 1)(2, "button", 2);
    ɵɵlistener("click", function TuiTableTbody_tr_0_Template_button_click_2_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onClick());
    });
    ɵɵelementStart(3, "span", 3);
    ɵɵtemplate(4, TuiTableTbody_tr_0_ng_container_4_Template, 2, 1, "ng-container", 4);
    ɵɵelementEnd();
    ɵɵelement(5, "tui-icon", 5);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("colSpan", ctx_r1.table.columns.length);
    ɵɵadvance(3);
    ɵɵproperty("polymorpheusOutlet", ctx_r1.heading);
    ɵɵadvance();
    ɵɵproperty("tuiChevron", ctx_r1.open);
  }
}
function TuiTableTbody_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵprojection(1);
    ɵɵelementContainerEnd();
  }
}
var _c7 = ["tuiThGroup", ""];
var _c8 = (a0) => ({
  $implicit: a0
});
function TuiTableThGroup_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 3);
  }
  if (rf & 2) {
    const key_r1 = ctx.$implicit;
    const headings_r2 = ɵɵnextContext().ngIf;
    const plain_r3 = ɵɵreference(3);
    ɵɵproperty("ngTemplateOutlet", headings_r2[key_r1] && headings_r2[key_r1].template || plain_r3)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c8, key_r1));
  }
}
function TuiTableThGroup_ng_container_1_ng_template_2_th_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "th", 5);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const key_r4 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", key_r4.toString(), " ");
  }
}
function TuiTableThGroup_ng_container_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TuiTableThGroup_ng_container_1_ng_template_2_th_0_Template, 2, 1, "th", 4);
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵproperty("ngIf", !ctx_r4.th && !ctx_r4.heads.length);
  }
}
function TuiTableThGroup_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TuiTableThGroup_ng_container_1_ng_container_1_Template, 1, 4, "ng-container", 2)(2, TuiTableThGroup_ng_container_1_ng_template_2_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r4.table.columns);
  }
}
var _TuiTableCaption = class _TuiTableCaption {
};
_TuiTableCaption.ɵfac = function TuiTableCaption_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiTableCaption)();
};
_TuiTableCaption.ɵcmp = ɵɵdefineComponent({
  type: _TuiTableCaption,
  selectors: [["caption", "tuiCaption", ""]],
  attrs: _c02,
  ngContentSelectors: _c1,
  decls: 1,
  vars: 0,
  template: function TuiTableCaption_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  styles: ["caption[tuiCaption]{caption-side:bottom;text-align:start;padding:.75rem 0;color:var(--tui-text-secondary)}caption[tuiCaption]>*:not(:first-child){margin-inline-start:.5rem}caption[tuiCaption] tui-pagination:not(:first-child),caption[tuiCaption] tui-pager:not(:first-child){display:inline-flex;vertical-align:middle}\n"],
  encapsulation: 2,
  changeDetection: 0
});
var TuiTableCaption = _TuiTableCaption;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTableCaption, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "caption[tuiCaption]",
      template: "<ng-content/>",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      styles: ["caption[tuiCaption]{caption-side:bottom;text-align:start;padding:.75rem 0;color:var(--tui-text-secondary)}caption[tuiCaption]>*:not(:first-child){margin-inline-start:.5rem}caption[tuiCaption] tui-pagination:not(:first-child),caption[tuiCaption] tui-pager:not(:first-child){display:inline-flex;vertical-align:middle}\n"]
    }]
  }], null, null);
})();
var _TuiTableCell = class _TuiTableCell {
  constructor() {
    this.tuiCell = "";
    this.template = inject(TemplateRef);
  }
};
_TuiTableCell.ɵfac = function TuiTableCell_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiTableCell)();
};
_TuiTableCell.ɵdir = ɵɵdefineDirective({
  type: _TuiTableCell,
  selectors: [["ng-template", "tuiCell", ""]],
  inputs: {
    tuiCell: "tuiCell"
  }
});
var TuiTableCell = _TuiTableCell;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTableCell, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "ng-template[tuiCell]"
    }]
  }], null, {
    tuiCell: [{
      type: Input
    }]
  });
})();
var TuiSortDirection = {
  Asc: 1,
  Desc: -1
};
var TUI_TABLE_DEFAULT_OPTIONS = {
  sticky: false,
  resizable: false,
  open: true,
  size: "m",
  direction: TuiSortDirection.Asc,
  requiredSort: false,
  sortIcons: {
    asc: "@tui.chevron-up",
    desc: "@tui.chevron-down",
    off: "@tui.chevrons-up-down"
  }
};
var TUI_TABLE_OPTIONS = new InjectionToken(ngDevMode ? "TUI_TABLE_OPTIONS" : "", {
  factory: () => TUI_TABLE_DEFAULT_OPTIONS
});
function tuiTableOptionsProvider(options) {
  return tuiProvideOptions(TUI_TABLE_OPTIONS, options, TUI_TABLE_DEFAULT_OPTIONS);
}
var _TuiStuck = class _TuiStuck {
  constructor() {
    this.stuck = toSignal(inject(IntersectionObserverService).pipe(map((entries) => (entries[entries.length - 1]?.intersectionRatio ?? 0) < 1), distinctUntilChanged(), tuiWatch(), catchError(() => EMPTY)));
  }
};
_TuiStuck.ɵfac = function TuiStuck_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiStuck)();
};
_TuiStuck.ɵdir = ɵɵdefineDirective({
  type: _TuiStuck,
  selectors: [["never"]],
  hostVars: 2,
  hostBindings: function TuiStuck_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("_stuck", ctx.stuck());
    }
  },
  features: [ɵɵProvidersFeature([IntersectionObserverService, {
    provide: WA_INTERSECTION_THRESHOLD,
    useValue: [0, 1]
  }])]
});
var TuiStuck = _TuiStuck;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiStuck, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "tui-stuck:never",
      providers: [IntersectionObserverService, {
        provide: WA_INTERSECTION_THRESHOLD,
        useValue: [0, 1]
      }],
      host: {
        "[class._stuck]": "stuck()"
      }
    }]
  }], null, null);
})();
var EMPTY_COMPARATOR = () => 0;
var _TuiTableStyles = class _TuiTableStyles {
};
_TuiTableStyles.ɵfac = function TuiTableStyles_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiTableStyles)();
};
_TuiTableStyles.ɵcmp = ɵɵdefineComponent({
  type: _TuiTableStyles,
  selectors: [["ng-component"]],
  hostAttrs: [1, "tui-table"],
  decls: 0,
  vars: 0,
  template: function TuiTableStyles_Template(rf, ctx) {
  },
  styles: ["table[tuiTable]{border-collapse:separate;border-spacing:0}table[tuiTable] [tuiCell]{padding:0}table[tuiTable] [tuiTitle]{white-space:nowrap}table[tuiTable] [tuiTitle] tui-icon{font-size:1rem}table[tuiTable] [tuiSubtitle]{color:var(--tui-text-secondary)}table[tuiTable] [tuiTh] [tuiCell],table[tuiTable] [tuiTh] [tuiTitle]{font:inherit;color:inherit}\n"],
  encapsulation: 2,
  changeDetection: 0
});
var TuiTableStyles = _TuiTableStyles;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTableStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-table"
      },
      styles: ["table[tuiTable]{border-collapse:separate;border-spacing:0}table[tuiTable] [tuiCell]{padding:0}table[tuiTable] [tuiTitle]{white-space:nowrap}table[tuiTable] [tuiTitle] tui-icon{font-size:1rem}table[tuiTable] [tuiSubtitle]{color:var(--tui-text-secondary)}table[tuiTable] [tuiTh] [tuiCell],table[tuiTable] [tuiTh] [tuiTitle]{font:inherit;color:inherit}\n"]
    }]
  }], null, null);
})();
var _TuiTableDirective = class _TuiTableDirective {
  constructor() {
    this.options = inject(TUI_TABLE_OPTIONS);
    this.cdr = inject(ChangeDetectorRef);
    this.nothing = tuiWithStyles(TuiTableStyles);
    this.columns = [];
    this.direction = this.options.direction;
    this.sorter = EMPTY_COMPARATOR;
    this.directionChange = new EventEmitter();
    this.sorterChange = new EventEmitter();
    this.sortChange = combineLatest([this.sorterChange, this.directionChange]).pipe(debounceTime(0), map(([sortComparator, sortDirection]) => ({
      sortBy: sortComparator,
      orderBy: sortDirection,
      sortComparator,
      sortDirection
    })));
    this.appearance = signal("table");
    this.size = signal(this.options.size);
    this.cleaner = signal(false);
    this.change$ = new Subject();
  }
  set sizeSetter(size) {
    this.size.set(size);
  }
  updateSorterAndDirection(sorter) {
    if (this.sorter === sorter) {
      this.updateSorter(this.sorter, this.direction === TuiSortDirection.Asc ? TuiSortDirection.Desc : TuiSortDirection.Asc);
    } else {
      this.updateSorter(sorter);
    }
  }
  ngOnChanges() {
    this.change$.next();
  }
  ngAfterViewInit() {
    this.cdr.detectChanges();
  }
  updateSorter(sorter, direction = TuiSortDirection.Asc) {
    this.sorter = sorter || EMPTY_COMPARATOR;
    this.direction = direction;
    this.sorterChange.emit(sorter);
    this.directionChange.emit(this.direction);
    this.change$.next();
  }
};
_TuiTableDirective.ɵfac = function TuiTableDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiTableDirective)();
};
_TuiTableDirective.ɵdir = ɵɵdefineDirective({
  type: _TuiTableDirective,
  selectors: [["table", "tuiTable", ""]],
  hostVars: 1,
  hostBindings: function TuiTableDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("data-size", ctx.size());
    }
  },
  inputs: {
    columns: "columns",
    direction: "direction",
    sorter: "sorter",
    sizeSetter: [0, "size", "sizeSetter"]
  },
  outputs: {
    directionChange: "directionChange",
    sorterChange: "sorterChange",
    sortChange: "sortChange"
  },
  features: [ɵɵProvidersFeature([{
    provide: WA_INTERSECTION_ROOT_MARGIN,
    useValue: "10000px 10000px 10000px 0px"
  }, tuiProvide(TUI_TEXTFIELD_OPTIONS, _TuiTableDirective), tuiButtonOptionsProvider({
    size: "s"
  }), tuiBadgeOptionsProvider({
    size: "m",
    appearance: "neutral"
  }), tuiChipOptionsProvider({
    size: "xxs",
    appearance: "neutral"
  }), tuiProgressOptionsProvider({
    size: "s",
    color: "var(--tui-text-action)"
  })]), ɵɵHostDirectivesFeature([TuiStuck]), ɵɵNgOnChangesFeature]
});
var TuiTableDirective = _TuiTableDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTableDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "table[tuiTable]",
      providers: [{
        provide: WA_INTERSECTION_ROOT_MARGIN,
        useValue: "10000px 10000px 10000px 0px"
      }, tuiProvide(TUI_TEXTFIELD_OPTIONS, TuiTableDirective), tuiButtonOptionsProvider({
        size: "s"
      }), tuiBadgeOptionsProvider({
        size: "m",
        appearance: "neutral"
      }), tuiChipOptionsProvider({
        size: "xxs",
        appearance: "neutral"
      }), tuiProgressOptionsProvider({
        size: "s",
        color: "var(--tui-text-action)"
      })],
      hostDirectives: [TuiStuck],
      host: {
        "[attr.data-size]": "size()"
      }
    }]
  }], null, {
    columns: [{
      type: Input
    }],
    direction: [{
      type: Input
    }],
    sorter: [{
      type: Input
    }],
    directionChange: [{
      type: Output
    }],
    sorterChange: [{
      type: Output
    }],
    sortChange: [{
      type: Output
    }],
    sizeSetter: [{
      type: Input,
      args: ["size"]
    }]
  });
})();
var _TuiTableDirectionOrder = class _TuiTableDirectionOrder {
  constructor() {
    this.table = inject(TuiTableDirective);
    this.directionOrderChange = this.table.directionChange.pipe(map((dir) => dir === 1 ? "asc" : "desc"));
  }
  set directionOrder(order) {
    this.table.direction = order === "asc" ? TuiSortDirection.Asc : TuiSortDirection.Desc;
  }
};
_TuiTableDirectionOrder.ɵfac = function TuiTableDirectionOrder_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiTableDirectionOrder)();
};
_TuiTableDirectionOrder.ɵdir = ɵɵdefineDirective({
  type: _TuiTableDirectionOrder,
  selectors: [["table", "tuiTable", "", "tuiDirectionOrder", ""]],
  inputs: {
    directionOrder: "directionOrder"
  },
  outputs: {
    directionOrderChange: "directionOrderChange"
  }
});
var TuiTableDirectionOrder = _TuiTableDirectionOrder;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTableDirectionOrder, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "table[tuiTable][tuiDirectionOrder]"
    }]
  }], null, {
    directionOrderChange: [{
      type: Output
    }],
    directionOrder: [{
      type: Input
    }]
  });
})();
var _TuiTableHead = class _TuiTableHead {
  constructor() {
    this.tuiHead = "";
    this.template = inject(TemplateRef);
  }
};
_TuiTableHead.ɵfac = function TuiTableHead_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiTableHead)();
};
_TuiTableHead.ɵdir = ɵɵdefineDirective({
  type: _TuiTableHead,
  selectors: [["", "tuiHead", ""]],
  inputs: {
    tuiHead: "tuiHead"
  }
});
var TuiTableHead = _TuiTableHead;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTableHead, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiHead]"
    }]
  }], null, {
    tuiHead: [{
      type: Input,
      args: [{
        required: true
      }]
    }]
  });
})();
var _TuiTableResized = class _TuiTableResized {
  constructor() {
    this.doc = inject(DOCUMENT);
    this.el = tuiInjectElement();
    this.tuiResized = tuiTypedFromEvent(this.el, "mousedown").pipe(tuiPreventDefault(), switchMap(() => {
      const {
        width,
        right
      } = this.el.closest("th")?.getBoundingClientRect() || EMPTY_CLIENT_RECT;
      return tuiTypedFromEvent(this.doc, "mousemove").pipe(distinctUntilChanged(), map(({
        clientX
      }) => width + clientX - right), takeUntil(tuiTypedFromEvent(this.doc, "mouseup")));
    }));
  }
};
_TuiTableResized.ɵfac = function TuiTableResized_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiTableResized)();
};
_TuiTableResized.ɵdir = ɵɵdefineDirective({
  type: _TuiTableResized,
  selectors: [["", "tuiResized", ""]],
  outputs: {
    tuiResized: "tuiResized"
  }
});
var TuiTableResized = _TuiTableResized;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTableResized, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiResized]"
    }]
  }], null, {
    tuiResized: [{
      type: Output
    }]
  });
})();
var _TuiTableTh = class _TuiTableTh {
  constructor() {
    this.options = inject(TUI_TABLE_OPTIONS);
    this.head = inject(TuiTableHead, {
      optional: true
    });
    this.width = null;
    this.table = inject(forwardRef(() => TuiTableDirective), {
      optional: true
    });
    this.minWidth = -Infinity;
    this.maxWidth = Infinity;
    this.sorter = this.head ? (a, b) => tuiDefaultSort(a[this.key], b[this.key]) : null;
    this.resizable = this.options.resizable;
    this.sticky = this.options.sticky;
    this.requiredSort = this.options.requiredSort;
  }
  get key() {
    if (!this.head) {
      throw new TuiTableSortKeyException();
    }
    return this.head.tuiHead;
  }
  get isCurrent() {
    return !!this.sorter && !!this.table && this.sorter === this.table.sorter;
  }
  get icon() {
    if (this.isCurrent) {
      return this.table?.direction === TuiSortDirection.Asc ? this.options.sortIcons.asc : this.options.sortIcons.desc;
    }
    return this.options.sortIcons.off;
  }
  updateSorterAndDirection() {
    const sorter = this.requiredSort ? this.sorter : null;
    this.table?.updateSorterAndDirection(this.isCurrentAndDescDirection ? sorter : this.sorter);
  }
  onResized(width) {
    this.width = Math.min(Math.max(width, this.minWidth), this.maxWidth);
  }
  get isCurrentAndDescDirection() {
    return this.sorter === this.table?.sorter && this.table?.direction === TuiSortDirection.Desc;
  }
};
_TuiTableTh.ɵfac = function TuiTableTh_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiTableTh)();
};
_TuiTableTh.ɵcmp = ɵɵdefineComponent({
  type: _TuiTableTh,
  selectors: [["th", "tuiTh", ""]],
  hostVars: 8,
  hostBindings: function TuiTableTh_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵstyleProp("min-width", ctx.width || ctx.minWidth, "px")("width", ctx.width || ctx.minWidth, "px")("max-width", ctx.width || ctx.maxWidth, "px");
      ɵɵclassProp("_sticky", ctx.sticky);
    }
  },
  inputs: {
    minWidth: "minWidth",
    maxWidth: "maxWidth",
    sorter: "sorter",
    resizable: "resizable",
    sticky: "sticky",
    requiredSort: "requiredSort"
  },
  attrs: _c2,
  ngContentSelectors: _c1,
  decls: 4,
  vars: 3,
  consts: [["content", ""], ["type", "button", "class", "t-sort", 3, "t-sort_sorted", "click", 4, "ngIf", "ngIfElse"], ["class", "t-bar", 3, "tuiResized", 4, "ngIf"], ["type", "button", 1, "t-sort", 3, "click"], [3, "ngTemplateOutlet"], [1, "t-icon", 3, "icon"], [1, "t-bar", 3, "tuiResized"]],
  template: function TuiTableTh_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, TuiTableTh_button_0_Template, 5, 7, "button", 1)(1, TuiTableTh_ng_template_1_Template, 1, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor)(3, TuiTableTh_div_3_Template, 1, 0, "div", 2);
    }
    if (rf & 2) {
      const content_r3 = ɵɵreference(2);
      ɵɵproperty("ngIf", ctx.sorter && ctx.table)("ngIfElse", content_r3);
      ɵɵadvance(3);
      ɵɵproperty("ngIf", ctx.resizable);
    }
  },
  dependencies: [AsyncPipe, NgIf, NgTemplateOutlet, TuiIcon, TuiTableResized],
  styles: ['[_nghost-%COMP%]{transition-property:box-shadow;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:relative;top:0;block-size:var(--tui-height-m);font:var(--tui-font-text-s);text-align:start;font-weight:700;color:var(--tui-text-secondary);background:var(--tui-background-base);cursor:default;padding:0 .75rem;box-sizing:border-box;box-shadow:0 .3125rem #ededed00;border:1px solid var(--tui-border-normal);filter:opacity(1)}@supports (-webkit-hyphens: none){[_nghost-%COMP%]{transform:translateZ(0)}}[_nghost-%COMP%]:not(:first-child){border-inline-start:none}._sticky[_nghost-%COMP%], ._stuck   ._sticky[_nghost-%COMP%]{position:sticky;z-index:30}._sticky[_nghost-%COMP%]:first-child, ._stuck   ._sticky[_nghost-%COMP%]:first-child{left:0}._sticky[_nghost-%COMP%]:after, ._stuck   ._sticky[_nghost-%COMP%]:after{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:"";position:absolute;top:0;left:100%;bottom:0;inline-size:.3125rem;pointer-events:none;background:#edededb3;opacity:0}._stuck   [_nghost-%COMP%]{z-index:20}tr:not(:first-child)[_nghost-%COMP%], tr:not(:first-child)   [_nghost-%COMP%]{border-block-start:none}table[data-size="l"][_nghost-%COMP%], table[data-size="l"]   [_nghost-%COMP%]{block-size:var(--tui-height-l);font:var(--tui-font-text-m);font-weight:700;padding:0 1rem}table[data-size="s"][_nghost-%COMP%], table[data-size="s"]   [_nghost-%COMP%]{block-size:var(--tui-height-s);font:var(--tui-font-text-s);font-weight:700;padding:0 .5rem}thead[tuiThead][_nghost-%COMP%], thead[tuiThead]   [_nghost-%COMP%]{position:sticky}table._stuck._sticky[_nghost-%COMP%]:after, table._stuck   ._sticky[_nghost-%COMP%]:after{opacity:1}thead[tuiThead]._stuck[_nghost-%COMP%], thead[tuiThead]._stuck   [_nghost-%COMP%]{box-shadow:0 .3125rem #edededb3}[tuiTheme="dark"]._sticky[_nghost-%COMP%]:after, [tuiTheme="dark"]   ._sticky[_nghost-%COMP%]:after{background:#3c3c3ce6}[tuiTheme="dark"]   thead[tuiThead]._stuck[_nghost-%COMP%], [tuiTheme="dark"]   thead[tuiThead]._stuck   [_nghost-%COMP%]{box-shadow:0 .3125rem #3c3c3ce6}[tuiTheme="dark"]   thead[tuiThead]._stuck[_nghost-%COMP%]:first-child, [tuiTheme="dark"]   thead[tuiThead]._stuck   [_nghost-%COMP%]:first-child{box-shadow:.0625rem .3125rem #3c3c3ce6}table[data-size="l"]   thead[tuiThead]   tr:nth-child(2)[_nghost-%COMP%], table[data-size="l"]   thead[tuiThead]   tr:nth-child(2)   [_nghost-%COMP%]{top:var(--tui-height-l)}table[data-size="m"]   thead[tuiThead]   tr:nth-child(2)[_nghost-%COMP%], table[data-size="m"]   thead[tuiThead]   tr:nth-child(2)   [_nghost-%COMP%]{top:var(--tui-height-m)}table[data-size="s"]   thead[tuiThead]   tr:nth-child(2)[_nghost-%COMP%], table[data-size="s"]   thead[tuiThead]   tr:nth-child(2)   [_nghost-%COMP%]{top:var(--tui-height-s)}.t-sort[_ngcontent-%COMP%]{transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;line-height:inherit;text-decoration:none;display:inline-flex;vertical-align:top;flex-direction:inherit;align-items:center;outline:none;font:inherit;text-transform:inherit;color:inherit;cursor:pointer}.t-sort_sorted[_ngcontent-%COMP%]{color:var(--tui-text-primary)}.t-sort[_ngcontent-%COMP%]:focus-visible{background:var(--tui-service-selection-background)}.t-sort[_ngcontent-%COMP%]:hover{color:var(--tui-text-primary)}.t-bar[_ngcontent-%COMP%]{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;top:0;bottom:0;right:-1px;inline-size:.1875rem;justify-self:flex-end;border-inline-start:2px solid transparent;background:var(--tui-status-warning);background-clip:content-box;cursor:ew-resize;opacity:0}.t-bar[_ngcontent-%COMP%]:hover, .t-bar[_ngcontent-%COMP%]:active{opacity:1}.t-icon[_ngcontent-%COMP%]{border-width:.25rem}'],
  changeDetection: 0
});
var TuiTableTh = _TuiTableTh;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTableTh, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "th[tuiTh]",
      imports: [AsyncPipe, NgIf, NgTemplateOutlet, TuiIcon, TuiTableResized],
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[style.min-width.px]": "width || minWidth",
        "[style.width.px]": "width || minWidth",
        "[style.max-width.px]": "width || maxWidth",
        "[class._sticky]": "sticky"
      },
      template: '<button\n    *ngIf="sorter && table; else content"\n    type="button"\n    class="t-sort"\n    [class.t-sort_sorted]="isCurrent"\n    (click)="updateSorterAndDirection()"\n>\n    <ng-container [ngTemplateOutlet]="content" />\n    {{ table && table.change$ | async }}\n    <tui-icon\n        class="t-icon"\n        [icon]="icon"\n    />\n</button>\n<ng-template #content>\n    <ng-content />\n</ng-template>\n<div\n    *ngIf="resizable"\n    class="t-bar"\n    (tuiResized)="onResized($event)"\n></div>\n',
      styles: [':host{transition-property:box-shadow;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:relative;top:0;block-size:var(--tui-height-m);font:var(--tui-font-text-s);text-align:start;font-weight:700;color:var(--tui-text-secondary);background:var(--tui-background-base);cursor:default;padding:0 .75rem;box-sizing:border-box;box-shadow:0 .3125rem #ededed00;border:1px solid var(--tui-border-normal);filter:opacity(1)}@supports (-webkit-hyphens: none){:host{transform:translateZ(0)}}:host:not(:first-child){border-inline-start:none}:host._sticky,:host-context(._stuck) :host._sticky{position:sticky;z-index:30}:host._sticky:first-child,:host-context(._stuck) :host._sticky:first-child{left:0}:host._sticky:after,:host-context(._stuck) :host._sticky:after{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:"";position:absolute;top:0;left:100%;bottom:0;inline-size:.3125rem;pointer-events:none;background:#edededb3;opacity:0}:host-context(._stuck) :host{z-index:20}:host-context(tr:not(:first-child)){border-block-start:none}:host-context(table[data-size="l"]){block-size:var(--tui-height-l);font:var(--tui-font-text-m);font-weight:700;padding:0 1rem}:host-context(table[data-size="s"]){block-size:var(--tui-height-s);font:var(--tui-font-text-s);font-weight:700;padding:0 .5rem}:host-context(thead[tuiThead]){position:sticky}:host-context(table._stuck)._sticky:after{opacity:1}:host-context(thead[tuiThead]._stuck){box-shadow:0 .3125rem #edededb3}:host-context([tuiTheme="dark"])._sticky:after{background:#3c3c3ce6}:host-context([tuiTheme="dark"] thead[tuiThead]._stuck){box-shadow:0 .3125rem #3c3c3ce6}:host-context([tuiTheme="dark"] thead[tuiThead]._stuck):first-child{box-shadow:.0625rem .3125rem #3c3c3ce6}:host-context(table[data-size="l"] thead[tuiThead] tr:nth-child(2)){top:var(--tui-height-l)}:host-context(table[data-size="m"] thead[tuiThead] tr:nth-child(2)){top:var(--tui-height-m)}:host-context(table[data-size="s"] thead[tuiThead] tr:nth-child(2)){top:var(--tui-height-s)}.t-sort{transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;line-height:inherit;text-decoration:none;display:inline-flex;vertical-align:top;flex-direction:inherit;align-items:center;outline:none;font:inherit;text-transform:inherit;color:inherit;cursor:pointer}.t-sort_sorted{color:var(--tui-text-primary)}.t-sort:focus-visible{background:var(--tui-service-selection-background)}.t-sort:hover{color:var(--tui-text-primary)}.t-bar{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;top:0;bottom:0;right:-1px;inline-size:.1875rem;justify-self:flex-end;border-inline-start:2px solid transparent;background:var(--tui-status-warning);background-clip:content-box;cursor:ew-resize;opacity:0}.t-bar:hover,.t-bar:active{opacity:1}.t-icon{border-width:.25rem}\n']
    }]
  }], null, {
    minWidth: [{
      type: Input
    }],
    maxWidth: [{
      type: Input
    }],
    sorter: [{
      type: Input
    }],
    resizable: [{
      type: Input
    }],
    sticky: [{
      type: Input
    }],
    requiredSort: [{
      type: Input
    }]
  });
})();
var TuiTableSortKeyException = class extends Error {
  constructor() {
    super(ngDevMode ? "Trying to sort with no key" : "");
  }
};
var _TuiTableSortable = class _TuiTableSortable {
  constructor() {
    this.table = inject(TuiTableDirective);
    this.th = inject(TuiTableTh);
    this.sortBy = inject(forwardRef(() => TuiTableSortBy));
    this.sorter = () => 0;
  }
  get key() {
    return this.th.key;
  }
  ngOnChanges() {
    if (this.sortable) {
      this.sorter = this.match ? this.table.sorter : this.sorter;
      this.th.sorter = this.sorter;
    } else {
      this.th.sorter = null;
    }
  }
  check() {
    if (this.match && this.table.sorter !== this.sorter) {
      this.table.updateSorter(this.sorter);
    }
  }
  get match() {
    return this.sortBy.tuiSortBy === this.key;
  }
};
_TuiTableSortable.ɵfac = function TuiTableSortable_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiTableSortable)();
};
_TuiTableSortable.ɵdir = ɵɵdefineDirective({
  type: _TuiTableSortable,
  selectors: [["th", "tuiTh", "", "tuiSortable", ""]],
  inputs: {
    sortable: [2, "tuiSortable", "sortable", coerceBooleanProperty]
  },
  features: [ɵɵNgOnChangesFeature]
});
var TuiTableSortable = _TuiTableSortable;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTableSortable, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "th[tuiTh][tuiSortable]"
    }]
  }], null, {
    sortable: [{
      type: Input,
      args: [{
        alias: "tuiSortable",
        transform: coerceBooleanProperty
      }]
    }]
  });
})();
var _TuiTableSortBy = class _TuiTableSortBy {
  constructor() {
    this.sortables = EMPTY_QUERY;
    this.table = inject(TuiTableDirective);
    this.tuiSortByChange = this.table.sorterChange.pipe(
      // delay is for getting actual ContentChildren (sortables) https://github.com/angular/angular/issues/38976
      delay(0),
      filter(() => !!this.sortables.length),
      map((sorter) => this.getKey(sorter))
    );
    this.tuiSortChange = combineLatest([this.tuiSortByChange, this.table.directionChange]).pipe(debounceTime(0), map(([sortKey, sortDirection]) => ({
      sortBy: sortKey,
      orderBy: sortDirection,
      sortKey,
      sortDirection
    })));
    this.tuiSortBy = null;
  }
  set sortBy(sortBy) {
    this.tuiSortBy = sortBy;
    this.checkSortables();
  }
  checkSortables() {
    this.sortables.forEach((s) => s.check());
  }
  getKey(sorter) {
    return this.sortables.find((s) => s.sorter === sorter)?.key || null;
  }
};
_TuiTableSortBy.ɵfac = function TuiTableSortBy_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiTableSortBy)();
};
_TuiTableSortBy.ɵdir = ɵɵdefineDirective({
  type: _TuiTableSortBy,
  selectors: [["table", "tuiTable", "", "tuiSortBy", ""]],
  contentQueries: function TuiTableSortBy_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, TuiTableSortable, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.sortables = _t);
    }
  },
  inputs: {
    sortBy: [0, "tuiSortBy", "sortBy"]
  },
  outputs: {
    tuiSortByChange: "tuiSortByChange",
    tuiSortChange: "tuiSortChange"
  }
});
var TuiTableSortBy = _TuiTableSortBy;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTableSortBy, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "table[tuiTable][tuiSortBy]"
    }]
  }], null, {
    sortables: [{
      type: ContentChildren,
      args: [TuiTableSortable, {
        descendants: true
      }]
    }],
    tuiSortByChange: [{
      type: Output
    }],
    tuiSortChange: [{
      type: Output
    }],
    sortBy: [{
      type: Input,
      args: ["tuiSortBy"]
    }]
  });
})();
var _TuiTableThead = class _TuiTableThead {
};
_TuiTableThead.ɵfac = function TuiTableThead_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiTableThead)();
};
_TuiTableThead.ɵdir = ɵɵdefineDirective({
  type: _TuiTableThead,
  selectors: [["thead", "tuiThead", ""]],
  features: [ɵɵProvidersFeature([{
    provide: WA_INTERSECTION_ROOT_MARGIN,
    useValue: "0px 10000px 10000px 10000px"
  }]), ɵɵHostDirectivesFeature([TuiStuck])]
});
var TuiTableThead = _TuiTableThead;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTableThead, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "thead[tuiThead]",
      providers: [{
        provide: WA_INTERSECTION_ROOT_MARGIN,
        useValue: "0px 10000px 10000px 10000px"
      }],
      hostDirectives: [TuiStuck]
    }]
  }], null, null);
})();
var _TuiTableSortPipe = class _TuiTableSortPipe {
  constructor() {
    this.table = inject(TuiTableDirective);
  }
  transform(data) {
    return this.sort(data ?? [], this.table.sorter, this.table.direction);
  }
  sort(data, sorter, direction) {
    return [...data].sort((a, b) => direction * sorter(a, b));
  }
};
_TuiTableSortPipe.ɵfac = function TuiTableSortPipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiTableSortPipe)();
};
_TuiTableSortPipe.ɵpipe = ɵɵdefinePipe({
  name: "tuiTableSort",
  type: _TuiTableSortPipe,
  pure: false
});
var TuiTableSortPipe = _TuiTableSortPipe;
__decorate([tuiPure], TuiTableSortPipe.prototype, "sort", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTableSortPipe, [{
    type: Pipe,
    args: [{
      standalone: true,
      name: "tuiTableSort",
      pure: false
    }]
  }], null, {
    sort: []
  });
})();
var TUI_TABLE_PROVIDER = [{
  provide: TuiTableDirective,
  deps: [[new SkipSelf(), TuiTableDirective]],
  useFactory: (controller) => {
    controller.change$.pipe(tuiWatch(), takeUntilDestroyed()).subscribe();
    return controller;
  }
}];
var _TuiTableExpand = class _TuiTableExpand {
  constructor() {
    this.el = tuiInjectElement();
    this.server = isPlatformServer(inject(PLATFORM_ID));
    this.transitioning = signal(false);
    this.contentHeight = computed((_ = this.expanded()) => this.update());
    this.visible$ = new Subject();
    this.sub = this.visible$.pipe(switchMap((v) => v ? timer(500).pipe(map(() => v)) : of(v)), takeUntilDestroyed()).subscribe((visible) => this.el.classList.toggle("_visible", visible));
    this.expandedChange = new EventEmitter();
    this.expanded = signal(inject(TUI_TABLE_OPTIONS).open);
  }
  set expandedSetter(open) {
    this.expanded.set(open);
    this.transitioning.set(true);
  }
  toggle() {
    this.expanded.set(!this.expanded());
    this.transitioning.set(true);
    this.expandedChange.emit(this.expanded());
  }
  update() {
    if (!this.content || this.server) {
      return 0;
    }
    const el = this.content.nativeElement;
    el.style.setProperty("display", "block");
    const height = el.getBoundingClientRect().height;
    el.style.removeProperty("display");
    return height;
  }
};
_TuiTableExpand.ɵfac = function TuiTableExpand_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiTableExpand)();
};
_TuiTableExpand.ɵcmp = ɵɵdefineComponent({
  type: _TuiTableExpand,
  selectors: [["tui-table-expand"]],
  viewQuery: function TuiTableExpand_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c3, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.content = _t.first);
    }
  },
  hostAttrs: ["ngSkipHydration", "true"],
  hostBindings: function TuiTableExpand_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("tuiPresentChange", function TuiTableExpand_tuiPresentChange_HostBindingHandler($event) {
        return ctx.visible$.next($event);
      });
    }
  },
  inputs: {
    expandedSetter: [0, "expanded", "expandedSetter"]
  },
  outputs: {
    expandedChange: "expandedChange"
  },
  features: [ɵɵHostDirectivesFeature([{
    directive: TuiPresent,
    outputs: ["tuiPresentChange", "tuiPresentChange"]
  }])],
  ngContentSelectors: _c1,
  decls: 4,
  vars: 6,
  consts: [["content", ""], [1, "t-content"], [1, "t-filler", 3, "animationcancel", "animationend", "animationstart"]],
  template: function TuiTableExpand_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵprojectionDef();
      ɵɵdomElementStart(0, "div", 1, 0);
      ɵɵprojection(2);
      ɵɵdomElementEnd();
      ɵɵdomElementStart(3, "div", 2);
      ɵɵdomListener("animationcancel", function TuiTableExpand_Template_div_animationcancel_3_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.transitioning.set(false));
      })("animationend", function TuiTableExpand_Template_div_animationend_3_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.transitioning.set(false));
      })("animationstart", function TuiTableExpand_Template_div_animationstart_3_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.transitioning.set(true));
      });
      ɵɵdomElementEnd();
    }
    if (rf & 2) {
      ɵɵclassProp("t-content_open", ctx.expanded() && !ctx.transitioning());
      ɵɵadvance(3);
      ɵɵstyleProp("--t-height", ctx.contentHeight(), "px");
      ɵɵclassProp("t-filler_open", ctx.expanded());
    }
  },
  styles: ["@keyframes _ngcontent-%COMP%_fade-in{0%{opacity:0}to{opacity:1}}@keyframes _ngcontent-%COMP%_open{0%{block-size:0}to{block-size:var(--t-height)}}@keyframes _ngcontent-%COMP%_close{0%{block-size:var(--t-height)}to{block-size:0}}[_nghost-%COMP%]{display:contents}[_nghost-%COMP%]:not(._visible){--tui-duration: 0ms}.t-content[_ngcontent-%COMP%]{display:none}.t-content_open[_ngcontent-%COMP%]{display:contents}.t-content_open[_ngcontent-%COMP%]     tr{animation:_ngcontent-%COMP%_fade-in var(--tui-duration)}.t-filler[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_close calc(var(--tui-duration) + 1ms)}.t-filler_open[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_open calc(var(--tui-duration) + 1ms)}"],
  changeDetection: 0
});
var TuiTableExpand = _TuiTableExpand;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTableExpand, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-table-expand",
      changeDetection: ChangeDetectionStrategy.OnPush,
      hostDirectives: [{
        directive: TuiPresent,
        outputs: ["tuiPresentChange"]
      }],
      host: {
        ngSkipHydration: "true",
        "(tuiPresentChange)": "visible$.next($event)"
      },
      template: '<div\n    #content\n    class="t-content"\n    [class.t-content_open]="expanded() && !transitioning()"\n>\n    <ng-content />\n</div>\n\n<div\n    class="t-filler"\n    [class.t-filler_open]="expanded()"\n    [style.--t-height.px]="contentHeight()"\n    (animationcancel)="transitioning.set(false)"\n    (animationend)="transitioning.set(false)"\n    (animationstart)="transitioning.set(true)"\n></div>\n',
      styles: ["@keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes open{0%{block-size:0}to{block-size:var(--t-height)}}@keyframes close{0%{block-size:var(--t-height)}to{block-size:0}}:host{display:contents}:host:not(._visible){--tui-duration: 0ms}.t-content{display:none}.t-content_open{display:contents}.t-content_open ::ng-deep tr{animation:fade-in var(--tui-duration)}.t-filler{animation:close calc(var(--tui-duration) + 1ms)}.t-filler_open{animation:open calc(var(--tui-duration) + 1ms)}\n"]
    }]
  }], null, {
    content: [{
      type: ViewChild,
      args: ["content", {
        static: true
      }]
    }],
    expandedChange: [{
      type: Output
    }],
    expandedSetter: [{
      type: Input,
      args: ["expanded"]
    }]
  });
})();
var _TuiTableTd = class _TuiTableTd {
};
_TuiTableTd.ɵfac = function TuiTableTd_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiTableTd)();
};
_TuiTableTd.ɵcmp = ɵɵdefineComponent({
  type: _TuiTableTd,
  selectors: [["th", "tuiTd", ""], ["td", "tuiTd", ""]],
  contentQueries: function TuiTableTd_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, TuiControl, 5);
      ɵɵcontentQuery(dirIndex, TuiTextfieldComponent, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.control = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.textfield = _t.first);
    }
  },
  hostVars: 2,
  hostBindings: function TuiTableTd_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("_editable", ctx.control || ctx.textfield);
    }
  },
  attrs: _c4,
  ngContentSelectors: _c1,
  decls: 1,
  vars: 0,
  template: function TuiTableTd_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  styles: ['[_nghost-%COMP%]{position:relative;text-align:start;background:var(--tui-background-base);border:1px solid var(--tui-border-normal);border-block-start:none;box-sizing:border-box;filter:opacity(1)}@supports (-webkit-hyphens: none){[_nghost-%COMP%]{transform:translateZ(0)}}[_nghost-%COMP%]:first-child{left:0}[_nghost-%COMP%]:not(:first-child){border-inline-start:none}._editable[_nghost-%COMP%]:focus-within{z-index:1}._editable[_nghost-%COMP%]{padding:0!important;vertical-align:top}th[_nghost-%COMP%]{position:sticky;z-index:1}th[_nghost-%COMP%]:after{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:"";position:absolute;top:0;bottom:0;left:100%;inline-size:.3125rem;pointer-events:none;background:#edededb3;opacity:0}th[_nghost-%COMP%]:focus-within:not(:disabled){z-index:11}[tuiTheme="dark"][_nghost-%COMP%]:after, [tuiTheme="dark"]   [_nghost-%COMP%]:after{background:#3c3c3ce6}table._stuck[_nghost-%COMP%], table._stuck   [_nghost-%COMP%]{z-index:10}table._stuck[_nghost-%COMP%]:last-of-type:after, table._stuck   [_nghost-%COMP%]:last-of-type:after{opacity:1}table[data-size="l"][_nghost-%COMP%], table[data-size="l"]   [_nghost-%COMP%]{block-size:var(--tui-height-l);font:var(--tui-font-text-m);padding:1rem}table[data-size="m"][_nghost-%COMP%], table[data-size="m"]   [_nghost-%COMP%]{block-size:var(--tui-height-m);font:var(--tui-font-text-s);padding:.75rem}table[data-size="s"][_nghost-%COMP%], table[data-size="s"]   [_nghost-%COMP%]{block-size:var(--tui-height-s);font:var(--tui-font-text-s);padding:.25rem .5rem}td[_nghost-%COMP%]:focus-within{z-index:1}td[_nghost-%COMP%]:not(:focus-within){z-index:0}'],
  changeDetection: 0
});
var TuiTableTd = _TuiTableTd;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTableTd, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "th[tuiTd], td[tuiTd]",
      template: "<ng-content />",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[class._editable]": "control || textfield"
      },
      styles: [':host{position:relative;text-align:start;background:var(--tui-background-base);border:1px solid var(--tui-border-normal);border-block-start:none;box-sizing:border-box;filter:opacity(1)}@supports (-webkit-hyphens: none){:host{transform:translateZ(0)}}:host:first-child{left:0}:host:not(:first-child){border-inline-start:none}:host._editable:focus-within{z-index:1}:host._editable{padding:0!important;vertical-align:top}:host(th){position:sticky;z-index:1}:host(th):after{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:"";position:absolute;top:0;bottom:0;left:100%;inline-size:.3125rem;pointer-events:none;background:#edededb3;opacity:0}:host(th):focus-within:not(:disabled){z-index:11}:host-context([tuiTheme="dark"]):after{background:#3c3c3ce6}:host-context(table._stuck){z-index:10}:host-context(table._stuck):last-of-type:after{opacity:1}:host-context(table[data-size="l"]){block-size:var(--tui-height-l);font:var(--tui-font-text-m);padding:1rem}:host-context(table[data-size="m"]){block-size:var(--tui-height-m);font:var(--tui-font-text-s);padding:.75rem}:host-context(table[data-size="s"]){block-size:var(--tui-height-s);font:var(--tui-font-text-s);padding:.25rem .5rem}:host(td):focus-within{z-index:1}:host(td):not(:focus-within){z-index:0}\n']
    }]
  }], null, {
    control: [{
      type: ContentChild,
      args: [TuiControl]
    }],
    textfield: [{
      type: ContentChild,
      args: [TuiTextfieldComponent]
    }]
  });
})();
var _TuiTableTr = class _TuiTableTr {
  constructor() {
    this.cells = EMPTY_QUERY;
    this.body = inject(forwardRef(() => TuiTableTbody));
    this.contentReady$ = new ReplaySubject(1);
    this.table = inject(forwardRef(() => TuiTableDirective));
    this.height = toSignal(inject(ResizeObserverService, {
      self: true
    }).pipe(map(([entry]) => entry?.contentRect.height ?? 0), distinctUntilChanged(), tuiZoneOptimized()), {
      initialValue: 0
    });
    this.cells$ = this.contentReady$.pipe(switchMap(() => tuiQueryListChanges(this.cells)), map((cells) => cells.reduce((record, item) => __spreadProps(__spreadValues({}, record), {
      [item.tuiCell]: item
    }), {})));
    this.item$ = this.contentReady$.pipe(switchMap(() => tuiQueryListChanges(this.body.rows)), map((rows) => this.body.data[rows.findIndex((row) => row === this)]));
  }
  ngAfterContentInit() {
    Promise.resolve().then(() => this.contentReady$.next(true));
  }
};
_TuiTableTr.ɵfac = function TuiTableTr_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiTableTr)();
};
_TuiTableTr.ɵcmp = ɵɵdefineComponent({
  type: _TuiTableTr,
  selectors: [["tr", "tuiTr", ""]],
  contentQueries: function TuiTableTr_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, TuiTableCell, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.cells = _t);
    }
  },
  hostVars: 2,
  hostBindings: function TuiTableTr_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵstyleProp("--t-row-height", ctx.height(), "px");
    }
  },
  features: [ɵɵProvidersFeature([TUI_TABLE_PROVIDER, ResizeObserverService])],
  attrs: _c5,
  ngContentSelectors: _c1,
  decls: 5,
  vars: 4,
  consts: [["dummy", ""], ["plain", ""], [4, "ngIf", "ngIfElse"], [3, "ngTemplateOutlet", 4, "ngFor", "ngForOf"], [3, "ngTemplateOutlet"], ["tuiTd", "", 4, "ngIf"], ["tuiTd", ""]],
  template: function TuiTableTr_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, TuiTableTr_ng_container_0_Template, 2, 1, "ng-container", 2);
      ɵɵpipe(1, "async");
      ɵɵtemplate(2, TuiTableTr_ng_template_2_Template, 1, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor);
      ɵɵprojection(4);
    }
    if (rf & 2) {
      const dummy_r6 = ɵɵreference(3);
      ɵɵproperty("ngIf", ɵɵpipeBind1(1, 2, ctx.cells$))("ngIfElse", dummy_r6);
    }
  },
  dependencies: [AsyncPipe, NgForOf, NgIf, NgTemplateOutlet, TuiTableTd],
  encapsulation: 2,
  changeDetection: 0
});
var TuiTableTr = _TuiTableTr;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTableTr, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tr[tuiTr]",
      imports: [AsyncPipe, NgForOf, NgIf, NgTemplateOutlet, TuiTableTd],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [TUI_TABLE_PROVIDER, ResizeObserverService],
      host: {
        "[style.--t-row-height.px]": "height()"
      },
      template: '<ng-container *ngIf="cells$ | async as items; else dummy">\n    <ng-container\n        *ngFor="let key of table.columns"\n        [ngTemplateOutlet]="(items[key] && items[key].template) || plain"\n    >\n        <ng-template #plain>\n            <td\n                *ngIf="item$ | async as item"\n                tuiTd\n            >\n                {{ item[key] }}\n            </td>\n        </ng-template>\n    </ng-container>\n</ng-container>\n<ng-template #dummy>\n    <td></td>\n</ng-template>\n<ng-content />\n'
    }]
  }], null, {
    cells: [{
      type: ContentChildren,
      args: [forwardRef(() => TuiTableCell)]
    }]
  });
})();
var _TuiTableTbody = class _TuiTableTbody {
  constructor() {
    this.options = inject(TUI_TABLE_OPTIONS);
    this.table = inject(forwardRef(() => TuiTableDirective));
    this.rows = EMPTY_QUERY;
    this.data = [];
    this.open = this.options.open;
    this.openChange = new EventEmitter();
    this.onClick = () => {
      this.open = !this.open;
      this.openChange.emit(this.open);
    };
  }
};
_TuiTableTbody.ɵfac = function TuiTableTbody_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiTableTbody)();
};
_TuiTableTbody.ɵcmp = ɵɵdefineComponent({
  type: _TuiTableTbody,
  selectors: [["tbody", "tuiTbody", ""]],
  contentQueries: function TuiTableTbody_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, TuiTableTr, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.rows = _t);
    }
  },
  inputs: {
    data: "data",
    heading: "heading",
    open: "open"
  },
  outputs: {
    openChange: "openChange"
  },
  features: [ɵɵProvidersFeature(TUI_TABLE_PROVIDER)],
  attrs: _c6,
  ngContentSelectors: _c1,
  decls: 2,
  vars: 2,
  consts: [[4, "ngIf"], [1, "t-heading", 3, "colSpan"], ["type", "button", 1, "t-expand", 3, "click"], [1, "t-name"], [4, "polymorpheusOutlet"], [1, "t-chevron", 3, "tuiChevron"]],
  template: function TuiTableTbody_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, TuiTableTbody_tr_0_Template, 6, 3, "tr", 0)(1, TuiTableTbody_ng_container_1_Template, 2, 0, "ng-container", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.heading);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.open);
    }
  },
  dependencies: [NgIf, PolymorpheusOutlet, TuiChevron, TuiIcon],
  styles: ['[_nghost-%COMP%]{border-color:var(--tui-border-normal)}[_nghost-%COMP%]   tr[_ngcontent-%COMP%]{border-color:inherit}.t-expand[_ngcontent-%COMP%]{-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font:inherit;line-height:inherit;text-decoration:none;display:flex;inline-size:100%;block-size:100%;align-items:center;box-sizing:border-box;outline:none;font-weight:700;cursor:pointer;border-color:inherit}.t-expand[_ngcontent-%COMP%]:focus-visible   .t-name[_ngcontent-%COMP%]{background:var(--tui-service-selection-background)}.t-expand[_ngcontent-%COMP%]:before, .t-expand[_ngcontent-%COMP%]:after{content:"";position:sticky;block-size:100%;border-inline-start:1px solid;border-color:inherit}.t-expand[_ngcontent-%COMP%]:before{left:0}.t-expand[_ngcontent-%COMP%]:after{right:0}.t-heading[_ngcontent-%COMP%]{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;block-size:var(--tui-height-m);font:var(--tui-font-text-s);padding:0;background:var(--tui-background-neutral-1);border-block-end:1px solid var(--tui-border-normal);border-color:inherit}.t-heading[_ngcontent-%COMP%]:hover{background:var(--tui-background-neutral-1-hover)}table[data-size="l"][_nghost-%COMP%]   .t-heading[_ngcontent-%COMP%], table[data-size="l"]   [_nghost-%COMP%]   .t-heading[_ngcontent-%COMP%]{font:var(--tui-font-text-m);block-size:var(--tui-height-l)}.t-name[_ngcontent-%COMP%]{position:sticky;left:.75rem;display:inline-block}table[data-size="l"][_nghost-%COMP%]   .t-name[_ngcontent-%COMP%], table[data-size="l"]   [_nghost-%COMP%]   .t-name[_ngcontent-%COMP%]{left:1rem}.t-chevron[_ngcontent-%COMP%]{position:sticky;right:.75rem;margin:0 .6875rem 0 auto}'],
  changeDetection: 0
});
var TuiTableTbody = _TuiTableTbody;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTableTbody, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tbody[tuiTbody]",
      imports: [NgIf, PolymorpheusOutlet, TuiChevron, TuiIcon],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: TUI_TABLE_PROVIDER,
      template: '<tr *ngIf="heading">\n    <th\n        class="t-heading"\n        [colSpan]="table.columns.length"\n    >\n        <button\n            type="button"\n            class="t-expand"\n            (click)="onClick()"\n        >\n            <span class="t-name">\n                <ng-container *polymorpheusOutlet="heading as text">\n                    {{ text }}\n                </ng-container>\n            </span>\n            <tui-icon\n                class="t-chevron"\n                [tuiChevron]="open"\n            />\n        </button>\n    </th>\n</tr>\n<ng-container *ngIf="open">\n    <ng-content />\n</ng-container>\n',
      styles: [':host{border-color:var(--tui-border-normal)}:host tr{border-color:inherit}.t-expand{-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font:inherit;line-height:inherit;text-decoration:none;display:flex;inline-size:100%;block-size:100%;align-items:center;box-sizing:border-box;outline:none;font-weight:700;cursor:pointer;border-color:inherit}.t-expand:focus-visible .t-name{background:var(--tui-service-selection-background)}.t-expand:before,.t-expand:after{content:"";position:sticky;block-size:100%;border-inline-start:1px solid;border-color:inherit}.t-expand:before{left:0}.t-expand:after{right:0}.t-heading{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;block-size:var(--tui-height-m);font:var(--tui-font-text-s);padding:0;background:var(--tui-background-neutral-1);border-block-end:1px solid var(--tui-border-normal);border-color:inherit}.t-heading:hover{background:var(--tui-background-neutral-1-hover)}:host-context(table[data-size="l"]) .t-heading{font:var(--tui-font-text-m);block-size:var(--tui-height-l)}.t-name{position:sticky;left:.75rem;display:inline-block}:host-context(table[data-size="l"]) .t-name{left:1rem}.t-chevron{position:sticky;right:.75rem;margin:0 .6875rem 0 auto}\n']
    }]
  }], null, {
    rows: [{
      type: ContentChildren,
      args: [forwardRef(() => TuiTableTr)]
    }],
    data: [{
      type: Input
    }],
    heading: [{
      type: Input
    }],
    open: [{
      type: Input
    }],
    openChange: [{
      type: Output
    }]
  });
})();
var _TuiTableThGroup = class _TuiTableThGroup {
  constructor() {
    this.heads = EMPTY_QUERY;
    this.heads$ = null;
    this.table = inject(forwardRef(() => TuiTableDirective));
  }
  ngAfterContentInit() {
    this.heads$ = this.heads.changes.pipe(startWith(null), map(() => this.heads.reduce((record, item) => __spreadProps(__spreadValues({}, record), {
      [item.tuiHead]: item
    }), {})));
  }
};
_TuiTableThGroup.ɵfac = function TuiTableThGroup_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiTableThGroup)();
};
_TuiTableThGroup.ɵcmp = ɵɵdefineComponent({
  type: _TuiTableThGroup,
  selectors: [["tr", "tuiThGroup", ""]],
  contentQueries: function TuiTableThGroup_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, TuiTableTh, 5);
      ɵɵcontentQuery(dirIndex, TuiTableHead, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.th = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.heads = _t);
    }
  },
  features: [ɵɵProvidersFeature([TUI_TABLE_PROVIDER])],
  attrs: _c7,
  ngContentSelectors: _c1,
  decls: 3,
  vars: 3,
  consts: [["plain", ""], [4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngFor", "ngForOf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["tuiTh", "", 4, "ngIf"], ["tuiTh", ""]],
  template: function TuiTableThGroup_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
      ɵɵtemplate(1, TuiTableThGroup_ng_container_1_Template, 4, 1, "ng-container", 1);
      ɵɵpipe(2, "async");
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵproperty("ngIf", ɵɵpipeBind1(2, 1, ctx.heads$));
    }
  },
  dependencies: [AsyncPipe, NgForOf, NgIf, NgTemplateOutlet, TuiTableTh],
  encapsulation: 2,
  changeDetection: 0
});
var TuiTableThGroup = _TuiTableThGroup;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTableThGroup, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tr[tuiThGroup]",
      imports: [AsyncPipe, NgForOf, NgIf, NgTemplateOutlet, TuiTableTh],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [TUI_TABLE_PROVIDER],
      template: '<ng-content />\n<ng-container *ngIf="heads$ | async as headings">\n    <ng-container\n        *ngFor="let key of table.columns"\n        [ngTemplateOutlet]="(headings[key] && headings[key].template) || plain"\n        [ngTemplateOutletContext]="{$implicit: key}"\n    />\n    <ng-template\n        #plain\n        let-key\n    >\n        <th\n            *ngIf="!th && !heads.length"\n            tuiTh\n        >\n            {{ key.toString() }}\n        </th>\n    </ng-template>\n</ng-container>\n'
    }]
  }], null, {
    th: [{
      type: ContentChild,
      args: [forwardRef(() => TuiTableTh)]
    }],
    heads: [{
      type: ContentChildren,
      args: [forwardRef(() => TuiTableHead)]
    }]
  });
})();
var TuiTable = [TuiTableDirective, TuiTableCaption, TuiTableTbody, TuiTableThGroup, TuiTableTh, TuiTableTd, TuiTableTr, TuiTableCell, TuiTableHead, TuiTableSortBy, TuiTableSortable, TuiTableThead, TuiTableResized, TuiTableSortPipe, TuiTableDirectionOrder, TuiTableExpand];

// node_modules/@taiga-ui/addon-table/fesm2022/taiga-ui-addon-table-components-table-pagination.mjs
var _c03 = (a0, a1) => ({
  $implicit: a0,
  total: a1
});
function TuiTablePagination_ng_container_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementStart(2, "strong", 7);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const texts_r1 = ɵɵnextContext().ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", texts_r1.pages, " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r1.pages);
  }
}
function TuiTablePagination_ng_container_0_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 8);
    ɵɵtwoWayListener("tuiDropdownOpenChange", function TuiTablePagination_ng_container_0_button_5_Template_button_tuiDropdownOpenChange_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(2);
      ɵɵtwoWayBindingSet(ctx_r1.open, $event) || (ctx_r1.open = $event);
      return ɵɵresetView($event);
    });
    ɵɵelementStart(1, "strong");
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    ɵɵnextContext();
    const content_r4 = ɵɵreference(9);
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("tuiDropdown", content_r4);
    ɵɵtwoWayProperty("tuiDropdownOpen", ctx_r1.open);
    ɵɵadvance(2);
    ɵɵtextInterpolate2("", ctx_r1.start + 1, "–", ctx_r1.end);
  }
}
function TuiTablePagination_ng_container_0_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "strong");
    ɵɵtext(1, "0 - 0");
    ɵɵelementEnd();
  }
}
function TuiTablePagination_ng_container_0_ng_template_8_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const text_r7 = ctx.polymorpheusOutlet;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", text_r7, " ");
  }
}
function TuiTablePagination_ng_container_0_ng_template_8_ng_container_1_tui_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-icon", 14);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵproperty("icon", ctx_r1.commonIcons.check);
  }
}
function TuiTablePagination_ng_container_0_ng_template_8_ng_container_1_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 15);
  }
}
function TuiTablePagination_ng_container_0_ng_template_8_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "button", 11);
    ɵɵlistener("click", function TuiTablePagination_ng_container_0_ng_template_8_ng_container_1_Template_button_click_1_listener() {
      const item_r6 = ɵɵrestoreView(_r5).$implicit;
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onItem(item_r6));
    });
    ɵɵtemplate(2, TuiTablePagination_ng_container_0_ng_template_8_ng_container_1_ng_container_2_Template, 2, 1, "ng-container", 12)(3, TuiTablePagination_ng_container_0_ng_template_8_ng_container_1_tui_icon_3_Template, 1, 1, "tui-icon", 13)(4, TuiTablePagination_ng_container_0_ng_template_8_ng_container_1_ng_template_4_Template, 1, 0, "ng-template", null, 2, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const fakeIcon_r8 = ɵɵreference(5);
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance(2);
    ɵɵproperty("polymorpheusOutlet", ctx_r1.sizeOptionContent)("polymorpheusOutletContext", ɵɵpureFunction2(4, _c03, item_r6, ctx_r1.total));
    ɵɵadvance();
    ɵɵproperty("ngIf", item_r6 === ctx_r1.size)("ngIfElse", fakeIcon_r8);
  }
}
function TuiTablePagination_ng_container_0_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tui-data-list", 9);
    ɵɵtemplate(1, TuiTablePagination_ng_container_0_ng_template_8_ng_container_1_Template, 6, 7, "ng-container", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.items);
  }
}
function TuiTablePagination_ng_container_0_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "button", 16);
    ɵɵlistener("click", function TuiTablePagination_ng_container_0_ng_container_13_Template_button_click_1_listener() {
      ɵɵrestoreView(_r9);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.back());
    });
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "button", 17);
    ɵɵlistener("click", function TuiTablePagination_ng_container_0_ng_container_13_Template_button_click_3_listener() {
      ɵɵrestoreView(_r9);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.forth());
    });
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const spinTexts_r10 = ctx.ngIf;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("disabled", ctx_r1.leftDisabled)("iconStart", ctx_r1.icons.decrement);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", spinTexts_r10[0], " ");
    ɵɵadvance();
    ɵɵproperty("disabled", ctx_r1.rightDisabled)("iconStart", ctx_r1.icons.increment);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", spinTexts_r10[1], " ");
  }
}
function TuiTablePagination_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "span", 4);
    ɵɵtemplate(2, TuiTablePagination_ng_container_0_ng_container_2_Template, 4, 2, "ng-container", 3);
    ɵɵelementEnd();
    ɵɵelementStart(3, "span", 5);
    ɵɵtext(4);
    ɵɵtemplate(5, TuiTablePagination_ng_container_0_button_5_Template, 3, 4, "button", 6)(6, TuiTablePagination_ng_container_0_ng_template_6_Template, 2, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor)(8, TuiTablePagination_ng_container_0_ng_template_8_Template, 2, 1, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    ɵɵtext(10);
    ɵɵelementStart(11, "strong", 7);
    ɵɵtext(12);
    ɵɵelementEnd()();
    ɵɵtemplate(13, TuiTablePagination_ng_container_0_ng_container_13_Template, 5, 6, "ng-container", 3);
    ɵɵpipe(14, "async");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const texts_r1 = ctx.ngIf;
    const zeroTotal_r11 = ɵɵreference(7);
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.showPages);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", texts_r1.linesPerPage, " ");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.total !== 0)("ngIfElse", zeroTotal_r11);
    ɵɵadvance(5);
    ɵɵtextInterpolate1(" ", texts_r1.of, " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r1.total);
    ɵɵadvance();
    ɵɵproperty("ngIf", ɵɵpipeBind1(14, 7, ctx_r1.spinTexts$));
  }
}
function defaultSizeOptionContent({
  $implicit
}) {
  return `${$implicit}`;
}
var TUI_TABLE_PAGINATION_DEFAULT_OPTIONS = {
  sizeOptionContent: defaultSizeOptionContent,
  showPages: true,
  items: [10, 20, 50, 100],
  size: 10
};
var TUI_TABLE_PAGINATION_OPTIONS = new InjectionToken(ngDevMode ? "TUI_TABLE_PAGINATION_OPTIONS" : "", {
  factory: () => TUI_TABLE_PAGINATION_DEFAULT_OPTIONS
});
function tuiTablePaginationOptionsProvider(options) {
  return tuiProvideOptions(TUI_TABLE_PAGINATION_OPTIONS, options, TUI_TABLE_PAGINATION_DEFAULT_OPTIONS);
}
var _TuiTablePagination = class _TuiTablePagination {
  constructor() {
    this.options = inject(TUI_TABLE_PAGINATION_OPTIONS);
    this.open = false;
    this.icons = inject(TUI_SPIN_ICONS);
    this.spinTexts$ = inject(TUI_SPIN_TEXTS);
    this.texts$ = inject(TUI_TABLE_PAGINATION_TEXTS);
    this.commonIcons = inject(TUI_COMMON_ICONS);
    this.items = this.options.items;
    this.total = 0;
    this.page = 0;
    this.size = this.options.size;
    this.paginationChange = new EventEmitter();
  }
  onItem(size) {
    const {
      start
    } = this;
    this.size = size;
    this.open = false;
    this.page = Math.floor(start / this.size);
    this.paginationChange.emit(this.pagination);
  }
  get pages() {
    return Math.ceil(this.total / this.size);
  }
  get showPages() {
    return this.options.showPages;
  }
  get sizeOptionContent() {
    return this.options.sizeOptionContent;
  }
  get start() {
    return Math.min(this.page, Math.floor(this.total / this.size)) * this.size;
  }
  get end() {
    return Math.min(this.start + this.size, this.total);
  }
  get leftDisabled() {
    return !this.start;
  }
  get rightDisabled() {
    return this.end === this.total;
  }
  get pagination() {
    return {
      page: this.page,
      size: this.size
    };
  }
  back() {
    this.page--;
    this.paginationChange.emit(this.pagination);
  }
  forth() {
    this.page++;
    this.paginationChange.emit(this.pagination);
  }
};
_TuiTablePagination.ɵfac = function TuiTablePagination_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiTablePagination)();
};
_TuiTablePagination.ɵcmp = ɵɵdefineComponent({
  type: _TuiTablePagination,
  selectors: [["tui-table-pagination"]],
  inputs: {
    items: "items",
    total: "total",
    page: "page",
    size: "size"
  },
  outputs: {
    paginationChange: "paginationChange"
  },
  decls: 2,
  vars: 3,
  consts: [["zeroTotal", ""], ["content", ""], ["fakeIcon", ""], [4, "ngIf"], [1, "t-pages"], ["automation-id", "tui-table-pagination__lines-per-page-wrapper"], ["tuiLink", "", "type", "button", 3, "tuiDropdown", "tuiDropdownOpen", "tuiDropdownOpenChange", 4, "ngIf", "ngIfElse"], [1, "t-strong"], ["tuiLink", "", "type", "button", 3, "tuiDropdownOpenChange", "tuiDropdown", "tuiDropdownOpen"], ["size", "s"], [4, "ngFor", "ngForOf"], ["tuiOption", "", "type", "button", 1, "t-item", 3, "click"], [4, "polymorpheusOutlet", "polymorpheusOutletContext"], ["class", "t-checkmark", 3, "icon", 4, "ngIf", "ngIfElse"], [1, "t-checkmark", 3, "icon"], [1, "t-checkmark"], ["appearance", "icon", "size", "xs", "tuiIconButton", "", "type", "button", 1, "t-button", "t-button_back", 3, "click", "disabled", "iconStart"], ["appearance", "icon", "size", "xs", "tuiIconButton", "", "type", "button", 1, "t-button", 3, "click", "disabled", "iconStart"]],
  template: function TuiTablePagination_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, TuiTablePagination_ng_container_0_Template, 15, 9, "ng-container", 3);
      ɵɵpipe(1, "async");
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.texts$));
    }
  },
  dependencies: [AsyncPipe, NgForOf, NgIf, PolymorpheusOutlet, TuiButton, TuiDataListComponent, TuiOption, TuiDropdownDirective, TuiDropdownOpen, TuiIcon, TuiLink],
  styles: ["[_nghost-%COMP%]{display:flex;font:var(--tui-font-text-s);align-items:center;color:var(--tui-text-tertiary)}.t-strong[_ngcontent-%COMP%]{color:var(--tui-text-primary)}.t-pages[_ngcontent-%COMP%]{margin-inline-end:auto}.t-item[_ngcontent-%COMP%]{min-inline-size:5.5rem;box-sizing:border-box}.t-checkmark[_ngcontent-%COMP%]{min-inline-size:1rem;font-size:1rem;margin-inline-start:.25rem}.t-button[_ngcontent-%COMP%]{transform:scaleX(var(--tui-inline))}.t-button_back[_ngcontent-%COMP%]{margin-inline-end:.25rem;margin-inline-start:1.5rem}"],
  changeDetection: 0
});
var TuiTablePagination = _TuiTablePagination;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTablePagination, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-table-pagination",
      imports: [AsyncPipe, NgForOf, NgIf, PolymorpheusOutlet, TuiButton, TuiDataList, TuiDropdownDirective, TuiDropdownOpen, TuiIcon, TuiLink],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<ng-container *ngIf="texts$ | async as texts">\n    <span class="t-pages">\n        <ng-container *ngIf="showPages">\n            {{ texts.pages }}\n            <strong class="t-strong">{{ pages }}</strong>\n        </ng-container>\n    </span>\n    <span automation-id="tui-table-pagination__lines-per-page-wrapper">\n        {{ texts.linesPerPage }}\n\n        <button\n            *ngIf="total !== 0; else zeroTotal"\n            tuiLink\n            type="button"\n            [tuiDropdown]="content"\n            [(tuiDropdownOpen)]="open"\n        >\n            <strong>{{ start + 1 }}–{{ end }}</strong>\n        </button>\n        <ng-template #zeroTotal>\n            <strong>0 - 0</strong>\n        </ng-template>\n        <ng-template #content>\n            <tui-data-list size="s">\n                <ng-container *ngFor="let item of items">\n                    <button\n                        tuiOption\n                        type="button"\n                        class="t-item"\n                        (click)="onItem(item)"\n                    >\n                        <ng-container\n                            *polymorpheusOutlet="sizeOptionContent as text; context: {$implicit: item, total: total}"\n                        >\n                            {{ text }}\n                        </ng-container>\n                        <tui-icon\n                            *ngIf="item === size; else fakeIcon"\n                            class="t-checkmark"\n                            [icon]="commonIcons.check"\n                        />\n\n                        <ng-template #fakeIcon>\n                            <span class="t-checkmark"></span>\n                        </ng-template>\n                    </button>\n                </ng-container>\n            </tui-data-list>\n        </ng-template>\n        {{ texts.of }}\n        <strong class="t-strong">{{ total }}</strong>\n    </span>\n    <ng-container *ngIf="spinTexts$ | async as spinTexts">\n        <button\n            appearance="icon"\n            size="xs"\n            tuiIconButton\n            type="button"\n            class="t-button t-button_back"\n            [disabled]="leftDisabled"\n            [iconStart]="icons.decrement"\n            (click)="back()"\n        >\n            {{ spinTexts[0] }}\n        </button>\n        <button\n            appearance="icon"\n            size="xs"\n            tuiIconButton\n            type="button"\n            class="t-button"\n            [disabled]="rightDisabled"\n            [iconStart]="icons.increment"\n            (click)="forth()"\n        >\n            {{ spinTexts[1] }}\n        </button>\n    </ng-container>\n</ng-container>\n',
      styles: [":host{display:flex;font:var(--tui-font-text-s);align-items:center;color:var(--tui-text-tertiary)}.t-strong{color:var(--tui-text-primary)}.t-pages{margin-inline-end:auto}.t-item{min-inline-size:5.5rem;box-sizing:border-box}.t-checkmark{min-inline-size:1rem;font-size:1rem;margin-inline-start:.25rem}.t-button{transform:scaleX(var(--tui-inline))}.t-button_back{margin-inline-end:.25rem;margin-inline-start:1.5rem}\n"]
    }]
  }], null, {
    items: [{
      type: Input
    }],
    total: [{
      type: Input
    }],
    page: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    paginationChange: [{
      type: Output
    }]
  });
})();

// node_modules/@taiga-ui/addon-table/fesm2022/taiga-ui-addon-table-directives-table-control.mjs
var _TuiTableControlDirective = class _TuiTableControlDirective extends TuiControl {
  constructor() {
    super(...arguments);
    this.children = signal([]);
    this.checked = computed(() => this.children().every((i) => this.value().includes(i.tuiCheckboxRow)));
    this.indeterminate = computed(() => !!this.value().length && !this.checked());
  }
  toggleAll() {
    this.onChange(this.checked() ? [] : this.children().map((i) => i.tuiCheckboxRow));
  }
  process(checkbox) {
    this.children.update((children) => tuiArrayToggle(children, checkbox));
  }
};
_TuiTableControlDirective.ɵfac = /* @__PURE__ */ (() => {
  let ɵTuiTableControlDirective_BaseFactory;
  return function TuiTableControlDirective_Factory(__ngFactoryType__) {
    return (ɵTuiTableControlDirective_BaseFactory || (ɵTuiTableControlDirective_BaseFactory = ɵɵgetInheritedFactory(_TuiTableControlDirective)))(__ngFactoryType__ || _TuiTableControlDirective);
  };
})();
_TuiTableControlDirective.ɵdir = ɵɵdefineDirective({
  type: _TuiTableControlDirective,
  selectors: [["", "tuiTable", "", "ngModel", ""], ["", "tuiTable", "", "formControl", ""], ["", "tuiTable", "", "formControlName", ""]],
  features: [ɵɵProvidersFeature([tuiFallbackValueProvider([])]), ɵɵInheritDefinitionFeature]
});
var TuiTableControlDirective = _TuiTableControlDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTableControlDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiTable][ngModel],[tuiTable][formControl],[tuiTable][formControlName]",
      providers: [tuiFallbackValueProvider([])]
    }]
  }], null, null);
})();
var _TuiCheckboxRowDirective = class _TuiCheckboxRowDirective {
  constructor() {
    this.control = inject(NgControl);
    this.parent = inject(TuiTableControlDirective);
    this.checked = computed((checked = this.parent.value().includes(this.tuiCheckboxRow)) => {
      setTimeout(() => this.control.control?.setValue(checked));
      return checked;
    });
  }
  ngOnInit() {
    this.parent.process(this);
  }
  ngOnDestroy() {
    this.parent.process(this);
    this.parent.onChange(this.parent.value().filter((item) => item !== this.tuiCheckboxRow));
  }
  onChange() {
    this.parent.onChange(tuiArrayToggle(this.parent.value(), this.tuiCheckboxRow));
  }
};
_TuiCheckboxRowDirective.ɵfac = function TuiCheckboxRowDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiCheckboxRowDirective)();
};
_TuiCheckboxRowDirective.ɵdir = ɵɵdefineDirective({
  type: _TuiCheckboxRowDirective,
  selectors: [["", "tuiCheckbox", "", "tuiCheckboxRow", ""]],
  hostVars: 1,
  hostBindings: function TuiCheckboxRowDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("change", function TuiCheckboxRowDirective_change_HostBindingHandler() {
        return ctx.onChange();
      });
    }
    if (rf & 2) {
      ɵɵdomProperty("checked", ctx.checked());
    }
  },
  inputs: {
    tuiCheckboxRow: "tuiCheckboxRow"
  },
  features: [ɵɵProvidersFeature([{
    provide: NgControl,
    useClass: NgModel
  }])]
});
var TuiCheckboxRowDirective = _TuiCheckboxRowDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCheckboxRowDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiCheckbox][tuiCheckboxRow]",
      providers: [{
        provide: NgControl,
        useClass: NgModel
      }],
      host: {
        "[checked]": "checked()",
        "(change)": "onChange()"
      }
    }]
  }], null, {
    tuiCheckboxRow: [{
      type: Input
    }]
  });
})();
var _TuiCheckboxTableDirective = class _TuiCheckboxTableDirective {
  constructor() {
    this.control = inject(NgControl);
    this.parent = inject(TuiTableControlDirective);
    this.update = computed(() => {
      this.control.control?.setValue(this.parent.indeterminate() ? null : this.parent.checked());
    });
  }
};
_TuiCheckboxTableDirective.ɵfac = function TuiCheckboxTableDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiCheckboxTableDirective)();
};
_TuiCheckboxTableDirective.ɵdir = ɵɵdefineDirective({
  type: _TuiCheckboxTableDirective,
  selectors: [["", "tuiCheckbox", "", "tuiCheckboxTable", ""]],
  hostVars: 2,
  hostBindings: function TuiCheckboxTableDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("change", function TuiCheckboxTableDirective_change_HostBindingHandler() {
        return ctx.parent.toggleAll();
      });
    }
    if (rf & 2) {
      ɵɵdomProperty("checked", ctx.parent.checked())("indeterminate", ctx.parent.indeterminate());
    }
  },
  features: [ɵɵProvidersFeature([{
    provide: NgControl,
    useClass: NgModel
  }])]
});
var TuiCheckboxTableDirective = _TuiCheckboxTableDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCheckboxTableDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiCheckbox][tuiCheckboxTable]",
      providers: [{
        provide: NgControl,
        useClass: NgModel
      }],
      host: {
        "[checked]": "parent.checked()",
        "[indeterminate]": "parent.indeterminate()",
        "(change)": "parent.toggleAll()"
      }
    }]
  }], null, null);
})();
var TuiTableControl = [TuiCheckboxRowDirective, TuiCheckboxTableDirective, TuiTableControlDirective];

// node_modules/@taiga-ui/addon-table/fesm2022/taiga-ui-addon-table-directives-table-filters.mjs
var AbstractTuiTableFilter = class {
};
var _TuiGenericFilter = class _TuiGenericFilter extends AbstractTuiTableFilter {
  constructor() {
    super(...arguments);
    this.filter = TUI_TRUE_HANDLER;
  }
};
_TuiGenericFilter.ɵfac = /* @__PURE__ */ (() => {
  let ɵTuiGenericFilter_BaseFactory;
  return function TuiGenericFilter_Factory(__ngFactoryType__) {
    return (ɵTuiGenericFilter_BaseFactory || (ɵTuiGenericFilter_BaseFactory = ɵɵgetInheritedFactory(_TuiGenericFilter)))(__ngFactoryType__ || _TuiGenericFilter);
  };
})();
_TuiGenericFilter.ɵdir = ɵɵdefineDirective({
  type: _TuiGenericFilter,
  selectors: [["", "tuiGenericFilter", ""]],
  inputs: {
    filter: [0, "tuiGenericFilter", "filter"]
  },
  features: [ɵɵProvidersFeature([tuiProvide(AbstractTuiTableFilter, _TuiGenericFilter)]), ɵɵInheritDefinitionFeature]
});
var TuiGenericFilter = _TuiGenericFilter;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiGenericFilter, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiGenericFilter]",
      providers: [tuiProvide(AbstractTuiTableFilter, TuiGenericFilter)]
    }]
  }], null, {
    filter: [{
      type: Input,
      args: ["tuiGenericFilter"]
    }]
  });
})();
var _TuiTableFiltersDirective = class _TuiTableFiltersDirective {
  constructor() {
    this.refresh$ = new ReplaySubject(1);
    this.filters = [];
  }
  register(filter2) {
    this.filters = this.filters.concat(filter2);
    this.update();
  }
  unregister(filter2) {
    this.filters = this.filters.filter((item) => item !== filter2);
    this.update();
  }
  filter(items) {
    return this.refresh$.pipe(switchMap(identity), startWith(null), map(() => items.filter((item) => this.check(item))));
  }
  check(item) {
    return this.filters.every((filter2) => filter2.filter(item));
  }
  update() {
    this.refresh$.next(merge(...this.filters.map(({
      refresh$
    }) => refresh$)));
  }
};
_TuiTableFiltersDirective.ɵfac = function TuiTableFiltersDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiTableFiltersDirective)();
};
_TuiTableFiltersDirective.ɵdir = ɵɵdefineDirective({
  type: _TuiTableFiltersDirective,
  selectors: [["", "tuiTableFilters", ""]]
});
var TuiTableFiltersDirective = _TuiTableFiltersDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTableFiltersDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiTableFilters]"
    }]
  }], null, null);
})();
var _TuiTableFilterDirective = class _TuiTableFilterDirective {
  constructor() {
    this.head = inject(TuiTableHead, {
      optional: true
    });
    this.delegate = inject(AbstractTuiTableFilter);
    this.control = inject(NgControl);
    this.filters = inject(TuiTableFiltersDirective);
    this.refresh$ = defer(() => merge(this.control.valueChanges || EMPTY, this.control.statusChanges?.pipe(distinctUntilChanged()) || EMPTY));
  }
  ngOnInit() {
    this.filters.register(this);
  }
  ngOnDestroy() {
    this.filters.unregister(this);
  }
  filter(item) {
    const {
      disabled,
      value
    } = this.control;
    return !!disabled || !this.key || this.delegate.filter(item[this.key], value);
  }
  get key() {
    return this.tuiTableFilter || this.head?.tuiHead;
  }
};
_TuiTableFilterDirective.ɵfac = function TuiTableFilterDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiTableFilterDirective)();
};
_TuiTableFilterDirective.ɵdir = ɵɵdefineDirective({
  type: _TuiTableFilterDirective,
  selectors: [["", "tuiTableFilter", ""]],
  inputs: {
    tuiTableFilter: "tuiTableFilter"
  }
});
var TuiTableFilterDirective = _TuiTableFilterDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTableFilterDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiTableFilter]"
    }]
  }], null, {
    tuiTableFilter: [{
      type: Input
    }]
  });
})();
var _TuiTableFiltersPipe = class _TuiTableFiltersPipe {
  constructor() {
    this.filters = inject(TuiTableFiltersDirective);
  }
  transform(items) {
    return this.filters.filter(items);
  }
};
_TuiTableFiltersPipe.ɵfac = function TuiTableFiltersPipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiTableFiltersPipe)();
};
_TuiTableFiltersPipe.ɵpipe = ɵɵdefinePipe({
  name: "tuiTableFilters",
  type: _TuiTableFiltersPipe,
  pure: true
});
var TuiTableFiltersPipe = _TuiTableFiltersPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTableFiltersPipe, [{
    type: Pipe,
    args: [{
      standalone: true,
      name: "tuiTableFilters"
    }]
  }], null, null);
})();
var TuiTableFilters = [TuiTableFiltersDirective, TuiTableFilterDirective, TuiTableFiltersPipe, TuiGenericFilter];
export {
  AbstractTuiTableFilter,
  TUI_REORDER_DEFAULT_OPTIONS,
  TUI_REORDER_OPTIONS,
  TUI_TABLE_DEFAULT_OPTIONS,
  TUI_TABLE_OPTIONS,
  TUI_TABLE_PAGINATION_DEFAULT_OPTIONS,
  TUI_TABLE_PAGINATION_OPTIONS,
  TUI_TABLE_PAGINATION_TEXTS,
  TUI_TABLE_PROVIDER,
  TUI_TABLE_SHOW_HIDE_MESSAGE,
  TuiCheckboxRowDirective,
  TuiCheckboxTableDirective,
  TuiGenericFilter,
  TuiReorder,
  TuiSortDirection,
  TuiStuck,
  TuiTable,
  TuiTableCaption,
  TuiTableCell,
  TuiTableControl,
  TuiTableControlDirective,
  TuiTableDirectionOrder,
  TuiTableDirective,
  TuiTableExpand,
  TuiTableFilterDirective,
  TuiTableFilters,
  TuiTableFiltersDirective,
  TuiTableFiltersPipe,
  TuiTableHead,
  TuiTablePagination,
  TuiTableResized,
  TuiTableSortBy,
  TuiTableSortKeyException,
  TuiTableSortPipe,
  TuiTableSortable,
  TuiTableTbody,
  TuiTableTd,
  TuiTableTh,
  TuiTableThGroup,
  TuiTableThead,
  TuiTableTr,
  tuiReorderOptionsProvider,
  tuiTableOptionsProvider,
  tuiTablePaginationOptionsProvider
};
//# sourceMappingURL=@taiga-ui_addon-table.js.map
