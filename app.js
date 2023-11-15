require('dotenv').config()
const express = require("express");
// const model = require('./models');
const cors = require('cors');

const PORT =  process.env.PORT||2000;
const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}));

const userRouter = require("./routes/userRouter.js");
const user = require('./models/user.js');


app.use(express.urlencoded())
app.use(express.json());

// sequelize.sync({ force: false })
//     .then(() => {
//         console.log('yes re-sync done!')
//     })

app.use("/user", userRouter)



app.listen(PORT, () => {
    console.log("app running");
});



