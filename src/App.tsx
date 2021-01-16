import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { QueryClientProvider, QueryClient } from 'react-query';
import Login from './components/login/Login';
import Home from './pages/Home/index';

const queryClient = new QueryClient({});

const theme = {
  colors: {
    darkGray: '#425663',
    lightGray: '#B0CFD1',
  },
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
          </Switch>
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
