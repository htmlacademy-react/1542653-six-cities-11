import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import PageHeader from '../../components/page-header/page-header';
import PageNavigation from '../../components/page-navigation/page-navigation';
import Footer from '../../components/footer/footer';
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
        <Link className="back-to-main__link" to={AppRoute.Main}>
          Back to main
        </Link>

      </div>
    </main>

    <Footer />

  </div>
);

export default UnexistScreen;
