import { connect } from 'react-redux';
import Login from './component';

const mapStateToProps = state => ({
  token: state.authReducer.token,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Login);