import React from 'react';

const Html = ({ initialData, ...props }) => {
    return (
        <html>
        <head>
            <title>App</title>
            <link rel="stylesheet" href="/static/css/main.css" />
        </head>
        <body>
            <div id="app">{props.children}</div>
            <script id="initial-data" type="text/plain" data-json={initialData}></script>
            <script src="/static/bundle.js"></script>
        </body>
        </html>
    );
};

export default Html;
