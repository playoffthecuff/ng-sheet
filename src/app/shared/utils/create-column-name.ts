export const createColumnName = (
	n: number,
	r = '',
	max = 26,
	firstCode = 65,
): string =>
	n <= 0 ? r : (
		createColumnName(
			~~(--n / max),
			String.fromCharCode(firstCode + (n % max)) + r,
		)
	);
