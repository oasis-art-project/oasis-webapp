import { connect } from 'react-redux';
import Artists from '../pages/artists/index';
import { fetchArtists } from '../actions/artist';

const mapStateToProps = state => ({
  users: state.user,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getAllArtists: () => fetchArtists(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Artists);
