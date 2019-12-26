import { createStore} from "redux";
import rootReducer from "./reducers";
import { getStateLocalStorage, setStateLocalStorage } from "./utils/localStorage";

// Store allow the application to know the global state of the components
const localStorageState = getStateLocalStorage();
const store = createStore (
    rootReducer,
    localStorageState,
    window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()
);

store.subscribe(()=> {
    setStateLocalStorage({
        state: store.getState().state
    });
});
export  default store;
