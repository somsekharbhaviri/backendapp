const mongoose = require("mongoose")

const adminstockschema = new mongoose.Schema({
    stockname: {
      type: String,
      required: true,
      unique: true
    },
    quantity: {
      type: String,
      required: true
    },
    price:{
        type:Number,
        required:true
    
    }

  });

const adminstock = mongoose.model('adminstocks', adminstockschema);

module.exports = adminstock;