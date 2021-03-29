import { opine, serveStatic, React, ReactDOMServer } from './deps.ts';

import App from './app.tsx';

const app = opine();
const browserBundlePath = '/browser.js';

const js = `import React from "https://dev.jspm.io/react@16.13.1";\nimport ReactDOM from "https://dev.jspm.io/react-dom@16.13.1";\nconst App = ${App};\nReactDOM.hydrate(React.createElement(App), document.body);`;

const html = `<html><head><script type="module" src="${browserBundlePath}"></script><style>* { font-family: Helvetica; }</style></head><body>${(ReactDOMServer as any).renderToString(
	<App />
)}</body></html>`;

app.use(serveStatic('./public'));

// server our app's code so we can hydrate the React application on the client
app.use(browserBundlePath, (req, res, next) => {
	res.type('application/javascript').send(js);
});

// serve a simple HTML page containing our rendered app
app.use('/', (req, res, next) => {
	res.type('text/html').send(html);
});

app.listen({ port: 3000 });
console.log('SSR ReactApp listening on port 3000');
