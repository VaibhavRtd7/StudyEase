import { Routes, Route} from "react-router-dom"
import HomePage from "../../pages/Home"
import LoginPage from "../../pages/Login"
import SignupPage from '../../pages/Signup';

function Layout() {
  return (
    <div>
    <Routes> 
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={ <LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
    </Routes>
    </div>
  )
}

export default Layout