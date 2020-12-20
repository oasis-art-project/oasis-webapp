import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { Router, Route, Switch } from "react-router-dom";
import createStore from "./store";
import history from "./helpers/history";

const store = createStore();

function App() {
  return (
    <ReduxProvider store={store}>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </ReduxProvider>
  );
}

function Home() {
  return (
    <div className="max-w-md mx-auto flex p-6 bg-gray-100 mt-10 rounded-lg shadow-xl">
      <div className="ml-6 pt-1">
        <h1 className="text-2xl text-blue-700 leading-tight">
          Tailwind and Create React App prkmpemfpeo
        </h1>
        <p className="text-base leading-normal">Building apps together</p>
      </div>
    </div>
  );
}

function Login() {
  return (
    <div className="max-w-md mx-auto flex p-6 bg-gray-100 mt-10 rounded-lg">
      Login
    </div>
  );
}

export default App;
