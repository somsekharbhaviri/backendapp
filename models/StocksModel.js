const mongoose=require("mongoose")

const transactionschema = new mongoose.Schema(
    {
        // "ticker": "VATE^",
        // "price": "0.0595",
        // "change_amount": "0.0435",
        // "change_percentage": "271.875%",
        // "volume": "524369"
        ticker:{
            type:String,
            required:true
        },
        price:{
            type:String,
            required:true
        },
        change_amount:{
            type:String,
            required:true
        },
        change_percentage:{
            type:String,
            required:true
        },
        volume:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        }
    }
)

const transaction = mongoose.model('transactions', transactionschema);
module.exports=transaction;
