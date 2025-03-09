const express  = require("express")
const app = express();
const PORT = 3000
const taskRouters = require("./routes/taskRouter")

app.use("/" ,taskRouters );
app.listen(3000 , console.log(`Server is up and running at ${PORT}`))