import React from "react";

import "./UserDashboard.css"
import { Outlet ,Link} from "react-router";


function UserDashboard() {

  const role = localStorage.getItem('userRole')
  if(role == "user"){
    var email = localStorage.getItem('userEmail')
  
  }
   else{
     window.location.href = '/'
   }
    const getGreeting =() => {
      const hour = new Date ().getHours();
      if(hour< 12) return 'Good Morning';
       if(hour< 18) return 'Good Afternoon';
       return 'Good Evening'
    };
   const handlelogout = () =>{
    localStorage.removeItem('userEmail')
    localStorage.removeItem('userRole')
    localStorage.removeItem('userId')
    window.location.href ='/'

   }


  return (
    <div> 
    <outer>
      <div class="niv">
        <ul>
          <p>UserDashboard</p>
        </ul>
      </div>
      <div class="main">
        <div class="col1">
          <ul>
            <li>
              <a href= "/userdashboard/myexam">My Exams</a>
            </li>

            <li>
              <a href="/userdashboard/myresult">My Result</a>
            </li>
           
            <li>
              <a href="/userdashboard/changePassword"> change Password</a>
            </li>
            <li>
              <a href=""onClick={()=>{
                handlelogout()
              }}className="text-decoration-non texe-light">Logout</a>
            </li> 
            <li>
              <a href="/userdashboard/message">Message</a>
            </li>
            
          </ul>
        </div>
        <div class="col2">
            <Outlet/>
        </div>
      </div>
    </outer>
    </div>
  );
}


export default UserDashboard
