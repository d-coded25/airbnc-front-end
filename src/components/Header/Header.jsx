import { Link } from 'react-router';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Airbnc</h1>
      <ul>
        <li>
          <Link className="properties-link" to="/">
            Home
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
