import axios, { Axios } from "axios";
import { set } from "mongoose";
import React, { use, useEffect, useState } from "react";

const Subject = () => {
 const [ form ,setForm] = useState({
    name:'' ,
    description:''
 })  
 const handleChange = (e) =>{
    setForm({...form ,[e.target.name]:e.target.value})
 } 
 const[id,setId]= useState({
    id: ''
 });
 const[edit,setEdit] =useState(null);
 const handleSubmit = async(e)=>{
    e.preventDefault();
    try{
        if(edit){
            const res = await axios.put('http://localhost:5000/api/subject',form);
        alert("Updated Successfully");
        } else{
            const res = await axios.post('http://localhost:5000/api/subject',form);
        alert("Added Successfully");
        }
    }
    catch(er){
        alert("subject not Added");
        console.log(er)
    }
 }
 const [data,setData] = useState([]);
 const handlefetch = async() =>{

    const res = await axios.get('http://localhost:5000/api/subject');
    setData(res.data)

 }
 useEffect(()=>{
    handlefetch()
 },[])
 
const handledelete = async(id) =>{
try
{

    const res = await axios.delete('http://localhost:5000/api/subject/')
}
catch(er){alert("sorry try  Again latter")
    console.log(er);
}
}
  const handlEdit = (item) =>{
    setForm({
        name: item.name ,
          description: item.description
    })
    setEdit (true)
    setImmediate({
        id:item._id
    });
  }
console.log(form)
  return (
    <>
      <div className="container-fluid">
        <form  method="post" onSubmit={handleSubmit}>
            <div className="row">
          <div className="col-sm-12">
            
            <table className="table mt-4 table-bordered ">
              <tbody>
                <tr>
                  <td>
                    <input
                      style={{
                        margin: "auto",
                        width: "100%",
                        border: "1px lightgray solid",
                        borderRadius: "4px",
                        height: "40px",
                      }}
                      type="text"
                      name="name"
                      onChange={handleChange}
                      placeholder="Enter Name"
                    />
                    <br /> <br />
                    <textarea
                      style={{
                        margin: "auto",
                        width: "100%",
                        border: "1px lightgray solid",
                        borderRadius: "4px",
                      }}
                       onChange={handleChange}
                      placeholder="Enter Description"
                      name="description"></textarea>
                    <button className="btn btn-danger">Submit</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        </form>
        <div className="row">
          <div className="col-sm-12">
            <table className="table table-bordered mt-4 ">
              <td>
                <h1>subjects</h1>
              </td>
              <tbody>
                <tr>
                  <td>S.No</td>
                  <td>Name</td>
                  <td>Description</td>
                  
                  <td>Action</td>
                </tr>
              </tbody>
              {data.map((item,i)=>(
                <tr key= {item._id}>
                    <td>{i+1}</td>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                  
                    
                    
                    <td>
                        <button className="btn btn-sm btn-danger"onClick={()=> handleDelete(item_id)}>Delete </button>
                        <button className="btn btn-sm btn -warning mme-2" onClick={()=>{handlEdit(item) }}>Edit</button>

                    </td>

                </tr>
              ))}
              {data.length===0 &&(
                <tr>
                  <td colSpan="4" className="text-center"> no subject avilable</td>
                </tr>
              )}
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subject;
