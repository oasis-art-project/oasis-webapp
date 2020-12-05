import { connect } from "react-redux";
import Artist from "../pages/artist/index";
import { fetchUser } from "../actions/user";

const mapStateToProps = state => ({
  users: state.user.all,
});

const mapDispatchToProps = dispatch => ({
  getArtist: id => fetchUser(dispatch, id),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Artist);
