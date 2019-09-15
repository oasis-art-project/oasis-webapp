import { connect } from 'react-redux';
import Event from '../components/event/index';

const mapStateToProps = state => ({
  events: state.event.all,
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Event);
