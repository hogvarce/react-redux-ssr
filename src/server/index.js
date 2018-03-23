import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';
import { Provider } from "react-redux";
import express from 'express';
import cors from "cors";

import Html from '../common/Html';
import App from '../common/App';
import configureStore from '../common/stores/configureStore';
import routes from '../common/routes';

const app = express();

app.use(cors());
app.use('/static', express.static('public'));

app.get('*', (req, res) => {
    const store = configureStore();

    const promises = routes.reduce((acc, route) => {
        if (matchPath(req.url, route) && route.component) {
            acc.push(Promise.resolve(store.dispatch(route.component.componentDidMount())));
        }
        return acc;
    }, []);

    Promise.all(promises)
        .then(() => {
            const initialData = store.getState();
            ReactDOMServer.renderToNodeStream(
                <Html initialData={JSON.stringify(initialData)}>
                <Provider store={store}>
                    <StaticRouter
                        location={req.url}
                        context={{}}
                    >
                        <App />
                    </StaticRouter>
                </Provider>
                </Html>
            ).pipe(res);
        });
});

app.listen(8080, () => {
    console.log('listening on port 8080...');
});
