import {Navigate} from 'react-router-dom';
import {useAppSelector } from '../../hooks/index';
import {AuthorizationStatus, AppRoute} from '../../const';
import AuthForm from '../auth-form/auth-form';

function LoginScreen ():JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.USER.authorizationStatus);
  const city = useAppSelector((state) => state.HOTELS.city);
  if (authorizationStatus === AuthorizationStatus.Auth) {
    return <Navigate to={AppRoute.Main} />;
  }

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="/">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
              </a>
            </div>
          </div>
        </div>
      </header>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <AuthForm />
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="/">
                <span>{city}</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>

  );
}

export default LoginScreen;
