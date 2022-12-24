import './auth-form-error-message.css';

type AuthFormErrorMessageProp = {
  incorrectField: string;
};

const AuthFormErrorMessage = ({ incorrectField }: AuthFormErrorMessageProp) => (
  <p className="login__form-error-message">
    {incorrectField === 'password'
      ? 'Password invalid. Password should have 1 letter and 1 number'
      : 'incorrectEmail'}
  </p>
);

export default AuthFormErrorMessage;
