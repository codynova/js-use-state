import { App } from './index';

export const render = state => document.getElementById('app').innerHTML = App(state);