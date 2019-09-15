import { connect } from "react-redux";
import IndexView from "../pages/IndexView";
import { fetchEvents } from "../actions/event";

const mapStateToProps = state => ({
  events: state.event
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getAllEvents: () => fetchEvents(dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndexView);
