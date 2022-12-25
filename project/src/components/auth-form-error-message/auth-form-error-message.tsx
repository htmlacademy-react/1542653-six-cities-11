import './auth-form-error-message.css';

type AuthFormErrorMessageProp = {
  incorrectField: string;
};

const AuthFormErrorMessage = ({ incorrectField }: AuthFormErrorMessageProp) => (
  <p className="login__form-error-message">
    {incorrectField === 'password'
      ? 'The password invalid. The password should have 1 letter and 1 number'
      : 'incorrectEmail'}
  </p>
);

export default AuthFormErrorMessage;
