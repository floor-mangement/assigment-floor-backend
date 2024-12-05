// import express, { json } from 'express';
const express = require("express");
const { json } = require("express");
const app = express();
const connectDB= require("./configs/db.js");
// import connectDB from "./configs/db.js";
const cors = require("cors");
// import cors from 'cors';
app.use(json());
// import Routes from "./routes/index.js";
const Routes = require("./routes/index.js");

app.use(cors({ origin: "*" }));


// const allowedOrigins = ['http://example.com', 'http://anotherdomain.com'];
// app.use(cors({
//   origin: (origin, callback) => {
//     if (!origin || allowedOrigins.indexOf(origin) !== -1) {
//       console.log(origin);
//       callback(null, true);
//     } else {
//       console.log(origin);
//       callback(new Error('Not allowed by CORS'));
//     }
//   }
// }));


app.use('/api', Routes);

// app.get('/', (req, res) => {
//     res.send('Hello World');  
//   });

  app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })

//   http://localhost:8000 
const PORT = 8000;
connectDB();
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);  
  })

