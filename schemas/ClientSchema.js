const mongoose = require("mongoose");

const clientSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
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

module.exports = mongoose.model('Client', clientSchema);