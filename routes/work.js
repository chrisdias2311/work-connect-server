const express = require('express');
const router = express.Router();
// const Admin = require('../schemas/AdminSchema')
const Client = require('../schemas/ClientSchema')
const Work = require('../schemas/WorkSchema')
const bcrypt = require('bcryptjs');
const passport = require('passport');
const { application } = require('express');
const jwt = require('jsonwebtoken');
const multer = require('../middlewares/multer')

const URL = `localhost:5000`



router.post("/createtask", async (req, res) => {
    try {
        console.log("request.body: ", req.body)
        const newTask = new Work({
            client: req.body.cid,
            worker: 'empt',
            workTitle: req.body.title,
            workDescription: req.body.desc,
            price: '',
            category: req.body.category,
            date: req.body.date,
            location: req.body.location,
            status:'NA'
        })

        const saved = await newTask.save();
        res.send(newTask);

    } catch (error) {
        console.log(error);
        res.send(error)
    }
})

router.get('/availabletasks', async (req, res) => {
    try {
        let tasks = await Work.find({ validity: 'No' });
        if (tasks.length > 0) {
            res.send(tasks);
        } else {
            res.send({ result: "No work found" })
        }
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;