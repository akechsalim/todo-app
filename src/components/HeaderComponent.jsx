import { Link } from 'react-router-dom'
import { useAuth } from './security/AuthContext'
function HeaderComponent() {


  const authContext = useAuth()
  const isAuthenticated = authContext.isAuthenticated

  function logout() {
    authContext.logout()
  }

  return (
    <header className="border-bottom">
      <div className="container">
          <nav className="row">
            <nav className="navbar navbar-expand-lg">
            <h1>TODO APP</h1>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav">
                <li className="nav-item">
                  {isAuthenticated && <Link className="nav-link" to="/welcome/akechsalim">Home</Link>}
                </li>
                <li>
                  {isAuthenticated && <Link className="nav-link" to="/todos">Todos</Link>}
                </li>
              </ul>
            </div>
            <ul>
              {/* <li>
                {!isAuthenticated && <Link className="nav-link" to="/login">Login</Link>}
              </li> */}
              <li>
                {isAuthenticated && <Link className="nav-link" to="/logout" onClick={logout}>Logout</Link>}
              </li>
            </ul>
            </nav>
          </nav>
      </div>
    </header>
  );
}
export default HeaderComponent