import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Addstudent.css'
// import './cardstudent.css'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';  // aleart unique


// react-icon
import Button from '@mui/material/Button'; // material ui component
import { MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
export default function Student() {
    const [data, setData] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
 const url = ('http://localhost:8000/api/student')

useEffect(() => {
        axios.get(url).then((resp) => {
            setData(resp.data.data)
            console.log('setadatagetstudetn', resp.data)
        }).catch((err) => {
            console.log(err, "this is error")
        })
    

}, [])

    const filteredData = data.filter((item) => {
        return (
            (item.firstName && item.firstName.toLowerCase().includes(searchTerm.toLowerCase()))

        )
    })
    function deletedatastudent(id) {
        axios.delete("http://localhost:8000/api/student/" + id)
            .then((resp) => {
                setData((prevData) => prevData.filter(item => item._id !== id))
                toast.error("Data is Deleted")

                console.log(resp)
            }).catch((err) => {
                console.log("delete dats student", err)
            })

    }

    return (
        <>
            <div style={{ border: "2px solid black", margin: "30px", padding: '30px' }}>
                <div className='container'>
                    <nav className="navbar navbar-light bg-light">
                        <div className="container-fluid">
                            <h1 className='h1'>School Listing</h1>
                            <form className="d-flex">
                                <span>
                                    <p>Search :  </p>

                                    <input className="form-control me-2 mb-0" type="text" id='myIntput' placeholder="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
                                        aria-label="Search" />
                                </span>
                            </form>
                        </div>
                    </nav>



                    <table>
                        <thead className='thead-role'>
                            <tr>
                                <th className='role-th'>#</th>
                                <th className='role-th'>FirstName</th>
                                <th className='role-th'>LastName</th>
                                <th className='role-th'>Emailid</th>
                                <th className='role-th'>Password</th>
                                <th className='role-th'>MobileNO</th>
                                <th className='role-th'>Edite</th>
                                <th className='role-th'>View</th>
                                <th className='role-th'>Delete</th>
                            </tr>
                        </thead>
                        <tbody className='role-tr'>
                            {
                                filteredData.map((item, i) => {
                                    console.log("THisi data sis studenta", item )
                                    return (

                                        <tr className='role-tr' key={item._id}>
                                            <td className='role-th'>{i + 1}</td>
                                            <td className='role-th'>{item.firstName}</td>
                                            <td className='role-th'>{item.lastName}</td>
                                            <td className='role-th'>{item.emailId}</td>
                                            <td className='role-th'>{item.password}</td>
                                            <td className='role-th'>{item.mobileNo}</td>
                                            <td>
                                                <Button>
                                                    <Link className='role-th' to={`/addstudent/${item._id}`}><FaPencilAlt style={{ fontSize: '30px' }} color='secondary' /></Link>
                                                </Button>

                                            </td>

                                            <td className='role-th'>
                                                <Button>  <Link
                                                    className='text-success' to={`/cardstudent/${item._id}`} ><FaEye style={{ fontSize: '30px' }} color='success' />

                                                </Link>
                                                </Button></td>


                                            <td >
                                                <Link><Button className='text-danger' onClick={() => deletedatastudent(item._id)}><MdDelete style={{ fontSize: '30px' }} /></Button></Link></td>
                                        </tr>

                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
