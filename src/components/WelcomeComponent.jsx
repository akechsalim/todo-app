import { Link, useParams } from 'react-router-dom'
function WelcomeComponent(){

    const {username} =useParams()
    console.log(username)

    return(
        <div className="Welcome">
            <h1>{username}</h1>
        <div>
            Manage your todos. <Link to='/todos'>Go here</Link>
        </div>
        </div>
    )
}
export default WelcomeComponent