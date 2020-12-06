import { connect } from 'react-redux';
import Artist from '../pages/artist/index';
import { setCurrentArtist, fetchArtist } from '../actions/artist';

const mapStateToProps = state => ({
  users: state.user.artists,
  current: state.artist.current,
  loading: state.artist.loading,
});

const mapDispatchToProps = dispatch => ({
  getArtist: id => fetchArtist(dispatch, id),
  setCurrentArtist: artist => setCurrentArtist(dispatch, artist),
});

export default connect(mapStateToProps, mapDispatchToProps)(Artist);
