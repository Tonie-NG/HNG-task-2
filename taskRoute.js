const router = require("express").Router();

//GET DETAILS
router.get("/", async (req, res) => {
  try {
    const details = {
      slackUsername: "tonie",
      backend: true,
      age: 20,
      bio: "I'm a Full Stack Software Developer and Technical writer focused on building and developing functional web-based software applications.",
    };
    res.status(200).json(details);
  } catch (error) {
    res.status(500).json("An error Occured");
  }
});

module.exports = router;
