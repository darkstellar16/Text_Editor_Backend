const Express = require('express')
const bodyparser = require('body-parser')
const mongoose = require('mongoose')
const dotenv =  require('dotenv')
const cors = require('cors');

dotenv.config()

const db = require('./config/db')

const dataRoutes = require('./Routes/routes')

const app =  Express();

const PORT = process.env.PORT || 3001 



app.use(bodyparser.json());

app.use(cors());



//testing ----------------->>>>>>>>>>>>>>>>>>
app.get('/test',(req,res)=>
{
    res.send("hello world")
})


//error handling--------------->>>>>>>>>>>>>>>>

app.use((err,req,res,next)=>
{
    res.status(404).send("can't find that!");
})

app.use((err,req,res,next)=>
{
    res.status(500).send("Sorry! something breaks")
})

//routes are here ------------------>>>>>>>>>>>>>>>>>>>>>>
app.use('/v1',dataRoutes);



// listening ------------>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
app.listen(PORT,()=>
{
    console.log(`the server is listening on ${PORT}`)
})