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

app.use(express.json());
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(expressSession({ secret:"secret", resave:false, saveUninitialized:false }));
app.use(passport.initialize());
app.use(passport.session());



//API routes here 
app.use('/api/image', require('./middlewares/multer').router)
app.use('/api/client', require('./routes/client'))


const PORT = 5000
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})