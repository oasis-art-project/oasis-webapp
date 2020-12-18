import { connect } from 'react-redux';
import Artist from '../pages/artist/index';
import { setCurrentArtist, fetchArtist, fetchEventByArtist } from '../actions/artist';
import { fetchArtistArtworks } from '../actions/artwork';

const mapStateToProps = state => ({  
  users: state.user.artists,
  artworks: state.artwork.all,
  current: state.artist.current,
  loading: state.artist.loading,
  events: state.artist.events,  
  user: state.user.active,
});

const mapDispatchToProps = dispatch => ({
  getArtist: id => fetchArtist(dispatch, id),
  getArtworks: id => fetchArtistArtworks(dispatch, id),
  getEventsByArtist: id => fetchEventByArtist(dispatch, id),
  setCurrentArtist: artist => setCurrentArtist(dispatch, artist),
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps)(Artist);
