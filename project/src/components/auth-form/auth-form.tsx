import {useState, FormEvent, ChangeEvent } from 'react';
import {loginAction} from '../../store/api-actions';
import { useAppDispatch } from '../../hooks/index';

function AuthForm ():JSX.Element {
  const [userData, setUserData] = useState({
    login: '',
    password: '',
  });

  const {login, password} = userData;
  const dispatch = useAppDispatch();

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
    </form>);

}

export default AuthForm;
