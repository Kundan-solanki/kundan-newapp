import axios from 'axios'
import React, { useEffect, useState } from 'react';
import './Roleget.css'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';  // aleart unique

// react-icon
import Button from '@mui/material/Button'; // material ui component
import { MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";

export default function Marksheet() {
    const [data, setData] = useState([])
    const [searchTerm, setSearchTerm] = useState('')


    const url = ("http://localhost:8000/api/marksheet")

    useEffect(() => {
        axios.get(url).then((resp) => {
            setData(resp.data.data)
            console.log("This is a marksheet data", resp.data)
        }).catch((err) => {
            console.log("This is eereo", err)

        })
    }, [])


    //  search frontend in reach
    const filteredData = data.filter((item) => {
        return (
            (item.firstName && item.firstName.toLowerCase().includes(searchTerm.toLowerCase()))
        )
    })


    function marksheetdeletedata(id) {
        axios.delete(url +'/' + id).then((resp) => {
            setData((prevData)=> prevData.filter(item => item._id !== id))
            console.log(resp)
              toast.error("Data is Deleted")

        }).catch((err) => {
            console.log('THis is err delete', err)
        })
    }

    return (
        <>
            <div style={{ border: "2px solid black", margin: "30px", padding: '30px' }}>
                <div className='container'>
                    <nav className="navbar navbar-light bg-light">
                        <div className="container-fluid">
                            <h1 className='h1'>All Student Listing</h1>
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
                            <tr className='role-tr'>
                                <th className='role-th'>#</th>
                                <th className='role-th'>FirstName</th>
                                <th className='role-th'>LastName</th>
                                <th className='role-th'>RollNo</th>
                                <th className='role-th'>Maths</th>
                                <th className='role-th'>chemistry</th>
                                <th className='role-th'>Edite</th>
                                <th className='role-th'>View</th>
                                <th className='role-th'>Delete</th>
                            </tr>
                        </thead>
                        <tbody className='role-tr'>
                            {
                                filteredData.map((item, i) => {
                                    console.log( "thisi s a marksheet data",item._id)

                                    return (
                                        <tr className='role-tr' key={item._id}>
                                            <td className='role-th'>{i + 1}</td>
                                            <td className='role-th'>{item.firstName}</td>
                                            <td className='role-th'>{item.lastName}</td>
                                            <td className='role-th'>{item.rollNo}</td>
                                            <td className='role-th'>{item.maths}</td>
                                            <td className='role-th'>{item.chemistry}</td>
                                            <td className='role-th'>
                                                <Button><Link className='role-th' to={`/addmarksheet/${item._id}`}><FaPencilAlt style={{ fontSize: '30px' }} color='error' /></Link></Button>
                                            </td>

                                            <td className='role-th'>
                                            <Button>
                                                <Link className='text-success' to={`/cardmarksheet/${item._id}`}><FaEye style={{ fontSize: '30px' }} color='success' /></Link>
                                            </Button>
                                                </td>



                                            <td className='role-th'>
                                                <Link><Button className='text-danger' onClick={() => marksheetdeletedata(item._id)}><MdDelete style={{ fontSize: '30px' }} color='error' /></Button></Link>
                                            </td>
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
