const mongoose = require('mongoose');

const susbcriberSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    subscribedChannel:{
        type: String,
        required: true,
    },
    subscribedDate: {
        type: Date,
        // required: true,
        default: Date.now
    }
})
const SubscriberModel= mongoose.model("subscriber",susbcriberSchema)

module.exports = {SubscriberModel}