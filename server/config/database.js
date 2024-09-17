const mongoose = require("mongoose")

require("dotenv").config();


mongoose.connect(process.env.DATABASE_URL).then(() => console.log('Conetado ao Mongo DB')).catch((err) => console.error(err))



module.exports = mongoose;