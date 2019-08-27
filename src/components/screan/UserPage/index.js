import { connect } from 'react-redux';
import UsersPage from './component';
import { getSkillUserAction } from 'store/users/actions';
import { fetchSkillAction } from 'store/skills/actions'

const mapStateToProps = state => ({
  user: state.usersReducer.user,
  skills: state.skillsReducer.skills,
});

const mapDispatchToProps = {
  getSkillUser: getSkillUserAction,
  fetchSkill: fetchSkillAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);