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
import Places from './pages/Places';

const Container = styled.section`
  max-width: 1280px;
`;

const MainContainer = styled.main`
  padding-bottom: 120px;
`;

const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  background: #425663;
  text-align: center;
  height: 120px;
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
            <MainContainer className="min-h-screen relative pb-">
              <Switch>
                <Route path="/login" exact component={Login} />
                <Route path="/">
                  <Container className="md:mx-auto px-4 pb-60">
                    <Navbar />
                    <Switch>
                      <Route path="/" exact component={Home} />
                      <Route path="/event/:id" exact component={Event} />
                      <Route path="/artists/" exact component={Artists} />
                      <Route path="/artist/:id" exact component={Artist} />
                      <Route path="/artwork/:id" exact component={Artwork} />
                      <Route path="/places/" exact component={Places} />
                      <PrivateRoute path="/room/:roomId">
                        <ChatRoom />
                      </PrivateRoute>
                    </Switch>
                  </Container>
                </Route>
              </Switch>
              <Footer>
                <p className="mt-10 text-gray-50">© {new Date().getFullYear()}, oooasis.art</p>
              </Footer>
            </MainContainer>
          </Router>
        </ThemeProvider>
      </QueryClientProvider>
    </ProvideAuth>
  );
}

export default App;
