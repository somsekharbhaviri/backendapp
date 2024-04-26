const stockpurchasercontroller=require("./controllers/Stockpurchasercontroller")
const admincontroller=require("./controllers/admincontroller")
const express=require("express")
const router =express.Router()
//jstock purchaser routes
router.post("/storeboughtstock",stockpurchasercontroller.storeboughtstock)
router.post("/insertstockpurchaser",stockpurchasercontroller.insertstockpurchaser)
router.post("/checkstockpurchaserlogin",stockpurchasercontroller.checkstockpurchaserlogin)
router.post("/storemystock",stockpurchasercontroller.storemystock)
router.get("/viewboughtstocks/:email",stockpurchasercontroller.viewboughtstocks)
router.delete("/deletestocks/:email/:ticker",stockpurchasercontroller.deletestocks)
router.get("/viewtransactions",stockpurchasercontroller.viewtransactions)
router.get("/viewadminstocks",stockpurchasercontroller.viewadminstocks)

//admin routes
router.get("/viewstockmembers",admincontroller.viewstockmembers)
router.delete("/deletestockpurchaser/:email",admincontroller.deletestockpurchaser)
router.post("/checkadminlogin",admincontroller.checkadminlogin)
router.put("/changeadminpwd",admincontroller.changeadminpwd)
router.post("/addstocksbyadmin",admincontroller.addstocks)

module.exports = router