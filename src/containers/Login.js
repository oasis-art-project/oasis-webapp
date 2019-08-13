import { connect } from "react-redux";
import Login from "../pages/Login";
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
)(Login);
