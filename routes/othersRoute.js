import express from "express";
import {  } from "../controlers/otherControler.js";

const router = express.Router();


router.get('/get/playerExist/:name' , ); //מחפש אם שחקן קיים


router.use((req,res)=>{
    res.status(404).json({msg: 'path not found'});
});

export default router;