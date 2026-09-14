const express =require('express');
const cors= require('cors');
const mongoose = require('mongoose');
const app = express();


app.use(cors());
app.use(express.json());
const URL ='mongodb://localhost:27017/examprep'
mongoose.connect(URL)
.then(()=>{

   console.log("MongoDB Connected")
})
.catch((er)=>{
   console.log(er)
})

//api  started

app.use('/api/admin/',require('./routes/adminRoutes'))
app.use('/api/session/',require('./routes/sessionRoutes.'))
app.use('/api/subject/',require('./routes/subjectRoutes.'))
app.use('/api/exams/',require('./routes/examinationRoutes'))
app.use('/api/question/',require('./routes/questionRoutes'))
app.use('/api/examinee/',require('./routes/examineeRoutes'))
app.use('/api/message/',require('./routes/messageRoutes'))
app.use('/api/admindashboard/',require('./routes/adminDashboard'))



 app.listen(5000,()=>{
   console.log("server is running on http://localhost:5000/");
 })

//api ending