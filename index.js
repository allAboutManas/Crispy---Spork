import express from "express";
import dotenv from "dotenv";

const app = express();
app.use(express.json())

dotenv.config();

const result = [];

app.post("/postUser" , (req, res)=>{

    try{
        const {name,age} = req.body;
    if (!name || !age) {
        return res.status(400).send({ message: 'Both name and age are required' });
      }

      const user ={name,age};

      result.push(user);
      
        console.log(result);
      return res.status(201).send({status:true, data:user})


    }catch(error){
        return res.status(500).send({ status: false, message: error.message })
    }



    

})



app.get("/alluser" , (req, res)=>{
    res.json(result);
})


app.listen(process.env.PORT, ()=>{
    console.log("Server is running on port: ", process.env.PORT)
})