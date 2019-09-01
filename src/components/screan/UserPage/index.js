import { connect } from 'react-redux';
import UsersPage from './component';
import { getSkillUserAction, editSkillUserAction } from 'store/users/actions';

const mapStateToProps = state => ({
  userSkills: state.usersReducer.userSkills
});

const mapDispatchToProps = {
  getSkillUser: getSkillUserAction,
  editSkillUser: editSkillUserAction
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);