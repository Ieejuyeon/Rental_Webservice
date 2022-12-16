const port = 3000;
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const mainRouter = require("./routes/main");
const subRouter = require("./routes/sub");

app.set('views', __dirname + '/views');
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/uploads', express.static(__dirname + '/uploads'));
app.use('/public', express.static(__dirname + '/public'));
app.use('/js', express.static('./src/js'));
app.use('/css', express.static('./src/css'));

app.use("/", mainRouter);
app.use("/sub", subRouter);

app.listen(port, ()=> {
    console.log(`Server running on port: ${port}`);
})