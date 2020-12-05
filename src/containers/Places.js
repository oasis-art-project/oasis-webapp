import { connect } from "react-redux";
import Places from "../pages/places/index";
import { fetchPlaces } from "../actions/place";

const mapStateToProps = state => ({  
  places: state.place
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getAllPlaces: () => fetchPlaces(dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Places);
