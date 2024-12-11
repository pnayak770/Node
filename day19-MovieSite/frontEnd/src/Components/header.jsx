import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>
        <Link to="/">Ecommerce</Link>
      </h1>
      <ul>
        <li>
          <Link to="">Home</Link>
          <Link to="">Contact</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Sign Up</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;