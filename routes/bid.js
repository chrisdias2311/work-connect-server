const express = require('express');
const router = express.Router();
// const Admin = require('../schemas/AdminSchema')
const Client = require('../schemas/ClientSchema')
const Work = require('../schemas/WorkSchema')
const Bid = require('../schemas/BidSchema')
const bcrypt = require('bcryptjs');
const passport = require('passport');
const { application } = require('express');
const jwt = require('jsonwebtoken');
const multer = require('../middlewares/multer')

const URL = `localhost:5000`



router.post("/createbid", async (req, res) => {
    try {
        const bid = await Bid.findOne({workerId: req.body.workerid, });
        if(bid) return res.send("You have already Bid fo this task!");

        console.log("request.body: ", req.body)
        const newBid = new Bid({
            workerId: req.body.workerid,
            workId: req.body.workid,
            price: req.body.price,
            workerName: req.body.name,
            workerExpertise: req.body.expertise
        })
        console.log("This is the bid", newBid)

        const saved = await newBid.save();
        res.send("Bid successful! Wait to hear back from the client!");

    } catch (error) {
        console.log(error);
        res.send(error)
    }
})

router.post('/checkmyoffers', async (req, res) => {
    try {
        const cliId  = req.body.clientId;
        const myTask = await Work.find({ client: cliId });
        console.log(myTask);
        res.send(myTask)
    } catch (error) {
        console.log(error)
    }
})

router.post('/checkbids', async (req, res) => {
    try {
        const workid  = req.body.workId;
        console.log("This is the wokrkID: ", workid)
        const bids = await Bid.find({ workId: workid });
        console.log(bids);
        res.send(bids)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;