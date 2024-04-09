import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="header-container">
    <div className="logo-and-title-container">
      <Link to="/">
        <img
          alt="wave"
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        />
      </Link>
    </div>

    <ul className="nav-items-list">
      <li className="link-item">
        <Link className="route-link" to="/">
          ABOUT ME
        </Link>
      </li>
      <li className="link-item">
        <Link className="route-link" to="/education">
          EDUCATION
        </Link>
      </li>
      <li className="link-item">
        <Link className="route-link" to="/projects">
          PROJECTS
        </Link>
      </li>
      <li className="link-item">
        <Link className="route-link" to="/contact">
          CONTACT
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
