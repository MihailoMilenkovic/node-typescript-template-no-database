import express from "express";
import axios from "axios";
const router = new express.Router();

router.get("/task", async (req, res) => {
  try {
    const task = axios.get("https://jsonplaceholder.typicode.com/todos/1");
    res.send(task);
  } catch (e) {
    res.status(404).send();
  }
});

export default router;
