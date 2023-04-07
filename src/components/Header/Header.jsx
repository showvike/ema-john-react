import { Link } from "react-router-dom";
import Logo from "./../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <header>
        <nav className="header">
          <div>
            <Link to="/">
              <img src={Logo} alt="Ema John Logo" />
            </Link>
          </div>
          <ul>
            <li>
              <Link to="/order">Order</Link>
            </li>
            <li>
              <Link to="/review">Order Review</Link>
            </li>
            <li>
              <Link to="/inventory">Manage Inventory</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
