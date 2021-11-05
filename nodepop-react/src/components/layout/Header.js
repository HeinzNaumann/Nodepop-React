import classNames from "classnames";
import Button from "../common/button";

import { ReactComponent as Icon } from "../../assets/nodepop.svg";
function Header({ className, isLogged }) {
  return (
    <header className={classNames("header", className)}>
      <div className='header-logo'>
        <Icon width='32' height='32' />
      </div>
      <nav className='header-nav'>
        {isLogged ? (
          <Button className='header-button'>Log Out</Button>
        ) : (
          <Button variant='primary' className='header-button'>
            Log in
          </Button>
        )}
      </nav>
    </header>
  );
}

export default Header;
