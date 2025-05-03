import React, { useEffect, useState} from 'react' // import useffect and usestate
import './Roleaddstyle.css' // import style
import axios from 'axios' // import axios method
import { toast } from 'react-toastify';  // aleart unique
import { Link } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom' //  import useParams and useNavigate

export default function Addrole() {
  const [name, setName] = useState('')
  const [discription, setDiscription] = useState('')
  const [image, setImage] = useState('')
  const [msg, setMsg] = useState("");

  const [Isempty, setIsEpty] = useState(false)
  const id  = useParams()?.id
  const navigate = useNavigate()

useEffect(()=>{
  if(id){
    editedataone(id)
    document.querySelector('#title').innerText="Edit Role"

  }
} ,[id])

  

  function registerUser(e) {
    e.preventDefault()
    setIsEpty(true)

    if (!name || !discription) {
      toast.error("Please fill all the fields");
      return;
    }
    if (id) {
      update(id)
    } else{
      oneonlyfunctionifcondtion()
      toast.success("Successfull create Data")
      setTimeout(()=>{
        navigate('/role')
        
      },3000)
    }
  }
  function oneonlyfunctionifcondtion() {
    const formData = new FormData()
    formData.append('name', name);
    formData.append('discription', discription);
    formData.append('image', image[0]); // assuming single file upload
    
    console.log(formData);
    
    axios.post('http://localhost:8000/api/role', formData).then((req, response) => {
      console.log(response)

    }).catch((err) => {
console.log(err)
    })
  }



  function update() {
    axios.put('http://localhost:8000/api/role/' + id, { name:name, discription : discription 

    }).then((response) => {
      console.log(response.data);
if(update){
  navigate('/role')
}      
    }).catch((err) => {
      console.log("This is edite", err)
    })
  }
  
  function editedataone() {
    axios.get('http://localhost:8000/api/role/' + id).then((resp) => {
      console.log(resp.data)
      setName(resp.data.name)
      setDiscription(resp.data.discription)

    }).catch((err) => {
      console.log(err)
    })
  }




  return (
    <>

      <div className='addrole'>
      <h1 id='title'>User Role</h1>
      {(!Isempty && msg) && <p style={{color : "red", fontSize : '5%'}}>No Fill Data</p>}

        <label className='addrole.label'> 
          <form className='addrole-form'>
            <p className='addrole-head'>Name :-</p>
            {(Isempty && !name) &&  <p style={{color : 'red'}}>Fill input field</p>}

            <input className='addrole-input' type='text' placeholder='User Name' value={name} onChange={(event) => setName(event.target.value)}></input>
            <br></br>
            <p className='addrole-head'>Discription :-</p>
            {(Isempty && !discription) &&  <p style={{color : 'red'}}>Fill input field</p>}

            <input className='addrole-input' type='text' placeholder='User Discription' value={discription} onChange={(event) => setDiscription(event.target.value)}></input>
            <br></br>
            <p>Choose you Picture</p>
            <input type='file' placeholder='picture' onChange={(e) => { setImage(e.target.files); console.log(e.target.files) }}></input>

            <br></br>
            <br></br>
            <Link style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
            <button className='addrole-edite' onClick={(e) => registerUser(e)}>submit</button>
          <button className='addrole-edite' to="/role" onClick={() => update()}>Edite</button>
            
            </Link>
          </form>
        </label>
      </div>

    </>
  )
}
