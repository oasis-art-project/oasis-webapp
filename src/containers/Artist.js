import { connect } from 'react-redux';
import Artist from '../pages/artist/index';
import { setCurrentArtist, fetchArtist } from '../actions/artist';
import { fetchArtistArtworks } from '../actions/artwork';

const mapStateToProps = state => ({
  users: state.user.artists,
  artworks: state.artwork.all,
  current: state.artist.current,
  loading: state.artist.loading,
});

const mapDispatchToProps = dispatch => ({
  getArtist: id => fetchArtist(dispatch, id),
  getArtworks: id => fetchArtistArtworks(dispatch, id),
  setCurrentArtist: artist => setCurrentArtist(dispatch, artist),
});

export default connect(mapStateToProps, mapDispatchToProps)(Artist);
