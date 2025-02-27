import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import './navigation.styles.scss';
import logoUrl from '../../assets/ddlogo.svg';

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src={logoUrl} className="logo-container" alt="Logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/">
            Shop
          </Link>
          <Link className="nav-link" to="/sign-in">
            Sign In
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
