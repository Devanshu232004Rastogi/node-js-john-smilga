require("./database/db");
const express = require("express");
const app = express();
const PORT = 3000;
const taskRouters = require("./routes/taskRouter.js");
const {connectionToDB}  = require("./database/db.js");
const notFound = require('./middleware/routeNotFound.js');
const errorHandler = require("./middleware/errorMiddleWare.js");
require("dotenv").config();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/v1/tasks", taskRouters);
app.use(notFound);
app.use(errorHandler)


const startServer = async () => {
  try {
    await connectionToDB(process.env.MONGO_URI);
    app.listen(3000, console.log(`Server is up and running at ${PORT}`));
  }
   catch (err) {
    console.log(err);
  }
};
startServer();