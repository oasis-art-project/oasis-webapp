import { connect } from 'react-redux';
import Place from '../pages/place/index';
import { setCurrentPlace, fetchPlace } from '../actions/place';
import { fetchPlaceEvents } from '../actions/event';

const mapStateToProps = state => ({
  places: state.place.all,
  events: state.event.all,
  current: state.place.current,
  loading: state.place.loading,    
});

const mapDispatchToProps = dispatch => ({
  getPlace: id => fetchPlace(dispatch, id),
  getEvents: id => fetchPlaceEvents(dispatch, id),
  setCurrentPlace: place => setCurrentPlace(dispatch, place),  
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps)(Place);
