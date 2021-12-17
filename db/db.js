const config = require('config')
const mongoose = require('mongoose')

const db = async () => {
        try {
          mongoose.connect(config.get('MongoUri'),{},console.log('Connected to database'))
        }
        catch(e) {
            console.log(e)
        }
}

module.exports = db