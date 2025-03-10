const express = require("express");
const router = express.Router();

const {
  getAllTasks,
  postTask,
  getOneTask,
  updateTasks,
  deleteTasks,
} = require("../controllers/tasksControllers");

router.route("/").get(getAllTasks).post(postTask);
router.route("/:id").get(getOneTask).patch(updateTasks).delete(deleteTasks);


module.exports = router;
