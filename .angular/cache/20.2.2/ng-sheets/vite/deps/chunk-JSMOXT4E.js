import {
  WA_WINDOW
} from "./chunk-5MMGTIYT.js";
import {
  TUI_ALLOW_SIGNAL_WRITES,
  tuiClamp,
  tuiIsPresent
} from "./chunk-XYVFFOET.js";
import {
  isPlatformBrowser
} from "./chunk-O7OBBIEJ.js";
import {
  ElementRef,
  PLATFORM_ID
} from "./chunk-H2LFSO26.js";
import {
  DestroyRef,
  INJECTOR$1,
  effect,
  inject,
  isSignal,
  signal,
  untracked
} from "./chunk-VNPPOK4A.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@angular/cdk/fesm2022/array.mjs
function coerceArray(value) {
  return Array.isArray(value) ? value : [value];
}

// node_modules/@angular/cdk/fesm2022/element.mjs
function coerceElement(elementOrRef) {
  return elementOrRef instanceof ElementRef ? elementOrRef.nativeElement : elementOrRef;
}

// node_modules/@angular/cdk/fesm2022/coercion.mjs
function coerceBooleanProperty(value) {
  return value != null && `${value}` !== "false";
}

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-utils-dom.mjs
function tuiContainsOrAfter(current, node) {
  try {
    return current.contains(node) || !!(node.compareDocumentPosition(current) & Node.DOCUMENT_POSITION_PRECEDING);
  } catch {
    return false;
  }
}
function tuiIsInput(element) {
  return element.matches("input");
}
function tuiIsTextarea(element) {
  return element.matches("textarea");
}
function tuiIsTextfield(element) {
  return tuiIsInput(element) || tuiIsTextarea(element);
}
function tuiIsElement(node) {
  return !!node && "nodeType" in node && node.nodeType === Node.ELEMENT_NODE;
}
function tuiIsHTMLElement(node) {
  const defaultView = node?.ownerDocument.defaultView;
  return !!node && !!defaultView && node instanceof defaultView.HTMLElement;
}
function tuiIsTextNode(node) {
  return node.nodeType === Node.TEXT_NODE;
}
function tuiIsInputEvent(event) {
  return "data" in event && "inputType" in event;
}
function tuiGetActualTarget(event) {
  return event.composedPath()[0];
}
var DEFAULT_FORMAT = "text/plain";
function tuiGetClipboardDataText(event, format = DEFAULT_FORMAT) {
  return "clipboardData" in event && event.clipboardData !== null ? event.clipboardData.getData(format) || event.clipboardData.getData(DEFAULT_FORMAT) : event.target.ownerDocument.defaultView.clipboardData.getData("text");
}
function tuiGetDocumentOrShadowRoot(node) {
  return "getRootNode" in node && node.isConnected ? node.getRootNode() : node.ownerDocument;
}
function tuiGetElementObscures(element) {
  const { ownerDocument } = element;
  if (!ownerDocument?.defaultView || !element.getBoundingClientRect) {
    return null;
  }
  const { innerWidth, innerHeight } = ownerDocument.defaultView;
  const doc = tuiGetDocumentOrShadowRoot(element);
  const rect = element.getBoundingClientRect();
  if (rect.width === 0 && rect.height === 0) {
    return null;
  }
  const left = tuiClamp(Math.round(rect.left) + 2, 0, innerWidth);
  const top = tuiClamp(Math.round(rect.top) + 2, 0, innerHeight);
  const right = tuiClamp(Math.round(rect.right) - 2, 0, innerWidth);
  const bottom = tuiClamp(Math.round(rect.bottom) - 2, 0, innerHeight);
  const horizontalMiddle = tuiClamp(Math.round(rect.left + rect.width / 2), 0, innerWidth);
  const verticalMiddle = tuiClamp(Math.round(rect.top + rect.height / 2), 0, innerHeight);
  const elements = [
    doc.elementFromPoint(horizontalMiddle, top),
    doc.elementFromPoint(horizontalMiddle, bottom),
    doc.elementFromPoint(left, verticalMiddle),
    doc.elementFromPoint(right, verticalMiddle)
  ];
  const nonNull = elements.filter(tuiIsPresent);
  if (!nonNull.length) {
    return [];
  }
  const filtered = nonNull.filter((el) => !element.contains(el) && !el.contains(element));
  return filtered.length === 4 ? filtered : null;
}
function tuiGetElementOffset(host, element) {
  ngDevMode && console.assert(host.contains(element), "Host must contain element");
  let { offsetTop, offsetLeft, offsetParent } = element;
  while (tuiIsHTMLElement(offsetParent) && offsetParent !== host) {
    offsetTop += offsetParent.offsetTop;
    offsetLeft += offsetParent.offsetLeft;
    offsetParent = offsetParent.offsetParent;
  }
  return { offsetTop, offsetLeft };
}
function tuiGetElementPoint(x, y, element) {
  const { left, top, width, height } = element.getBoundingClientRect();
  return [tuiClamp(x - left, 0, width) / width, tuiClamp(y - top, 0, height) / height];
}
function tuiGetSelectedText({ getSelection, document }) {
  return document.activeElement && tuiIsTextfield(document.activeElement) ? document.activeElement.value.slice(document.activeElement.selectionStart || 0, document.activeElement.selectionEnd || 0) : getSelection()?.toString() || null;
}
function tuiInjectElement() {
  return inject(ElementRef).nativeElement;
}
function tuiIsCurrentTarget({ target, currentTarget }) {
  return target === currentTarget;
}
function tuiIsElementEditable(element) {
  return tuiIsTextfield(element) && !element.readOnly && element.inputMode !== "none" || Boolean(element.isContentEditable);
}
function tuiIsInsideIframe(win) {
  return win.parent !== win;
}
function tuiIsNodeIn(node, selector) {
  return tuiIsTextNode(node) ? !!node.parentElement?.closest(selector) : tuiIsElement(node) && !!node.closest(selector);
}
function tuiPointToClientRect(x = 0, y = 0) {
  const rect = {
    x,
    y,
    left: x,
    right: x,
    top: y,
    bottom: y,
    width: 0,
    height: 0
  };
  return __spreadProps(__spreadValues({}, rect), {
    toJSON: () => rect
  });
}
function tuiRetargetedBoundaryCrossing(event) {
  if ("explicitOriginalTarget" in event) {
    return event?.explicitOriginalTarget !== event.target;
  }
  if ("pointerId" in event) {
    return event.pointerId === -1;
  }
  if ("detail" in event && "webkitForce" in event) {
    return event?.detail === 0;
  }
  return false;
}
function tuiValue(input, injector = inject(INJECTOR$1)) {
  const win = injector.get(WA_WINDOW);
  if (!win.tuiInputPatched && isPlatformBrowser(injector.get(PLATFORM_ID))) {
    win.tuiInputPatched = true;
    patch(win.HTMLInputElement.prototype);
    patch(win.HTMLTextAreaElement.prototype);
    patch(win.HTMLSelectElement.prototype);
  }
  let element = isSignal(input) ? void 0 : coerceElement(input);
  let cleanup = () => {
  };
  const options = __spreadValues({ injector }, TUI_ALLOW_SIGNAL_WRITES);
  const value = signal(element?.value || "");
  const process = (el) => {
    const update = () => untracked(() => value.set(el.value));
    el.addEventListener("input", update, { capture: true });
    el.addEventListener("tui-input", update, { capture: true });
    return () => {
      el.removeEventListener("input", update, { capture: true });
      el.removeEventListener("tui-input", update, { capture: true });
    };
  };
  injector.get(DestroyRef).onDestroy(() => cleanup());
  if (isSignal(input)) {
    effect(() => {
      element = coerceElement(input());
      cleanup();
      if (element && !element.matches("select[multiple]")) {
        value.set(element.value);
        cleanup = process(element);
      }
    }, options);
  } else if (element && !element.matches("select[multiple]")) {
    cleanup = process(element);
  }
  effect(() => {
    const v = value();
    if (element?.matches("select[multiple]")) {
      return;
    }
    if (element?.matches(":focus") && "selectionStart" in element) {
      const { selectionStart, selectionEnd } = element;
      element.value = v;
      element.setSelectionRange(selectionStart, selectionEnd);
    } else if (element) {
      element.value = v;
    }
  }, options);
  return value;
}
function patch(prototype) {
  const { set } = Object.getOwnPropertyDescriptor(prototype, "value");
  Object.defineProperty(prototype, "value", {
    set(detail) {
      const value = this.value;
      const event = new CustomEvent("tui-input", { detail, bubbles: true });
      set.call(this, detail);
      if (value !== detail) {
        this.dispatchEvent(event);
      }
    }
  });
}
function tuiValueBinding(value = signal(tuiInjectElement().value || "")) {
  const el = tuiInjectElement();
  effect(() => {
    if (el.value === value()) {
      return;
    }
    const { selectionStart, selectionEnd } = el;
    el.value = value();
    if (el.matches(":focus")) {
      el.setSelectionRange(selectionStart, selectionEnd);
    }
  });
  return value;
}

export {
  coerceArray,
  coerceBooleanProperty,
  tuiContainsOrAfter,
  tuiIsInput,
  tuiIsTextarea,
  tuiIsTextfield,
  tuiIsElement,
  tuiIsHTMLElement,
  tuiIsTextNode,
  tuiIsInputEvent,
  tuiGetActualTarget,
  tuiGetClipboardDataText,
  tuiGetDocumentOrShadowRoot,
  tuiGetElementObscures,
  tuiGetElementOffset,
  tuiGetElementPoint,
  tuiGetSelectedText,
  tuiInjectElement,
  tuiIsCurrentTarget,
  tuiIsElementEditable,
  tuiIsInsideIframe,
  tuiIsNodeIn,
  tuiPointToClientRect,
  tuiRetargetedBoundaryCrossing,
  tuiValue,
  tuiValueBinding
};
//# sourceMappingURL=chunk-JSMOXT4E.js.map
