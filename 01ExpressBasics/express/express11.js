const express = require("express");

const app = express();
app.use(express.static(`${__dirname}/methods-public`));
const { people } = require("./data");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/api/people", (req, res) => {
  res.status(200).json({ status: "Ok", data: people });
});
app.post("/api/people", (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(404).json({
      success: false,
      message: "provide name",
    });
  }
  return res.status(200).json({
    success: true,
    person: name,
  });
});
app.post("/api/postman/people", (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(404).json({
      success: false,
      message: "provide name",
    });
  }
  return res.status(200).json({
    success: true,
    data: [...people, name],
  });
});

app.put("/api/postman/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const person = people.find((p) => p.id === Number(id));

  if (!person) {
    return res.status(404).json({ success: false, message: "Person not found" });
  }

  // Update the name
  const updatedPeople = people.map((p) =>
    p.id === Number(id) ? { ...p, name } : p
  );

  return res.status(200).json({
    success: true,
    data: updatedPeople,
  });
});


app.delete('/api/postman/people/:id',(req,res)=>{
  const {id} = req.params;

  const person = people.find((p)=>p.id ===Number(id));

  if(!person){
    return res.status(404).json({success:false , message: "person not found"})
    
  }


  const newP = people.filter((p)=>p.id!==Number(id))

  return res.status(200).json({success:true , data : newP})
})

app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    res.status(200).send(`<h1>Hello user</h1>`);
  } else {
    res.status(404).send(`<h1>Non Authentic</h1>`);
  }
});
app.listen(5000);
