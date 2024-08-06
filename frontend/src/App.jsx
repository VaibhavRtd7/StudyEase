import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLayout from './components/AdminLayout';
import TutorLayout from './components/TutorLayout';
import Layout from './components/Layout';

function App() {

  return (
    <>
       <BrowserRouter> 
          <Routes>
               <Route path="/admin" element={< AdminLayout/>} />         
               <Route path="/tutor" element={< TutorLayout/>} />         
               <Route path="/*" element={< Layout/>} />         
          </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
