import type { AbstractControl } from '@angular/forms';

export const getControlErrorMessage = (
	control: AbstractControl<string | null, string | null, unknown> | null,
	errors = [{ name: 'required', message: 'Required' }],
) => {
	for (const current of errors) {
		const { name } = current;
		if (control?.hasError(name) && (control.dirty || control.touched))
			return typeof control.errors?.[name] === 'string' ?
					control.errors?.[name]
				:	current.message;
	}
	return null;
};
