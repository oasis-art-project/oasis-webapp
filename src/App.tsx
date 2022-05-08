/*
Part of the OASIS ART PROJECT - https://github.com/orgs/oasis-art-project
Copyright (c) 2019-22 TEAM OASIS
License Artistic-2.0
*/

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { QueryClientProvider, QueryClient } from 'react-query';
import styled from 'styled-components';
import ReactGA from 'react-ga';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import { ProvideAuth } from './hooks/useAuth';
import { FaInstagram, FaDiscord } from 'react-icons/fa';

import Login from './pages/Login';
import Home from './pages/Events';
import Event from './pages/Event';
import Artists from './pages/Artists';
import Artist from './pages/Artist';
import ArtistCover from './pages/ArtistCover';
import ArtworkCover from './pages/ArtworkCover';
import EventRedirect from './pages/EventRedirect';
import ArtistRedirect from './pages/ArtistRedirect';
import Artwork from './pages/Artwork';
import ChatRoom from './pages/ChatRoom';
import Places from './pages/Places';
import Place from './pages/Place';
import Hosts from './pages/Hosts';
import Host from './pages/Host';
import About from './pages/About';
import Signup from './pages/Signup';
import Register from './pages/Register';
import { isProd } from './helpers';

const Container = styled.section`
  max-width: 1280px;
`;

const MainContainer = styled.main`
  padding-bottom: 160px;
`;

const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  background: #425663;
  text-align: center;
  height: 120px;
  display: flex;
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

if (isProd) {
  ReactGA.initialize('UA-15399295-15');
}

function App() {
  return (
    <ProvideAuth>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Router>
            <MainContainer className="min-h-screen relative pb-">
              <Switch>

                <Route path="/login" exact component={Login} />
                <Route path="/register" exact component={Register} />
                <Route
                  path="/artist-cover/:id/:name/:tcolor?/:bcolor?"
                  exact
                  component={ArtistCover}
                />
                <Route
                  path="/artwork-cover/:id/:artist/:title/:info1?/:info2?/:tcolor?/:bcolor?"
                  exact
                  component={ArtworkCover}
                />

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
                      <Route path="/place/:id" exact component={Place} />
                      <Route path="/hosts/" exact component={Hosts} />
                      <Route path="/host/:id" exact component={Host} />
                      <Route path="/about" exact component={About} />
                      <Route path="/signup" exact component={Signup} />
                      <PrivateRoute path="/room/:roomId">
                        <ChatRoom />
                      </PrivateRoute>
                      <Route path="/bio/:name" exact component={ArtistRedirect} />
                      <Route path="/:alias" exact component={EventRedirect} />
                    </Switch>
                  </Container>

                    <Footer>
                      <Link className="text-gray-50 mb-4" to="/about">
                        What is OASIS?
                      </Link>

                      <div className="flex">
                      <a
                        className="items-center justify-items-center mb-4 pr-2"
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.instagram.com/oasis_art_project/"
                      >
                      <FaInstagram className="text-lg text-gray-50" />                  
                      </a>

                      <a
                        className="items-center justify-items-center mb-4 pl-2"
                        target="_blank"
                        rel="noreferrer"
                        href="https://discord.com/channels/840191085854720090/840191085854720093"
                      >
                      <FaDiscord className="text-lg text-gray-50" />
                      </a>
                      </div>
                      
                      <p className="text-gray-50">© {new Date().getFullYear()}</p>
                    </Footer>

                </Route>
              </Switch>

            </MainContainer>
          </Router>
        </ThemeProvider>
      </QueryClientProvider>
    </ProvideAuth>
  );
}

export default App;
