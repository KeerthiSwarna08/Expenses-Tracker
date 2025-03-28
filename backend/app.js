const express=require('express');
const mongoose=require('mongoose');
const cors=require("cors");
const userRouter = require('./routes/userRouter');
const errorHandler = require('./middlewares/errorHandlerMiddleware');
const categoryRouter = require('./routes/categoryRouter');
const transactionRouter = require('./routes/transactionRouter');
const app=express();

// !Connect to MongoDB
mongoose
.connect('mongodb+srv://keerthi:keer0816xyz@expensetracker.35ln7.mongodb.net/?retryWrites=true&w=majority&appName=expenseTracker')
.then(()=>console.log('DB Connected'))
.catch((e)=>console.log(e));
// !Cors config
const corsOptions={
    origin:['http://localhost:5173']
}
app.use(cors(corsOptions));
// !Middlewares
app.use(express.json());
// !Routes
app.use('/',userRouter);
app.use('/',categoryRouter);
app.use('/',transactionRouter);
// !Error
app.use(errorHandler);
// !start the server
const PORT=process.env.PORT || 8000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});
// keer0816xyz