const mongoose = require("mongoose");

const workSchema = mongoose.Schema({
    clientId: {
        type: String,
        required: true,
        unique: true
    },
    workerId: {
        type: String,
        unique: true
    },
    price:{
        type: String,
    },
    location: {
        type: String,
        // required: true,
    },
});


// userSchema.plugin(passportLocalMongoose);
// userSchema.plugin(findOrCreate);

module.exports = mongoose.model('Work', workSchema);