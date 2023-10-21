import { Link } from 'react-router-dom'
import { useAuth } from './security/AuthContext'
function HeaderComponent() {


  const authContext = useAuth()
  const isAuthenticated = authContext.isAuthenticated

  function logout() {
    authContext.logout()
  }

  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand site-link" href="https://www.akechsalim.com">akechsalim</a>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav">
                <li className="nav-item">
                  {isAuthenticated && <Link className="nav-link" to="/welcome/akechsalim">Home</Link>}
                </li>
                <li className="nav-item">
                  {isAuthenticated && <Link className="nav-link" to="/todos">Todos</Link>}
                </li>
              </ul>
            </div>
            <ul className="navbar-nav">
              <li className="nav-item">
                {!isAuthenticated && <Link className="nav-link" to="/login">Login</Link>}
              </li>
              <li className="nav-item">
                {isAuthenticated && <Link className="nav-link" to="/logout" onClick={logout}>Logout</Link>}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
export default HeaderComponent