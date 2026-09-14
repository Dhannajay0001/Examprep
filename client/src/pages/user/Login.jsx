import React, { useState } from "react";
 
import axios from "axios";

const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/examinee/login', form)
      if (res.data.message == "Login Successfully") {
        localStorage.setItem("userEmail", res.data.user.email)
        localStorage.setItem("userId", res.data.user.id)
        localStorage.setItem("userRole", res.data.user.role);
        window.location.href = '/userDashboard'
      }
    } catch (er) {
      console.log(er)
      alert("sorry try Again")
    }
  }

  console.log(form);

  return (
    <>
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
      }}>
        <div style={{
          background: 'white',
          borderRadius: '16px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
          overflow: 'hidden',
          display: 'flex',
          width: '900px',
          maxWidth: '90vw',
          minHeight: '600px'
        }}>
          {/* Welcome Section */}
          <div style={{
            flex: '1',
            background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            padding: '60px 40px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            color: 'white',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: '-50px',
              right: '-50px',
              width: '200px',
              height: '200px',
              background: 'rgba(255,255,255,0.1)',
              borderRadius: '50%'
            }}></div>
            
            <div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '40px'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  background: 'rgba(255,255,255,0.2)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '12px',
                  fontSize: '20px'
                }}>
                  📚
                </div>
                <span style={{ fontSize: '20px', fontWeight: '600' }}>ExamPrep</span>
              </div>
              
              <h1 style={{
                fontSize: '32px',
                fontWeight: '700',
                marginBottom: '16px',
                margin: '0 0 16px 0'
              }}>
                Hello, welcome!
              </h1>
              
              <p style={{
                fontSize: '16px',
                opacity: '0.9',
                lineHeight: '1.6',
                marginBottom: '30px',
                margin: '0 0 30px 0'
              }}>
                Start your exam preparation journey with us. Access thousands of questions and practice tests to ace your exams.
              </p>
            </div>
            
            <button style={{
              background: 'rgba(255,255,255,0.2)',
              border: '1px solid rgba(255,255,255,0.3)',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer',
              alignSelf: 'flex-start',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.target.style.background = 'rgba(255,255,255,0.3)';
            }}
            onMouseOut={(e) => {
              e.target.style.background = 'rgba(255,255,255,0.2)';
            }}>
              Learn More
            </button>
          </div>

          {/* Login Form Section */}
          <div style={{
            flex: '1',
            padding: '60px 40px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
            <div>
              <h2 style={{
                fontSize: '24px',
                fontWeight: '600',
                color: '#1a1a1a',
                marginBottom: '30px',
                margin: '0 0 30px 0'
              }}>
                User Login
              </h2>

              <div onSubmit={handleSubmit}>
                <div style={{ marginBottom: '20px' }}>
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#374151'
                  }}>
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="email"
                    required
                    onChange={handleChange}
                    value={form.email}
                    style={{
                      width: '100%',
                      padding: '16px',
                      border: '2px solid #e1e5e9',
                      borderRadius: '8px',
                      fontSize: '14px',
                      outline: 'none',
                      transition: 'border-color 0.5s ease',
                      boxSizing: 'border-box'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#4facfe';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#e1e5e9';
                    }}
                  />
                </div>

                <div style={{ marginBottom: '30px' }}>
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#374151'
                  }}>
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    onChange={handleChange}
                    value={form.password}
                    style={{
                      width: '100%',
                      padding: '16px',
                      border: '2px solid #e1e5e9',
                      borderRadius: '8px',
                      fontSize: '14px',
                      outline: 'none',
                      transition: 'border-color 0.3s ease',
                      boxSizing: 'border-box'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#4facfe';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#e1e5e9';
                    }}
                  />
                </div>

                <button
                  type="submit"
                  onClick={handleSubmit}
                  style={{
                    width: '100%',
                    background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                    color: 'white',
                    border: 'none',
                    padding: '16px',
                    borderRadius: '8px',
                    fontSize: '16px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    marginBottom: '20px',
                    transition: 'transform 0.2s ease'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  Login
                </button>
              </div>

              <div style={{
                textAlign: 'center',
                fontSize: '14px',
                color: '#666'
              }}>
                <span>Not a member yet? </span>
                <a href="/register" onClick={handleChange}  style={{ 
                  color: '#4facfe',
                  textDecoration: 'none',
                  fontWeight: '500'
                }}
                onMouseOver={(e) => {
                  e.target.style.textDecoration = 'underline';
                }}
                onMouseOut={(e) => {
                  e.target.style.textDecoration = 'none';
                }}>
                  Sign up
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default Login;