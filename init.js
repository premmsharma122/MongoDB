const mongoose = require('mongoose');
const Chat = require('./models/chat.js');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let chats = [
    {
        from: "Prem",
        to: "Sharma",
        msg: "Hiii",
        date: new Date()
    },
     {
        from: "Prem2",
        to: "Sharma2",
        msg: "Hiii",
        date: new Date()
    },
     {
        from: "Prem3",
        to: "Sharma3",
        msg: "Hiii",
        date: new Date()
    },
     {
        from: "Prem4",
        to: "Sharma4",
        msg: "Hiii",
        date: new Date()
    }
]
Chat.insertMany(chats)