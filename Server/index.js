const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors');
const multer =require('multer')
const {Server} = require('socket.io')
const articleRouter = require('./Controler/fileControler')
const userController = require('./Controler/userControler')
const fileControler = require('./Controler/fileControler')
const port = 8000

mongoose.set("strictQuery", false);
mongoose.connect('mongodb://127.0.0.1:27017/myapp', async (err)=>{
  if(!err){
    await console.log("DATABASE CONNECTED SUCCESSFULLY...");
  }else{
    console.log("OOPS SOMETHING WENT WRONG ==>  ",err)
  }
});

//io for video server 
// const io = new Server({cors:true})
const app = express()
app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});




//parse application /x-www-font-urlencoded
app.use(bodyParser.urlencoded({extended:false}))

//parse application json
app.use(bodyParser.json())


// Routing part
app.post('/register', userController.signup)
app.post('/signin', userController.signin)
app.get('/vroom/allpost', fileControler.allPost)
app.post('/vroom/addpost', fileControler.addPost)
app.get('/vroom/find/:id', fileControler.findArticleId)
app.put('/vroom/update/:id',fileControler.findArticleIdAndUpdate)
app.delete('/vroom/delete/:id',fileControler.findArticleIdAndDelete)


// ///////////////////////////////////////////////////////////////////////////

app.use('/vroom', articleRouter)


// /////////////////////////////////////////////////////////////////////////////

const emailToSocketMapping = new Map()
const socketTOEmailMapping = new Map()

io.on('connection', (socket)=>{
  console.log("New Connection Joined");
  socket.on('join-room', (data) =>{
    const {roomId, emailId} = data;
    console.log("User", emailId, "Joined Room", roomId)
    emailToSocketMapping.set(emailId, socket.id)
    socketTOEmailMapping.set(socket.id,emailId)
    socket.join(roomId)
    socket.emit('Joined-Room', {roomId})
    socket.broadcast.to(roomId).emit('user-joined', {emailId})
  })
  socket.on("call-user", (data)=>{
    const{emailId, offer} = data;
    const fromEmail = socketTOEmailMapping.get(socket.id)
    const socketId = emailToSocketMapping.get(emailId)
    socket.to(socketId).emit("Incomming call",{from: fromEmail, offer })
  })
  socket.on('call-accepted', (data)=>{
    const {emailId, ans} = data
    const socketId = emailToSocketMapping.get(emailId)
    socket.to(socketId).emit('call-accepted',{ans})
  })
})



// ////////////////////////////////////////////////////////////////////////////////
app.listen(port, () => {console.log(`Server App Running... on   P O R T = ${port}`)})
io.listen(8001, ()=>{console.log("Video Server Strated in P O R T =  8001")})