const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");
const router = express.Router();
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());

app.use("/admin", adminRouter)
app.use("/user", userRouter)
// app.use("", (req,res)=>{
//     app.sendFile("index.html")
// })

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname , '/index.html'));
    //__dirname : It will resolve to your project folder.
    console.log("it works ... ", __dirname)
  });

  app.use('/', router);


// Connect to MongoDB
// DONT MISUSE THIS THANKYOU!!
// mongoose.connect('mongodb://localhost:27017/courses', { useNewUrlParser: true, useUnifiedTopology: true, dbName: "courses" });

app.listen(3000, () => console.log('Server running after deploy.sh'));
