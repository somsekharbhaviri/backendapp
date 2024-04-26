const Stockpurchaser = require("../models/Stockpurchaser");
const stockadmin = require("../models/Admin")
const adminstocks=require("../models/AdminStock")
const viewstockmembers = async (request, response) => {
  try {
    const stockmembers = await Stockpurchaser.find();
    if (stockmembers.length == 0) {
      response.send("DATA NOT FOUND");
    } else {
      response.json(stockmembers);
    }
  } catch (error) {
    response.status(500).send(error.message);
  }
};
const addstocks = async (request, response) => {
  try {
    const input = request.body;
    const adminStock = new adminstocks(input);
    await adminStock.save();
    response.send('Stocks added Successfully');
  } catch (e) {
    response.status(500).send(e.message);
  }
};


const deletestockpurchaser = async (request, response) => {
  try {
    const email = request.params.email;
    const stockpurchaser = await Stockpurchaser.findOne({ "email": email });
    if (stockpurchaser != null) {
      await Stockpurchaser.deleteOne({ "email": email });
      response.send("Deleted Successfully");
    } else {
      response.send("Email ID Not Found");
    }
  } catch (error) {
    response.status(500).send(error.message);
  }
};

const checkadminlogin = async (request, response) => {
  try {
    const input = request.body;
    console.log(input);
    const admin = await stockadmin.findOne(input);
    response.json(admin);
  } catch (error) {
    response.status(500).send(error.message);
  }
};
const changeadminpwd = async (request, response) => {
  try 
  {
    const { email, oldpassword, newpassword } = request.body;

    const admin = await stockadmin.findOne({ email, password: oldpassword });
    
     if (!admin) 
    {
      response.status(400).send('Invalid Old Password');
    }
    else
    {
        if(oldpassword==newpassword)
        {
          response.status(400).send('Both Passwords are Same');
        }
        else
        {
          await stockadmin.updateOne({email},{ $set: { password: newpassword } });
           response.json('Password Updated Successfully');
        }
      
    }
  } 
  catch (error) 
  {
    response.status(500).send(error.message);
  }
};


module.exports = { viewstockmembers, deletestockpurchaser, checkadminlogin ,changeadminpwd,addstocks};