import React from "react";
import Todos from "./reducers/todos-component";
import HelloReduxExampleComponent
  from "./hello-redux-example-component";
import hello from "./reducers/hello";
import todosReducer from "./reducers/todos-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
const reducers = combineReducers({
  todos: todosReducer, hello: hello
})
const store = createStore(reducers);


const ReduxExamples = () => {
  return(
      <Provider store={store}>
      <div>
        <h2>Redux Examples</h2>
        <Todos/>
<HelloReduxExampleComponent/>
      </div>
      </Provider>

  );
};
export default ReduxExamples;