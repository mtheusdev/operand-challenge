const bodyParser = require('body-parser')
const express = require("express")
const app = express()
const router = require("./routes/routes")
const cors = require('cors')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

app.use("/",router);

app.listen(8686,() => {
    console.log("Servidor rodando em: http://localhost:8686")
});
