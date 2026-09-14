const Examinee = require("../models/Examinee")
const express = require('express');
const message = require("../models/message");
const router = express.Router();

router.post('/', async (req, res) => {
     const { email } = req.body
     const ex = Examinee.findOne({ email: email })
     if (!ex) {
          return res.json({ message: "Details already exist" })
     }
     const user = await new Examinee(req.body);
     user.save();
     return res.json("Registered Successfully")

})

router.get('/', async (req, res) => {
     const user = await Examinee.find();
     return res.json(user)

})

router.put('/change/:id', async (req, res) => {
     const { op, np, cnp } = req.body;
     const { id } = req.params;
     const user = await Examinee.findById(req.params.id);
     if (!user) {
          return res.json({ message: "Details Not Matched" })
     }
     if (user.password == op) {
          if (op == np) {
               return res.json({ message: "Old password and new password can not be same" })
          } else if (np == cnp) {
               try { 
                    const ex = await Examinee.findByIdAndUpdate(id, {password:cnp});
                    return res.json({ message: "password Updated Successfully" })
               }
               catch (er) {
                    console.log(er)
                    return res.json
               }
          }
     } else {
          return res.json({ message: "You old password not matched" })

     }
})


router.put('/:id', async (req, res) => {
     const { id } = req.params;
     const user = await Examinee.
          findByAndUpdate(id, req.body);
     return res.json("Updated Successfully")
})

router.delete('/:id', async (req, res) => {
     const { id } = req.params
     const user = await Examinee.findByAndDelete(id, req.body);
     return res.json("Delete Successfully")
})

router.get('/:id', async (req, res) => {
     const { id } = req.params
     const user = await Examinee.Examinee.findById(id)
     return res.json("user")
})

router.post('/login', async (req, res) => {
     const { email, password } = req.body;

     const user = await Examinee.findOne({ email: email });
     if (!user) {
          return res.status(400).json("user not found")
     }
     if (user, password == password) {
          return res.status(200).json({
               message: "Login Successfully", user: {
                    email: user.email,
                    id: user._id,
                    role: "user"

               }
          })
     } else {
          return res.json({ message: "Password not matched" })

     }
})



module.exports = router





