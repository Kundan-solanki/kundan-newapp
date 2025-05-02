import React, { useEffect, useState} from 'react'
import './Addstudent.css'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate , Link } from 'react-router-dom';
import { toast } from 'react-toastify';  // aleart unique


function Addstudent() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setlastName] = useState("")
  const [emailId, setEmailId] = useState("")
  const [password, setPassword] = useState("")
  const [mobileNo, setMobileNo] = useState("")
   const [Isempty , setIsEpty] = useState(false)

  const navigate = useNavigate();
  let id = useParams()?.id
  console.log("id : ", id)

  useEffect(() => {
    if (id) {
      getOne(id)
      document.querySelector('#title').innerText="Edit Student"

    }
  },[])

  function handalsubmit1(e) {
    e.preventDefault()
    setIsEpty(true)

    if (!firstName || !lastName || !emailId || !password || !mobileNo) {
      toast.error("Please fill all the fields");
      return;
    }
    if(id){
      editdata(id)
    } else{
      onlystudentdata()
      toast.success("Successfull create Data")
      setTimeout(() => {
        navigate("/student")
      }, 3000);

    }
    
  }
  function onlystudentdata(){
    const formData = new FormData()
    formData.append('firstName', firstName)
    formData.append('lastName', lastName)
    formData.append('emailiId', emailId)
    formData.append('password', password)
    formData.append('mobileNo', mobileNo)
    console.log(formData)
    axios.post('http://localhost:8000/api/student', formData).then((response)=> {
      
      console.log(response);
      
    }).catch((error) =>{
      console.log(error);
    });
  

  }
    
    function editdata() {
    axios.put('http://localhost:8000/api/student/' + id , {
      firstName: firstName,
      lastName: lastName,
      emailId : emailId,
      password : password,
      mobileNo : mobileNo
    }).then((response) => {
      console.log('Update successful:', response.data);
      if(editdata){
        navigate('/student')
      }
    }).catch((error) => {
      console.error('Error updating student:', error);
    });
  }
  

  function getOne() {
    axios.get('http://localhost:8000/api/student/' + id).then((response) => {
        console.log(response.data);
        setFirstName(response.data.firstName)
        setlastName(response.data.lastName)
        setEmailId(response.data.emailId)
        setPassword(response.data.password)
        setMobileNo(response.data.mobileNo)
      }).catch((error) => {
        console.log(error);
      });
  }
  
  return (
    <>
<div id="container">

      <div id="container1">
        <h1 id="title">User Student</h1>
        {(Isempty && !true) && <p style={{color : "red", fontSize : '5%'}}>No Fill Data</p>}

        <form id="survey-form">
          <label id="name-label">FirstName</label>
          <input id="name" type="text" name="firstname" value={firstName} placeholder="Enter your firstname" onChange={(event) => setFirstName(event.target.value)} />

          <label id="email-label">LastName</label>
          <input id="email" type="text" name="lastname" value={lastName} placeholder="Enter your lastName" onChange={(event) => setlastName(event.target.value)} />

          <label id="number-label">Emailid</label>
          <input id="number" type="text" name="email" value={emailId} placeholder="email" onChange={(event) => setEmailId(event.target.value)} />

          <label id="number-label">Password</label>
          <input id="number" type="password" name="password" value={password} placeholder="password" onChange={(event) => setPassword(event.target.value)} />


          <label id="number-label" for="number">MobileNO</label>
          <input id="number" type="number" name="mobileNo" min="13" value={mobileNo}  placeholder="number" onChange={(event) => setMobileNo(event.target.value)} />

     <Link style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
          <button id='submit' onClick={(e) => handalsubmit1(e)} >Submit</button>
     <button id='submit' to='/student' onClick={() => editdata()}>Edit</button>
     </Link>  

        </form>
      </div>
      </div>

    </>
  )
}
export default Addstudent
