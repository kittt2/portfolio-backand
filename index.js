import express from "express";
import connectDb from "./config/db.js";
import dotenv  from "dotenv";
import form from "./routes/form.js";
import  cors from "cors"

dotenv.config();
connectDb();

const app = express()
app.use(cors());
app.use(express.json());
app.use("/api/v1/response",form);
app.get('/', function (req, res) {
  res.send('Hello World')
})


const PORT = process.env.PORT || 8000;

app.listen(PORT,()=>{
  console.log(
    `server is running ${PORT}`
  )
})