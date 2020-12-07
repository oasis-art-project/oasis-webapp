import { connect } from 'react-redux';
import Place from '../pages/place/index';
import { setCurrentPlace, fetchPlace } from '../actions/place';
// import { fetchPlaceEvents } from '../actions/event';

const mapStateToProps = state => ({
  places: state.place.all,
  current: state.place.current,
  loading: state.place.loading,
//   events: state.events.all,  
});

const mapDispatchToProps = dispatch => ({
  getPlace: id => fetchPlace(dispatch, id),  
  setCurrentPlace: place => setCurrentPlace(dispatch, place),
//   getEvents: id => fetchPlaceEvents(dispatch, id),
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps)(Place);
