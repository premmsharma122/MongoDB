const express = require('express')
const app = express()
const mongoose = require('mongoose');
const Chat = require('./models/chat.js');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let chat1 = new Chat({
    from: "Prem",
    to: "Sharma",
    msg: "Hiii",
    date: new Date()
})
chat1.save().then((res)=>{
    console.log(res);
    
})


app.get('/',(req,res)=>{
    res.send("At Root Path")
})
app.listen(3000, ()=>{
    console.log('Server start at 3000');
})
