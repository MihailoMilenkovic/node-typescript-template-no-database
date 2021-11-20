import express from "express";
const { sendWelcomeEmail, sendRemovalEmail } = require("../emails/account");
const router = new express.Router();

router.get("/task", async (req, res) => {
  try {
    const task = "asdf";
    res.send(task);
  } catch (e) {
    res.status(404).send();
  }
});

export default router;
