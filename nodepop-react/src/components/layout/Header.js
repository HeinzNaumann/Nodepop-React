import { useContext } from "react";
import classNames from "classnames";
import Button from "../common/button";
import AuthContext from "../auth/context";
import { Link, NavLink } from "react-router-dom";

import { ReactComponent as Icon } from "../../assets/nodepop.svg";
function Header({ className }) {
  const { isLogged, handleLogout } = useContext(AuthContext);
  return (
    <header className={classNames("header", className)}>
      <Link to='/'>
        <div className='header-logo'>
          <Icon width='32' height='32' />
        </div>
      </Link>
      <nav className='header-nav'>
        <NavLink to='/adverts/new'>Nuevo Anuncio </NavLink>
        {isLogged ? (
          <Button className='header-button' onClick={handleLogout}>
            Log Out
          </Button>
        ) : (
          <Button
            variant='primary'
            className='header-button'
            as={Link}
            to='/login'
          >
            Log in
          </Button>
        )}
      </nav>
    </header>
  );
}

export default Header;
