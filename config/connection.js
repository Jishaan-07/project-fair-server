const res = require('express/lib/response')
const mongoose = require('mongoose')

const connection_string= process.env.CONNECTIONSTRING

mongoose.connect(connection_string).then((res)=>{
    console.log("MONGODB AATLAS CONNECTED SUCCESSFULLY WITH PRESERVER");
    
}).catch(err=>{
    console.log("MONGODB ATLAS Connection failed");
    console.log(err);
    
    
})