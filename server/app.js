require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const aiRouter = require('./routes/aiRoutes');
const userRouter = require('./routes/userRoutes');
console.log('app started');

const PORT = process.env.PORT;

// app.use(cors({
//     origin:'http://localhost:3000'
// }));
app.use(express.json());
app.use("/ai",aiRouter);
app.use("/user",userRouter)

app.get("/",(req,res)=>{
    res.send("SUST_Tyro_Trio welcoming you!!");
});

mongoose
.connect(process.env.DB_URL)
.then(()=>{
    console.log("Connected to database!");
    app.listen(PORT,()=>{
        console.log(`Server Running on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Connection failed!", error);
    process.exit();
});