const express = require("express");
const Tasks = require("../models/schema");
const asynchronousWrapper = require("../middleware/asyncWrap");
const {createCustomError}= require("../errors/custom-error-handler.js")
const getAllTasks = asynchronousWrapper(async (req, res ) => {
  const getAll = await Tasks.find({});
  res.status(201).json({ getAll });
});
const postTask = asynchronousWrapper(async (req, res) => {
  const taskCreated = await Tasks.create(req.body);
  res.status(201).json({ taskCreated });
});
const getOneTask = asynchronousWrapper(async (req, res  , next ) => {
  const getSingle = await Tasks.findOne({ _id: req.params.id });
  if (!getSingle) {
   return next(createCustomError(`No task with Id  : ${req.params.id}`,404))
  }
  res.status(201).json({ getSingle });
});
const updateTasks = asynchronousWrapper(async (req, res , next) => {
  const changeTask = await Tasks.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  if (!changeTask) {
    return next(createCustomError(`No task with Id  : ${req.params.id}`,404))
  }
  res.status(200).json({ changeTask });
});
const deleteTasks = asynchronousWrapper(async (req, res  , next) => {
  const deletingTask = await Tasks.findOneAndDelete({ _id: req.params.id });
  if (!deletingTask) {
    return next(createCustomError(`No task with Id  : ${req.params.id}`,404))
  }
  res.status(200).json({ deletingTask });
});

module.exports = {
  getAllTasks,
  postTask,
  getOneTask,
  updateTasks,
  deleteTasks,
};
