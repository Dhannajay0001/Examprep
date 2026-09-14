import React,{useState,useEffect} from 'react'
import { Link } from 'react-router';
import axios from 'axios';

export const MyExams = () => {
   const [data , setData] = useState([]);
    const handlefetch = async() =>{
     
       
        const res = await axios.get('http://localhost:5000/api/exams/exams');
        setData(res.data)
    
    
    }
    useEffect(()=>{
        handlefetch();
    },[])
    console.log(data);
    
  return (
   <>
   <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <h2>My Exam</h2>
                        <table className='table table-bordered'>
                            <tbody>
                                <tr>
                                    <td>S.N</td>
                                    <td>Exam Name</td>
                                    <td>Date</td>
                                    <td>Duration</td>
                                    <td>Action</td>
                                </tr>
                            </tbody>
                            {data.map((item,i)=>(
                                <tr key={item._id}>
                                    <td>{i+1} </td>
                                    <td>{item.title} </td>
                                    <td>{item.date} </td>
                                    <td>{item.duration} </td>
                                    <Link className='btn btn-primary' to={`/userDashboard/getexam/`+item._id}>Start</Link>
                                      
                                </tr>
                            ))}
                        </table>
                    </div>
                </div>
            </div>

   </>
  )
}

export default MyExams
