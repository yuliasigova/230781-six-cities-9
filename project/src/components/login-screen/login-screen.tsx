import {useState, FormEvent, ChangeEvent } from 'react';
import {loginAction} from '../../store/api-actions';
import {Navigate} from 'react-router-dom';
import {useAppSelector, useAppDispatch } from '../../hooks/index';
import {AuthorizationStatus, AppRoute} from '../../const';
function LoginScreen ():JSX.Element {
  const [userData, setUserData] = useState({
    login: '',
    password: '',
  });

  const {login, password} = userData;
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const city = useAppSelector((state) => state.city);
  if (authorizationStatus === AuthorizationStatus.Auth) {
    return <Navigate to={AppRoute.Main} />;
  }

  const inputChangeHandle = (evt:ChangeEvent<HTMLInputElement>) => {
    setUserData({
      login: evt.target.value,
      password: evt.target.value});
  };

  const onSubmit = (evt:FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(loginAction(userData));
  };

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
            <form onSubmit = {onSubmit} className="login__form form" action="#" method="post">
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" type="email" name="email" placeholder="Email" value = {login} onChange = {inputChangeHandle}required />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input" type="password" name="password" placeholder="Password" value = {password} onChange = {inputChangeHandle}required />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
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
