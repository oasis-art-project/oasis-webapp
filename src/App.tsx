import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
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
import ArtistCover from './pages/ArtistCover'
import Artwork from './pages/Artwork';
import ChatRoom from './pages/ChatRoom';
import Places from './pages/Places';
import Place from './pages/Place';
import Hosts from './pages/Hosts';
import Host from './pages/Host';
import About from './pages/About';
import Signup from './pages/Signup';

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
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
                      <Route path="/artist-cover/:id/:name" exact component={ArtistCover} />
                      <Route path="/artwork/:id" exact component={Artwork} />
                      <Route path="/places/" exact component={Places} />
                      <Route path="/place/:id" exact component={Place} />
                      <Route path="/hosts/" exact component={Hosts} />
                      <Route path="/host/:id" exact component={Host} />
                      <Route path="/about" exact component={About} />
                      <Route path="/signup" exact component={Signup} />                      
                      <PrivateRoute path="/room/:roomId">
                        <ChatRoom />
                      </PrivateRoute>
                    </Switch>
                  </Container>
                </Route>
              </Switch>
              <Footer>
                <Link className="text-gray-50 mb-4" to="/about">
                  What is OASIS?
                </Link>
                <p className="text-gray-50">© {new Date().getFullYear()}</p>
              </Footer>
            </MainContainer>
          </Router>
        </ThemeProvider>
      </QueryClientProvider>
    </ProvideAuth>
  );
}

export default App;
