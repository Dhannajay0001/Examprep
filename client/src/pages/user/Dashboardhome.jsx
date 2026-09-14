import React, { useState } from 'react';

const DashboardHome = () => {
  const [activeSection, setActiveSection] = useState('home');

  const handleNavClick = (section) => {
    if (section === 'logout') {
      if (window.confirm('Are you sure you want to logout?')) {
        alert('Logging out...');
        // Add your logout logic here
      }
      return;
    }
    setActiveSection(section);
  };

  return (
    <div className="dashboard-container">
      <style jsx>{`
        .dashboard-container {
          display: flex;
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          font-family: 'Arial', sans-serif;
        }

       


        

       

        .main-content {
          flex: 1;
          padding: 20px;
          background: rgba(255, 255, 255, 0.95);
          margin: 10px;
          border-radius: 15px;
          backdrop-filter: blur(10px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          overflow-y: auto;
        }

      

        .welcome-text {
          font-size: 24px;
          color: #333;
          font-weight: 600;
          margin-bottom: 5px;
        }

        .sub-text {
          color: #666;
          font-size: 14px;
        }

        .dashboard-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin: 30px 0;
        }

        .card {
          background: white;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          border-top: 4px solid #667eea;
          cursor: pointer;
        }

        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        .card:nth-child(2) { border-top-color: #f093fb; }
        .card:nth-child(3) { border-top-color: #4facfe; }
        .card:nth-child(4) { border-top-color: #43e97b; }

        .card-title {
          font-size: 18px;
          font-weight: 600;
          color: #333;
          margin-bottom: 10px;
        }

        .card-content {
          color: #666;
          font-size: 14px;
          line-height: 1.6;
        }

        .stats-section {
          background: white;
          padding: 30px;
          border-radius: 12px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
          margin-top: 20px;
        }

        .stats-title {
          margin-bottom: 10px;
          color: #333;
          font-size: 18px;
          font-weight: 600;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin-top: 20px;
        }

        .stat-item {
          text-align: center;
          padding: 20px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-radius: 10px;
          transition: transform 0.3s ease;
        }

        .stat-item:hover {
          transform: scale(1.05);
        }

        .stat-number {
          font-size: 28px;
          font-weight: bold;
          margin-bottom: 5px;
        }

        .stat-label {
          font-size: 14px;
          opacity: 0.9;
        }

        @media (max-width: 768px) {
          .dashboard-container {
            flex-direction: column;
          }
          
          .sidebar {
            width: 100%;
          }
          
          .nav-menu {
            display: flex;
            overflow-x: auto;
            padding: 10px;
          }
          
          .nav-item {
            flex-shrink: 0;
            margin: 0 5px;
          }
          
          .nav-link {
            white-space: nowrap;
            padding: 12px 20px;
            border-radius: 8px;
            border-left: none;
          }
          
          .main-content {
            margin: 10px;
            padding: 20px;
          }
        }
      `}</style>

      {/* Sidebar Navigation */}
      
      <main className="main-content">
        <div className="header">
          <div className="welcome-text">Welcome back!</div>
          <div className="sub-text">Here's what's happening with your account today.</div>
        </div>

        <div className="dashboard-cards">
          <div className="card" onClick={() => handleNavClick('exams')}>
            <div className="card-title">📚 Recent Exams</div>
            <div className="card-content">
              View your latest exam schedules and manage upcoming tests. Stay updated with all your academic activities.
            </div>
          </div>
          
          <div className="card" onClick={() => handleNavClick('results')}>
            <div className="card-title">📊 Latest Results</div>
            <div className="card-content">
              Check your recent exam results and performance analytics. Track your progress over time.
            </div>
          </div>
          
          <div className="card" onClick={() => handleNavClick('messages')}>
            <div className="card-title">💬 New Messages</div>
            <div className="card-content">
              You have new notifications and messages from your instructors and system updates.
            </div>
          </div>
          
          <div className="card" onClick={() => handleNavClick('password')}>
            <div className="card-title">⚙️ Account Settings</div>
            <div className="card-content">
              Manage your profile, change password, and customize your dashboard preferences.
            </div>
          </div>
        </div>

        <div className="stats-section">
          <h3 className="stats-title">📈 Quick Stats</h3>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">12</div>
              <div className="stat-label">Total Exams</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">8</div>
              <div className="stat-label">Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">4</div>
              <div className="stat-label">Pending</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">85%</div>
              <div className="stat-label">Average Score</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardHome;