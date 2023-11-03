import { Link } from 'react-router-dom'
import { useAuth } from './security/AuthContext'
function HeaderComponent() {


  const authContext = useAuth()
  const isAuthenticated = authContext.isAuthenticated

  function logout() {
    authContext.logout()
  }

  return (
    <header>
      <div>
          <nav>
            <h1>TODO App</h1>
            <div>
              <ul>
                <li>
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
      </div>
    </header>
  );
}
export default HeaderComponent