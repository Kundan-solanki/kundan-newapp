import React, { useEffect } from 'react'
import { useState } from 'react'
import Button from '@mui/material/Button';
import { useNavigate, useParams  } from 'react-router-dom';
import axios from 'axios';

export default function Cardmartsheet() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [rollNo, setRollNo] = useState('')
    const [maths, setMaths] = useState('')
    const [chemistry, setChemistry] = useState('')


    const navigate = useNavigate()
    const {id} = useParams()
useEffect(()=>{
    if(id){
        setdataview(id)
    }
} , [id])




    // setdata view
    function setdataview(id){
        axios.get('http://localhost:8000/api/marksheet/' + id).then((resp)=>{
            setFirstName(resp.data.firstName)
            setlastName(resp.data.lastName)
            setRollNo(resp.data.rollNo)
            setMaths(resp.data.maths)
            setChemistry(resp.data.chemistry)
        }).catch((err)=>{
            console.log(err)
        })
    }

    function okviewdatacheck(){
        navigate('/marksheet')
    }

    return (
        <>
           

           <div className="container p-3">
  <div style={{ border: '2px solid black', backgroundColor: 'lightcyan' }} className="p-3 bg-light">
    
    <div style={{ border: '2px solid black' }} className="d-flex align-items-center justify-content-center">
      <h2 style={{ fontSize: '4vw', textAlign: 'center' }}>YOUR SCHOOL</h2>
    </div>

    <div style={{ border: '1px solid black' }} className="text-center">
      <h2 className="p-3" style={{ fontSize: '3vw' }}>YOUR SCHOOL NAME HERE (YEARLY) EXAMINATION - 2019</h2>
      <h4 className="p-1" style={{ fontSize: '2.5vw' }}>
        ACCESS ADMIN SECTION OF ONLINE STUDENT RESULT SYSTEM <span style={{ color: 'red' }}>CLICK HERE</span>
      </h4>
    </div>

    <hr />
    <h4 style={{ fontSize: '2vw' }}>2020-05-23</h4>
    <hr />

    <div style={{ overflowX: 'auto' }}>
      <table style={{ backgroundColor: '#e3dbdb', width: '100%', minWidth: '600px' }}>
        <thead>
          <tr>
            <th>Subject Code</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Roll No</th>
            <th>Maths</th>
            <th>Chemistry</th>
            <th>Remark</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>SUB1</td>
            <td><p>{firstName}</p></td>
            <td><p>{lastName}</p></td>
            <td><p>{rollNo}</p></td>
            <td><p>{maths}</p></td>
            <td><p>{chemistry}</p></td>
            <td><p className="p-2" style={{ color: 'green' }}>C+</p></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="p-3" style={{ border: '1px solid black' }}>
      <h2 style={{ color: 'darkblue', fontSize: '2.5vw' }}>
        Result: Compartment in Biology and English
      </h2>
    </div>

    <div className="p-2 mt-2" style={{ border: '1px solid gray', fontFamily: 'sans-serif' }}>
      <h5 style={{ fontSize: '2vw' }}>
        Disclaimer:
        <p style={{ fontFamily: 'serif', fontSize: '1.8vw' }}>
          Neither webmaster nor Result Hosting is responsible for any inadvertent error that may have crept into the results being published on NET. The results published on the net are immediate information for Students. This cannot be treated as the original mark sheet.
        </p>
      </h5>
    </div>

  </div>

  <h5 className="mt-1" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', fontSize: '2vw' }}>
    Error Or Mistake In Result?
    <span style={{ color: 'blue', marginLeft: '5px' }}>Report Here</span>
    <button className="ml-3" style={{ fontSize: '1.5vw', color: 'blue', marginLeft: '10px' }} onClick={(e) => okviewdatacheck(e)}>
      OK
    </button>
  </h5>

</div>

        </>
    )
}
