import PageHeader from '../../components/page-header/page-header';
import PageNavigation from '../../components/page-navigation/page-navigation';
import './unexist-screen.css';

const UnexistScreen = (): JSX.Element => (
  <div className="page page--gray unexist-page">
    <PageHeader>
      <PageNavigation />
    </PageHeader>

    <main className="page__main">
      <h2 className="page__unexist-page-title">404 Not Found</h2>
      <div className="container unexist-page-message-container">

        <p className="unexist-page-message">
          Sorry, we couldn&apos;t find this page {':('}
        </p>
        <a className="back-to-main__link" href="main.html">
          Back to main
        </a>

      </div>
    </main>

    <footer className="footer container unexist-page__footer">
      <a className="footer__logo-link" href="main.html">
        <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
      </a>
    </footer>
  </div>
);

export default UnexistScreen;
