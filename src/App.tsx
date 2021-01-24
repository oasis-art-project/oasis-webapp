import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { QueryClientProvider, QueryClient } from 'react-query';
import styled from 'styled-components';
import Login from './components/login/Login';
import Navbar from './components/Navbar';

import Home from './pages/Events';
import Event from './pages/Event';
import Artists from './pages/Artists';
import Artist from './pages/Artist';
import Artwork from './pages/Artwrok';

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
              <Container className="lg:container md:mx-auto px-4">
                <Navbar />
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/event/:id" exact component={Event} />
                  <Route path="/artists/" exact component={Artists} />
                  <Route path="/artist/:id" exact component={Artist} />
                  <Route path="/artwork/:id" exact component={Artwork} />
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
