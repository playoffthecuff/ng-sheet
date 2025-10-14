export const calcPasswordStrength = (password: string) =>
	password ?
		[
			(s: string) => 1 + +/[a-z]/.test(s),
			(s: string) => 1 + +/[A-Z]/.test(s),
			(s: string) => 1 + +/[0-9]/.test(s),
			(s: string) => 1 + +/[^A-Za-z0-9]/.test(s),
			(s: string) => 1 + ([...new Set(s)].length / s.length) ** 0.1,
			(s: string) => 1 + Math.log(s.length) / 3,
		].reduce((a, v) => Math.min(100, a * v(password) + Math.LOG10E), 1)
	:	0;
