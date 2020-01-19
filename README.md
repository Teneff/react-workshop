# React Workshop

## Session 1 (Initial app setup)

- Installing tools
  - [Visual studio code](https://code.visualstudio.com/)
    - [Debugger for chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome) plugin
    - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) plugin
  - [Node.js](https://code.visualstudio.com/)
  - Chrome plugin
    - [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
  - Yarn (using `npm i -g yarn`)
- Bootstrapping React application with [Create React App](https://github.com/facebook/create-react-app)
  - taking a look of the generated files
    - package.json
      - dependencies
      - [scripts](#initial-scripts)
      - [browserlist](https://browserl.ist/)
- Adding dependencies
  - [Twitter Bootstrap](https://www.npmjs.com/package/bootstrap)
  - [node-sass](https://www.npmjs.com/package/node-sass)
- Creating a page
  - adding layout based on [Bootstrap Blog example](https://getbootstrap.com/docs/4.4/examples/blog/)
  - including bootstrap sass
  - creating and including [css file](./blog.css)
- Building the application using `yarn build`

## Session 2
- adding VSCode plugin [ES7 React/Redux/GraphQL/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets) for faster component creation
- updating the JSX to remove the ESLint warnings/errors by chaning
  - `class` property to `className`
  - `href="#"` to `href="/"`
  - `tabindex` to `tabIndex`
- Taking a look at JavaScript's data types and how are they rendered
  - `string`
  - `number`
  - `undefined`
  - `null`
  - `boolean`
  - `function`
  - `class`
- Naming convention
- Creating components
  
  Creating reuseable components to be used accross the Blog and simplify the App component

  ```
  ├── components
  │   ├── Footer.jsx
  │   ├── Header.jsx
  │   ├── Navigation.jsx
  │   ├── Pagination.jsx
  │   ├── Sidebar.jsx
  │   └── posts
  │       ├── Featured.jsx
  │       ├── Jumbotron.jsx
  │       └── Post.jsx
  └── pages
      └── Home.jsx
  ```

  - props
    - passing data to children
    - sending data to parents
    - `children` prop
  - state
  - lifecycle methods
  - hooks
  - React.Fragment

## Upcoming sessions

- modifying the components to accept props
- adding [markdown](https://www.npmjs.com/package/markdown) parser
- adding [momnetjs](https://www.npmjs.com/package/moment) to format dates
- fetching/posting data using [Axios](https://www.npmjs.com/package/axios)
- [React Router](https://reacttraining.com/react-router/web/guides/quick-start)
- [React Redux](https://redux.js.org)

## [Initial React Scripts](./Scripts.md)