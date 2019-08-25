import { connect } from 'react-redux';
import UsersPage from './component';
import { fetchUserAction, editUserAction } from 'store/users/actions';


const mapStateToProps = state => ({
  users: state.usersReducer.users,
});

const mapDispatchToProps = {
  fetchUser: fetchUserAction,
  editUser: editUserAction
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);