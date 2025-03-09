const express = require("express");
const route = express.Router();
const {
  getPeople,
  postPeople,
  postUsingPostman,
  putPeople,
  removePeople,
} = require("../controllers/peopleController");

// route.get("/", getPeople);
// route.post("/", postPeople);
// route.post("/postman", postUsingPostman);

// route.put("/postman/:id", putPeople);

// route.delete("/postman/:id", removePeople);



route.route("/").get(getPeople).post(postPeople)
route.route("/postman").post(postUsingPostman)
route.route("/postman/:id").put(putPeople).delete(removePeople)

module.exports = route;
