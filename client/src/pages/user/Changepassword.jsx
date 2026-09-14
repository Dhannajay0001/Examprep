import axios from 'axios';
import React, { useState } from 'react'
const ChangePassword = () => {
  const [form, setform] = useState({
      op: '',
      np: '',
      cnp: '',
    })
    const id = localStorage.getItem('userId');
    const handleChange = (e) => {
      setform({ ...form, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
      e.preventDefault();
     try {
        const res = axios.put(`http://localhost:5000/api/examinee/change/${id}`, form)
        alert((await res).data.message)
      }
      catch (er) {
        console.log(er)
      }
    }
  
  return (

    <div style={{ maxWidth: "400px", margin: "30px auto", padding: "20px", border: "1px solid #ddd", borderRadius: "10px" }}>
      <h2 style={{ textAlign: "center" }}>Change Password</h2>
      <form onSubmit={handleSubmit} method='post'>

        <div style={{ marginBottom: "15px" }}>
          <label>Old Password</label>
          <input
            type="password"
            name="op"
            value={form.op}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>New Password</label>
          <input
            type="password"
            name="np"
            value={form.np}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label>Confirm New Password</label>
          <input
            type="password"
            name="cnp"
            value={form.cnp}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
          />
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#4f46e5",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          Change Password
        </button>
      </form>
    </div>);
}


export default ChangePassword