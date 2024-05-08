import express from 'express'
import path from 'path'
import {dirname} from 'path'
import {fileURLToPath} from 'url'

const app=express();
const PORT=3000;

const __dirname=dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.join(__dirname, "/public")));

app.get('/',(req,res)=>{
    res.sendFile(__dirname +'/public/index.html')
})
app.get('/about',(req,res)=>{
    res.sendFile(__dirname +'/public/about.html')
})

app.listen(PORT,()=>{
    console.log("Server running on Port: ", PORT);
})
