import express from "express";
import axios from "axios";
const router = new express.Router();
/**
 * @swagger
 * /task:
 * get:
 *  summary: get a task
 *  description: Use to request information about a single specific task
 *  responses:
 *    200:
 *      description: Returns a single task
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 */
router.get("/task", async (req, res) => {
  try {
    const apiResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    console.log(apiResponse.data);
    res.send(apiResponse.data);
  } catch (e) {
    res.status(404).send();
  }
});

export default router;
