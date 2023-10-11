import { useState } from 'react'
import './TodoApp.css'
export default function TodoApp(){
    return(
        <div className="TodoApp">
            {/* Todo Management App */}
            <LoginComponent/>
            {/* <WelcomeComponent/> */}
        </div>
    )
}

function LoginComponent(){

    const[username, setUsername] = useState('input')

    const[password, setPassword] = useState('')

    const[showSuccessMessage, setshowSuccessMessage] = useState(false)

    const[showErrorMessage, setshowErrorMessage] = useState(false)

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
        }else{
            console.log('failed')
            setshowSuccessMessage(false)
            setshowErrorMessage(true)
        }

    }
    function SuccessMessageComponent(){
        if(showSuccessMessage){
            return <div className='successMessage'>Authenticated successfully</div>
        }
        return null
        }
        function ErrorMessageComponent(){
            if(showErrorMessage){
                return <div className='errorMessage'>Authentication failled please check your credentials</div>
            }
            return null
        
            }

    return(
        <div className="Login">
            <SuccessMessageComponent/>
            <ErrorMessageComponent/>
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

// eslint-disable-next-line
function WelcomeComponent(){
    return(
        <div className="Welcome">
            Welcome Component
        </div>
    )
}