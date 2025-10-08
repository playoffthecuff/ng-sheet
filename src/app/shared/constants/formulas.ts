import { InjectionToken } from '@angular/core';

export const formulasByCategory: Record<
	string,
	{ id: string; description: string; syntax: string }[]
> = {
	'Array manipulation': [
		{
			id: 'ARRAYFORMULA',
			description: $localize`Enables the array arithmetic mode for a single formula.`,
			syntax: 'ARRAYFORMULA(Formula)',
		},
		{
			id: 'FILTER',
			description: $localize`Filters an array, based on multiple conditions (boolean arrays).`,
			syntax: 'FILTER(SourceArray, BoolArray1, BoolArray2, ...BoolArrayN)',
		},
		{
			id: 'ARRAY_CONSTRAIN',
			description: $localize`Truncates an array to given dimensions.`,
			syntax: 'ARRAY_CONSTRAIN(Array, Height, Width)',
		},
	],
	'Date and time': [
		{
			id: 'DATE',
			description: $localize`Returns the specified date as the number of full days since nullDate.`,
			syntax: 'DATE(Year, Month, Day)',
		},
		{
			id: 'DATEDIF',
			description: $localize`Calculates distance between two dates, in provided unit parameter.`,
			syntax: 'DATEDIF(Date1, Date2, Units)',
		},
		{
			id: 'DATEVALUE',
			description: $localize`Parses a date string and returns it as the number of full days since nullDate.Accepts formats set by the dateFormats option.`,
			syntax: 'DATEVALUE(Datestring)',
		},
		{
			id: 'DAY',
			description: $localize`Returns the day of the given date value.`,
			syntax: 'DAY(Number)',
		},
		{
			id: 'DAYS',
			description: $localize`Calculates the difference between two date values.`,
			syntax: 'DAYS(Date2, Date1)',
		},
		{
			id: 'DAYS360',
			description: $localize`Calculates the difference between two date values in days, in 360-day basis.`,
			syntax: 'DAYS360(Date2, Date1[, Format])',
		},
		{
			id: 'EDATE',
			description: $localize`Shifts the given startdate by given number of months and returns it as the number of full days since nullDate.[1]`,
			syntax: 'EDATE(Startdate, Months)',
		},
		{
			id: 'EOMONTH',
			description: $localize`Returns the date of the last day of a month which falls months away from the start date. Returns the value in the form of number of full days since nullDate.[1:1]`,
			syntax: 'EOMONTH(Startdate, Months)',
		},
		{
			id: 'HOUR',
			description: $localize`Returns hour component of given time.`,
			syntax: 'HOUR(Time)',
		},
		{
			id: 'INTERVAL',
			description: $localize`Returns interval string from given number of seconds.`,
			syntax: 'INTERVAL(Seconds)',
		},
		{
			id: 'ISOWEEKNUM',
			description: $localize`Returns an ISO week number that corresponds to the week of year.`,
			syntax: 'ISOWEEKNUM(Date)',
		},
		{
			id: 'MINUTE',
			description: $localize`Returns minute component of given time.`,
			syntax: 'MINUTE(Time)',
		},
		{
			id: 'MONTH',
			description: $localize`Returns the month for the given date value.`,
			syntax: 'MONTH(Number)',
		},
		{
			id: 'NETWORKDAYS',
			description: $localize`Returns the number of working days between two given dates.`,
			syntax: 'NETWORKDAYS(Date1, Date2[, Holidays])',
		},
		{
			id: 'NETWORKDAYS.INTL',
			description: $localize`Returns the number of working days between two given dates.`,
			syntax: 'NETWORKDAYS.INTL(Date1, Date2[, Mode [, Holidays]])',
		},
		{
			id: 'NOW',
			description: $localize`Returns current date + time as a number of days since nullDate.`,
			syntax: 'NOW()',
		},
		{
			id: 'SECOND',
			description: $localize`Returns second component of given time.`,
			syntax: 'SECOND(Time)',
		},
		{
			id: 'TIME',
			description: $localize`Returns the number that represents a given time as a fraction of full day.`,
			syntax: 'TIME(Hour, Minute, Second)',
		},
		{
			id: 'TIMEVALUE',
			description: $localize`Parses a time string and returns a number that represents it as a fraction of a full day.Accepts formats set by the timeFormats option.`,
			syntax: 'TIMEVALUE(Timestring)',
		},
		{
			id: 'TODAY',
			description: $localize`Returns an integer representing the current date as the number of full days since nullDate.`,
			syntax: 'TODAY()',
		},
		{
			id: 'WEEKDAY',
			description: $localize`Computes a number between 1-7 representing the day of week.`,
			syntax: 'WEEKDAY(Date, Type)',
		},
		{
			id: 'WEEKNUM',
			description: $localize`Returns a week number that corresponds to the week of year.`,
			syntax: 'WEEKNUM(Date, Type)',
		},
		{
			id: 'WORKDAY',
			description: $localize`Returns the working day number of days from start day.`,
			syntax: 'WORKDAY(Date, Shift[, Holidays])',
		},
		{
			id: 'WORKDAY.INTL',
			description: $localize`Returns the working day number of days from start day.`,
			syntax: 'WORKDAY(Date, Shift[, Mode[, Holidays]])',
		},
		{
			id: 'YEAR',
			description: $localize`Returns the year as a number according to the internal calculation rules.`,
			syntax: 'YEAR(Number)',
		},
		{
			id: 'YEARFRAC',
			description: $localize`Computes the difference between two date values, in fraction of years.`,
			syntax: 'YEARFRAC(Date2, Date1[, Format])',
		},
	],
	Engineering: [
		{
			id: 'BIN2DEC',
			description: $localize`The result is the decimal number for the binary number entered.`,
			syntax: 'BIN2DEC(Number)',
		},
		{
			id: 'BIN2HEX',
			description: $localize`The result is the hexadecimal number for the binary number entered.`,
			syntax: 'BIN2HEX(Number, Places)',
		},
		{
			id: 'BIN2OCT',
			description: $localize`The result is the octal number for the binary number entered.`,
			syntax: 'BIN2OCT(Number, Places)',
		},
		{
			id: 'BITAND',
			description: $localize`Returns a bitwise logical "and" of the parameters.`,
			syntax: 'BITAND(Number1, Number2)',
		},
		{
			id: 'BITLSHIFT',
			description: $localize`Shifts a number left by n bits.`,
			syntax: 'BITLSHIFT(Number, Shift)',
		},
		{
			id: 'BITOR',
			description: $localize`Returns a bitwise logical "or" of the parameters.`,
			syntax: 'BITOR(Number1, Number2)',
		},
		{
			id: 'BITRSHIFT',
			description: $localize`Shifts a number right by n bits.`,
			syntax: 'BITRSHIFT(Number, Shift)',
		},
		{
			id: 'BITXOR',
			description: $localize`Returns a bitwise logical "exclusive or" of the parameters.`,
			syntax: 'BITXOR(Number1, Number2)',
		},
		{
			id: 'COMPLEX',
			description: $localize`Returns complex number from Re and Im parts.`,
			syntax: 'COMPLEX(Re, Im[, Symbol])',
		},
		{
			id: 'DEC2BIN',
			description: $localize`Returns the binary number for the decimal number entered between –512 and 511.`,
			syntax: 'DEC2BIN(Number, Places)',
		},
		{
			id: 'DEC2HEX',
			description: $localize`Returns the hexadecimal number for the decimal number entered.`,
			syntax: 'DEC2HEX(Number, Places)',
		},
		{
			id: 'DEC2OCT',
			description: $localize`Returns the octal number for the decimal number entered.`,
			syntax: 'DEC2OCT(Number, Places)',
		},
		{
			id: 'DELTA',
			description: $localize`Returns TRUE (1) if both numbers are equal, otherwise returns FALSE (0).`,
			syntax: 'DELTA(Number_1, Number_2)',
		},
		{
			id: 'ERF',
			description: $localize`Returns values of the Gaussian error integral.`,
			syntax: 'ERF(Lower_Limit, Upper_Limit)',
		},
		{
			id: 'ERFC',
			description: $localize`Returns complementary values of the Gaussian error integral between x and infinity.`,
			syntax: 'ERFC(Lower_Limit)',
		},
		{
			id: 'HEX2BIN',
			description: $localize`The result is the binary number for the hexadecimal number entered.`,
			syntax: 'HEX2BIN(Number, Places)',
		},
		{
			id: 'HEX2DEC',
			description: $localize`The result is the decimal number for the hexadecimal number entered.`,
			syntax: 'HEX2DEC(Number)',
		},
		{
			id: 'HEX2OCT',
			description: $localize`The result is the octal number for the hexadecimal number entered.`,
			syntax: 'HEX2OCT(Number, Places)',
		},
		{
			id: 'IMABS',
			description: $localize`Returns modulus of a complex number.`,
			syntax: 'IMABS(Complex)',
		},
		{
			id: 'IMAGINARY',
			description: $localize`Returns imaginary part of a complex number.`,
			syntax: 'IMAGINARY(Complex)',
		},
		{
			id: 'IMARGUMENT',
			description: $localize`Returns argument of a complex number.`,
			syntax: 'IMARGUMENT(Complex)',
		},
		{
			id: 'IMCONJUGATE',
			description: $localize`Returns conjugate of a complex number.`,
			syntax: 'IMCONJUGATE(Complex)',
		},
		{
			id: 'IMCOS',
			description: $localize`Returns cosine of a complex number.`,
			syntax: 'IMCOS(Complex)',
		},
		{
			id: 'IMCOSH',
			description: $localize`Returns hyperbolic cosine of a complex number.`,
			syntax: 'IMCOSH(Complex)',
		},
		{
			id: 'IMCOT',
			description: $localize`Returns cotangent of a complex number.`,
			syntax: 'IMCOT(Complex)',
		},
		{
			id: 'IMCSC',
			description: $localize`Returns cosecant of a complex number.`,
			syntax: 'IMCSC(Complex)',
		},
		{
			id: 'IMCSCH',
			description: $localize`Returns hyperbolic cosecant of a complex number.`,
			syntax: 'IMCSCH(Complex)',
		},
		{
			id: 'IMDIV',
			description: $localize`Divides two complex numbers.`,
			syntax: 'IMDIV(Complex1, Complex2)',
		},
		{
			id: 'IMEXP',
			description: $localize`Returns exponent of a complex number.`,
			syntax: 'IMEXP(Complex)',
		},
		{
			id: 'IMLN',
			description: $localize`Returns natural logarithm of a complex number.`,
			syntax: 'IMLN(Complex)',
		},
		{
			id: 'IMLOG2',
			description: $localize`Returns binary logarithm of a complex number.`,
			syntax: 'IMLOG2(Complex)',
		},
		{
			id: 'IMLOG10',
			description: $localize`Returns base-10 logarithm of a complex number.`,
			syntax: 'IMLOG10(Complex)',
		},
		{
			id: 'IMPOWER',
			description: $localize`Returns a complex number raised to a given power.`,
			syntax: 'IMPOWER(Complex, Number)',
		},
		{
			id: 'IMPRODUCT',
			description: $localize`Multiplies complex numbers.`,
			syntax: 'IMPRODUCT(Complex1, Complex2, ...ComplexN)',
		},
		{
			id: 'IMREAL',
			description: $localize`Returns real part of a complex number.`,
			syntax: 'IMREAL(Complex)',
		},
		{
			id: 'IMSEC',
			description: $localize`Returns the secant of a complex number.`,
			syntax: 'IMSEC(Complex)',
		},
		{
			id: 'IMSECH',
			description: $localize`Returns the hyperbolic secant of a complex number.`,
			syntax: 'IMSECH(Complex)',
		},
		{
			id: 'IMSIN',
			description: $localize`Returns sine of a complex number.`,
			syntax: 'IMSIN(Complex)',
		},
		{
			id: 'IMSINH',
			description: $localize`Returns hyperbolic sine of a complex number.`,
			syntax: 'IMSINH(Complex)',
		},
		{
			id: 'IMSQRT',
			description: $localize`Returns a square root of a complex number.`,
			syntax: 'IMSQRT(Complex)',
		},
		{
			id: 'IMSUB',
			description: $localize`Subtracts two complex numbers.`,
			syntax: 'IMSUB(Complex1, Complex2)',
		},
		{
			id: 'IMSUM',
			description: $localize`Adds complex numbers.`,
			syntax: 'IMSUM(Complex1, Complex2, ..ComplexN)',
		},
		{
			id: 'IMTAN',
			description: $localize`Returns the tangent of a complex number.`,
			syntax: 'IMTAN(Complex)',
		},
		{
			id: 'OCT2BIN',
			description: $localize`The result is the binary number for the octal number entered.`,
			syntax: 'OCT2BIN(Number, Places)',
		},
		{
			id: 'OCT2DEC',
			description: $localize`The result is the decimal number for the octal number entered.`,
			syntax: 'OCT2DEC(Number)',
		},
		{
			id: 'OCT2HEX',
			description: $localize`The result is the hexadecimal number for the octal number entered.`,
			syntax: 'OCT2HEX(Number, Places)',
		},
	],
	Information: [
		{
			id: 'ISBINARY',
			description: $localize`Returns TRUE if provided value is a valid binary number.`,
			syntax: 'ISBINARY(Value)',
		},
		{
			id: 'ISBLANK',
			description: $localize`Returns TRUE if the reference to a cell is blank.`,
			syntax: 'ISBLANK(Value)',
		},
		{
			id: 'ISERR',
			description: $localize`Returns TRUE if the value is error value except #N/A!.`,
			syntax: 'ISERR(Value)',
		},
		{
			id: 'ISERROR',
			description: $localize`Returns TRUE if the value is general error value.`,
			syntax: 'ISERROR(Value)',
		},
		{
			id: 'ISEVEN',
			description: $localize`Returns TRUE if the value is an even integer, or FALSE if the value is odd.`,
			syntax: 'ISEVEN(Value)',
		},
		{
			id: 'ISFORMULA',
			description: $localize`Checks whether referenced cell is a formula.`,
			syntax: 'ISFORMULA(Value)',
		},
		{
			id: 'ISLOGICAL',
			description: $localize`Tests for a logical value (TRUE or FALSE).`,
			syntax: 'ISLOGICAL(Value)',
		},
		{
			id: 'ISNA',
			description: $localize`Returns TRUE if the value is #N/A! error.`,
			syntax: 'ISNA(Value)',
		},
		{
			id: 'ISNONTEXT',
			description: $localize`Tests if the cell contents are text or numbers, and returns FALSE if the contents are text.`,
			syntax: 'ISNONTEXT(Value)',
		},
		{
			id: 'ISNUMBER',
			description: $localize`Returns TRUE if the value refers to a number.`,
			syntax: 'ISNUMBER(Value)',
		},
		{
			id: 'ISODD',
			description: $localize`Returns TRUE if the value is odd, or FALSE if the number is even.`,
			syntax: 'ISODD(Value)',
		},
		{
			id: 'ISREF',
			description: $localize`Returns TRUE if provided value is #REF! error.`,
			syntax: 'ISREF(Value)',
		},
		{
			id: 'ISTEXT',
			description: $localize`Returns TRUE if the cell contents reference text.`,
			syntax: 'ISTEXT(Value)',
		},
		{
			id: 'SHEET',
			description: $localize`Returns sheet number of a given value or a formula sheet number if no argument is provided.`,
			syntax: 'SHEET([Value])',
		},
		{
			id: 'SHEETS',
			description: $localize`Returns number of sheet of a given reference or number of all sheets in workbook when no argument is provided.`,
			syntax: 'SHEETS([Value])',
		},
		{
			id: 'NA',
			description: $localize`Returns #N/A! error value.`,
			syntax: 'NA(Value)',
		},
	],
	Financial: [
		{
			id: 'CUMIPMT',
			description: $localize`Returns the cumulative interest paid on a loan between a start period and an end period.`,
			syntax: 'CUMIPMT(Rate, Nper, Pv, Start, End, type)',
		},
		{
			id: 'CUMPRINC',
			description: $localize`Returns the cumulative principal paid on a loan between a start period and an end period.`,
			syntax: 'CUMPRINC(Rate, Nper, Pv, Start, End, Type)',
		},
		{
			id: 'DB',
			description: $localize`Returns the depreciation of an asset for a period using the fixed-declining balance method.`,
			syntax: 'DB(Cost, Salvage, Life, Period[, Month])',
		},
		{
			id: 'DDB',
			description: $localize`Returns the depreciation of an asset for a period using the double-declining balance method.`,
			syntax: 'DDB(Cost, Salvage, Life, Period[, Factor])',
		},
		{
			id: 'DOLLARDE',
			description: $localize`Converts a price entered with a special notation to a price displayed as a decimal number.`,
			syntax: 'DOLLARDE(Price, Fraction)',
		},
		{
			id: 'DOLLARFR',
			description: $localize`Converts a price displayed as a decimal number to a price entered with a special notation.`,
			syntax: 'DOLLARFR(Price, Fraction)',
		},
		{
			id: 'EFFECT',
			description: $localize`Calculates the effective annual interest rate from a nominal interest rate and the number of compounding periods per year.`,
			syntax: 'EFFECT (Nominal_rate, Npery)',
		},
		{
			id: 'FV',
			description: $localize`Returns the future value of an investment.`,
			syntax: 'FV(Rate, Nper, Pmt[, Pv,[ Type]])',
		},
		{
			id: 'FVSCHEDULE',
			description: $localize`Returns the future value of an investment based on a rate schedule.`,
			syntax: 'FV(Pv, Schedule)',
		},
		{
			id: 'IPMT',
			description: $localize`Returns the interest portion of a given loan payment in a given payment period.`,
			syntax: 'IPMT(Rate, Per, Nper, Pv[, Fv[, Type]])',
		},
		{
			id: 'ISPMT',
			description: $localize`Returns the interest paid for a given period of an investment with equal principal payments.`,
			syntax: 'ISPMT(Rate, Per, Nper, Value)',
		},
		{
			id: 'MIRR',
			description: $localize`Returns modified internal value for cashflows.`,
			syntax: 'MIRR(Flows, FRate, RRate)',
		},
		{
			id: 'NOMINAL',
			description: $localize`Returns the nominal interest rate.`,
			syntax: 'NOMINAL(Effect_rate, Npery)',
		},
		{
			id: 'NPER',
			description: $localize`Returns the number of periods for an investment assuming periodic, constant payments and a constant interest rate.`,
			syntax: 'NPER(Rate, Pmt, Pv[, Fv[, Type]])',
		},
		{
			id: 'NPV',
			description: $localize`Returns net present value.`,
			syntax: 'NPV(Rate, Value1, Value2, ...ValueN)',
		},
		{
			id: 'PDURATION',
			description: $localize`Returns number of periods to reach specific value.`,
			syntax: 'PDURATION(Rate, Pv, Fv)',
		},
		{
			id: 'PMT',
			description: $localize`Returns the periodic payment for a loan.`,
			syntax: 'PMT(Rate, Nper, Pv[, Fv[, Type]])',
		},
		{
			id: 'PPMT',
			description: $localize`Calculates the principal portion of a given loan payment.`,
			syntax: 'PPMT(Rate, Per, Nper, Pv[, Fv[, Type]])',
		},
		{
			id: 'PV',
			description: $localize`Returns the present value of an investment.`,
			syntax: 'PV(Rate, Nper, Pmt[, Fv[, Type]])',
		},
		{
			id: 'RATE',
			description: $localize`Returns the interest rate per period of an annuity.`,
			syntax: 'RATE(Nper, Pmt, Pv[, Fv[, Type[, guess]]])',
		},
		{
			id: 'RRI',
			description: $localize`Returns an equivalent interest rate for the growth of an investment.`,
			syntax: 'RRI(Nper, Pv, Fv)',
		},
		{
			id: 'SLN',
			description: $localize`Returns the depreciation of an asset for one period, based on a straight-line method.`,
			syntax: 'SLN(Cost, Salvage, Life)',
		},
		{
			id: 'SYD',
			description: $localize`Returns the "sum-of-years" depreciation for an asset in a period.`,
			syntax: 'SYD(Cost, Salvage, Life, Period)',
		},
		{
			id: 'TBILLEQ',
			description: $localize`Returns the bond-equivalent yield for a Treasury bill.`,
			syntax: 'TBILLEQ(Settlement, Maturity, Discount)',
		},
		{
			id: 'TBILLPRICE',
			description: $localize`Returns the price per $100 face value for a Treasury bill.`,
			syntax: 'TBILLPRICE(Settlement, Maturity, Discount)',
		},
		{
			id: 'TBILLYIELD',
			description: $localize`Returns the yield for a Treasury bill.`,
			syntax: 'TBILLYIELD(Settlement, Maturity, Price)',
		},
		{
			id: 'XNPV',
			description: $localize`Returns net present value.`,
			syntax: 'XNPV(Rate, Payments, Dates)',
		},
	],
	Logical: [
		{
			id: 'AND',
			description: $localize`Returns TRUE if all arguments are TRUE.`,
			syntax: 'AND(Logical_value1, Logical_value2, ...Logical_valueN)',
		},
		{
			id: 'FALSE',
			description: $localize`Returns the logical value FALSE.`,
			syntax: 'FALSE()',
		},
		{
			id: 'IF',
			description: $localize`Specifies a logical test to be performed.`,
			syntax: 'IF(Test, Then_value, Otherwise_value)',
		},
		{
			id: 'IFS',
			description: $localize`Evaluates multiple logical tests and returns a value that corresponds to the first true condition.`,
			syntax:
				'IFS(Condition1, Value1 [, Condition2, Value2 [, ...ConditionN, ValueN]])',
		},
		{
			id: 'IFNA',
			description: $localize`Returns the value if the cell does not contains the #N/A (value not available) error value, or the alternative value if it does.`,
			syntax: 'IFNA(Value, Alternate_value)',
		},
		{
			id: 'IFERROR',
			description: $localize`Returns the value if the cell does not contains an error value, or the alternative value if it does.`,
			syntax: 'IFERROR(Value, Alternate_value)',
		},
		{
			id: 'NOT',
			description: $localize`Complements (inverts) a logical value.`,
			syntax: 'NOT(Logicalvalue)',
		},
		{
			id: 'SWITCH',
			description: $localize`Evaluates a list of arguments, consisting of an expression followed by a value.`,
			syntax:
				'SWITCH(Expression1, Value1 [, Expression2, Value2 [, ...ExpressionN, ValueN]])',
		},
		{
			id: 'OR',
			description: $localize`Returns TRUE if at least one argument is TRUE.`,
			syntax: 'OR(Logical_value1, Logical_value2, ...Logical_valueN)',
		},
		{
			id: 'TRUE',
			description: $localize`The logical value is set to TRUE.`,
			syntax: 'TRUE()',
		},
		{
			id: 'XOR',
			description: $localize`Returns true if an odd number of arguments evaluates to TRUE.`,
			syntax: 'XOR(Logical_value1, Logical_value2, ...Logical_valueN)',
		},
	],
	'Lookup and reference': [
		{
			id: 'ADDRESS',
			description: $localize`Returns a cell reference as a string.`,
			syntax:
				'ADDRESS(Row, Column[, AbsoluteRelativeMode[, UseA1Notation[, Sheet]]])',
		},
		{
			id: 'CHOOSE',
			description: $localize`Uses an index to return a value from a list of values.`,
			syntax: 'CHOOSE(Index, Value1, Value2, ...ValueN)',
		},
		{
			id: 'COLUMN',
			description: $localize`Returns column number of a given reference or formula reference if argument not provided.`,
			syntax: 'COLUMNS([Reference])',
		},
		{
			id: 'COLUMNS',
			description: $localize`Returns the number of columns in the given reference.`,
			syntax: 'COLUMNS(Array)',
		},
		{
			id: 'FORMULATEXT',
			description: $localize`Returns a formula in a given cell as a string.`,
			syntax: 'FORMULATEXT(Reference)',
		},
		{
			id: 'HLOOKUP',
			description: $localize`Searches horizontally with reference to adjacent cells to the bottom.`,
			syntax: 'HLOOKUP(Search_Criterion, Array, Index, Sort_Order)',
		},
		{
			id: 'HYPERLINK',
			description: $localize`Stores the url in the cell's metadata. It can be read using method getCellHyperlink`,
			syntax: 'HYPERLINK(Url[, LinkLabel])',
		},
		{
			id: 'INDEX',
			description: $localize`Returns the contents of a cell specified by row and column number. The column number is optional and defaults to 1.`,
			syntax: 'INDEX(Range, Row [, Column])',
		},
		{
			id: 'MATCH',
			description: $localize`Returns the relative position of an item in an array that matches a specified value.`,
			syntax: 'MATCH(Searchcriterion, LookupArray [, MatchType])',
		},
		{
			id: 'OFFSET',
			description: $localize`Returns the value of a cell offset by a certain number of rows and columns from a given reference point.`,
			syntax: 'OFFSET(Reference, Rows, Columns, Height, Width)',
		},
		{
			id: 'ROW',
			description: $localize`Returns row number of a given reference or formula reference if argument not provided.`,
			syntax: 'ROW([Reference])',
		},
		{
			id: 'ROWS',
			description: $localize`Returns the number of rows in the given reference.`,
			syntax: 'ROWS(Array)',
		},
		{
			id: 'VLOOKUP',
			description: $localize`Searches vertically with reference to adjacent cells to the right.`,
			syntax: 'VLOOKUP(Search_Criterion, Array, Index, Sort_Order)',
		},
		{
			id: 'XLOOKUP',
			description: $localize`Searches for a key in a range and returns the item corresponding to the match it finds. If no match exists, then XLOOKUP can return the closest (approximate) match.`,
			syntax:
				'XLOOKUP(LookupValue, LookupArray, ReturnArray, [IfNotFound], [MatchMode], [SearchMode])',
		},
	],
	'Math and trigonometry': [
		{
			id: 'ABS',
			description: $localize`Returns the absolute value of a number.`,
			syntax: 'ABS(Number)',
		},
		{
			id: 'ACOS',
			description: $localize`Returns the inverse trigonometric cosine of a number.`,
			syntax: 'ACOS(Number)',
		},
		{
			id: 'ACOSH',
			description: $localize`Returns the inverse hyperbolic cosine of a number.`,
			syntax: 'ACOSH(Number)',
		},
		{
			id: 'ACOT',
			description: $localize`Returns the inverse trigonometric cotangent of a number.`,
			syntax: 'ACOT(Number)',
		},
		{
			id: 'ACOTH',
			description: $localize`Returns the inverse hyperbolic cotangent of a number.`,
			syntax: 'ACOTH(Number)',
		},
		{
			id: 'ARABIC',
			description: $localize`Converts number from roman form.`,
			syntax: 'ARABIC(String)',
		},
		{
			id: 'ASIN',
			description: $localize`Returns the inverse trigonometric sine of a number.`,
			syntax: 'ASIN(Number)',
		},
		{
			id: 'ASINH',
			description: $localize`Returns the inverse hyperbolic sine of a number.`,
			syntax: 'ASINH(Number)',
		},
		{
			id: 'ATAN',
			description: $localize`Returns the inverse trigonometric tangent of a number.`,
			syntax: 'ATAN(Number)',
		},
		{
			id: 'ATAN2',
			description: $localize`Returns the inverse trigonometric tangent of the specified x and y coordinates.`,
			syntax: 'ATAN2(Numberx, Numbery)',
		},
		{
			id: 'ATANH',
			description: $localize`Returns the inverse hyperbolic tangent of a number.`,
			syntax: 'ATANH(Number)',
		},
		{
			id: 'BASE',
			description: $localize`Converts a positive integer to a specified base into a text from the numbering system.`,
			syntax: 'BASE(Number, Radix, [Minimumlength])',
		},
		{
			id: 'CEILING',
			description: $localize`Rounds a number up to the nearest multiple of Significance.`,
			syntax: 'CEILING(Number, Significance)',
		},
		{
			id: 'CEILING.MATH',
			description: $localize`Rounds a number up to the nearest multiple of Significance.`,
			syntax: 'CEILING.MATH(Number[, Significance[, Mode]])',
		},
		{
			id: 'CEILING.PRECISE',
			description: $localize`Rounds a number up to the nearest multiple of Significance.`,
			syntax: 'CEILING.PRECISE(Number[, Significance])',
		},
		{
			id: 'COMBIN',
			description: $localize`Returns number of combinations (without repetitions).`,
			syntax: 'COMBIN(Number, Number)',
		},
		{
			id: 'COMBINA',
			description: $localize`Returns number of combinations (with repetitions).`,
			syntax: 'COMBINA(Number, Number)',
		},
		{
			id: 'COS',
			description: $localize`Returns the cosine of the given angle (in radians).`,
			syntax: 'COS(Number)',
		},
		{
			id: 'COSH',
			description: $localize`Returns the hyperbolic cosine of the given value.`,
			syntax: 'COSH(Number)',
		},
		{
			id: 'COT',
			description: $localize`Returns the cotangent of the given angle (in radians).`,
			syntax: 'COT(Number)',
		},
		{
			id: 'COTH',
			description: $localize`Returns the hyperbolic cotangent of the given value.`,
			syntax: 'COTH(Number)',
		},
		{
			id: 'COUNTUNIQUE',
			description: $localize`Counts the number of unique values in a list of specified values and ranges.`,
			syntax: 'COUNTUNIQUE(Value1, Value2, ...ValueN)',
		},
		{
			id: 'CSC',
			description: $localize`Returns the cosecant of the given angle (in radians).`,
			syntax: 'CSC(Number)',
		},
		{
			id: 'CSCH',
			description: $localize`Returns the hyperbolic cosecant of the given value.`,
			syntax: 'CSCH(Number)',
		},
		{
			id: 'DECIMAL',
			description: $localize`Converts text with characters from a number system to a positive integer in the base radix given.`,
			syntax: 'DECIMAL("Text", Radix)',
		},
		{
			id: 'DEGREES',
			description: $localize`Converts radians into degrees.`,
			syntax: 'DEGREES(Number)',
		},
		{
			id: 'EVEN',
			description: $localize`Rounds a positive number up to the next even integer and a negative number down to the next even integer.`,
			syntax: 'EVEN(Number)',
		},
		{
			id: 'EXP',
			description: $localize`Returns constant e raised to the power of a number.`,
			syntax: 'EXP(Number)',
		},
		{
			id: 'FACT',
			description: $localize`Returns a factorial of a number.`,
			syntax: 'FACT(Number)',
		},
		{
			id: 'FACTDOUBLE',
			description: $localize`Returns a double factorial of a number.`,
			syntax: 'FACTDOUBLE(Number)',
		},
		{
			id: 'FLOOR',
			description: $localize`Rounds a number down to the nearest multiple of Significance.`,
			syntax: 'FLOOR(Number, Significance)',
		},
		{
			id: 'FLOOR.MATH',
			description: $localize`Rounds a number down to the nearest multiple of Significance.`,
			syntax: 'FLOOR.MATH(Number[, Significance[, Mode]])',
		},
		{
			id: 'FLOOR.PRECISE',
			description: $localize`Rounds a number down to the nearest multiple of Significance.`,
			syntax: 'FLOOR.PRECISE(Number[, Significance])',
		},
		{
			id: 'GCD',
			description: $localize`Computes greatest common divisor of numbers.`,
			syntax: 'GCD(Number1, Number2, ...NumberN)',
		},
		{
			id: 'INT',
			description: $localize`Rounds a number down to the nearest integer.`,
			syntax: 'INT(Number)',
		},
		{
			id: 'ISO.CEILING',
			description: $localize`Rounds a number up to the nearest multiple of Significance.`,
			syntax: 'ISO.CEILING(Number[, Significance])',
		},
		{
			id: 'LCM',
			description: $localize`Computes least common multiple of numbers.`,
			syntax: 'LCM(Number1, Number2, ...NumberN)',
		},
		{
			id: 'LN',
			description: $localize`Returns the natural logarithm based on the constant e of a number.`,
			syntax: 'LN(Number)',
		},
		{
			id: 'LOG',
			description: $localize`Returns the logarithm of a number to the specified base.`,
			syntax: 'LOG(Number, Base)',
		},
		{
			id: 'LOG10',
			description: $localize`Returns the base-10 logarithm of a number.`,
			syntax: 'LOG10(Number)',
		},
		{
			id: 'MOD',
			description: $localize`Returns the remainder when one integer is divided by another.`,
			syntax: 'MOD(Dividend, Divisor)',
		},
		{
			id: 'MROUND',
			description: $localize`Rounds number to the neares multiplicity.`,
			syntax: 'MROUND(Number, Base)',
		},
		{
			id: 'MULTINOMIAL',
			description: $localize`Returns number of multiset combinations.`,
			syntax: 'MULTINOMIAL(Number1, Number2, ...NumberN)',
		},
		{
			id: 'ODD',
			description: $localize`Rounds a positive number up to the nearest odd integer and a negative number down to the nearest odd integer.`,
			syntax: 'ODD(Number)',
		},
		{
			id: 'PI',
			description: $localize`Returns 3.14159265358979, the value of the mathematical constant PI to 14 decimal places.`,
			syntax: 'PI()',
		},
		{
			id: 'POWER',
			description: $localize`Returns a number raised to another number.`,
			syntax: 'POWER(Base, Exponent)',
		},
		{
			id: 'PRODUCT',
			description: $localize`Returns product of numbers.`,
			syntax: 'PRODUCT(Number1, Number2, ...NumberN)',
		},
		{
			id: 'QUOTIENT',
			description: $localize`Returns integer part of a division.`,
			syntax: 'QUOTIENT(Dividend, Divisor)',
		},
		{
			id: 'RADIANS',
			description: $localize`Converts degrees to radians.`,
			syntax: 'RADIANS(Number)',
		},
		{
			id: 'RAND',
			description: $localize`Returns a random number between 0 and 1.`,
			syntax: 'RAND()',
		},
		{
			id: 'RANDBETWEEN',
			description: $localize`Returns a random integer between two numbers.`,
			syntax: 'RAND(Lowerbound, Upperbound)',
		},
		{
			id: 'ROMAN',
			description: $localize`Converts number to roman form.`,
			syntax: 'ROMAN(Number[, Mode])',
		},
		{
			id: 'ROUND',
			description: $localize`Rounds a number to a certain number of decimal places.`,
			syntax: 'ROUND(Number, Count)',
		},
		{
			id: 'ROUNDDOWN',
			description: $localize`Rounds a number down, toward zero, to a certain precision.`,
			syntax: 'ROUNDDOWN(Number, Count)',
		},
		{
			id: 'ROUNDUP',
			description: $localize`Rounds a number up, away from zero, to a certain precision.`,
			syntax: 'ROUNDUP(Number, Count)',
		},
		{
			id: 'SEC',
			description: $localize`Returns the secant of the given angle (in radians).`,
			syntax: 'SEC(Number)',
		},
		{
			id: 'SECH',
			description: $localize`Returns the hyperbolic secant of the given angle (in radians).`,
			syntax: 'SEC(Number)',
		},
		{
			id: 'SERIESSUM',
			description: $localize`Evaluates series at a point.`,
			syntax: 'SERIESSUM(Number, Number, Number, Coefficients)',
		},
		{
			id: 'SIN',
			description: $localize`Returns the sine of the given angle (in radians).`,
			syntax: 'SIN(Number)',
		},
		{
			id: 'SINH',
			description: $localize`Returns the hyperbolic sine of the given value.`,
			syntax: 'SINH(Number)',
		},
		{
			id: 'SIGN',
			description: $localize`Returns sign of a number.`,
			syntax: 'SIGN(Number)',
		},
		{
			id: 'SQRT',
			description: $localize`Returns the positive square root of a number.`,
			syntax: 'SQRT(Number)',
		},
		{
			id: 'SQRTPI',
			description: $localize`Returns sqrt of number times pi.`,
			syntax: 'SQRTPI(Number)',
		},
		{
			id: 'SUBTOTAL',
			description: $localize`Computes aggregation using function specified by number.`,
			syntax: 'SUBTOTAL(Function, Number1, Number2, ...NumberN)',
		},
		{
			id: 'SUM',
			description: $localize`Sums up the values of the specified cells.`,
			syntax: 'SUM(Number1, Number2, ...NumberN)',
		},
		{
			id: 'SUMIF',
			description: $localize`Sums up the values of cells that belong to the specified range and meet the specified condition.`,
			syntax: 'SUMIF(Range, Criteria, Sumrange)',
		},
		{
			id: 'SUMIFS',
			description: $localize`Sums up the values of cells that belong to the specified range and meet the specified sets of conditions.`,
			syntax:
				'SUMIFS(Sum_Range, Criterion_range1, Criterion1 [, Criterion_range2, Criterion2 [, ...Criterion_rangeN, CriterionN]])',
		},
		{
			id: 'SUMPRODUCT',
			description: $localize`Multiplies corresponding elements in the given arrays, and returns the sum of those products.`,
			syntax: 'SUMPRODUCT(Array1, Array2, ...ArrayN)',
		},
		{
			id: 'SUMSQ',
			description: $localize`Returns the sum of the squares of the arguments`,
			syntax: 'SUMSQ(Number1, Number2, ...NumberN)',
		},
		{
			id: 'SUMX2MY2',
			description: $localize`Returns the sum of the square differences.`,
			syntax: 'SUMX2MY2(Range1, Range2)',
		},
		{
			id: 'SUMX2PY2',
			description: $localize`Returns the sum of the square sums.`,
			syntax: 'SUMX2PY2(Range1, Range2)',
		},
		{
			id: 'SUMXMY2',
			description: $localize`Returns the sum of the square of differences.`,
			syntax: 'SUMXMY2(Range1, Range2)',
		},
		{
			id: 'TAN',
			description: $localize`Returns the tangent of the given angle (in radians).`,
			syntax: 'TAN(Number)',
		},
		{
			id: 'TANH',
			description: $localize`Returns the hyperbolic tangent of the given value.`,
			syntax: 'TANH(Number)',
		},
		{
			id: 'TRUNC',
			description: $localize`Truncates a number by removing decimal places.`,
			syntax: 'TRUNC(Number, Count)',
		},
	],
	'Matrix functions': [
		{
			id: 'MMULT',
			description: $localize`Calculates the array product of two arrays.`,
			syntax: 'MMULT(Array, Array)',
		},
		{
			id: 'MEDIANPOOL',
			description: $localize`Calculates a smaller range which is a median of a Window_size, in a given Range, for every Stride element.`,
			syntax: 'MEDIANPOOL(Range, Window_size, Stride)',
		},
		{
			id: 'MAXPOOL',
			description: $localize`Calculates a smaller range which is a maximum of a Window_size, in a given Range, for every Stride element.`,
			syntax: 'MAXPOOL(Range, Window_size, Stride)',
		},
		{
			id: 'TRANSPOSE',
			description: $localize`Transposes the rows and columns of an array.`,
			syntax: 'TRANSPOSE(Array)',
		},
	],
	Statistical: [
		{
			id: 'AVEDEV',
			description: $localize`Returns the average deviation of the arguments.`,
			syntax: 'AVEDEV(Number1, Number2, ...NumberN)',
		},
		{
			id: 'AVERAGE',
			description: $localize`Returns the average of the arguments.`,
			syntax: 'AVERAGE(Number1, Number2, ...NumberN)',
		},
		{
			id: 'AVERAGEA',
			description: $localize`Returns the average of the arguments.`,
			syntax: 'AVERAGEA(Value1, Value2, ...ValueN)',
		},
		{
			id: 'AVERAGEIF',
			description: $localize`Returns the arithmetic mean of all cells in a range that satisfy a given condition.`,
			syntax: 'AVERAGEIF(Range, Criterion [, Average_Range ])',
		},
		{
			id: 'BESSELI',
			description: $localize`Returns value of Bessel function.`,
			syntax: 'BESSELI(x, n)',
		},
		{
			id: 'BESSELJ',
			description: $localize`Returns value of Bessel function.`,
			syntax: 'BESSELJ(x, n)',
		},
		{
			id: 'BESSELK',
			description: $localize`Returns value of Bessel function.`,
			syntax: 'BESSELK(x, n)',
		},
		{
			id: 'BESSELY',
			description: $localize`Returns value of Bessel function.`,
			syntax: 'BESSELY(x, n)',
		},
		{
			id: 'BETA.DIST',
			description: $localize`Returns the density of Beta distribution.`,
			syntax:
				'BETA.DIST(Number1, Number2, Number3, Boolean[, Number4[, Number5]])',
		},
		{
			id: 'BETADIST',
			description: $localize`Returns the density of Beta distribution.`,
			syntax: 'BETADIST(Number1, Number2, Number3, Boolean[, Number4[, Number5]])',
		},
		{
			id: 'BETA.INV',
			description: $localize`Returns the inverse Beta distribution value.`,
			syntax: 'BETA.INV(Number1, Number2, Number3[, Number4[, Number5]])',
		},
		{
			id: 'BETAINV',
			description: $localize`Returns the inverse of Beta distribution value.`,
			syntax: 'BETAINV(Number1, Number2, Number3[, Number4[, Number5]])',
		},
		{
			id: 'BINOM.DIST',
			description: $localize`Returns density of binomial distribution.`,
			syntax: 'BINOM.DIST(Number1, Number2, Number3, Boolean)',
		},
		{
			id: 'BINOMDIST',
			description: $localize`Returns density of binomial distribution.`,
			syntax: 'BINOMDIST(Number1, Number2, Number3, Boolean)',
		},
		{
			id: 'BINOM.INV',
			description: $localize`Returns inverse binomial distribution value.`,
			syntax: 'BINOM.INV(Number1, Number2, Number3)',
		},
		{
			id: 'CHIDIST',
			description: $localize`Returns probability of chi-square right-side distribution.`,
			syntax: 'CHIDIST(X, Degrees)',
		},
		{
			id: 'CHIINV',
			description: $localize`Returns inverse of chi-square right-side distribution.`,
			syntax: 'CHIINV(P, Degrees)',
		},
		{
			id: 'CHIINVRT',
			description: $localize`Returns inverse of chi-square right-side distribution.`,
			syntax: 'CHIINVRT(P, Degrees)',
		},
		{
			id: 'CHISQ.DIST',
			description: $localize`Returns value of chi-square distribution.`,
			syntax: 'CHISQ.DIST(X, Degrees, Mode)',
		},
		{
			id: 'CHIDISTRT',
			description: $localize`Returns probability of chi-square right-side distribution.`,
			syntax: 'CHIDISTRT(X, Degrees)',
		},
		{
			id: 'CHISQ.DIST.RT',
			description: $localize`Returns probability of chi-square right-side distribution.`,
			syntax: 'CHISQ.DIST.RT(X, Degrees)',
		},
		{
			id: 'CHISQ.INV',
			description: $localize`Returns inverse of chi-square distribution.`,
			syntax: 'CHISQ.INV.RT(P, Degrees)',
		},
		{
			id: 'CHISQ.INV.RT',
			description: $localize`Returns inverse of chi-square right-side distribution.`,
			syntax: 'CHISQ.INV.RT(P, Degrees)',
		},
		{
			id: 'CHISQ.TEST',
			description: $localize`Returns chisquared-test value for a dataset.`,
			syntax: 'CHISQ.TEST(Array1, Array2)',
		},
		{
			id: 'CHITEST',
			description: $localize`Returns chisquared-test value for a dataset.`,
			syntax: 'CHITEST(Array1, Array2)',
		},
		{
			id: 'CONFIDENCE',
			description: $localize`Returns upper confidence bound for normal distribution.`,
			syntax: 'CONFIDENCE(Alpha, Stdev, Size)',
		},
		{
			id: 'CONFIDENCE.NORM',
			description: $localize`Returns upper confidence bound for normal distribution.`,
			syntax: 'CONFIDENCE.NORM(Alpha, Stdev, Size)',
		},
		{
			id: 'CONFIDENCE.T',
			description: $localize`Returns upper confidence bound for T distribution.`,
			syntax: 'CONFIDENCE.T(Alpha, Stdev, Size)',
		},
		{
			id: 'CORREL',
			description: $localize`Returns the correlation coefficient between two data sets.`,
			syntax: 'CORREL(Data1, Data2)',
		},
		{
			id: 'COUNT',
			description: $localize`Counts how many numbers are in the list of arguments.`,
			syntax: 'COUNT(Value1, Value2, ...ValueN)',
		},
		{
			id: 'COUNTA',
			description: $localize`Counts how many values are in the list of arguments.`,
			syntax: 'COUNTA(Value1, Value2, ...ValueN)',
		},
		{
			id: 'COUNTBLANK',
			description: $localize`Returns the number of empty cells.`,
			syntax: 'COUNTBLANK(Range)',
		},
		{
			id: 'COUNTIF',
			description: $localize`Returns the number of cells that meet with certain criteria within a cell range.`,
			syntax: 'COUNTIF(Range, Criteria)',
		},
		{
			id: 'COUNTIFS',
			description: $localize`Returns the count of rows or columns that meet criteria in multiple ranges.`,
			syntax:
				'COUNTIFS(Range1, Criterion1 [, Range2, Criterion2 [, ...RangeN, CriterionN]])',
		},
		{
			id: 'COVAR',
			description: $localize`Returns the covariance between two data sets, population normalized.`,
			syntax: 'COVAR(Data1, Data2)',
		},
		{
			id: 'COVARIANCE.P',
			description: $localize`Returns the covariance between two data sets, population normalized.`,
			syntax: 'COVARIANCE.P(Data1, Data2)',
		},
		{
			id: 'COVARIANCEP',
			description: $localize`Returns the covariance between two data sets, population normalized.`,
			syntax: 'COVARIANCEP(Data1, Data2)',
		},
		{
			id: 'COVARIANCE.S',
			description: $localize`Returns the covariance between two data sets, sample normalized.`,
			syntax: 'COVARIANCE.S(Data1, Data2)',
		},
		{
			id: 'COVARIANCES',
			description: $localize`Returns the covariance between two data sets, sample normalized.`,
			syntax: 'COVARIANCES(Data1, Data2)',
		},
		{
			id: 'CRITBINOM',
			description: $localize`Returns inverse binomial distribution value.`,
			syntax: 'CRITBINOM(Number1, Number2, Number3)',
		},
		{
			id: 'DEVSQ',
			description: $localize`Returns sum of squared deviations.`,
			syntax: 'DEVSQ(Number1, Number2, ...NumberN)',
		},
		{
			id: 'EXPON.DIST',
			description: $localize`Returns density of a exponential distribution.`,
			syntax: 'EXPON.DIST(Number1, Number2, Boolean)',
		},
		{
			id: 'EXPONDIST',
			description: $localize`Returns density of a exponential distribution.`,
			syntax: 'EXPONDIST(Number1, Number2, Boolean)',
		},
		{
			id: 'FDIST',
			description: $localize`Returns probability of F right-side distribution.`,
			syntax: 'FDIST(X, Degree1, Degree2)',
		},
		{
			id: 'FINV',
			description: $localize`Returns inverse of F right-side distribution.`,
			syntax: 'FINV(P, Degree1, Degree2)',
		},
		{
			id: 'F.DIST',
			description: $localize`Returns value of F distribution.`,
			syntax: 'F.DIST(X, Degree1, Degree2, Mode)',
		},
		{
			id: 'F.DIST.RT',
			description: $localize`Returns probability of F right-side distribution.`,
			syntax: 'F.DIST.RT(X, Degree1, Degree2)',
		},
		{
			id: 'FDISTRT',
			description: $localize`Returns probability of F right-side distribution.`,
			syntax: 'FDISTRT(X, Degree1, Degree2)',
		},
		{
			id: 'F.INV',
			description: $localize`Returns inverse of F distribution.`,
			syntax: 'F.INV.RT(P, Degree1, Degree2)',
		},
		{
			id: 'F.INV.RT',
			description: $localize`Returns inverse of F right-side distribution.`,
			syntax: 'F.INV.RT(P, Degree1, Degree2)',
		},
		{
			id: 'FINVRT',
			description: $localize`Returns inverse of F right-side distribution.`,
			syntax: 'FINVRT(P, Degree1, Degree2)',
		},
		{
			id: 'FISHER',
			description: $localize`Returns Fisher transformation value.`,
			syntax: 'FISHER(Number)',
		},
		{
			id: 'FISHERINV',
			description: $localize`Returns inverse Fischer transformation value.`,
			syntax: 'FISHERINV(Number)',
		},
		{
			id: 'F.TEST',
			description: $localize`Returns f-test value for a dataset.`,
			syntax: 'Z.TEST(Array1, Array2)',
		},
		{
			id: 'FTEST',
			description: $localize`Returns f-test value for a dataset.`,
			syntax: 'ZTEST(Array1, Array2)',
		},
		{
			id: 'GAMMA',
			description: $localize`Returns value of Gamma function.`,
			syntax: 'GAMMA(Number)',
		},
		{
			id: 'GAMMA.DIST',
			description: $localize`Returns density of Gamma distribution.`,
			syntax: 'GAMMA.DIST(Number1, Number2, Number3, Boolean)',
		},
		{
			id: 'GAMMADIST',
			description: $localize`Returns density of Gamma distribution.`,
			syntax: 'GAMMADIST(Number1, Number2, Number3, Boolean)',
		},
		{
			id: 'GAMMALN',
			description: $localize`Returns natural logarithm of Gamma function.`,
			syntax: 'GAMMALN(Number)',
		},
		{
			id: 'GAMMALN.PRECISE',
			description: $localize`Returns natural logarithm of Gamma function.`,
			syntax: 'GAMMALN.PRECISE(Number)',
		},
		{
			id: 'GAMMA.INV',
			description: $localize`Returns inverse Gamma distribution value.`,
			syntax: 'GAMMA.INV(Number1, Number2, Number3)',
		},
		{
			id: 'GAMMAINV',
			description: $localize`Returns inverse Gamma distribution value.`,
			syntax: 'GAMMAINV(Number1, Number2, Number3)',
		},
		{
			id: 'GAUSS',
			description: $localize`Returns the probability of gaussian variable falling more than this many times standard deviation from mean.`,
			syntax: 'GAUSS(Number)',
		},
		{
			id: 'GEOMEAN',
			description: $localize`Returns the geometric average.`,
			syntax: 'GEOMEAN(Number1, Number2, ...NumberN)',
		},
		{
			id: 'HARMEAN',
			description: $localize`Returns the harmonic average.`,
			syntax: 'HARMEAN(Number1, Number2, ...NumberN)',
		},
		{
			id: 'HYPGEOMDIST',
			description: $localize`Returns density of hypergeometric distribution.`,
			syntax: 'HYPGEOMDIST(Number1, Number2, Number3, Number4, Boolean)',
		},
		{
			id: 'HYPGEOM.DIST',
			description: $localize`Returns density of hypergeometric distribution.`,
			syntax: 'HYPGEOM.DIST(Number1, Number2, Number3, Number4, Boolean)',
		},
		{
			id: 'LARGE',
			description: $localize`Returns k-th largest value in a range.`,
			syntax: 'LARGE(Range, K)',
		},
		{
			id: 'LOGNORM.DIST',
			description: $localize`Returns density of lognormal distribution.`,
			syntax: 'LOGNORM.DIST(X, Mean, Stddev, Mode)',
		},
		{
			id: 'LOGNORMDIST',
			description: $localize`Returns density of lognormal distribution.`,
			syntax: 'LOGNORMDIST(X, Mean, Stddev, Mode)',
		},
		{
			id: 'LOGNORM.INV',
			description: $localize`Returns value of inverse lognormal distribution.`,
			syntax: 'LOGNORM.INV(P, Mean, Stddev)',
		},
		{
			id: 'LOGNORMINV',
			description: $localize`Returns value of inverse lognormal distribution.`,
			syntax: 'LOGNORMINV(P, Mean, Stddev)',
		},
		{
			id: 'LOGINV',
			description: $localize`Returns value of inverse lognormal distribution.`,
			syntax: 'LOGINV(P, Mean, Stddev)',
		},
		{
			id: 'MAX',
			description: $localize`Returns the maximum value in a list of arguments.`,
			syntax: 'MAX(Number1, Number2, ...NumberN)',
		},
		{
			id: 'MAXA',
			description: $localize`Returns the maximum value in a list of arguments.`,
			syntax: 'MAXA(Value1, Value2, ...ValueN)',
		},
		{
			id: 'MAXIFS',
			description: $localize`Returns the maximum value of the cells in a range that meet a set of criteria.`,
			syntax:
				'MAXIFS(Max_Range, Criterion_range1, Criterion1 [, Criterion_range2, Criterion2 [, ...Criterion_rangeN, CriterionN]])',
		},
		{
			id: 'MEDIAN',
			description: $localize`Returns the median of a set of numbers.`,
			syntax: 'MEDIAN(Number1, Number2, ...NumberN)',
		},
		{
			id: 'MIN',
			description: $localize`Returns the minimum value in a list of arguments.`,
			syntax: 'MIN(Number1, Number2, ...NumberN)',
		},
		{
			id: 'MINA',
			description: $localize`Returns the minimum value in a list of arguments.`,
			syntax: 'MINA(Value1, Value2, ...ValueN)',
		},
		{
			id: 'MINIFS',
			description: $localize`Returns the minimum value of the cells in a range that meet a set of criteria.`,
			syntax:
				'MINIFS(Min_Range, Criterion_range1, Criterion1 [, Criterion_range2, Criterion2 [, ...Criterion_rangeN, CriterionN]])',
		},
		{
			id: 'NEGBINOM.DIST',
			description: $localize`Returns density of negative binomial distribution.`,
			syntax: 'NEGBINOM.DIST(Number1, Number2, Number3, Mode)',
		},
		{
			id: 'NEGBINOMDIST',
			description: $localize`Returns density of negative binomial distribution.`,
			syntax: 'NEGBINOMDIST(Number1, Number2, Number3, Mode)',
		},
		{
			id: 'NORM.DIST',
			description: $localize`Returns density of normal distribution.`,
			syntax: 'NORM.DIST(X, Mean, Stddev, Mode)',
		},
		{
			id: 'NORMDIST',
			description: $localize`Returns density of normal distribution.`,
			syntax: 'NORMDIST(X, Mean, Stddev, Mode)',
		},
		{
			id: 'NORM.S.DIST',
			description: $localize`Returns density of normal distribution.`,
			syntax: 'NORM.S.DIST(X, Mode)',
		},
		{
			id: 'NORMDIST',
			description: $localize`Returns density of normal distribution.`,
			syntax: 'NORMSDIST(X, Mode)',
		},
		{
			id: 'NORM.INV',
			description: $localize`Returns value of inverse normal distribution.`,
			syntax: 'NORM.INV(P, Mean, Stddev)',
		},
		{
			id: 'NORMINV',
			description: $localize`Returns value of inverse normal distribution.`,
			syntax: 'NORMINV(P, Mean, Stddev)',
		},
		{
			id: 'NORM.S.INV',
			description: $localize`Returns value of inverse normal distribution.`,
			syntax: 'NORM.S.INV(P)',
		},
		{
			id: 'NORMSINV',
			description: $localize`Returns value of inverse normal distribution.`,
			syntax: 'NORMSINV(P)',
		},
		{
			id: 'PEARSON',
			description: $localize`Returns the correlation coefficient between two data sets.`,
			syntax: 'PEARSON(Data1, Data2)',
		},
		{
			id: 'PHI',
			description: $localize`Returns probability densitity of normal distribution.`,
			syntax: 'PHI(X)',
		},
		{
			id: 'POISSON',
			description: $localize`Returns density of Poisson distribution.`,
			syntax: 'POISSON(X, Mean, Mode)',
		},
		{
			id: 'POISSON.DIST',
			description: $localize`Returns density of Poisson distribution.`,
			syntax: 'POISSON.DIST(X, Mean, Mode)',
		},
		{
			id: 'POISSONDIST',
			description: $localize`Returns density of Poisson distribution.`,
			syntax: 'POISSONDIST(X, Mean, Mode)',
		},
		{
			id: 'RSQ',
			description: $localize`Returns the squared correlation coefficient between two data sets.`,
			syntax: 'RSQ(Data1, Data2)',
		},
		{
			id: 'SKEW',
			description: $localize`Returns skeweness of a sample.`,
			syntax: 'SKEW(Number1, Number2, ...NumberN)',
		},
		{
			id: 'SKEW.P',
			description: $localize`Returns skeweness of a population.`,
			syntax: 'SKEW.P(Number1, Number2, ...NumberN)',
		},
		{
			id: 'SKEWP',
			description: $localize`Returns skeweness of a population.`,
			syntax: 'SKEWP(Number1, Number2, ...NumberN)',
		},
		{
			id: 'SLOPE',
			description: $localize`Returns the slope of a linear regression line.`,
			syntax: 'SLOPE(Array1, Array2)',
		},
		{
			id: 'SMALL',
			description: $localize`Returns k-th smallest value in a range.`,
			syntax: 'SMALL(Range, K)',
		},
		{
			id: 'STANDARDIZE',
			description: $localize`Returns normalized value wrt expected value and standard deviation.`,
			syntax: 'STANDARDIZE(X, Mean, Stddev)',
		},
		{
			id: 'STDEV',
			description: $localize`Returns standard deviation of a sample.`,
			syntax: 'STDEV(Value1, Value2, ...ValueN)',
		},
		{
			id: 'STDEVA',
			description: $localize`Returns standard deviation of a sample.`,
			syntax: 'STDEVA(Value1, Value2, ...ValueN)',
		},
		{
			id: 'STDEVP',
			description: $localize`Returns standard deviation of a population.`,
			syntax: 'STDEVP(Value1, Value2, ...ValueN)',
		},
		{
			id: 'STDEV.P',
			description: $localize`Returns standard deviation of a population.`,
			syntax: 'STDEV.P(Value1, Value2, ...ValueN)',
		},
		{
			id: 'STDEVPA',
			description: $localize`Returns standard deviation of a population.`,
			syntax: 'STDEVPA(Value1, Value2, ...ValueN)',
		},
		{
			id: 'STDEV.S',
			description: $localize`Returns standard deviation of a sample.`,
			syntax: 'STDEV.S(Value1, Value2, ...ValueN)',
		},
		{
			id: 'STDEVS',
			description: $localize`Returns standard deviation of a sample.`,
			syntax: 'STDEVS(Value1, Value2, ...ValueN)',
		},
		{
			id: 'STEYX',
			description: $localize`Returns standard error for predicted of the predicted y value for each x value.`,
			syntax: 'STEYX(Array1, Array2)',
		},
		{
			id: 'TDIST',
			description: $localize`Returns density of Student-t distribution, both-sided or right-tailed.`,
			syntax: 'TDIST(X, Degrees, Mode)',
		},
		{
			id: 'T.DIST',
			description: $localize`Returns density of Student-t distribution.`,
			syntax: 'T.DIST(X, Degrees, Mode)',
		},
		{
			id: 'T.DIST.2T',
			description: $localize`Returns density of Student-t distribution, both-sided.`,
			syntax: 'T.DIST.2T(X, Degrees)',
		},
		{
			id: 'TDIST2T',
			description: $localize`Returns density of Student-t distribution, both-sided.`,
			syntax: 'TDIST2T(X, Degrees)',
		},
		{
			id: 'T.DIST.RT',
			description: $localize`Returns density of Student-t distribution, right-tailed.`,
			syntax: 'T.DIST.RT(X, Degrees)',
		},
		{
			id: 'TDISTRT',
			description: $localize`Returns density of Student-t distribution, right-tailed.`,
			syntax: 'TDISTRT(X, Degrees)',
		},
		{
			id: 'TINV',
			description: $localize`Returns inverse Student-t distribution, both-sided.`,
			syntax: 'TINV(P, Degrees)',
		},
		{
			id: 'T.INV',
			description: $localize`Returns inverse Student-t distribution.`,
			syntax: 'T.INV(P, Degrees)',
		},
		{
			id: 'T.INV.2T',
			description: $localize`Returns inverse Student-t distribution, both-sided.`,
			syntax: 'T.INV.2T(P, Degrees)',
		},
		{
			id: 'TINV2T',
			description: $localize`Returns inverse Student-t distribution, both-sided.`,
			syntax: 'TINV2T(P, Degrees)',
		},
		{
			id: 'TTEST',
			description: $localize`Returns t-test value for a dataset.`,
			syntax: 'TTEST(Array1, Array2)',
		},
		{
			id: 'T.TEST',
			description: $localize`Returns t-test value for a dataset.`,
			syntax: 'T.TEST(Array1, Array2)',
		},
		{
			id: 'VAR',
			description: $localize`Returns variance of a sample.`,
			syntax: 'VAR(Value1, Value2, ...ValueN)',
		},
		{
			id: 'VARA',
			description: $localize`Returns variance of a sample.`,
			syntax: 'VARA(Value1, Value2, ...ValueN)',
		},
		{
			id: 'VARP',
			description: $localize`Returns variance of a population.`,
			syntax: 'VARP(Value1, Value2, ...ValueN)',
		},
		{
			id: 'VAR.P',
			description: $localize`Returns variance of a population.`,
			syntax: 'VAR.P(Value1, Value2, ...ValueN)',
		},
		{
			id: 'VARPA',
			description: $localize`Returns variance of a population.`,
			syntax: 'VARPA(Value1, Value2, ...ValueN)',
		},
		{
			id: 'VAR.S',
			description: $localize`Returns variance of a sample.`,
			syntax: 'VAR.S(Value1, Value2, ...ValueN)',
		},
		{
			id: 'VARS',
			description: $localize`Returns variance of a sample.`,
			syntax: 'VARS(Value1, Value2, ...ValueN)',
		},
		{
			id: 'WEIBULL',
			description: $localize`Returns density of Weibull distribution.`,
			syntax: 'WEIBULL(Number1, Number2, Number3, Boolean)',
		},
		{
			id: 'WEIBULL.DIST',
			description: $localize`Returns density of Weibull distribution.`,
			syntax: 'WEIBULL.DIST(Number1, Number2, Number3, Boolean)',
		},
		{
			id: 'WEIBULLDIST',
			description: $localize`Returns density of Weibull distribution.`,
			syntax: 'WEIBULLDIST(Number1, Number2, Number3, Boolean)',
		},
		{
			id: 'Z.TEST',
			description: $localize`Returns z-test value for a dataset.`,
			syntax: 'Z.TEST(Array, X[, Sigma])',
		},
		{
			id: 'ZTEST',
			description: $localize`Returns z-test value for a dataset.`,
			syntax: 'ZTEST(Array, X[, Sigma])',
		},
	],
	Text: [
		{
			id: 'CHAR',
			description: $localize`Converts a number into a character according to the current code table.`,
			syntax: 'CHAR(Number)',
		},
		{
			id: 'CLEAN',
			description: $localize`Returns text that has been "cleaned" of line breaks and other non-printable characters.`,
			syntax: 'CLEAN("Text")',
		},
		{
			id: 'CODE',
			description: $localize`Returns a numeric code for the first character in a text string.`,
			syntax: 'CODE("Text")',
		},
		{
			id: 'CONCATENATE',
			description: $localize`Combines several text strings into one string.`,
			syntax: 'CONCATENATE("Text1", "Text2", ..."TextN")',
		},
		{
			id: 'EXACT',
			description: $localize`Returns TRUE if both text strings are exactly the same.`,
			syntax: 'EXACT(Text, Text)',
		},
		{
			id: 'FIND',
			description: $localize`Returns the location of one text string inside another.`,
			syntax: 'FIND( "Text1", "Text2"[, Number])',
		},
		{
			id: 'LEFT',
			description: $localize`Extracts a given number of characters from the left side of a text string.`,
			syntax: 'LEFT("Text", Number)',
		},
		{
			id: 'LEN',
			description: $localize`Returns length of a given text.`,
			syntax: 'LEN("Text")',
		},
		{
			id: 'LOWER',
			description: $localize`Returns text converted to lowercase.`,
			syntax: 'LOWER(Text)',
		},
		{
			id: 'MID',
			description: $localize`Returns substring of a given length starting from Start_position.`,
			syntax: 'MID(Text, Start_position, Length)',
		},
		{
			id: 'PROPER',
			description: $localize`Capitalizes words given text string.`,
			syntax: 'PROPER("Text")',
		},
		{
			id: 'REPLACE',
			description: $localize`Replaces substring of a text of a given length that starts at given position.`,
			syntax: 'REPLACE(Text, Start_position, Length, New_text)',
		},
		{
			id: 'REPT',
			description: $localize`Repeats text a given number of times.`,
			syntax: 'REPT("Text", Number)',
		},
		{
			id: 'RIGHT',
			description: $localize`Extracts a given number of characters from the right side of a text string.`,
			syntax: 'RIGHT("Text", Number)',
		},
		{
			id: 'SEARCH',
			description: $localize`Returns the location of Search_string inside Text. Case-insensitive. Allows the use of wildcards.`,
			syntax: 'SEARCH(Search_string, Text[, Start_position])',
		},
		{
			id: 'SPLIT',
			description: $localize`Divides the provided text using the space character as a separator and returns the substring at the zero-based position specified by the second argument.SPLIT("Lorem ipsum", 0) -> "Lorem"SPLIT("Lorem ipsum", 1) -> "ipsum"`,
			syntax: 'SPLIT(Text, Index)',
		},
		{
			id: 'SUBSTITUTE',
			description: $localize`Returns string where occurrences of Old_text are replaced by New_text. Replaces only specific occurrence if last parameter is provided.`,
			syntax: 'SUBSTITUTE(Text, Old_text, New_text, [Occurrence])',
		},
		{
			id: 'T',
			description: $localize`Returns text if given value is text, empty string otherwise.`,
			syntax: 'T(Value)',
		},
		{
			id: 'TEXT',
			description: $localize`Converts a number into text according to a given format.By default, accepts the same formats that can be passed to the dateFormats option, but can be further customized with the stringifyDateTime option.`,
			syntax: 'TEXT(Number, Format)',
		},
		{
			id: 'TRIM',
			description: $localize`Strips extra spaces from text.`,
			syntax: 'TRIM("Text")',
		},
		{
			id: 'UNICHAR',
			description: $localize`Returns the character created by using provided code point.`,
			syntax: 'UNICHAR(Number)',
		},
		{
			id: 'UNICODE',
			description: $localize`Returns the Unicode code point of a first character of a text.`,
			syntax: 'UNICODE(Text)',
		},
		{
			id: 'UPPER',
			description: $localize`Returns text converted to uppercase.`,
			syntax: 'UPPER(Text)',
		},
	],
};

export const formulas = Object.values(formulasByCategory)
	.flat()
	.sort((a, b) => (a.id > b.id ? 1 : -1));

export const FORMULAS = new InjectionToken<typeof formulas>('formulas');
