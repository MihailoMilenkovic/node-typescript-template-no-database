import express from "express";
const { sendWelcomeEmail, sendRemovalEmail } = require("../emails/account");
const router = new express.Router();

router.get("/user", async (req, res) => {
  try {
    const user = "asdf";
    res.send(user);
  } catch (e) {
    res.status(404).send();
  }
});

export default router;
