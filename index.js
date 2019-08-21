import { useState } from './store';

document.addEventListener('DOMContentLoaded', () => {
    const [ state, setState ] = useState({
        count: 0,
    });

    setTimeout(() => {
        setState(oldState => ({ ...oldState, count: ++oldState.count }));
    }, 3000);
});

export const App = (state) => `
    <div>
        ${state.count}
    </div>
`;
