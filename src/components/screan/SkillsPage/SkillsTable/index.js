import { connect } from 'react-redux';
import SkillsPage from './component';
import { fetchSkillAction, editSkillAction, deleteSkillAction } from 'store/skills/actions';


const mapStateToProps = state => ({
  skills: state.skillsReducer.skills,
});

const mapDispatchToProps = {
  fetchSkill: fetchSkillAction,
  editSkill: editSkillAction,
  deleteSkill: deleteSkillAction
};

export default connect(mapStateToProps, mapDispatchToProps)(SkillsPage);