const express = require("express")
const res = require("express/lib/response")
const app = express()
const path = require("path")
port =3030
app.use(express.static("public"));


app.get("/",(req,res) => res.sendFile(path.resolve(__dirname,"views","home.html")) )


app.listen(port , ()=>{

  return  console.log(`server running on port: htttp://localhost${port}`);
})
