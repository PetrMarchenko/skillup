import { connect } from 'react-redux';
import RoutAuth from './component';

const mapStateToProps = state => ({
  userRole: state.authReducer.role,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(RoutAuth);