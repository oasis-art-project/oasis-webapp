import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/login/Login';
import Navbar from './components/navbar/Navbar';
import createStore from './store';

const store = createStore();

function App() {
  return (
    <ReduxProvider store={store}>
      <Router>
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
    <>
      <Navbar />
    </>
  );
}

export default App;
