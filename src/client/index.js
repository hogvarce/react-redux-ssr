import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import App from '../common/App';
import configureStore from '../common/stores/configureStore';

const initialData = JSON.parse(document.getElementById('initial-data').getAttribute('data-json'));
const store = configureStore(initialData);

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);
