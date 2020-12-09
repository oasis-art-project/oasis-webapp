import { connect } from 'react-redux';
import Hosts from '../pages/hosts/index';
import { fetchHosts } from '../actions/host';

const mapStateToProps = state => ({
  users: state.user,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getAllHosts: () => fetchHosts(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Hosts);
