import axios from 'axios' // import axios
import React, { useEffect, useState } from 'react'  // import useEffect and usestate
import { useNavigate, useParams , Link } from 'react-router-dom'  //import usNavigate and useParams
import { toast } from 'react-toastify';  // aleart unique

export default function Addmarksheet() {
    const [firstName , setFirstName] = useState('')
    const [lastName , setlastName] = useState('')
    const [rollNo , setRollNo] = useState('')
    const [maths , setMaths] = useState('')
    const [chemistry , setChemistry] = useState('')
   const [Isempty , setIsEpty] = useState('')
 
    const navigate = useNavigate()
  let id = useParams()?.id

  useEffect(()=>{
    if(id){
      editemarksheetone(id)
      document.querySelector('#title').innerText="Edit Marksheet"
    }
  },[])

    function handalsubmit(e){
      e.preventDefault()
      console.log("THis is submit btn")
      setIsEpty(true)
      if (!firstName || !lastName || !rollNo || !maths || !chemistry) {
        toast.error("Please fill all the fields");
        return;
      }
      if(id){
        editdata(id)

      } else{
        postfunctinone()
        toast.success("Successfull create Data")
        setTimeout(()=>{
          navigate('/marksheet')

        }, 3000)
      }
    }

    function postfunctinone(){
      const formData = new FormData()
      formData.append('firstName', firstName)
      formData.append('lastName', lastName)
      formData.append('rollNo', rollNo)
      formData.append('maths', maths)
      formData.append('chemistry', chemistry)
      console.log(formData)
      
      axios.post("http://localhost:8000/api/marksheet", formData).then((req , resp)=>{
        console.log(resp)
      }).catch((err)=>{
        console.log(err)
      })
    }
    
 
    function editdata(){
      axios.put("http://localhost:8000/api/marksheet/" + id ,{
        firstName: firstName , lastName: lastName, rollNo: rollNo, maths : maths , 
        chemistry:chemistry
      }).then((resp)=>{
        console.log(resp.data)
        if(editdata){
          navigate('/marksheet')
        }
      }).catch((err)=>{
        console.log('edite marksheet data', err)
      })
    }

    function editemarksheetone(){
      axios.get('http://localhost:8000/api/marksheet/' + id).then((resp)=>{
        console.log(resp.data)
        setFirstName(resp.data.firstName)
        setlastName(resp.data.lastName)
        setRollNo(resp.data.rollNo)
        setMaths(resp.data.maths)
        setChemistry(resp.data.chemistry)
      }).catch((err)=>{
        console.log(err)
      })
    }
    
   
  return (
    <>
    
    <div id="container">

<div id="container1">
        <h1 id="title">User Marksheet</h1>

        <form id="survey-form">
          <label id="name-label">FirstName</label>
          
          <input id="name" type="text" value={firstName} placeholder="Enter your firstname" onChange={(event) => setFirstName(event.target.value)} />

          <label id="email-label" >LastName</label>

          <input id="email" type="text"  value={lastName} placeholder="Enter your lastName" onChange={(event) => setlastName(event.target.value)} />

          <label id="number-label">RollNO</label>

          <input id="number" type="number"  value={rollNo} placeholder="role Id" onChange={(event) => setRollNo(event.target.value)} />

          <label id="number-label">Maths</label>

          <input id="number" type="number" value={maths} placeholder="number" onChange={(event) => setMaths(event.target.value)} />


          <label id="number-label">chemistry</label>

          <input id="number" type="number" placeholder="number" value={chemistry} onChange={(event) => setChemistry(event.target.value)} />

       <Link style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
          <button className='ml-4 gap-3' id='submit' onClick={(e) => handalsubmit(e)} >Submit</button>
        <button id='submit' to="/marksheet" onClick={() => editdata()}>Edit</button>
        </Link>  



        </form>
      </div>
    </div>
    </>
  )
}
 