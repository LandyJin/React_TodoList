# To Do List

## Create React App: 

[React App](https://github.com/facebook/create-react-app)


## Redux

[Redux](https://github.com/reduxjs/redux)

```bash
yarn add redux react-redux
```


## Redux-thunk

[Redux-thunk](https://github.com/reduxjs/redux-thunk)

Feature: Thunks are the recommended middleware for basic Redux side effects logic, including complex synchronous logic that needs access to the store, and simple async logic like AJAX requests.

```bash
yarn add redux redux-thunk
```


## Enable Extension in Visual Studio Code 

In Extension search:

'@ES7 React/Redux/React-Native/JS snippets'

Feature: Easier to Create React Components


## Json Placeholder 

Feature: Generate a fake API

[Json Placeholder](https://my-json-server.typicode.com/)

[My App API](https://my-json-server.typicode.com/LandyJin/React_TodoList/toDos)


## Json Server

Feature: Generate a fake API

[Json Server](https://github.com/typicode/json-server)

In package JSON 'script'
```bash
"json:server": "json-server --watch db.json"
```
```bash
yarn run json:server
```


## Axois

Feature: Promise based HTTP client for the browser and node.js

[Axois](https://github.com/axios/axios)


## uuid 

Feature: Generate Id it self

```bash
yarn add uuid 
```

Example: 
```javascript
import uuid from 'uuid'
...

id: uuid.v4(),
```