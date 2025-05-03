import React, { useEffect, useState } from 'react'
import './loginform.css'
import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button'; // material ui component
import { FaArrowRight } from "react-icons/fa";  // react-icon
import { toast } from 'react-toastify';


export default function Login() {
  const [loginId, setLoginId] = useState('')
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState('')
  const [isEmpty, setIsEmpty] = useState(false)

  const navigate = useNavigate()


  const handleSubmit = (event) => {
    event.preventDefault();
    setIsEmpty(true);

    console.log('Login attempt with:', loginId, password);

    fetch('http://localhost:8000/api/login', {
      method: 'POST',
      body: JSON.stringify({ loginId, password }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Login result:", result);
        
        if (result.message === "No Result found") {
          setMsg(result.message);
        } else if (result.password === password) {
          setMsg(result.message);
        } else if (result.loginId === loginId) {
          localStorage.setItem('token', JSON.stringify(result));
          navigate('/');
        }
      })
      .catch((error) => {
        console.error("Login error:", error);
      });
  };

  
  return (
    
    <>

    
      <div className='d-flex p-3' style={{ border: '1px solid black', margin: '2%' }} >
        <div className='container'>
          <form className='loginf-form'>
            <fieldset>
              <h1 className='login-legend'>Login page</h1>


              <br></br>
              <p className='name-p'>LoginId</p>
              {isEmpty && !loginId && <p style={{ color: 'red' }} role="alert">Enter Your LoginId !</p>}

              <input className='input-first' type='email' placeholder='email' value={loginId} onChange={(event) => setLoginId(event.target.value)}></input>
              <br></br>
              <p className='name-p'>Password</p>
              {isEmpty && !password && <p style={{ color: 'red' }} role="alert">Enter Your Password !</p>}

              <input className='input-first' type='password' placeholder='password' value={password} onChange={(event) => setPassword(event.target.value)}></input>
              <br></br>


              <div className="input-group mb-3">
                <select className="form-select" id="inputGroupSelect01">
                  <option selected>Choose...</option>
                  <option value="1">Roles</option>
                  <option value="2">Marksheet</option>
                  <option value="3">Student</option>
                </select>
              </div>

              <p> Forgot <Link to="/registration">Password ?</Link><Link style={{ marginLeft: '56%' }} to="/registation">Sigup know {<FaArrowRight />}</Link></p>

              <span>

                <Button classname='login-final' variant="contained" onClick={(event) => handleSubmit(event)}>Login</Button>

              </span>
            </fieldset>
          </form>
        </div>

      </div>
    </>
  )
}
