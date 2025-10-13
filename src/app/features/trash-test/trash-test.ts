import { Component, signal } from '@angular/core';

@Component({
	selector: 'app-trash-test',
	imports: [],
	templateUrl: './trash-test.html',
	styleUrl: './trash-test.less',
})
export class TrashTest {
	createRandomObject(numFields = 10) {
		const randInt = (min: number, max: number) =>
			Math.floor(Math.random() * (max - min + 1)) + min;
		const randStr = () => Math.random().toString(36).slice(2, randInt(5, 10));
		const randBool = () => Math.random() < 0.5;
		const randDate = () => new Date(Date.now() - Math.random() * 1e10);
		const randFloat = () => +(Math.random() * 1000).toFixed(2);
		const randNull = () => null;
		const randBigInt = () => BigInt(randInt(0, 1e6));
		const generators = [
			randStr,
			randInt.bind(null, 0, 1000),
			randBool,
			randDate,
			randFloat,
			randNull,
			randBigInt,
		];
		const randArray = () => {
			const len = randInt(2, 10);
			const gen = generators[randInt(0, generators.length - 1)];
			return Array.from({ length: len }, () => gen());
		};
		const randFlatObject = () => {
			const len = randInt(2, 10);
			const o: Record<string, unknown> = {};
			for (let i = 0; i < len; i++) {
				const key = randStr();
				const gen = generators[randInt(0, generators.length - 1)];
				o[key] = gen();
			}
			return o;
		};
		const fullGenerators = [...generators, randArray, randFlatObject];
		const result: Record<string, unknown> = {};

		for (let i = 0; i < numFields; i++) {
			const key = `field_${i + 1}`;
			const gen = fullGenerators[randInt(0, fullGenerators.length - 1)];
			result[key] = gen();
		}

		return result;
	}
	ro = this.createRandomObject();
	arr = [...Array(100).keys()].map(() =>
		[...Array(100).keys()].map(() => signal({ ...this.ro })),
	);
}
