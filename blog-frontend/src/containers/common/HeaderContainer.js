import Header from 'components/common/Header';
import { authNull } from 'modules/auth';
import { logout } from 'modules/user';
import { useDispatch, useSelector } from 'react-redux';

const HeaderContainer = () => {
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
    dispatch(authNull());
  };
  return <Header user={user} onLogout={onLogout} />;
};

export default HeaderContainer;
