import { Link, NavLink } from "react-router-dom"

const Header = () => {
  return (
    <header className="mainHeader">
      <Link to="/">#FlagsHome</Link>
      <nav>
        <NavLink
          className={({ isActive }) => (isActive?"active-links" : null)}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive?"active-links" : null)}
          to="flags"
        >
          Flags
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive?"active-links" : null)}
          to="about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive?"active-links" : null)}
          to="contact"
        >
          Contact
        </NavLink>
      </nav>
      <nav>
      <Link to="login">Login</Link>
      </nav>
    </header>
  );
}

export default Header