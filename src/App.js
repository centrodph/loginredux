import React, { Component } from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

//Custom imports
import Login from "./components/Login";
import appReducers from "./reducers";
const createAppStore = applyMiddleware(thunk)(createStore);

class App extends Component {
  render() {
    return (
      <Provider store={createAppStore(appReducers)}>
        <div className="app">
          <Login />
        </div>
      </Provider>
    );
  }
}

export default App;
