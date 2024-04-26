const mongoose=require("mongoose")//schema contains type ,required,unique,default


const Stockpurchaserschema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required:true,
      
    },
    aadhar: {
      type: String,
      required: true,
      unique:true
    },
    email:{
      type:String,
      required:true,
      unique:true
    },
    password:{
      type:String,
      required:true,
      unique:true
    },
    panno: {
      type: String,
      required: true,
      unique: true
    },
    annualIncome: {
      type: Number,
      required: true
    },
    source: {
      type: String,
      required: true
    },
    contact: {
        type: String,
        required: true,
        unique:true
      },
    bankName:{
        type:String,
        required:true,
    },
    bankAccount:{
        type:String,
        required:true,
        unique:true
    }
  });

const Stockpurchaser = mongoose.model('stockpurchaser', Stockpurchaserschema);//model contains 2 params collection name and schema

module.exports = Stockpurchaser;