import { render } from './render';

const store = {};

const updateStore = async updater => {
	const nextState = Object.assign(store, await updater(store));
	render(nextState);

	return nextState;
};

export const useState = initialState => {
	const nextState = Object.assign(store, initialState);
	render(nextState);

	return [ nextState, updateStore ];
};
