const mongoose = require('mongoose')
const mongooseCreds = {
  host: (process.ENV.DATA_MONGO_HOST ? process.ENV.DATA_MONGO_HOST : '127.0.0.1'),
  name: (process.ENV.DATA_MONGO_NAME ? process.ENV.DATA_MONGO_NAME : 'gonano')
}

mongoose.connect('mongodb://' + mongooseCreds.host + '/' + mongooseCreds.name)
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
