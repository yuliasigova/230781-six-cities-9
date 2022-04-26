import {useState, FormEvent, ChangeEvent } from 'react';
import {loginAction} from '../../store/api-actions';
import { useAppDispatch } from '../../hooks/index';

function AuthForm ():JSX.Element {
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const dispatch = useAppDispatch();

  const handleInputChangeLogin = (evt:ChangeEvent<HTMLInputElement>) => {
    setLogin(evt.target.value);
  };

  const handleInputChangePassword = (evt:ChangeEvent<HTMLInputElement>) => {
    setPassword(evt.target.value);
  };

  const handleFormSubmit = (evt:FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(loginAction({login, password}));
  };

  return (
    <form onSubmit = {handleFormSubmit} className="login__form form" action="#" method="post">
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">E-mail</label>
        <input className="login__input form__input" type="email" name="email" placeholder="Email" value = {login} onChange = {handleInputChangeLogin}required />
      </div>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">Password</label>
        <input className="login__input form__input" type="password" name="password" placeholder="Password" value = {password} onChange = {handleInputChangePassword}required pattern="(?=.*[0-9])(?=.*[a-z]).{2,}" />
      </div>
      <button className="login__submit form__submit button" type="submit">Sign in</button>
    </form>);

}

export default AuthForm;
