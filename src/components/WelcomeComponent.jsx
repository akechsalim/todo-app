import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { retrieveAllTodosForUserAPI } from './API/TodoAPIService'
function WelcomeComponent() {

    const { username } = useParams()

    const [message, setMessage] = useState(null)
    return (
        <div className="Welcome">
            <h1>{username}</h1>
            <div>
                Manage your todos. <Link to='/todos'>Go here</Link>
            </div>
            <div className='text-info'>{message}</div>
        </div>
    )
}
export default WelcomeComponent