const mongoose = require("mongoose");

const workSchema = mongoose.Schema({
    client: {
        type: String,
    },
    worker: { 
        type: String,
        unique: false
    },
    workTitle:{                    // 
        type: String,
    },
    workDescription: {
        type: String,             //
    },
    price:{
        type: String,             //
    },
    category:{
        type: String,             //
    },
    date:{
        type: String,  
    },
    location: {
        type: String,
        // required: true,        //
    },
    status:{
        type: String,
    },
});


// userSchema.plugin(passportLocalMongoose);
// userSchema.plugin(findOrCreate);

module.exports = mongoose.model('Work', workSchema);