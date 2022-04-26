import {useAppSelector, useAppDispatch } from '../../hooks/index';
import {AuthorizationStatus, AppRoute} from '../../const';
import {Link} from 'react-router-dom';
import {logoutAction} from '../../store/api-actions';

function Header ():JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.USER.authorizationStatus);
  const user = useAppSelector((state) => state.USER.user);
  const dispatch = useAppDispatch();
  const handleLinkClick = () => dispatch(logoutAction());
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={AppRoute.Main} className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
            </Link>
          </div>
          {authorizationStatus === AuthorizationStatus.Auth ?
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">{user?.email}</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link onClick = {handleLinkClick} className="header__nav-link" to="/">
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul>
            </nav> :
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__login">Sign in</span>
                  </Link>
                </li>
              </ul>
            </nav>}
        </div>
      </div>
    </header>);
}

export default Header;
