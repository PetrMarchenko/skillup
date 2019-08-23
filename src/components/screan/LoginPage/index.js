import { connect } from 'react-redux';
import LogInPage from './component';
import { logInAction } from 'store/auth/actions';

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  logInAction: logInAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(LogInPage);