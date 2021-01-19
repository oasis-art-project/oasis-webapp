import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { QueryClientProvider, QueryClient } from 'react-query';
import styled from 'styled-components';
import Login from './components/login/Login';
import Navbar from './components/navbar/Navbar';

import Home from './pages/Events';
import Event from './pages/Event';
import Artists from './pages/Artists';

const Container = styled.main`
  max-width: 1280px;
`;

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
            <Route path="/login" exact component={Login} />
            <Route path="/">
              <Container className="lg:container md:mx-auto md:px-8 sm:px-4">
                <Navbar />
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/events/:id" exact component={Event} />
                  <Route path="/artists/" exact component={Artists} />
                </Switch>
              </Container>
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
