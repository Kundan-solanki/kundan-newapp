import React, { useEffect } from 'react'
import { useState } from 'react'
import Button from '@mui/material/Button';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './cardstudent.css'

export default function Cardstudent() {

    const [firstName, setFirstName] = useState("")
    const [lastName, setlastName] = useState("")
    const [emailId, setEmailId] = useState("")
    const [password, setPassword] = useState("")
    const [mobileNo, setMobileNo] = useState("")
    
    const navigate = useNavigate()
    const {id} = useParams()

    useEffect(()=>{
        if(id){
            setdatastudent(id)
        }
    },[id])

    
    function setdatastudent(id) {
        axios.get('http://localhost:8000/api/student/' + id).then((resp) => {
            console.log(resp.data)
            setFirstName(resp.data.firstName)
            setlastName(resp.data.lastName)
            setEmailId(resp.data.emailId)
            setPassword(resp.data.password)
            setMobileNo(resp.data.mobileNo)
            
        }).catch((err)=>{
            console.log(err)
        })
        
        
    }
    function okviewstudentbtn() {
        navigate('/student')
    }
    return (
        <>
            <div>
                <div className="row">
                    <div className="example-1 card1">
                        <div className="wrapper">
                            <div className="date">

                            </div>
                            <div className="data">
                                <div className="content" style={{border : "1px solid black"}}>

                                    <h1 style={{ fontFamily: 'cursive' }}>Student View</h1>
                                    <label id="name-label">FirstName :- <span>{firstName}</span></label>
                                    <br></br>

                                    <label id="email-label">LastName :- <span>{lastName}</span></label>
                                    <br></br>

                                    <label id="number-label">Emailid :- <span>{emailId}</span></label>
                                    <br></br>

                                    <label id="number-label">Password :- <span>{password}</span></label>
                                    <br></br>


                                    <label id="number-label" for="number">MobileNO :- <span>{mobileNo}</span></label><br></br>

                                    <button onClick={(e) => okviewstudentbtn(e)} className='btn btn-primary' variant="outlined" to="#outlined-buttons">OK</button>
                                </div>

                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}
