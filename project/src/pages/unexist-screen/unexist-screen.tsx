import './unexist-screen.css';

const UnexistScreen = (): JSX.Element => (
  <div className="page page--gray unexist-page">
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="header__logo-link" href="main.html">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </a>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <a className="header__nav-link header__nav-link--profile" href="/#">
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  <span className="header__favorite-count">3</span>
                </a>
              </li>
              <li className="header__nav-item">
                <a className="header__nav-link" href="/#">
                  <span className="header__signout">Sign out</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>

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
