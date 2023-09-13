const mongoose = require('mongoose')
const subscriberModel = require('../src/models/subscribers')
const data = require('./data')
require('dotenv').config()

// Connect to DATABASE
const DATABASE_URL = process.env.mongoUrl
mongoose.connect(DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('Database created...'))

const refreshAll = async () => {
    await subscriberModel.deleteMany({})
    // console.log(connection)
    await subscriberModel.insertMany(data)
    await mongoose.disconnect();
}
refreshAll()