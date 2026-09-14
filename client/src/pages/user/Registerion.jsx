import React, { useState, useEffect } from "react";
import styles from "./Registration.module.css";   // CSS module import
import axios from "axios";
function Registration() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    college: "",
    course: "",
    session: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/examinee", form);
      alert("Registered Successfully");
      window.location.href = "/";
      console.log(res.data);
    } catch (er) {
      console.log(er);
      alert("Sorry try again later");
    }
  };

  const [data, setData] = useState([]);
  const handlefetch = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/session");
      setData(res.data);
    } catch (er) {
      console.log(er);
    }
  };

  useEffect(() => {
    handlefetch();
  }, []);

  return (
    
    <div className={styles.outer}>
      <div className={styles.registrationPage}>
        <div className={styles.row1}>
          <h1>Registration</h1>
        </div>

        <div className={styles.row2}>
          <label htmlFor="Name"> Name :</label>
          <input
            type="text"
            placeholder="texe"
            name="name"
            onChange={handleChange}
          />
        </div>

        <div className={styles.row2}>
          <label htmlFor="Email"> Email id:</label>
          <input
            type="email"
            placeholder="abc@111...gmail.com"
            name="email"
            onChange={handleChange}
          />
        </div>

        <div className={styles.row2}>
          <label htmlFor="Phone"> Phone number:</label>
          <input
            type="number"
            placeholder="91xxxxxxxxxx"
            name="phone"
            onChange={handleChange}
          />
        </div>

        <div className={styles.row2}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            placeholder="............"
            name="password"
            onChange={handleChange}
          />
        </div>

        <div className={styles.row2}>
          <label htmlFor="college"> College Name:</label>
          <input
            type="text"
            placeholder="Enter the name"
            name="college"
            onChange={handleChange}
          />
        </div>

        <div className={styles.row2}>
          <label htmlFor="course"> Course:</label>
          <input
            type="text"
            placeholder="B.tech, M.tech, BCA..."
            name="course"
            onChange={handleChange}
          />
        </div>

        <div className={styles.row2}>
          <label htmlFor="session"> Session :</label>
          <select
            name="session"
            onChange={handleChange}
            required
          >
            <option value="">Select Session</option>
            {data.map((item) => (
              <option key={item._id} value={item._id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Registration;
