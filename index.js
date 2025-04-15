import express from 'express'

const app = express()

// get , post, put, delete
app.use(express.static('public'))
app.get('/api', (req,res)=>{
    res.send('hi world')
})

app.listen(3000,()=>console.log('server running port number 3000'))

// npm install -g nodemon