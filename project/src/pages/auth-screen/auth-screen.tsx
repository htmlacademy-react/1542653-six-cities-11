import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../../components/page-header/page-header';
import AuthForm from '../../components/auth-form/auth-form';
import { useAppSelector } from '../../hooks/store';
import { UserAuthStatus, AppRoute } from '../../const';
import { getUserAuthStatus } from '../../store/user-process/selectors';

const AuthScreen = (): JSX.Element => {
  const userStatus = useAppSelector(getUserAuthStatus);
  const navigate = useNavigate();

  useEffect(() => {
    if (userStatus === UserAuthStatus.Auth) {
      navigate(AppRoute.Main);
    }
  }, [userStatus, navigate]);

  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>6 cities. Log in</title>
      </Helmet>

      <PageHeader isNavigationShown={false} />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <AuthForm />
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="/#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default AuthScreen;
