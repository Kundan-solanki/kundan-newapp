import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button'; // material ui component
import { toast } from 'react-toastify';

import './registration.css'

    
    export default function Registation() {
      const [name, setName] = useState('');
      const [loginId, setLoginId] = useState('');
      const [age, setAge] = useState('');
      const [contact, setContact] = useState('');
      const [city, setCity] = useState('');
      const [password, setPassword] = useState('');
      const [msg, setMsg] = useState('')
      const [isEmpty, setIsEmpty] = useState(false)

      const navigate = useNavigate();

      function submitRegistrationform(event) {
        event.preventDefault();
        setIsEmpty(true)
         // POST request to create a new user
         
         axios.post('http://localhost:8000/api/user/', {
      name ,loginId , age , city, password, contact,
      })
        .then(function (response) {
          console.log(response.data);
          navigate("/login")
          if(msg === "Your right work"){
            setMsg(msg)
          } else if(response.msg === 'Enter your LoginId and pasword'){
            setIsEmpty({isTrue : true})
            
          } else {
            toast.success("Your condition is unsuccessfull")
            setTimeout(()=>{

            }, 5000)
          }
        }).catch((error)=>{
          console.log("kk", error);
        });
    }
  

  return (
    <>
      <div className="container" style={{border : '1px solid black' , padding : '1%'}}>
        <div className="login">
          <header className="login__header">
            {isEmpty && msg && <p style={{color : 'red', textAlign : 'center'}}>Fill all input filed</p>}
            <h1 className="icon m-3"> Registration</h1><br></br>
          </header>
            <div>
              {isEmpty && !name && <p style={{color : 'red'}}>Enter Your Name</p>}
              <label htmlFor="name">Name :-</label>
              <input type="text"id="name" name="name" value={name} placeholder="Enter name" onChange={(event) => setName(event.target.value)} />
            </div>
            <div>


          

              <label htmlFor="loginId">LoginId :-</label>
            {isEmpty && !loginId && <p style={{color : 'red'}}>Enter Loginid</p>}
              <input type="loginId" id="age" name="age"  value={loginId}
                placeholder="Enter loginId" onChange={(event) => setLoginId(event.target.value)} />
            </div>
            <div>

              <label htmlFor="age">Age :-</label>
            {isEmpty && !age && <p style={{color : 'red'}}>Enter Your Age</p>}
              <input type="number"id="age" name="age"value={age}  placeholder="Enter age"  onChange={(event) => setAge(event.target.value)} />
            </div>
            <div>

              <label htmlFor="contact">Contact :-</label>
            {isEmpty && !contact && <p style={{color : 'red'}}>Enter Your Number</p>}
              <input type="number" id="contact" name="contact"  value={contact}
                placeholder="Enter contact" onChange={(event) => setContact(event.target.value)} />
            </div>
            <div>
            {isEmpty && !city && <p style={{color : 'red'}}>Enter Your village</p>}

              <label htmlFor="city">City :-</label>
              <input type="text" id="city" name="city"  value={city}  placeholder="Enter city" onChange={(event) => setCity(event.target.value)}/>
            </div>
            <div>

              <label htmlFor="city">Password :-</label>
            {isEmpty && !password && <p style={{color : 'red'}}>Enter Your Password</p>}
              <input type="password" id="password" name="password"  value={password}  placeholder="Enter city" onChange={(event) => setPassword(event.target.value)}/>
            </div> <div>
            


            <div>
            </div>

            </div> 
            <div>
              <Button className="button" variant="contained" type="submit" value="Submit" onClick={(event)=> submitRegistrationform(event)}>Submit</Button>
            </div>
        </div>
      </div>

    </>
  )
}
