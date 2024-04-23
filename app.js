const express = require("express");
const bodyparser = require('body-parser');
const app = express();
const sequelize = require("./utils/database");

const userRouter = require("./router/user-router");

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

app.use('/',userRouter)
sequelize
    // .sync({force:true})
    .sync()
    .then((result)=>{
        const PORT = 3000;
        app.listen(PORT, () => {
          console.log(`Server is listening on port ${PORT}`);
        });
    })
    .catch((err)=>{
        console.log("error : "+ err);
    })

