import { render } from './render';

const store = {};

export const useState = (initialState, sideEffectsCallback) => {
	const nextState = Object.assign(store, initialState);
	render(nextState);

	return [
		nextState,
		async updaterFunction => {
			const nextState = Object.assign(store, await (updaterFunction(store)));
			render(nextState);

			if (sideEffectsCallback) {
				sideEffectsCallback(nextState);
			}

			return nextState;
		},
	];
};
