import { connect } from 'react-redux';
import IndexView from '../pages/IndexView';
import { fetchEvents } from '../actions/event';
import { setUserGeoLocation } from '../actions/user';

const mapStateToProps = state => ({
  events: state.event,
  user: state.user,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getAllEvents: () => fetchEvents(dispatch),
  setUserLocation: location => {
    setUserGeoLocation(dispatch, location);
  },
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
 )(IndexView);
