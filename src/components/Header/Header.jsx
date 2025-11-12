import { Link } from 'react-router';

import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Airbnc</h1>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
