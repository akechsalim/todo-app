import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function LoginComponent(){

    const[username, setUsername] = useState('input')

    const[password, setPassword] = useState('')

    const[showSuccessMessage, setshowSuccessMessage] = useState(false)

    const[showErrorMessage, setshowErrorMessage] = useState(false)

    const navigate =useNavigate();

    function handleUsernameChange(event){
        setUsername(event.target.value)

    }
    function handlePasswordChange(event){
        setPassword(event.target.value)
        console.log(event.target.value)
    }
    function handleSubmt(){
        if(username === 'dummy'&& password ==='dummy'){
            console.log('success')
            setshowSuccessMessage(true)
            setshowErrorMessage(false)
            navigate(`/welcome/${username}`)
        }else{
            console.log('failed')
            setshowSuccessMessage(false)
            setshowErrorMessage(true)
        }

    }

    return(
        <div className="Login">
            <h1>Time to login</h1>
            {showSuccessMessage && <div className='successMessage'>Authenticated successfully</div>}
            {showErrorMessage && <div className='errorMessage'>Authentication failled.
                                                                Please check your credentials</div>}
            <div className="LoginForm">
                <div>
                <label>User Name:</label>
                <input type="text" name="username" value={username} onChange={handleUsernameChange}/>
                </div>

                <div>
                <label>Password:</label>
                <input type="password" name="password" value={password} onChange={handlePasswordChange}/>
                </div>
                <div>
                    <button type="button" name="login" onClick={handleSubmt}>login</button>
                </div>

            </div>
        </div>
    )
}
export default LoginComponent