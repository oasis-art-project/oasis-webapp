import { connect } from 'react-redux';
import Artwork from '../pages/artwork/index';
import { fetchArtwork, fetchEventsWithArtwork } from '../actions/artwork';

const mapStateToProps = state => ({
  current: state.artwork.current,
  loading: state.artwork.loading,
  events: state.artwork.events,
});

const mapDispatchToProps = dispatch => ({
  getArtwork: id => fetchArtwork(dispatch, id),
  getEventsWithArtwork: id => fetchEventsWithArtwork(dispatch, id),
});

export default connect(mapStateToProps, mapDispatchToProps)(Artwork);
