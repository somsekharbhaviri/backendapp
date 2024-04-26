const Stockpurchaser = require("../models/Stockpurchaser")
const adminstocks=require("../models/AdminStock")
const boughtstock=require("../models/BoughtStocksModel")
const Transaction=require("../models/StocksModel");
const adminstock = require("../models/AdminStock");
const insertstockpurchaser = async (request, response) => {
    try 
    {
      const input = request.body;
      const stockpurchaser= new Stockpurchaser(input);
      await stockpurchaser.save();
      response.send('Registered Successfully');
    } 
    catch(e) 
    {
      response.status(500).send(e.message);
    }
  };
  const checkstockpurchaserlogin = async (request, response) => {
    try {
      const input = request.body;
      console.log(input);
      const stockpurchaser= await Stockpurchaser.findOne(input);
      response.json(stockpurchaser);
    } catch (error) {
      response.status(500).send(error.message);
    }
  };
  const storeboughtstock = async (request, response) =>
  {
    try 
    {
      const input = request.body;
      const stock = new boughtstock(input);
      await stock.save();
      response.send('Stock added Successfully');
    } 
    catch(e) 
    {
      response.status(500).send(e.message);
    }
  }
  const storemystock = async (request, response) =>
  {
    try 
    {
      const input = request.body;
      const transaction = new Transaction(input);
      await transaction.save();
      response.send('Stock added Successfully');
    } 
    catch(e) 
    {
      response.status(500).send(e.message);
    }
  }
  const viewboughtstocks= async(request,response)=>{
    try{
        const email=request.params.email
        const stock= await boughtstock.find({"email":email})
        if(stock.length==0)
        {
          response.send("No stocks bought")
        }
        else
        {
          response.json(stock)
        }
        
    }
    catch(e){
        console.log(e.message)
    }
  }
  const deletestocks = async (request, response) => {
    try {
      const email = request.params.email;
      const ticker = request.params.ticker;
      const stock = await boughtstock.findOne({ "email": email, "ticker": ticker });
      
      console.log(email)
      if (!stock) {
        response.send("No matching stock found");
      } else {
        await boughtstock.deleteOne({ "email": email, "ticker": ticker });
        response.send("Stock deleted successfully");
      }
    } catch (e) {
      console.log(e.message);
      response.status(500).send("Internal server error");
    }
  };
  const viewtransactions=async(request,response)=>{
    try{
      const stock=await Transaction.find()
      response.json(stock)
    }
    catch(e){
      console.log(e.message)
    }
  }
  const viewadminstocks=async(request,response)=>{
    try{
      const stock=await adminstocks.find()
      response.json(stock)
    }
    catch(e){
      console.log(e.message)
    }
  }

  module.exports = {insertstockpurchaser,checkstockpurchaserlogin,storeboughtstock,storemystock,viewboughtstocks,deletestocks,viewtransactions,viewadminstocks}