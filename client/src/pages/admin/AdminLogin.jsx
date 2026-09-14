// AdminLogin.jsx
import { useState } from 'react'
import axios from 'axios'
import './AdminLogin.css'

const AdminLogin = () => {
    const [form, setform] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/admin/login', form);
            if (res.data.message === "Login Successfully") {
                alert('Login Successfully');
                localStorage.setItem('adminEmail', res.data.admin.email);
                localStorage.setItem('id', res.data.admin.id);
                localStorage.setItem('role', res.data.admin.role);
                window.location.href = '/admindashboard';
            }
        } catch (error) {
            alert('Login failed. Please try again.');
        }
    }

    return (
        <div className="login-wrapper">
            {/* Left Side - Branding */}
            <div className="left-section">
                <div className="left-content">
                    <div className="illustration" > 🎓</div>
                    {/* <img src="/img.jpeg" alt="ExamPrep Logo" onError={(e) => {e.target.style.display='none'}} /> */}
                    
                    <h1>ExamPrep</h1>
                    <h2>Admin Portal</h2>
                    <p>Manage exams, students, and achieve excellence in education</p>
                </div>
            </div>
            
            {/* Right Side - Login Form */}
            <div className="right-section">
                <div className="login-form">
                    <h3>Login</h3>
                    <p className="subtitle">Sign in to your admin account to continue</p>
                    
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>EMAIL</label>
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="Enter your email"
                                onChange={handleChange}
                                required 
                            />
                        </div>
                        
                        <div className="form-group">
                            <label>PASSWORD</label>
                            <input 
                                type="password" 
                                name="password" 
                                placeholder="Enter your password"
                                onChange={handleChange}
                                required 
                            />
                        </div>
                        
                        <div className="forgot-password">
                            <a href="#">Forgot Password?</a>
                        </div>
                        
                        <button type="submit" className="login-btn">
                            LOGIN
                        </button>
                    </form>
                    
                    <div className="brand-footer">
                        © 2025 ExamPrep. All rights reserved.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminLogin