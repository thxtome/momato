import AppMenu from '../../components/header/AppMenu';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  const { isLogin } = state.loginReducer;
  return { isLogin };
};

export default connect(mapStateToProps)(AppMenu);
