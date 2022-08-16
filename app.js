import express from "express"
import exbs from "express-handlebars";
import bodyParser from "body-parser";
import path from "path";
import UserRouter from "./routers/users.js"
//  my Database 
import db from "./config/config.js "

//Testing connection with database
db.authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch(error => console.error('Unable to connect to the database:', error));





const app = express();
const PORT = process.env.PORT || 5000;

//users router//middleware
app.use("/users", UserRouter);
app.use(express.json());
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send('<h1>home page</h1>');
})

app.listen(PORT, () => console.log(`Server is listeng on port ${PORT}`));