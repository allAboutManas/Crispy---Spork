import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser"

const app = express();

app.use(bodyParser.text({ type: '*/*' }));

dotenv.config();

let result ="";

app.post("/postText" , (req, res)=>{

    try{
        const anyText = req.body;
    if (!anyText) {
        return res.status(400).send({ message: 'Both name and age are required' });
      }

      result=anyText;
      console.log(result);
         
      return res.status(201).send(anyText)
     


    }catch(error){
        return res.status(500).send({ status: false, message: error.message })
    } 

})


app.get("/getthetext" , (req, res)=>{
    res.status(200).json(result);
})


app.listen(process.env.PORT, ()=>{
    console.log("Server is running on port: ", process.env.PORT)
})