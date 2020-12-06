import { connect } from 'react-redux';
import Home from '../pages/home/index';
import { fetchEvents } from '../actions/event';

const mapStateToProps = state => ({
  events: state.event,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getAllEvents: () => fetchEvents(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
