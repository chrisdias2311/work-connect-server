const express = require('express');
const app = express();
const ConnectionDB = require("./database");
// const User = require('./schemas/Userschema')
const cors = require('cors')
const passport = require("passport");
// const { initializingPassport } = require('./middlewares/passportConfig');
const expressSession = require('express-session')
const jwt = require("jsonwebtoken")


ConnectionDB();




app.listen(5000,()=>{
    console.log(`server is running on port 5000`);
})