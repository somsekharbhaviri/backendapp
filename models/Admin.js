const mongoose = require("mongoose")

const stockadminschema = new mongoose.Schema({
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    }
  });

const stockadmin = mongoose.model('stockadmin', stockadminschema);

module.exports = stockadmin;