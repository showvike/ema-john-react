import Logo from "./../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <nav className="header">
        <div>
          <img src={Logo} alt="Ema John Logo" />
        </div>
        <ul>
          <li>
            <a href="#">Order</a>
          </li>
          <li>
            <a href="#">Order Review</a>
          </li>
          <li>
            <a href="#">Manage Inventory</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
