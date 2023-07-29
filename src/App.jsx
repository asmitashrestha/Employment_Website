import "./App.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Homefinal from './components/Home/Homefinal'
import Jobfinal from './components/Viewdetails/Jobfinal'
import Login from "./components/Login/Login";
import Categoryname from "./components/Createjob/Categoryname";
import Signup from "./components/Signup/Signup";
import Viewcomp from "./components/Comapnydetails/Viewcomp";
import Applyjob from "./components/Comapnydetails/Applyjob";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <div>
     <Routes>
      <Route path="/" element={<Homefinal/>}/>
      <Route path="/viewdetails" element={<Jobfinal/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/postjob" element={<Categoryname/>}/>
      <Route path="signup" element={<Signup/>}/>
      <Route path="/viewcompany" element={<Viewcomp/>}/>
      <Route path="/applyjob" element={<Applyjob/>}/>
     </Routes> 
     <ToastContainer />
    </div>
  );
}

export default App;