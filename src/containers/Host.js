import { connect } from 'react-redux';
import Host from '../pages/host/index';
import { setCurrentHost, fetchHost, fetchPlacesFromHost } from '../actions/host';

const mapStateToProps = state => ({
  users: state.user.hosts,
  current: state.host.current,
  loading: state.host.loading,
  places: state.host.places,
  user: state.user.active,  
});

const mapDispatchToProps = dispatch => ({
  getHost: id => fetchHost(dispatch, id),
  getPlacesFromHost: id => fetchPlacesFromHost(dispatch, id),
  setCurrentHost: artist => setCurrentHost(dispatch, artist),
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps)(Host);
