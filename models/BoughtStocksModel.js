const mongoose=require("mongoose")

const stockschema = new mongoose.Schema(
    {
        // "ticker": "VATE^",
        // "price": "0.0595",
        // "change_amount": "0.0435",
        // "change_percentage": "271.875%",
        // "volume": "524369"
        ticker:{
            type:String,
            required:true,
            unique:true
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

const boughtstock = mongoose.model('boughtstocks', stockschema);
module.exports=boughtstock;
