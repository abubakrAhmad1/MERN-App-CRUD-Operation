const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const userModel = require("../model/userModel");



router.get("/",(req,res) => {
    res.send("api running");
});

router.post("/enter", async (req,res) => {
    // const {name, rollnum} = req.body;
    const name = req.body.name;
    const rollnum = req.body.rollnum;

     const data = await userModel.create({
       //database element : frontend element  
         name : name,
        rollnum : rollnum
     });
     res.send(data);
});


router.get("/display", async (req,res) => {
    const data = await userModel.find();
    res.send(data);
});

router.get("/findOne/:id" , async (req,res) => {
    // const {id} = req.params;
    //params mean somthing in the url
    const id = req.params.id;//params is also an object just like body and we need attribute named "id" from it thats why we write it like this
    const data = await userModel.findOne({_id : id}) ;
    res.send(data);
});
 
router.delete("/delete/:id" , async (req,res) => {
    const {id} = req.params;
    const data = await userModel.findByIdAndDelete({_id : id})  ;   
    res.send(data);    
});

router.patch("/update/:id" , async (req,res) => {
    // const {id} = req.params;
    const id = req.params.id;
    // const {name , rollnum} = req.body;
    const name = req.body.name;
    const rollnum = req.body.rollnum;
    const data = await userModel.findByIdAndUpdate(id,{rollnum,name} , {new:true} );
    res.send(data);    
});


module.exports = router;
