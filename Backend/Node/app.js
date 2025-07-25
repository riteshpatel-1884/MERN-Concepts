const express = require("express");
require("dotenv").config();
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000

app.get("/test",(req,res)=>{
  res.send("Hi");
})

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
