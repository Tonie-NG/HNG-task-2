const router = require("express").Router();

//POST DETAILS
router.post("/", async (req, res) => {
  const details = {
    operation_type: req.body.operation_type,
    x: req.body.x,
    y: req.body.y,
  };

  try {
    // console.log(details);
    if (operation_type == "addition") {
      result = details.x + details.y;
    } else if (operation_type == "subtraction") {
      result = details.x - details.y;
    } else if (operation_type == "multiplication") {
      result = details.x * details.y;
    } else if (
      operation_type !== "addition" ||
      "subtraction" ||
      "multiplication"
    ) {
      result = null;
    }

    res.status(200).json({
      slackUsername: "tonie",
      result,
      operation_type: details.operation_type,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json(error);
  }
});

module.exports = router;
