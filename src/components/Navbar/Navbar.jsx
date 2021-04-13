import '../../sass/Navbar.scss';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const isLogged = sessionStorage.getItem('token');
  const history = useHistory();
  const handleClick = () => {
    setClicked(!clicked);
  };
  const handleLogout = () => {
    sessionStorage.removeItem('token');
    history.push('/');
  };

  return (
    <nav>
      <h1 className="navbar-logo">Fi.Per</h1>
      <div className="menu-icon" onClick={handleClick}>
        <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
      {isLogged ? (
        <ul className={clicked ? 'nav-menu activated' : 'nav-menu'}>
          <li className="menu-links">
            <NavLink
              className="nav-links"
              activeClassname="active"
              to="/dashboard"
            >
              Inicio
            </NavLink>
          </li>
          <li className="menu-links">
            <NavLink
              className="nav-links"
              activeClassname="active"
              to="/received"
            >
              Recibido
            </NavLink>
          </li>
          <li className="menu-links">
            <NavLink to="/sent" activeClassName="active" className="nav-links">
              Enviado
            </NavLink>
          </li>
          <li className="menu-links">
            <a className="nav-links logout" onClick={handleLogout}>
              Cerrar sesión
            </a>
          </li>
        </ul>
      ) : null}
    </nav>
  );
}

export default Navbar;
