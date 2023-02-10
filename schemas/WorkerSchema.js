const mongoose = require("mongoose");

const workerSchema = mongoose.Schema({
    firstname: {
        type: String,
        // required: true
    },
    lastname: {
        type: String,
        // required: true,
    },
    phone:{
        type:String,
    },
    IDcard: {
        type: String,
        // required: true,
        // required: true
    },
    expertise: {
        type: String,
    },
    password: {
        type: String,
        // required: true
    },
    validity:{
        type: String,
    }
});


// userSchema.plugin(passportLocalMongoose);
// userSchema.plugin(findOrCreate);

module.exports = mongoose.model('Worker', workerSchema);