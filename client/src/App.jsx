import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Login from "./pages/user/Login";
import Registerion from "./pages/user/Registerion";

import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Session from "./pages/admin/Session";
import Subject from "./pages/admin/Subject";
import Examination from "./pages/admin/Examination";
import Question from "./pages/admin/Question";
import UserDashboard from "./pages/user/UserDashboard";
import MyExams from "./pages/user/MyExams";
import MyResult from "./pages/user/MyResult";
import GetExam from "./pages/user/GetExam";
import Message from "./pages/user/Message";
import Dashboardhome from "./pages/user/Dashboardhome";
import Examinee from "./pages/admin/Examinee";
import ReportGeneration from "./pages/admin/ReportGeneration";
import AdminChangepassword from "./pages/admin/AdminChangepassword";
import MessageReply from "./pages/admin/MessageReply";
import Changepassword from "./pages/user/Changepassword";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/admin" element={<AdminLogin />}></Route>
          <Route path="/register" element={<Registerion />}></Route>

          <Route path="/admindashboard" element={<AdminDashboard />}>
            <Route path="session" element={<Session />}></Route>
            <Route path="subject" element={<Subject />}></Route>
            <Route path="examination" element={<Examination />}></Route>
            <Route path="question" element={<Question />}></Route>
            <Route path ="examinee" element={<Examinee/>}></Route>
            <Route path ="reportgeneration" element={<ReportGeneration/>}></Route>
            <Route path="adminchangepassword" element={<AdminChangepassword/>}></Route>
            <Route path="messagereply" element={<MessageReply/>}></Route>


          </Route>

          {/* use dashboard */}

          <Route path="/userdashboard" element={<UserDashboard />}>
          <Route index element ={<Dashboardhome/>}></Route>

            <Route path="myexam" element={<MyExams />}></Route>
            <Route path="myresult" element={<MyResult />}></Route>
            <Route path ='getExam/:id' element={<GetExam/>}></Route>
             <Route path ='message'element={<Message/>}></Route>
            <Route path="changePassword" element={<Changepassword/>} />
          </Route>





          {/* userDashboard */}

        </Routes>
      </Router>
    </>
  );
}

export default App;
