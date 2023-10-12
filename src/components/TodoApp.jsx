import { useState } from 'react'
import { BrowserRouter,Route,Routes, useNavigate,useParams} from 'react-router-dom'
import './TodoApp.css'
export default function TodoApp(){
    return(
        <div className="TodoApp">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LoginComponent/>}></Route>
                    <Route path='/login' element={<LoginComponent/>}></Route>
                    <Route path='/welcome/:username' element={<WelcomeComponent/>}></Route>
                    <Route path='*' element={<ErrorComponent/>}></Route>
                </Routes>
            </BrowserRouter>
            
            
        </div>
    )
}

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

// eslint-disable-next-line
function WelcomeComponent(){

    const {username} =useParams()
    console.log(username)

    return(
        <div className="Welcome">
            <h1>{username}</h1>
        <div>
            Welcome Component
        </div>
        </div>
    )
}
function ErrorComponent(){
    return(
        <div className="ErrorComponent">
            <h1>We are working really hard!</h1>
            <div>
                Appologies for the 404.Reach out to our team 0769564870.
            </div>
        </div>
    )
}