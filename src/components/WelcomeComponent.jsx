import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { retrieveAllTodosForUserAPI } from './API/TodoAPIService'
function WelcomeComponent() {

    const { username } = useParams()

    const [message, setMessage] = useState(null)

    function callHelloWorldRestApi() {

        console.log('called')

        retrieveAllTodosForUserAPI('akechsalim')
            .then((response) => successfulResponse(response))
            .catch((error) => errorResponse(error))
            .finally(() => console.log('cleanup'))


    }
    function successfulResponse(response) {
        console.log(response)
        // setMessage(response.data)
        setMessage(response.data.message)
    }
    function errorResponse(error) {
        console.log(error)
    }

    return (
        <div className="Welcome">
            <h1>{username}</h1>
            <div>
                Manage your todos. <Link to='/todos'>Go here</Link>
            </div>
            <div>
                <button className="btn btn-success m-5" onClick={callHelloWorldRestApi}>
                    call Hello World</button>
            </div>
            <div className='text-info'>{message}</div>
        </div>
    )
}
export default WelcomeComponent