
import React, { useEffect, useState } from 'react'
import './Roleget.css'
import { Link } from 'react-router-dom';

// react-icon
import Button from '@mui/material/Button'; // material ui component
import { MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import axios from 'axios';
import { toast } from 'react-toastify';  // aleart unique


export default function Role() {
  const [data, setData] = useState([]);
  const [searchingItem, setSearchinItem] = useState('')



  //    this is get method using fatch data
  useEffect(() => {
    axios.get('http://localhost:8000/api/role').then((response) => {
      setData(response.data.data);
      console.log("data this is cosole", response.data.data)
    }).catch((err) => {
      console.log(err, 'this is error')
    })

  }, []);

//  data is fillter 
  const filteredData = data.filter((item) => {
    return (
      (item.name && item.name.toLowerCase().includes(searchingItem.toLowerCase()))

    )

  })


  // Simple DELETE request with axios
  function roledataDeleted(id) {
    axios.delete('http://localhost:8000/api/role/' + id)
      .then((response) => {
        setData((prevData)=> prevData.filter(item => item._id !== id))
        toast.error("Data is Deleted")
        console.log(response)

      }).catch((err) => {
        console.log("THis is a err handaling", err)
      })
  }





  return (
    <>
      <div className='container'>

        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <h1 className='h1'>Listing Page:-</h1>
            <form className="d-flex">
              <span>
                <p>Search :  </p>
                <input className="form-control me-2 mb-0" type="text" id='myIntput' placeholder="Search" value={searchingItem} onChange={(e) => setSearchinItem(e.target.value)}
                  aria-label="Search" /> </span>

            </form>
          </div>
        </nav>
        <table id='myTable'>
          <thead className='thead-role'>
            <tr className='role-tr'>
              <th className='role-th'>#</th>
              <th className='role-th'>Name</th>
              <th className='role-th'>discription</th>
              <th className='role-th'>Edite</th>
              <th className='role-th'>View</th>
              <th className='role-th'>Delete</th>

            </tr>
          </thead>
          <tbody className='role-tr'>
            {
              filteredData.map((item, i) => {
                return (

                  <tr className='role-tr' key={item._id}>
                    <td className='role-th'>{i + 1}</td>
                    <td className='role-th'>{item.name}</td>
                    <td className='role-th'>{item.discription}</td>
                    <td className='role-th'>

                 <Button>
                 <Link to={`/addrole/${item._id}`}><FaPencilAlt  style={{fontSize : '30px'}} color="secondary"/>
                      </Link></Button>  
                    </td>
                    <td className='role-th'>
                    <Button><Link
                      className='text-success' to={`/cardrole/${item._id}`}><FaEye  style={{fontSize : '30px'}} color='success'/>
                      
                      </Link></Button></td>


                    <td>
                      <Link>
                        <Button className='text-danger' onClick={() => roledataDeleted(item._id)}>
                        <MdDelete style={{fontSize : '30px'}} color='error'/></Button>
                      </Link></td>



                  </tr>
                )
              })
            }
          </tbody>
        </table>

      </div>
    </>
  )
}
