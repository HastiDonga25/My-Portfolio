const express = require("express");
const path = require("path");
const dotenv = require ("dotenv");

const app = express();

app.use("/CSS", express.static(path.join(__dirname, "CSS")));
app.use('/JS', express.static(path.join(__dirname, 'JS')))
app.use('/IMG', express.static(path.join(__dirname, 'IMG')))


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
})

// server start
const PORT = 2000;
app.listen(PORT, ()=>{
    console.log(`server running on http://127.0.0.1:${PORT}`);
})

// hi
