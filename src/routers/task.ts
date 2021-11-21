import express from "express";
import axios from "axios";
const router = new express.Router();
/**
 * @swagger
 * /api/clients:
 *  get:
 *    summary: get clients
 *    description: Use to request all clients
 *    responses:
 *      200:
 *        description: Returns an array of all clients
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: "#/components/schemas/Client"
 *      500:
 *        description: Server error
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
