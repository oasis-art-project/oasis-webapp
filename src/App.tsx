import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { QueryClientProvider, QueryClient } from 'react-query';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import { ProvideAuth } from './hooks/useAuth';

import Login from './pages/Login';
import Home from './pages/Events';
import Event from './pages/Event';
import Artists from './pages/Artists';
import Artist from './pages/Artist';
import Artwork from './pages/Artwrok';
import ChatRoom from './pages/ChatRoom';

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
    <ProvideAuth>
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
                    <PrivateRoute path="/room/:roomId">
                      <ChatRoom />
                    </PrivateRoute>
                  </Switch>
                </Container>
              </Route>
            </Switch>
          </Router>
        </ThemeProvider>
      </QueryClientProvider>
    </ProvideAuth>
  );
}

export default App;
