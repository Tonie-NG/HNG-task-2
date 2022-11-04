const router = require("express").Router();

//POST DETAILS
router.post("/", async (req, res) => {
  const details = {
    operation_type: req.body.operation_type,
    x: req.body.x,
    y: req.body.y,
  };

  data = details.operation_type;
  try {
    // console.log(details);
    if (data == "addition") {
      result = details.x + details.y;
    } else if (data == "subtraction") {
      result = details.x - details.y;
    } else if (data == "multiplication") {
      result = details.x * details.y;
    } else if (data !== "addition" || "subtraction" || "multiplication") {
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
