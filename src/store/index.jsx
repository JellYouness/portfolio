// third-party
import { configureStore } from '@reduxjs/toolkit';
import lang from './lang';

// import reducers from './reducers';

// ==============================|| REDUX TOOLKIT - MAIN STORE ||============================== //

const store = configureStore({
    reducer: {
        lang: lang
    }
});

const { dispatch } = store;
// setupListeners(store.dispatch);
export { store, dispatch };
