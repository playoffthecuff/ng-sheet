import {
  tuiExtractI18n
} from "./chunk-7P6YVAAR.js";
import {
  WA_LOCAL_STORAGE,
  WA_WINDOW
} from "./chunk-5MMGTIYT.js";
import {
  CHAR_EN_DASH,
  CHAR_NO_BREAK_SPACE,
  tuiGetOriginalArrayFromQueryList,
  tuiInRange,
  tuiIsPresent,
  tuiNormalizeToIntNumber,
  tuiProvide,
  tuiProvideOptions
} from "./chunk-XYVFFOET.js";
import {
  takeUntilDestroyed
} from "./chunk-KSDZZ3AX.js";
import {
  ChangeDetectorRef,
  ElementRef,
  NgZone,
  Optional,
  SkipSelf
} from "./chunk-H2LFSO26.js";
import {
  DOCUMENT,
  InjectionToken,
  effect,
  inject,
  signal,
  untracked
} from "./chunk-VNPPOK4A.js";
import {
  EMPTY,
  NEVER,
  Observable,
  asyncScheduler,
  catchError,
  concat,
  defaultIfEmpty,
  endWith,
  filter,
  fromEvent,
  map,
  merge,
  of,
  pipe,
  queueScheduler,
  repeat,
  share,
  startWith,
  switchMap,
  take,
  takeUntil,
  takeWhile,
  tap
} from "./chunk-WQ5CZGEH.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-observables.mjs
function tuiCloseWatcher() {
  return new Observable((subscriber) => {
    let watcher = getWatcher();
    const setup = () => {
      watcher = getWatcher();
      watcher.onclose = () => setup();
      watcher.oncancel = (event) => {
        event.preventDefault();
        subscriber.next();
      };
    };
    setup();
    return () => watcher.destroy();
  });
}
function getWatcher() {
  return typeof CloseWatcher === "undefined" ? { destroy: () => {
  } } : new CloseWatcher();
}
function tuiControlValue(control) {
  return new Observable((subscriber) => control?.valueChanges?.pipe(startWith(control.value)).subscribe(subscriber));
}
function tuiTypedFromEvent(target, event, options = {}) {
  return fromEvent(target, event, options);
}
var TuiDragState = class {
  constructor(stage, event) {
    this.stage = stage;
    this.event = event;
  }
};
function tuiDragAndDropFrom(element) {
  const { ownerDocument } = element;
  return concat(tuiTypedFromEvent(element, "mousedown").pipe(take(1), map((event) => new TuiDragState("start", event))), merge(tuiTypedFromEvent(ownerDocument, "mousemove").pipe(map((event) => new TuiDragState("continues", event))), merge(tuiTypedFromEvent(ownerDocument, "mouseup"), tuiTypedFromEvent(ownerDocument, "dragend")).pipe(take(1), map((event) => new TuiDragState("end", event)), endWith(null))).pipe(takeWhile(tuiIsPresent))).pipe(repeat());
}
function tuiPreventDefault() {
  return tap((event) => event.preventDefault());
}
function tuiStopPropagation() {
  return tap((event) => event.stopPropagation());
}
function tuiIfMap(project, predicate = Boolean) {
  return pipe(switchMap((value) => predicate(value) ? project(value) : EMPTY));
}
function tuiMustBePresent() {
  return map((value) => {
    if (!tuiIsPresent(value)) {
      throw new TuiValuePresentException();
    }
    return value;
  });
}
var TuiValuePresentException = class extends Error {
  constructor() {
    super(ngDevMode ? "Value must present" : "");
  }
};
function tuiQueryListChanges(queryList) {
  return queryList.changes.pipe(startWith(null), map(() => tuiGetOriginalArrayFromQueryList(queryList)));
}
function tuiScrollFrom(element) {
  return tuiTypedFromEvent(element === element.ownerDocument.documentElement ? element.ownerDocument : element, "scroll");
}
function tuiTakeUntilDestroyed(destroyRef) {
  return pipe(takeUntil(NEVER.pipe(takeUntilDestroyed(destroyRef), catchError(() => EMPTY), defaultIfEmpty(null))));
}
var tuiUntrackedScheduler = {
  now: queueScheduler.now.bind(queueScheduler),
  schedule(work, delay, state) {
    return queueScheduler.schedule(function(s) {
      return untracked(() => work.call(this, s));
    }, delay, state);
  }
};
function tuiWatch(cdr = inject(ChangeDetectorRef)) {
  return tap(() => cdr.markForCheck());
}
function tuiZonefull(zone = inject(NgZone)) {
  return (source) => new Observable((subscriber) => source.subscribe({
    next: (value) => zone.run(() => subscriber.next(value)),
    error: (error) => zone.run(() => subscriber.error(error)),
    complete: () => zone.run(() => subscriber.complete())
  }));
}
function tuiZonefree(zone = inject(NgZone)) {
  return (source) => new Observable((subscriber) => zone.runOutsideAngular(() => source.subscribe(subscriber)));
}
function tuiZoneOptimized(zone = inject(NgZone)) {
  return pipe(tuiZonefree(zone), tuiZonefull(zone));
}
var TuiZoneScheduler = class {
  constructor(zoneConditionFn, scheduler = asyncScheduler) {
    this.zoneConditionFn = zoneConditionFn;
    this.scheduler = scheduler;
  }
  now() {
    return this.scheduler.now();
  }
  schedule(...args) {
    return this.zoneConditionFn(() => this.scheduler.schedule(...args));
  }
};
function tuiZonefreeScheduler(zone = inject(NgZone), scheduler = asyncScheduler) {
  return new TuiZoneScheduler(zone.runOutsideAngular.bind(zone), scheduler);
}
function tuiZonefullScheduler(zone = inject(NgZone), scheduler = asyncScheduler) {
  return new TuiZoneScheduler(zone.run.bind(zone), scheduler);
}

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-date-time.mjs
function tuiDateClamp(date, min, max) {
  if (max && max < date) {
    return max;
  }
  if (min && min > date) {
    return min;
  }
  return date;
}
var DAYS_IN_WEEK = 7;
var DAYS_IN_NORMAL_YEAR = 365;
var DAYS_IN_LEAP_YEAR = 366;
var MONTHS_IN_YEAR = 12;
var MIN_DAY = 1;
var MIN_MONTH = 0;
var MAX_MONTH = 11;
var MIN_YEAR = 0;
var MAX_YEAR = 9999;
var MAX_DISPLAYED_YEAR = 2099;
var RANGE_SEPARATOR_CHAR = `${CHAR_NO_BREAK_SPACE}${CHAR_EN_DASH}${CHAR_NO_BREAK_SPACE}`;
var MILLISECONDS_IN_SECOND = 1e3;
var SECONDS_IN_MINUTE = 60;
var MINUTES_IN_HOUR = 60;
var HOURS_IN_DAY = 24;
var MILLISECONDS_IN_MINUTE = MILLISECONDS_IN_SECOND * SECONDS_IN_MINUTE;
var MILLISECONDS_IN_HOUR = MILLISECONDS_IN_MINUTE * MINUTES_IN_HOUR;
var MILLISECONDS_IN_DAY = MILLISECONDS_IN_HOUR * HOURS_IN_DAY;
var DATE_FILLER_LENGTH = 10;
var DATE_RANGE_FILLER_LENGTH = 2 * DATE_FILLER_LENGTH + RANGE_SEPARATOR_CHAR.length;
var TuiDayOfWeek = {
  Sunday: 0,
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6
};
var TuiMonthNumber = {
  January: 0,
  February: 1,
  March: 2,
  April: 3,
  May: 4,
  June: 5,
  July: 6,
  August: 7,
  September: 8,
  October: 9,
  November: 10,
  December: 11
};
var TuiYear = class _TuiYear {
  constructor(year) {
    this.year = year;
    ngDevMode && console.assert(_TuiYear.isValidYear(year));
  }
  /**
   * Checks year for validity
   */
  static isValidYear(year) {
    return Number.isInteger(year) && tuiInRange(year, MIN_YEAR, MAX_YEAR + 1);
  }
  /**
   * Check if passed year is a leap year
   */
  static isLeapYear(year) {
    ngDevMode && console.assert(_TuiYear.isValidYear(year));
    return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
  }
  /**
   * Returns amount of leap years from year 0 to the passed one
   */
  static getAbsoluteLeapYears(year) {
    ngDevMode && console.assert(_TuiYear.isValidYear(year));
    return Math.ceil(year / 400) + (Math.ceil(year / 4) - Math.ceil(year / 100));
  }
  static lengthBetween(from, to) {
    return to.year - from.year;
  }
  /**
   * Normalizes year by clamping it between min and max years
   */
  static normalizeYearPart(year) {
    return tuiNormalizeToIntNumber(year, MIN_YEAR, MAX_YEAR);
  }
  get formattedYear() {
    return String(this.year).padStart(4, "0");
  }
  get isLeapYear() {
    return _TuiYear.isLeapYear(this.year);
  }
  /**
   * Returns amount of leap years from year 0 to current
   */
  get absoluteLeapYears() {
    return _TuiYear.getAbsoluteLeapYears(this.year);
  }
  /**
   * Passed year is after current
   */
  yearBefore({ year }) {
    return this.year < year;
  }
  /**
   * Passed year is the same or after current
   */
  yearSameOrBefore({ year }) {
    return this.year <= year;
  }
  /**
   * Passed year is the same as current
   */
  yearSame({ year }) {
    return this.year === year;
  }
  /**
   * Passed year is either the same of before the current
   */
  yearSameOrAfter({ year }) {
    return this.year >= year;
  }
  /**
   * Passed year is before current
   */
  yearAfter({ year }) {
    return this.year > year;
  }
  /**
   * Immutably offsets year
   */
  append({ year = 0 }) {
    ngDevMode && console.assert(Number.isInteger(year));
    const resultYear = this.year + year;
    ngDevMode && console.assert(_TuiYear.isValidYear(resultYear));
    return new _TuiYear(resultYear);
  }
  toString() {
    return this.formattedYear;
  }
  valueOf() {
    return this.year;
  }
  /**
   * Returns the primitive value of the given Date object.
   * Depending on the argument, the method can return either a string or a number.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/@@toPrimitive
   */
  [Symbol.toPrimitive](hint) {
    return Date.prototype[Symbol.toPrimitive].call(this, hint);
  }
  toJSON() {
    return this.formattedYear;
  }
};
var TuiMonth = class _TuiMonth extends TuiYear {
  /**
   * @param year
   * @param month (starting with 0)
   */
  constructor(year, month) {
    super(year);
    this.month = month;
    ngDevMode && console.assert(_TuiMonth.isValidMonth(year, month));
  }
  /**
   * Tests month and year for validity
   */
  static isValidMonth(year, month) {
    return TuiYear.isValidYear(year) && _TuiMonth.isValidMonthPart(month);
  }
  /**
   * Returns number of days in a month
   */
  static getMonthDaysCount(month, isLeapYear) {
    ngDevMode && console.assert(_TuiMonth.isValidMonthPart(month));
    switch (month) {
      case TuiMonthNumber.April:
      case TuiMonthNumber.June:
      case TuiMonthNumber.November:
      case TuiMonthNumber.September:
        return 30;
      case TuiMonthNumber.February:
        return isLeapYear ? 29 : 28;
      default:
        return 31;
    }
  }
  /**
   * Returns current month and year based on local time zone
   * @nosideeffects
   */
  static currentLocal() {
    const nativeDate = /* @__PURE__ */ new Date();
    return new _TuiMonth(nativeDate.getFullYear(), nativeDate.getMonth());
  }
  /**
   * Returns current month and year based on UTC
   */
  static currentUtc() {
    const nativeDate = /* @__PURE__ */ new Date();
    return new _TuiMonth(nativeDate.getUTCFullYear(), nativeDate.getUTCMonth());
  }
  static lengthBetween(from, to) {
    const absoluteFrom = from.month + from.year * 12;
    const absoluteTo = to.month + to.year * 12;
    return absoluteTo - absoluteFrom;
  }
  /**
   * Normalizes number by clamping it between min and max month
   */
  static normalizeMonthPart(month) {
    return tuiNormalizeToIntNumber(month, MIN_MONTH, MAX_MONTH);
  }
  /**
   * Tests month for validity
   */
  static isValidMonthPart(month) {
    return Number.isInteger(month) && tuiInRange(month, MIN_MONTH, MAX_MONTH + 1);
  }
  get formattedMonthPart() {
    return String(this.month + 1).padStart(2, "0");
  }
  /**
   * Returns days in a month
   */
  get daysCount() {
    return _TuiMonth.getMonthDaysCount(this.month, this.isLeapYear);
  }
  /**
   * Passed month and year are after current
   */
  monthBefore(another) {
    return this.yearBefore(another) || this.yearSame(another) && this.month < another.month;
  }
  /**
   * Passed month and year are after or the same as current
   */
  monthSameOrBefore(another) {
    return this.yearBefore(another) || this.yearSame(another) && this.month <= another.month;
  }
  /**
   * Passed month and year are the same as current
   */
  monthSame(another) {
    return this.yearSame(another) && this.month === another.month;
  }
  /**
   * Passed month and year are either before or equal to current
   */
  monthSameOrAfter(another) {
    return this.yearAfter(another) || this.yearSame(another) && this.month >= another.month;
  }
  /**
   * Passed month and year are before current
   */
  monthAfter(another) {
    return this.yearAfter(another) || this.yearSame(another) && this.month > another.month;
  }
  /**
   * Immutably alters current month and year by passed offset
   *
   * @param offset
   * @return new month and year object as a result of offsetting current
   */
  append({ year = 0, month = 0 }) {
    const totalMonths = (this.year + year) * MONTHS_IN_YEAR + this.month + month;
    return new _TuiMonth(Math.floor(totalMonths / MONTHS_IN_YEAR), totalMonths % MONTHS_IN_YEAR);
  }
  toString() {
    return `${this.formattedMonthPart}.${this.formattedYear}`;
  }
  valueOf() {
    return this.toLocalNativeDate().valueOf();
  }
  toJSON() {
    return `${super.toJSON()}-${this.formattedMonthPart}`;
  }
  /**
   * Returns native {@link Date} based on local time zone
   */
  toLocalNativeDate() {
    const date = new Date(this.year, this.month);
    date.setFullYear(this.year);
    return date;
  }
  /**
   * Returns native {@link Date} based on UTC
   */
  toUtcNativeDate() {
    return new Date(Date.UTC(this.year, this.month));
  }
};
var TuiDay = class _TuiDay extends TuiMonth {
  /**
   * @param year
   * @param month (starting with 0)
   * @param day
   */
  constructor(year, month, day) {
    super(year, month);
    this.day = day;
    ngDevMode && console.assert(_TuiDay.isValidDay(year, month, day));
  }
  /**
   * Creates {@link TuiDay} from native {@link Date} based on local time zone
   */
  static fromLocalNativeDate(date) {
    return new _TuiDay(date.getFullYear(), date.getMonth(), date.getDate());
  }
  /**
   * Creates {@link TuiDay} from native {@link Date} using UTC
   */
  static fromUtcNativeDate(date) {
    return new _TuiDay(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
  }
  /**
   * Check validity of year, month and day
   *
   * @param year
   * @param month
   * @param day
   * @return boolean validity
   */
  static isValidDay(year, month, day) {
    return TuiMonth.isValidMonth(year, month) && Number.isInteger(day) && tuiInRange(day, MIN_DAY, TuiMonth.getMonthDaysCount(month, TuiYear.isLeapYear(year)) + 1);
  }
  /**
   * Current day based on local time zone
   */
  static currentLocal() {
    const nativeDate = /* @__PURE__ */ new Date();
    const year = nativeDate.getFullYear();
    const month = nativeDate.getMonth();
    const day = nativeDate.getDate();
    return new _TuiDay(year, month, day);
  }
  /**
   * Returns current day based on UTC
   */
  static currentUtc() {
    const nativeDate = /* @__PURE__ */ new Date();
    const year = nativeDate.getUTCFullYear();
    const month = nativeDate.getUTCMonth();
    const day = nativeDate.getUTCDate();
    return new _TuiDay(year, month, day);
  }
  /**
   * Calculates {@link TuiDay} normalizing year, month and day. {@link NaN} is turned into minimal value.
   *
   * @param year any year value, including invalid
   * @param month any month value, including invalid (months start with 0)
   * @param day any day value, including invalid
   * @return normalized date
   */
  static normalizeOf(year, month, day) {
    const normalizedYear = TuiYear.normalizeYearPart(year);
    const normalizedMonth = TuiMonth.normalizeMonthPart(month);
    const normalizedDay = _TuiDay.normalizeDayPart(day, normalizedMonth, normalizedYear);
    return new _TuiDay(normalizedYear, normalizedMonth, normalizedDay);
  }
  static lengthBetween(from, to) {
    return Math.round((to.toLocalNativeDate().getTime() - from.toLocalNativeDate().getTime()) / (1e3 * 60 * 60 * 24));
  }
  static parseRawDateString(date, dateMode = "DMY") {
    ngDevMode && console.assert(date.length === DATE_FILLER_LENGTH, "[parseRawDateString]: wrong date string length");
    switch (dateMode) {
      case "MDY":
        return {
          day: parseInt(date.slice(3, 5), 10),
          month: parseInt(date.slice(0, 2), 10) - 1,
          year: parseInt(date.slice(6, 10), 10)
        };
      case "YMD":
        return {
          day: parseInt(date.slice(8, 10), 10),
          month: parseInt(date.slice(5, 7), 10) - 1,
          year: parseInt(date.slice(0, 4), 10)
        };
      case "DMY":
      default:
        return {
          day: parseInt(date.slice(0, 2), 10),
          month: parseInt(date.slice(3, 5), 10) - 1,
          year: parseInt(date.slice(6, 10), 10)
        };
    }
  }
  // TODO: Move month and year related code corresponding classes
  /**
   * Parsing a string with date with normalization
   *
   * @param rawDate date string
   * @param dateMode date format of the date string (DMY | MDY | YMD)
   * @return normalized date
   */
  static normalizeParse(rawDate, dateMode = "DMY") {
    const { day, month, year } = this.parseRawDateString(rawDate, dateMode);
    return _TuiDay.normalizeOf(year, month, day);
  }
  /**
   * Parsing a date stringified in a toJSON format
   * @param yearMonthDayString date string in format of YYYY-MM-DD
   * @return date
   * @throws exceptions if any part of the date is invalid
   */
  static jsonParse(yearMonthDayString) {
    const { day, month, year } = this.parseRawDateString(yearMonthDayString, "YMD");
    if (!TuiMonth.isValidMonth(year, month) || !Number.isInteger(day) || !tuiInRange(day, MIN_DAY, TuiMonth.getMonthDaysCount(month, TuiYear.isLeapYear(year)) + 1)) {
      throw new TuiInvalidDayException(year, month, day);
    }
    return new _TuiDay(year, month, day);
  }
  static normalizeDayPart(day, month, year) {
    ngDevMode && console.assert(TuiMonth.isValidMonth(year, month));
    const monthDaysCount = TuiMonth.getMonthDaysCount(month, TuiYear.isLeapYear(year));
    return tuiNormalizeToIntNumber(day, 1, monthDaysCount);
  }
  get formattedDayPart() {
    return String(this.day).padStart(2, "0");
  }
  get isWeekend() {
    const dayOfWeek = this.dayOfWeek(false);
    return dayOfWeek === TuiDayOfWeek.Saturday || dayOfWeek === TuiDayOfWeek.Sunday;
  }
  /**
   * Returns day of week
   *
   * @param startFromMonday whether week starts from Monday and not from Sunday
   * @return day of week (from 0 to 6)
   */
  dayOfWeek(startFromMonday = true) {
    const dayOfWeek = startFromMonday ? this.toLocalNativeDate().getDay() - 1 : this.toLocalNativeDate().getDay();
    return dayOfWeek < 0 ? 6 : dayOfWeek;
  }
  /**
   * Passed date is after current
   */
  dayBefore(another) {
    return this.monthBefore(another) || this.monthSame(another) && this.day < another.day;
  }
  /**
   * Passed date is after or equals to current
   */
  daySameOrBefore(another) {
    return this.monthBefore(another) || this.monthSame(another) && this.day <= another.day;
  }
  /**
   * Passed date is the same as current
   */
  daySame(another) {
    return this.monthSame(another) && this.day === another.day;
  }
  /**
   * Passed date is either before or the same as current
   */
  daySameOrAfter(another) {
    return this.monthAfter(another) || this.monthSame(another) && this.day >= another.day;
  }
  /**
   * Passed date is before current
   */
  dayAfter(another) {
    return this.monthAfter(another) || this.monthSame(another) && this.day > another.day;
  }
  /**
   * Clamping date between two limits
   *
   * @param min
   * @param max
   * @return clamped date
   */
  dayLimit(min, max) {
    if (min !== null && this.dayBefore(min)) {
      return min;
    }
    if (max !== null && this.dayAfter(max)) {
      return max;
    }
    return this;
  }
  /**
   * Immutably alters current day by passed offset
   *
   * If resulting month has more days than original one, date is rounded to the maximum day
   * in the resulting month. Offset of days will be calculated based on the resulted year and month
   * to not interfere with parent classes methods
   *
   * @param offset
   * @return new date object as a result of offsetting current
   */
  append({ year = 0, month = 0, day = 0 }) {
    const totalMonths = (this.year + year) * MONTHS_IN_YEAR + this.month + month;
    let years = Math.floor(totalMonths / MONTHS_IN_YEAR);
    let months = totalMonths % MONTHS_IN_YEAR;
    let days = Math.min(this.day, TuiMonth.getMonthDaysCount(months, TuiYear.isLeapYear(years))) + day;
    while (days > TuiMonth.getMonthDaysCount(months, TuiYear.isLeapYear(years))) {
      days -= TuiMonth.getMonthDaysCount(months, TuiYear.isLeapYear(years));
      if (months === TuiMonthNumber.December) {
        years++;
        months = TuiMonthNumber.January;
      } else {
        months++;
      }
    }
    while (days < MIN_DAY) {
      if (months === TuiMonthNumber.January) {
        years--;
        months = TuiMonthNumber.December;
      } else {
        months--;
      }
      days += TuiMonth.getMonthDaysCount(months, TuiYear.isLeapYear(years));
    }
    return new _TuiDay(years, months, days);
  }
  /**
   * Returns formatted whole date
   */
  getFormattedDay(dateFormat, separator) {
    ngDevMode && console.assert(separator.length === 1, "Separator should consist of only 1 symbol");
    const dd = this.formattedDayPart;
    const mm = this.formattedMonthPart;
    const yyyy = this.formattedYear;
    switch (dateFormat) {
      case "MDY":
        return `${mm}${separator}${dd}${separator}${yyyy}`;
      case "YMD":
        return `${yyyy}${separator}${mm}${separator}${dd}`;
      case "DMY":
      default:
        return `${dd}${separator}${mm}${separator}${yyyy}`;
    }
  }
  toString(dateFormat = "DMY", separator = ".") {
    return this.getFormattedDay(dateFormat, separator);
  }
  toJSON() {
    return `${super.toJSON()}-${this.formattedDayPart}`;
  }
  /**
   * Returns native {@link Date} based on local time zone
   */
  toLocalNativeDate() {
    const date = super.toLocalNativeDate();
    date.setDate(this.day);
    return date;
  }
  /**
   * Returns native {@link Date} based on UTC
   */
  toUtcNativeDate() {
    return new Date(Date.UTC(this.year, this.month, this.day));
  }
};
var TuiInvalidDayException = class extends Error {
  constructor(year, month, day) {
    super(ngDevMode ? `Invalid day: ${year}-${month}-${day}` : "");
  }
};
var TuiMonthRange = class _TuiMonthRange {
  constructor(from, to) {
    this.from = from;
    this.to = to;
    ngDevMode && console.assert(from.monthSameOrBefore(to));
  }
  static sort(month1, month2) {
    return month1.monthSameOrBefore(month2) ? new _TuiMonthRange(month1, month2) : new _TuiMonthRange(month2, month1);
  }
  get isSingleMonth() {
    return this.from.monthSame(this.to);
  }
  monthSame(another) {
    return this.from.monthSame(another.from) && this.to.monthSame(another.to);
  }
  toString() {
    return `${this.from}${RANGE_SEPARATOR_CHAR}${this.to}`;
  }
};
var TuiDayRange = class _TuiDayRange extends TuiMonthRange {
  constructor(from, to) {
    super(from, to);
    this.from = from;
    this.to = to;
    ngDevMode && console.assert(from.daySameOrBefore(to));
  }
  /**
   * Creates range from two days after sorting them
   *
   * @param day1
   * @param day2
   * @return new range with sorted days
   */
  static sort(day1, day2) {
    return day1.daySameOrBefore(day2) ? new _TuiDayRange(day1, day2) : new _TuiDayRange(day2, day1);
  }
  /**
   * Parse and correct a day range in string format
   *
   * @param rangeString a string of dates in a format dd.mm.yyyy - dd.mm.yyyy
   * @param dateMode {@link TuiDateMode}
   * @return normalized day range object
   */
  static normalizeParse(rangeString, dateMode = "DMY") {
    const leftDay = TuiDay.normalizeParse(rangeString.slice(0, DATE_FILLER_LENGTH), dateMode);
    if (rangeString.length < DATE_RANGE_FILLER_LENGTH) {
      return new _TuiDayRange(leftDay, leftDay);
    }
    return _TuiDayRange.sort(leftDay, TuiDay.normalizeParse(rangeString.slice(DATE_FILLER_LENGTH + RANGE_SEPARATOR_CHAR.length), dateMode));
  }
  get isSingleDay() {
    return this.from.daySame(this.to);
  }
  /**
   * Tests ranges for identity
   *
   * @param another second range to test against current
   * @return `true` if days are identical
   */
  daySame(another) {
    return this.from.daySame(another.from) && this.to.daySame(another.to);
  }
  /**
   * Locks range between two days included, or limits from one side if the other is null
   *
   * @param min
   * @param max
   * @return range — clamped range
   */
  dayLimit(min, max) {
    return new _TuiDayRange(this.from.dayLimit(min, max), this.to.dayLimit(min, max));
  }
  /**
   * Human readable format.
   */
  getFormattedDayRange(dateFormat, dateSeparator) {
    const from = this.from.getFormattedDay(dateFormat, dateSeparator);
    const to = this.to.getFormattedDay(dateFormat, dateSeparator);
    return `${from}${RANGE_SEPARATOR_CHAR}${to}`;
  }
  toString(dateFormat = "DMY", dateSeparator = ".") {
    return this.getFormattedDayRange(dateFormat, dateSeparator);
  }
  toArray() {
    const { from, to } = this;
    const arr = [];
    for (const day = from.toUtcNativeDate(); day <= to.toUtcNativeDate(); day.setDate(day.getDate() + 1)) {
      arr.push(TuiDay.fromLocalNativeDate(day));
    }
    return arr;
  }
};
var TUI_FIRST_DAY = new TuiDay(MIN_YEAR, MIN_MONTH, MIN_DAY);
var TUI_LAST_DAY = new TuiDay(MAX_YEAR, MAX_MONTH, 31);
var TUI_LAST_DISPLAYED_DAY = new TuiDay(MAX_DISPLAYED_YEAR, MAX_MONTH, 31);
var TuiTime = class _TuiTime {
  constructor(hours, minutes, seconds = 0, ms = 0) {
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
    this.ms = ms;
    ngDevMode && console.assert(
      // Currently `TuiTime` could have hours more than 23
      // in order to not break current behaviour of `isValidTime` the logic is duplicated
      Number.isInteger(hours) && tuiInRange(hours, 0, Infinity) && Number.isInteger(minutes) && tuiInRange(minutes, 0, MINUTES_IN_HOUR) && Number.isInteger(seconds) && tuiInRange(seconds, 0, SECONDS_IN_MINUTE) && Number.isInteger(ms) && tuiInRange(ms, 0, 1e3),
      "Time must be real, but got:",
      hours,
      minutes,
      seconds,
      ms
    );
  }
  /**
   * Checks if time is valid
   */
  static isValidTime(hours, minutes, seconds = 0, ms = 0) {
    return Number.isInteger(hours) && tuiInRange(hours, 0, HOURS_IN_DAY) && Number.isInteger(minutes) && tuiInRange(minutes, 0, MINUTES_IN_HOUR) && Number.isInteger(seconds) && tuiInRange(seconds, 0, SECONDS_IN_MINUTE) && Number.isInteger(ms) && tuiInRange(ms, 0, 1e3);
  }
  /**
   * Current UTC time.
   */
  static current() {
    return _TuiTime.fromAbsoluteMilliseconds(Date.now() % MILLISECONDS_IN_DAY);
  }
  /**
   * Current time in local timezone
   */
  static currentLocal() {
    const date = /* @__PURE__ */ new Date();
    return _TuiTime.fromAbsoluteMilliseconds((Date.now() - date.getTimezoneOffset() * MILLISECONDS_IN_MINUTE) % MILLISECONDS_IN_DAY);
  }
  /**
   * Calculates TuiTime from milliseconds
   */
  static fromAbsoluteMilliseconds(milliseconds) {
    ngDevMode && console.assert(Number.isInteger(milliseconds));
    ngDevMode && console.assert(tuiInRange(milliseconds, 0, MILLISECONDS_IN_DAY), `Milliseconds must be below ${MILLISECONDS_IN_DAY} (milliseconds in a day).`);
    const hours = Math.floor(milliseconds / MILLISECONDS_IN_HOUR);
    const minutes = Math.floor(milliseconds % MILLISECONDS_IN_HOUR / MILLISECONDS_IN_MINUTE);
    const seconds = Math.floor(milliseconds % MILLISECONDS_IN_HOUR % MILLISECONDS_IN_MINUTE / 1e3) || 0;
    const ms = Math.floor(milliseconds % MILLISECONDS_IN_HOUR % MILLISECONDS_IN_MINUTE % 1e3) || 0;
    return new _TuiTime(hours, minutes, seconds, ms);
  }
  /**
   * Parses string into TuiTime object
   */
  static fromString(time) {
    const hours = this.parseHours(time);
    const minutes = Number(time.slice(3, 5)) || 0;
    const seconds = Number(time.slice(6, 8)) || 0;
    const ms = Number(time.slice(9, 12)) || 0;
    return new _TuiTime(hours, minutes, seconds, ms);
  }
  /**
   * Converts Date object into TuiTime
   * @param date
   */
  static fromLocalNativeDate(date) {
    return new _TuiTime(date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
  }
  static parseMeridiemPeriod(time) {
    return /[AP]M/.exec(time.toUpperCase().replaceAll(/\W/g, ""))?.[0] || null;
  }
  static parseHours(time) {
    const hours = Number(time.slice(0, 2));
    const meridiem = this.parseMeridiemPeriod(time);
    if (!meridiem) {
      return hours;
    }
    if (hours === 12) {
      return meridiem === "AM" ? 0 : 12;
    }
    return meridiem === "PM" ? hours + 12 : hours;
  }
  /**
   * Shifts time by hours and minutes
   */
  shift({ hours = 0, minutes = 0, seconds = 0, ms = 0 }) {
    const totalMs = this.toAbsoluteMilliseconds() + hours * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE + seconds * MILLISECONDS_IN_SECOND + ms;
    const totalSeconds = Math.floor(totalMs / MILLISECONDS_IN_SECOND);
    const totalMinutes = Math.floor(totalSeconds / SECONDS_IN_MINUTE);
    const totalHours = Math.floor(totalMinutes / MINUTES_IN_HOUR);
    return new _TuiTime(this.normalizeToRange(totalHours, HOURS_IN_DAY), this.normalizeToRange(totalMinutes, MINUTES_IN_HOUR), this.normalizeToRange(totalSeconds, SECONDS_IN_MINUTE), this.normalizeToRange(totalMs, MILLISECONDS_IN_SECOND));
  }
  /**
   * Converts TuiTime to string
   */
  toString(mode) {
    const needAddMs = mode?.startsWith("HH:MM:SS.MSS") || !mode && this.ms > 0;
    const needAddSeconds = needAddMs || mode?.startsWith("HH:MM:SS") || !mode && this.seconds > 0;
    const { hours = this.hours, meridiem = "" } = mode?.includes("AA") ? this.toTwelveHour(this.hours) : {};
    const hhMm = `${this.formatTime(hours)}:${this.formatTime(this.minutes)}`;
    const ss = needAddSeconds ? `:${this.formatTime(this.seconds)}` : "";
    const mss = needAddMs ? `.${this.formatTime(this.ms, 3)}` : "";
    const aa = meridiem && `${CHAR_NO_BREAK_SPACE}${meridiem}`;
    return `${hhMm}${ss}${mss}${aa}`;
  }
  valueOf() {
    return this.toAbsoluteMilliseconds();
  }
  /**
   * Returns the primitive value of the given Date object.
   * Depending on the argument, the method can return either a string or a number.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/@@toPrimitive
   */
  [Symbol.toPrimitive](hint) {
    return Date.prototype[Symbol.toPrimitive].call(this, hint);
  }
  /**
   * Converts TuiTime to milliseconds
   */
  toAbsoluteMilliseconds() {
    return this.hours * MILLISECONDS_IN_HOUR + this.minutes * MILLISECONDS_IN_MINUTE + this.seconds * 1e3 + this.ms;
  }
  formatTime(time, digits = 2) {
    return String(time).padStart(digits, "0");
  }
  toTwelveHour(hours) {
    const meridiem = hours >= 12 ? "PM" : "AM";
    if (hours === 0 || hours === 12) {
      return { meridiem, hours: 12 };
    }
    return { meridiem, hours: hours % 12 };
  }
  normalizeToRange(value, modulus) {
    return (value % modulus + modulus) % modulus;
  }
};

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-tokens.mjs
var TUI_REDUCED_MOTION = new InjectionToken(ngDevMode ? "TUI_REDUCED_MOTION" : "", {
  factory: () => inject(DOCUMENT).defaultView?.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false
});
var TUI_ANIMATIONS_SPEED = new InjectionToken(ngDevMode ? "TUI_ANIMATIONS_SPEED" : "", {
  factory: () => inject(TUI_REDUCED_MOTION) ? 0 : 1
});
var TUI_ASSETS_PATH = new InjectionToken(ngDevMode ? "TUI_ASSETS_PATH" : "", {
  factory: () => "assets/taiga-ui/icons"
});
function tuiAssetsPathProvider(useValue) {
  return {
    provide: TUI_ASSETS_PATH,
    useValue
  };
}
var TUI_AUXILIARY = new InjectionToken(ngDevMode ? "TUI_AUXILIARY" : "", {
  factory: () => null
});
function tuiAsAuxiliary(x) {
  return tuiProvide(TUI_AUXILIARY, x);
}
var COMMON_ICONS = {
  check: "@tui.check",
  close: "@tui.x",
  error: "@tui.circle-alert",
  more: "@tui.chevron-right",
  search: "@tui.search",
  ellipsis: "@tui.ellipsis"
};
var TUI_COMMON_ICONS = new InjectionToken(ngDevMode ? "TUI_COMMON_ICONS" : "", {
  factory: () => COMMON_ICONS
});
function tuiCommonIconsProvider(icons) {
  return tuiProvideOptions(TUI_COMMON_ICONS, icons, COMMON_ICONS);
}
var TUI_DARK_MODE_DEFAULT_KEY = "tuiDark";
var TUI_DARK_MODE_KEY = new InjectionToken(ngDevMode ? "TUI_DARK_MODE_KEY" : "", {
  factory: () => TUI_DARK_MODE_DEFAULT_KEY
});
var TUI_DARK_MODE = new InjectionToken(ngDevMode ? "TUI_DARK_MODE" : "", {
  factory: () => {
    let automatic = true;
    const storage = inject(WA_LOCAL_STORAGE);
    const key = inject(TUI_DARK_MODE_KEY);
    const saved = storage?.getItem(key);
    const media = inject(WA_WINDOW).matchMedia("(prefers-color-scheme: dark)");
    const result = signal(Boolean((saved && JSON.parse(saved)) ?? media.matches));
    fromEvent(media, "change").pipe(filter(() => !storage?.getItem(key)), takeUntilDestroyed()).subscribe(() => {
      automatic = true;
      result.set(media.matches);
    });
    effect(() => {
      const value = String(result());
      if (automatic) {
        automatic = false;
      } else {
        storage?.setItem(key, value);
      }
    });
    return Object.assign(result, {
      reset: () => {
        storage?.removeItem(key);
        automatic = true;
        result.set(media.matches);
      }
    });
  }
});
var TUI_DEFAULT_DATE_FORMAT = {
  mode: "DMY",
  separator: "."
};
var TUI_DATE_FORMAT = new InjectionToken(ngDevMode ? "TUI_DATE_FORMAT" : "", {
  factory: () => of(TUI_DEFAULT_DATE_FORMAT)
});
function tuiDateFormatProvider(options) {
  return {
    provide: TUI_DATE_FORMAT,
    deps: [[new Optional(), new SkipSelf(), TUI_DATE_FORMAT]],
    useFactory: (parent) => (parent || of(TUI_DEFAULT_DATE_FORMAT)).pipe(map((format) => __spreadValues(__spreadValues({}, format), options)))
  };
}
var TUI_DAY_TYPE_HANDLER = new InjectionToken(ngDevMode ? "TUI_DAY_TYPE_HANDLER" : "", {
  factory: () => (day) => day.isWeekend ? "weekend" : "weekday"
});
var TUI_FIRST_DAY_OF_WEEK = new InjectionToken(ngDevMode ? "TUI_FIRST_DAY_OF_WEEK" : "", {
  factory: () => TuiDayOfWeek.Monday
});
var TUI_MONTHS = new InjectionToken(ngDevMode ? "TUI_MONTHS" : "", {
  factory: tuiExtractI18n("months")
});
var TUI_CLOSE_WORD = new InjectionToken(ngDevMode ? "TUI_CLOSE_WORD" : "", {
  factory: tuiExtractI18n("close")
});
var TUI_CLEAR_WORD = new InjectionToken(ngDevMode ? "TUI_CLEAR_WORD" : "", {
  factory: tuiExtractI18n("clear")
});
var TUI_NOTHING_FOUND_MESSAGE = new InjectionToken(ngDevMode ? "TUI_NOTHING_FOUND_MESSAGE" : "", {
  factory: tuiExtractI18n("nothingFoundMessage")
});
var TUI_DEFAULT_ERROR_MESSAGE = new InjectionToken(ngDevMode ? "TUI_DEFAULT_ERROR_MESSAGE" : "", {
  factory: tuiExtractI18n("defaultErrorMessage")
});
var TUI_SPIN_TEXTS = new InjectionToken(ngDevMode ? "TUI_SPIN_TEXTS" : "", {
  factory: tuiExtractI18n("spinTexts")
});
var TUI_SHORT_WEEK_DAYS = new InjectionToken(ngDevMode ? "TUI_SHORT_WEEK_DAYS" : "", {
  factory: tuiExtractI18n("shortWeekDays")
});
var TUI_ICON_START = new InjectionToken(ngDevMode ? "TUI_ICON_START" : "", {
  factory: () => ""
});
var TUI_ICON_END = new InjectionToken(ngDevMode ? "TUI_ICON_END" : "", {
  factory: () => ""
});
var TUI_ICON_REGISTRY = new InjectionToken(ngDevMode ? "TUI_ICON_REGISTRY" : "", {
  factory: () => ({})
});
var TUI_ICON_STARTS = TUI_ICON_REGISTRY;
function tuiIconsProvider(icons) {
  return {
    provide: TUI_ICON_REGISTRY,
    useFactory: () => __spreadValues(__spreadValues({}, inject(TUI_ICON_REGISTRY, { skipSelf: true, optional: true }) || {}), Object.fromEntries(Object.entries(icons).map(([key, value]) => [
      key,
      `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(value)}`
    ])))
  };
}
var ICON_MODE_PREFIXES = { font: "@font.", image: "@img." };
var TUI_ICON_RESOLVER = new InjectionToken(ngDevMode ? "TUI_ICON_RESOLVER" : "", {
  factory: () => {
    const path = inject(TUI_ASSETS_PATH);
    return (icon) => `${path}/${icon.replace(/@[a-zA-Z]+\./, "").split(".").join("/")}.svg`;
  }
});
var TUI_ICON_START_RESOLVER = TUI_ICON_RESOLVER;
function tuiGetIconMode(icon) {
  if (!icon) {
    return null;
  }
  if (icon.startsWith(ICON_MODE_PREFIXES.image)) {
    return "image";
  }
  return icon.startsWith(ICON_MODE_PREFIXES.font) ? "font" : "svg";
}
function tuiInjectIconResolver() {
  const icons = inject(TUI_ICON_REGISTRY);
  const resolver = inject(TUI_ICON_RESOLVER);
  return (icon) => {
    if (!icon || icon.includes("/")) {
      return icon;
    }
    if (tuiGetIconMode(icon) === "font") {
      return icon.slice(ICON_MODE_PREFIXES.font.length);
    }
    return icons[icon] ?? resolver(icon);
  };
}
function tuiIconResolverProvider(useValue) {
  return { provide: TUI_ICON_RESOLVER, useValue };
}
var TUI_MEDIA = new InjectionToken(ngDevMode ? "TUI_MEDIA" : "", {
  factory: () => ({
    mobile: 768,
    desktopSmall: 1024,
    desktopLarge: 1280
  })
});
var TUI_DEFAULT_NUMBER_FORMAT = {
  precision: NaN,
  decimalSeparator: ".",
  thousandSeparator: CHAR_NO_BREAK_SPACE,
  rounding: "truncate",
  decimalMode: "pad"
};
var TUI_NUMBER_FORMAT = new InjectionToken(ngDevMode ? "TUI_NUMBER_FORMAT" : "", {
  factory: () => of(TUI_DEFAULT_NUMBER_FORMAT)
});
function tuiNumberFormatProvider(options) {
  return {
    provide: TUI_NUMBER_FORMAT,
    deps: [[new Optional(), new SkipSelf(), TUI_NUMBER_FORMAT]],
    useFactory: (parent) => (parent || of(TUI_DEFAULT_NUMBER_FORMAT)).pipe(map((format) => __spreadValues(__spreadValues({}, format), options)))
  };
}
var TUI_SCROLL_REF = new InjectionToken(ngDevMode ? "TUI_SCROLL_REF" : "", {
  factory: () => new ElementRef(inject(DOCUMENT).documentElement)
});
var TUI_SELECTION_STREAM = new InjectionToken(ngDevMode ? "TUI_SELECTION_STREAM" : "", {
  factory: () => {
    const doc = inject(DOCUMENT);
    return merge(tuiTypedFromEvent(doc, "selectionchange"), tuiTypedFromEvent(doc, "mouseup"), tuiTypedFromEvent(doc, "mousedown").pipe(switchMap(() => tuiTypedFromEvent(doc, "mousemove").pipe(takeUntil(tuiTypedFromEvent(doc, "mouseup"))))), tuiTypedFromEvent(doc, "keydown"), tuiTypedFromEvent(doc, "keyup")).pipe(share());
  }
});
var TUI_SPIN_ICONS = new InjectionToken(ngDevMode ? "TUI_SPIN_ICONS" : "", {
  factory: () => ({
    decrement: "@tui.chevron-left",
    increment: "@tui.chevron-right"
  })
});
var TUI_THEME = new InjectionToken(ngDevMode ? "TUI_THEME" : "", {
  factory: () => "Taiga UI"
});
var TUI_VIEWPORT = new InjectionToken(ngDevMode ? "TUI_VIEWPORT" : "", {
  factory: () => {
    const win = inject(WA_WINDOW);
    return {
      type: "viewport",
      getClientRect() {
        const { height = 0, offsetTop = 0 } = win.visualViewport || {};
        const rect = {
          top: 0,
          left: 0,
          right: win.innerWidth,
          bottom: win.innerHeight,
          width: win.innerWidth,
          height: height + offsetTop || win.innerHeight,
          x: 0,
          y: 0
        };
        return __spreadProps(__spreadValues({}, rect), {
          toJSON: () => JSON.stringify(rect)
        });
      }
    };
  }
});
function tuiAsViewport(accessor) {
  return tuiProvide(TUI_VIEWPORT, accessor);
}

export {
  tuiCloseWatcher,
  tuiControlValue,
  tuiTypedFromEvent,
  TuiDragState,
  tuiDragAndDropFrom,
  tuiPreventDefault,
  tuiStopPropagation,
  tuiIfMap,
  tuiMustBePresent,
  TuiValuePresentException,
  tuiQueryListChanges,
  tuiScrollFrom,
  tuiTakeUntilDestroyed,
  tuiUntrackedScheduler,
  tuiWatch,
  tuiZonefull,
  tuiZonefree,
  tuiZoneOptimized,
  tuiZonefreeScheduler,
  tuiZonefullScheduler,
  tuiDateClamp,
  DAYS_IN_WEEK,
  DAYS_IN_NORMAL_YEAR,
  DAYS_IN_LEAP_YEAR,
  MONTHS_IN_YEAR,
  MIN_DAY,
  MIN_MONTH,
  MAX_MONTH,
  MIN_YEAR,
  MAX_YEAR,
  MAX_DISPLAYED_YEAR,
  RANGE_SEPARATOR_CHAR,
  MILLISECONDS_IN_SECOND,
  SECONDS_IN_MINUTE,
  MINUTES_IN_HOUR,
  HOURS_IN_DAY,
  MILLISECONDS_IN_MINUTE,
  MILLISECONDS_IN_HOUR,
  MILLISECONDS_IN_DAY,
  DATE_FILLER_LENGTH,
  DATE_RANGE_FILLER_LENGTH,
  TuiDayOfWeek,
  TuiMonthNumber,
  TuiYear,
  TuiMonth,
  TuiDay,
  TuiInvalidDayException,
  TuiMonthRange,
  TuiDayRange,
  TUI_FIRST_DAY,
  TUI_LAST_DAY,
  TUI_LAST_DISPLAYED_DAY,
  TuiTime,
  TUI_REDUCED_MOTION,
  TUI_ANIMATIONS_SPEED,
  TUI_ASSETS_PATH,
  tuiAssetsPathProvider,
  TUI_AUXILIARY,
  tuiAsAuxiliary,
  TUI_COMMON_ICONS,
  tuiCommonIconsProvider,
  TUI_DARK_MODE_DEFAULT_KEY,
  TUI_DARK_MODE_KEY,
  TUI_DARK_MODE,
  TUI_DEFAULT_DATE_FORMAT,
  TUI_DATE_FORMAT,
  tuiDateFormatProvider,
  TUI_DAY_TYPE_HANDLER,
  TUI_FIRST_DAY_OF_WEEK,
  TUI_MONTHS,
  TUI_CLOSE_WORD,
  TUI_CLEAR_WORD,
  TUI_NOTHING_FOUND_MESSAGE,
  TUI_DEFAULT_ERROR_MESSAGE,
  TUI_SPIN_TEXTS,
  TUI_SHORT_WEEK_DAYS,
  TUI_ICON_START,
  TUI_ICON_END,
  TUI_ICON_REGISTRY,
  TUI_ICON_STARTS,
  tuiIconsProvider,
  TUI_ICON_RESOLVER,
  TUI_ICON_START_RESOLVER,
  tuiGetIconMode,
  tuiInjectIconResolver,
  tuiIconResolverProvider,
  TUI_MEDIA,
  TUI_DEFAULT_NUMBER_FORMAT,
  TUI_NUMBER_FORMAT,
  tuiNumberFormatProvider,
  TUI_SCROLL_REF,
  TUI_SELECTION_STREAM,
  TUI_SPIN_ICONS,
  TUI_THEME,
  TUI_VIEWPORT,
  tuiAsViewport
};
//# sourceMappingURL=chunk-VHLRK7UT.js.map
