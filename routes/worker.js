const express = require('express');
const router = express.Router();
// const Admin = require('../schemas/AdminSchema')
const Worker = require('../schemas/WorkerSchema')
const bcrypt = require('bcryptjs');
const passport = require('passport');
const { application } = require('express');
const jwt = require('jsonwebtoken');
const multer = require('../middlewares/multer')

const URL = `localhost:5000`




// Register Client 
router.post("/register", multer.upload.single("file"), async (req, res) => {
    try {
        const worker = await Worker.findOne({ email: req.body.email })
        if (worker) return res.status(400).send("Account already exists");
        console.log("This is REQ FILE =", req.file);

        const newWorker = new Worker({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            phone: req.body.phone,
            expertise: req.body.expertise,
            password: req.body.password,
            IDcard: `${URL}/api/image/${req.file.filename}`,
            validity: 'No', 
        });
        const saved = await newWorker.save();
        // res.send(newUser);
        res.send(newWorker)
    } catch (error) {
        console.log(error);
        res.send(error)
    }
})

router.post("/login", async(req, res) => {
    try {
        let worker = await Worker.findOne(req.body);
        if(worker){
            res.send(worker);
        }else{
            res.send("No user found");
        }
    } catch (error) {
        res.send(err);
        console.log(err);
    }
})


module.exports = router;