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

## Session 2 ([video][video-session2])
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


## Session 3 ([video][video-session3])
- modifying the remaing components to render dynamic data
- Parsing [markdown](https://en.wikipedia.org/wiki/Markdown)
  - adding [markdown](https://www.npmjs.com/package/markdown) parser
  - creating [&lt;Markdown /&gt;](./src/components/Markdown.jsx) component inserting parsed markdown with [dangerouslySetInnerHTML](https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml)
- Formatting JavasScript Date
  - adding [momnetjs](https://www.npmjs.com/package/moment) to format dates
- [React Router](https://reacttraining.com/react-router/web/guides/quick-start)
  - creating simple page routing
    - `/` (home page)
      - `/author/:authorId` (posts by author)
      - `/category/:categoryId` (posts by category)
    - `404` (anyhting else)


## Upcoming sessions
- crating a post page
- creating author page
- creating API client using [Axios](https://www.npmjs.com/package/axios)
- fetching/posting data using to [the API](http://ws.headless.dev.ecm/username/) ([API source code][api-source])
- [React Redux](https://redux.js.org)

## [Initial React Scripts](./Scripts.md)

[video-session2]: https://web.microsoftstream.com/video/f651a5e0-521c-45ab-a04e-ae1491de62fa
[video-session3]: https://web.microsoftstream.com/video/28411a8f-caab-42e3-93fe-a90e5b5ccbf2
[api-source]: https://github.com/Teneff/react-workshop/tree/api