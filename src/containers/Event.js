import { connect } from 'react-redux';
import Event from '../components/event/index';
import { fetchEvent } from '../actions/event';

const mapStateToProps = state => ({
  events: state.event.all,
});

const mapDispatchToProps = dispatch => ({
  getEvent: id => fetchEvent(dispatch, id),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Event);
