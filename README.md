# React Server-Side Rendering with ES Modules

Typically, to implement React SSR you need to build frontend code twice - once for Node and once for the browser and with that you also need to have complex bundler configuration and code in the end is very hard to understand. This repo demo's how implementation becomes much simpler with only ES modules without any bundler or transpiler and in the end code is easy to follow.

NOTE: This is just a demo, in the real app you would still want to use bundlers to group multiple modules in one file or to produce CSS files and transpilers for TypeScript and JSX, but you can make your bundler configuration much simpler and improve developer experience by removing one build step.

## How to run the demo?

- Make sure you have Node >=16 installed
- Clone the repo
- Run `npm install`
- Run `npm start`, server should be started on `http://localhost:3000/`

## Application Structure

- `server` - folder contains all server code
- `server/app.js` - sets up express server. Server exposes all code under `client` folder.
- `server/render-to-string.js` - renders client application to string
- `templates/index.html` - template for initial html page that gets loaded in the browser. Page defines `import-map` for external dependencies and includes `es-module-shims` to add support for `import-maps` in non-chromium browsers.
- `client` - folder contains react application that is executed in the browser. All react code was written without transpiler, so you will see `React.createElement` instead of `jsx` in all react components.
- `client/index.js` - starts the react application.
- `client/app.js` - root react component that sets up routing.
- `client/layout.js` - react component that defines main navigation and layout which is used for all pages.
- `client/pages` - folder where all pages are defined.
