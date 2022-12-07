const express = require("express");

const app = express();
const port = 3501;

app.get("/",(req,res)=>{
    res.status(200).send({status: 200, success: true, message: "API called"});
})

app.listen(port,()=>{
    console.log(`Server is running at PORT => ${port}`);
});