const router = require("express").Router();

//POST DETAILS
router.get("", async (req, res) => {
  try {
    const details =
      "Welcome to my application. Kindly query the right parameters in the url above ☝️";
    res.status(200).json(details);
  } catch (error) {
    res.status(500).json("An error Occured");
  }
});

module.exports = router;
