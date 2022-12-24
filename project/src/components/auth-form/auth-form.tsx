import { ChangeEvent, FormEvent, useState } from 'react';
import AuthFormErrorMessage from '../auth-form-error-message/auth-form-error-message';
import { useAppDispatch } from '../../hooks/store';
import { login } from '../../store/api-actions';
import { checkPasswordValidation } from '../../util';

const AuthForm = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const [authForm, setAuthForm] = useState({
    email: '',
    password: ''
  });

  const [formValidStatus, setValidFormStatus] = useState(false);
  const [incorrectField, setIncorrectField] = useState('');

  const handleFieldFormChange = (evt: ChangeEvent<HTMLInputElement>) => {

    if (evt.target.name === 'password') {
      setValidFormStatus(checkPasswordValidation(evt.target.value));
      !checkPasswordValidation(evt.target.value) && evt.target.value ? setIncorrectField(evt.target.name) : setIncorrectField('');
    }

    setAuthForm({
      ...authForm,
      [evt.target.name]: evt.target.value
    });
  };

  const handleFormSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    dispatch(login(authForm));
  };

  const isSubmitButtonDisabled = (): boolean => Object.values(authForm).some((value) => !value) || !formValidStatus;

  return (
    <form className="login__form form" action="#" method="post" onSubmit={handleFormSubmit}>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">E-mail</label>
        <input
          onChange={handleFieldFormChange}
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
          onChange={handleFieldFormChange}
          className="login__input form__input"
          type="password"
          name="password"
          placeholder="Password"
          required
        />
      </div>
      {incorrectField ? <AuthFormErrorMessage incorrectField={incorrectField} /> : undefined}
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
