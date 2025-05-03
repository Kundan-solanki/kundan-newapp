import { Routes, Route } from "react-router-dom"
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './allget/Dashboard';
import Role from './allget/Role';
import Addrole from './allget/Addrole';
import Home from './allget/Home';
import Student from './allget/Student';
import Addstudent from './allget/Addstudent';
import Marksheet from "./allget/Marksheet";
import Addmarksheet from "./allget/Addmarksheet";
import Login from "./allget/Login";
import { useEffect } from "react";

import Registation from "./allget/Registation";
import { useNavigate } from 'react-router-dom';
import Cardrole from "./allget/Cardrole";
import Cardmarksheet from "./allget/Cardmartsheet";
import Cardstudent from "./allget/Cardstudent";

function App() {
  const navigate = useNavigate()

  let auth = localStorage.getItem('token')
  useEffect(() => {
    if (!auth || null) {
      console.log("auth is empty  , redirecting", auth)
      navigate('/login')
    };

  }, [])

  return (
    <>

      <Dashboard />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/role' element={<Role />}></Route>
        <Route path='/addrole' element={<Addrole />}></Route>
        <Route path='/addrole/:id' element={<Addrole />}></Route>
        <Route path='/student' element={<Student />}></Route>
        <Route path='/addstudent' element={<Addstudent />}></Route>
        <Route path='/addstudent/:id' element={<Addstudent />}></Route>
        <Route path='/marksheet' element={<Marksheet />}></Route>
        <Route path='/addmarksheet' element={<Addmarksheet />}></Route>
        <Route path='/addmarksheet/:id' element={<Addmarksheet />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/registation' element={<Registation />}></Route>
        <Route path="/cardrole/:id" element={<Cardrole />}></Route>
        <Route path="/cardmarksheet/:id" element={<Cardmarksheet />}></Route>
        <Route path="/cardstudent/:id" element={<Cardstudent />}></Route>
        <Route path="*" element={<h1>PAGE NOT FOUND 404 Page not found ERROR</h1>}></Route>

      </Routes>

    </>
  );
}

export default App;
