import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./banners";

const configureStore = preloadedState =>
    createStore(reducer, preloadedState, applyMiddleware(thunk));

export default configureStore;
