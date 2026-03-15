const express = require('express')
const cookieParser = require('cookie-parser')
const authRouter = require('./routes/auth.routes')
const musicRoutes = require('./routes/music.route')


const app = express()

//middleware:-
//request ke andar jo bhi data ata hai sab read kar skta hai
//request ke andar jo data ata hai usse modify bhi kar sakta hai
//response bhi send kar skta hai
app.use(express.json())
app.use(cookieParser())
app.use('/api/auth',authRouter)
app.use('/api/music',musicRoutes)

module.exports = app;