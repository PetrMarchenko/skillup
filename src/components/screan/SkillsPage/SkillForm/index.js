import { connect } from 'react-redux';
import SkillForm from './component';
import { addSkillAction } from 'store/skills/actions';


const mapStateToProps = state => ({
  // skills: state.skillsReducer.skills,
});

const mapDispatchToProps = {
  addSkill: addSkillAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(SkillForm);