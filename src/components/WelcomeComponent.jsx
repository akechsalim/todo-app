import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
function WelcomeComponent() {

    const { username } = useParams()

    const [message] = useState(null)
    
    return (
        <div className="Welcome">
            <h1>Welcome {username}</h1>
            <div>
                Manage your todos. <Link to='/todos'>Go here</Link>
            </div>
            <div className='text-info'>{message}</div>
        </div>
    )
}
export default WelcomeComponent