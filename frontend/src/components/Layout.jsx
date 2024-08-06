import { Routes, Route} from "react-router-dom"
import HomePage from "./Home"
import LoginPage from "./Login"
import SignupPage from './Signup';

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