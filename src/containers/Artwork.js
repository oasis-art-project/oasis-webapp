import { connect } from 'react-redux';
import Artwork from '../pages/artwork/index';
import { fetchArtwork } from '../actions/artwork';

const mapStateToProps = state => ({
  artwork: state.artwork.artwork,
});

const mapDispatchToProps = dispatch => ({
  getArtwork: id => fetchArtwork(dispatch, id),
});

export default connect(mapStateToProps, mapDispatchToProps)(Artwork);
