import { connect } from "react-redux";
import Login from "../pages/Login";
import { createUser } from "../actions/user";

const mapStateToProps = state => ({
  events: state.event
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createUser: data => createUser({ dispatch, data })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
