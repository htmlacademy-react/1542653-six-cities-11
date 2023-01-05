import './auth-form-error-message.css';

type AuthFormErrorMessageProp = {
  incorrectField: string;
};

const AuthFormErrorMessage = ({ incorrectField }: AuthFormErrorMessageProp) => (
  <p className="login__form-error-message">
    {incorrectField === 'password'
      ? 'The password invalid. The password should have 1 letter and 1 number'
      : 'Sorry, we couldn\'t authorized you by this email, possibly your email is not correct, please check it and try again'}
  </p>
);

export default AuthFormErrorMessage;
