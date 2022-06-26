import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store/store';
import { changeIsAuth } from 'store/slices/auth';

const useAuth = () => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state: RootState) => state.auth);

  const logout = () => {
    window.localStorage.removeItem('TOKEN');
    dispatch(changeIsAuth(false));
  };

  const login = (valueToken: string) => {
    window.localStorage.setItem('TOKEN', valueToken);
    dispatch(changeIsAuth(true));
  };

  return {
    isAuth,
    logout,
    login,
  };
};

export default useAuth;
