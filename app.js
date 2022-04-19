const express = require("express")
const app = express()
const path = require("path")
port = 3030;


app.use(express.static("public"));


app.get("/",(req,res) => { return res.sendFile(path.resolve(__dirname,"views","home.html")) } )
app.get("/register",(req,res) => { return res.sendFile(path.resolve(__dirname,"views","register.html")) } )
app.get("/login",(req,res) => { return res.sendFile(path.resolve(__dirname,"views","login.html")) } )


app.listen(port, () => { // a traves de ese puerto van a entrar las peticiones asi que le digo que escuche.
    console.log(`servidor corriendo en el puerto http://localhost:${port}`)
})