import axios, { Axios } from "axios";
import { set } from "mongoose";
import React, { use, useEffect, useState } from "react";

const Session = () => {
  const [form, setForm] = useState({
    name: "",
    description: "",
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const [id, setId] = useState({
    id: "",
  });
  const [edit, setEdit] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (edit) {
        const res = await axios.put(`http://localhost:5000/api/session/${id.id}`, form);
        alert("Updated Successfully");
        console.log(res.data);
        
      } else {
        const res = await axios.post("http://localhost:5000/api/session", form);
        alert("Added Successfully");
      }
    } catch (er) {
      alert("Session not Added");
      console.log(er);
    }
  };
  const [data, setData] = useState([]);

  const handlefetch = async () => {
    const res = await axios.get("http://localhost:5000/api/session");
    setData(res.data);
  };
  useEffect(() => {
    handlefetch();
  }, []);

  const handledelete = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:5000/api/session/${id}`);
      handlefetch();
    } catch (er) {
      alert("sorry try  Again latter");
      console.log(er);
    }
  };
  const handlEdit = (item) => {
    setForm({
      name: item.name,
      description: item.description,
    });
    setEdit(true);
    setId({
      id: item._id,
    });
  };
  console.log(form);
  return (
    <>
      <div className="container-fluid">
        <form method="post" onSubmit={handleSubmit}>
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
                        value={form.name}
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
                        value={form.description}
                        placeholder="Enter Description"
                        name="description"
                      ></textarea>
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
            <table className="table table-bordered mt-4">
              <td>
              <h1 style={{color:"darkblue",}}>Session</h1>  
              </td>
              <tbody style={{backgroundColor:'darkblue'}}>
                <tr> 
                
                  <td style={{width:"70px"}}>S.No</td>
                  <td style={{width:"200px"}}>Name</td>
                  <td>Description</td>
                  <td style={{width:"180px"}}>Action</td>
                  
                </tr>
                
              </tbody>
              {data.map((item, i) => (
                <tr key={item._id}>
                  <td>{i + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>

                  <td>
                    <button
                      className="btn-danger btn"
                      onClick={() => {
                        handledelete(item._id);
                      }}
                    >
                      Delete{" "}
                    </button>
                    <button
                      className="btn btn-success"
                      onClick={() => {
                        handlEdit(item);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Session;
