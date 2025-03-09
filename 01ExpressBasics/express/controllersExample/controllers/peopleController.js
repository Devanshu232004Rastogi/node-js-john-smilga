const express = require("express");

const { people } = require("../../data");



const getPeople = (req, res) => {
  res.status(200).json({ status: "Ok", data: people });
};

const postPeople = (req, res) => {
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
};

const postUsingPostman = (req, res) => {
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
};

const putPeople = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const person = people.find((p) => p.id === Number(id));

  if (!person) {
    return res
      .status(404)
      .json({ success: false, message: "Person not found" });
  }

  // Update the name
  const updatedPeople = people.map((p) =>
    p.id === Number(id) ? { ...p, name } : p
  );

  return res.status(200).json({
    success: true,
    data: updatedPeople,
  });
};

const removePeople = (req, res) => {
  const { id } = req.params;

  const person = people.find((p) => p.id === Number(id));

  if (!person) {
    return res
      .status(404)
      .json({ success: false, message: "person not found" });
  }

  const newP = people.filter((p) => p.id !== Number(id));

  return res.status(200).json({ success: true, data: newP });
};

module.exports = {
  getPeople,
  postPeople,
  postUsingPostman,
  putPeople,
  removePeople,
};
