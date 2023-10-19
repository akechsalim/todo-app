import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ErrorComponent from './ErrorComponent'
import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderComponent'
import ListTodosComponent from './ListTodosComponent'
import LoginComponent from './LoginComponent'
import LogoutComponent from './LogoutComponent'
import './TodoApp.css'
import WelcomeComponent from './WelcomeComponent'
import AuthProvider, { useAuth } from './security/AuthContext'

function AuthenticatedRoute({children}){
    const authContext = useAuth()

    // if(authContext.isAuthenticated)
    //     return children
    
}

export default function TodoApp(){
    return(
        <div className="TodoApp">

            
            <AuthProvider>
            <BrowserRouter>
            <HeaderComponent/>
            <FooterComponent/>
                <Routes>
                    <Route path='/' element={<LoginComponent/>}/>
                    
                    <Route path='/login' element={<LoginComponent/>}/>

                    <Route path='/welcome/:username' element={
                        <AuthenticatedRoute>
                    <WelcomeComponent/>
                    </AuthenticatedRoute>
                    }/>

                    <Route path='/todos' element={<ListTodosComponent/>}/>

                    <Route path='*' element={<ErrorComponent/>}/>

                    <Route path='/logout' element={<LogoutComponent/>}/>
                </Routes>
            </BrowserRouter>
            <FooterComponent></FooterComponent>
            </AuthProvider>

            
        </div>
    )
}







