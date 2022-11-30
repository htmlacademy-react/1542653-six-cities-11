import { ChangeEvent, FormEvent, useState } from 'react';
import { useAppDispatch } from '../../hooks/store';
import { login } from '../../store/api-actions';

const AuthForm = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const [authForm, setAuthForm] = useState({
    email: '',
    password: ''
  });

  const onFieldChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => setAuthForm({
    ...authForm,
    [evt.target.name]: evt.target.value
  });

  const onSubmitHandler = (evt: FormEvent) => {
    evt.preventDefault();
    dispatch(login(authForm));
  };

  const isSubmitButtonDisabled = ():boolean => Object.values(authForm).some((value) => !value);

  return (
    <form className="login__form form" action="#" method="post" onSubmit={onSubmitHandler}>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">E-mail</label>
        <input
          onChange={onFieldChangeHandler}
          className="login__input form__input"
          type="email"
          name="email"
          placeholder="Email"
          required
        />
      </div>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">Password</label>
        <input
          onChange={onFieldChangeHandler}
          className="login__input form__input"
          type="password"
          name="password"
          placeholder="Password"
          required
        />
      </div>
      <button
        className="login__submit form__submit button"
        type="submit"
        disabled={isSubmitButtonDisabled()}
      >Sign in
      </button>
    </form>
  );
};

export default AuthForm;
