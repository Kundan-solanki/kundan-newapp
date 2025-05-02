import React, { useEffect, useState } from 'react'
import './cardrole.css'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Button from '@mui/material/Button';

export default function Cardrole() {

const [image , setImage] = useState('')
const [name1 , setName1] = useState('')

const {id} = useParams()  // id form url
const navigate = useNavigate()
    const [name, setName] = useState('')
    const [discription , setDiscription] = useState('')

    useEffect(()=>{
        if(id){
            setdataviewrole(id)
            console.log("Card rolr id :",id)
        }
    },[id])

// show image but not show again again
  //   useEffect(() => {
  //     axios.get(`http://localhost:8000/api/role/${id}`)
  //     .then((resp) => {
  //           console.log(resp.data.image[0].filename)
  //             const data = resp.data;
  //             // if (resp?.data?.data?.image[0]?.path) {
  //             //   setImage(resp.data.data.image[0].path);
              
  //             //     console.log(data.image[0].path , 'kuch bta yaar')
  //             // }
  //             if(resp?.data?.image[0]?.path)
  //             {
  //               setImage(resp.data.image[0].path)
  //               console.log(resp.data.image[0].path , 'checking data')
  //             } 
  
  //             setName1(resp.data.name1 || 'No name available');
  //         }).catch((err) => {
  //             console.log("err,", err);
  //         });
  // }, [id]);


  
  function setdataviewrole(id){
    axios.get('http://localhost:8000/api/role/' +id).then((resp)=>{
      console.log(resp.data)
            setName(resp.data.name)
            setDiscription(resp.data.discription)
          }).catch((err)=>{
            console.log(err)
          })
        }
        
        
          function okviewrolebtn(){
            navigate('/role')
          }
  return (
    <>
    <div>
        <div className="row">
  <div className="example-1 card">
    <div className="wrapper">
      <div className="date">
       
      </div>
      <div className="data">
        <div className="content">

          {/* all data */}
          <h1 style={{fontFamily : 'cursive'}}>User View</h1>
          <p classNameName='addrole-head'>Name :- {<span>{name}</span>}</p>
            
            <br></br>
            <p classNameName='addrole-head'>Discription :- {<span>{discription}</span>}</p>
            <br></br>
            <Button onClick={(e)=>okviewrolebtn(e)} classNameName='text-primary' variant="outlined" href="#outlined-buttons">Ok </Button>
            </div>
        
      </div>
    </div>
  </div>
  <div className="example-2 card">
    <div className="wrapper">
      <div className="header">
        <div className="date">
         {/* // image aay ge */}
        <img  src={`http://localhost:8000/api/role/${setImage }`} alt='no image available'></img> 
        </div>
       
      </div> 
      
    </div>
  </div>
</div>
    </div>
    </>
  )
}
