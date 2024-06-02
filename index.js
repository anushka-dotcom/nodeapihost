const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;
app.get("/get",(req, res) =>{
    res.send("Hello World");
});

const main = async () =>{
    try{
        app.listen(PORT, ()=>{
            console.log("connected");
        });

    }catch(error){
        console.log(error);
    }
};

main();