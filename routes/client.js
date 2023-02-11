const express = require('express');
const router = express.Router();
// const Admin = require('../schemas/AdminSchema')
const Client = require('../schemas/ClientSchema')
const bcrypt = require('bcryptjs');
const passport = require('passport');
const { application } = require('express');
const jwt = require('jsonwebtoken');
const multer = require('../middlewares/multer')

const URL = `localhost:5000`




// Register Client 
router.post("/register", multer.upload.single("file"), async (req, res) => {
    try {
        const client = await Client.findOne({ email: req.body.email })
        if (client) return res.status(400).send("Account already exists");
        console.log("This is REQ FILE =", req.file);

        const newClient = new Client({
            email: req.body.email,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            phone: req.body.phone,
            password: req.body.password,
            IDcard: `${URL}/api/image/${req.file.filename}`,
            validity: 'No', 
        });

        const saved = await newClient.save();
        // res.send(newUser);
        res.send(newClient);
    } catch (error) {
        console.log(error);
        res.send(error)
    }
})


router.post("/login", async(req, res) => {
    try {
        let client = await Client.findOne(req.body);
        if(client){
            res.send(client);
        }else{
            res.send("No user found");
        }
    } catch (error) {
        res.send(err);
        console.log(err);
    }
})

router.get('/invalidclients', async (req, res) => {

    try {
        let invalidclients = await Client.find({ validity: 'No' });
        if (invalidclients.length > 0) {
            res.send(invalidclients);
        } else {
            res.send({ result: "No users found" })
        }
    } catch (error) {
        console.log(error)
    }
})



module.exports = router;