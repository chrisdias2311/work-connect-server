const mongoose = require("mongoose");

const bidSchema = mongoose.Schema({
    workId: {
        type: String,
        // required: true,
        // unique: true
    },
    workerId: {
        type: String,
        // unique: true
    },
    price:{
        type: String,
    },
    workerName:{
        type: String,
    },
    workerExpertise:{
        type: String,
    }
});


// userSchema.plugin(passportLocalMongoose);
// userSchema.plugin(findOrCreate);

module.exports = mongoose.model('Bid', bidSchema);