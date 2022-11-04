const router = require("express").Router();

//POST DETAILS
router.post("/", async (req, res) => {
  const details = {
    operation_type: req.body.operation_type,
    x: req.body.x,
    y: req.body.y,
  };

  value = details.operation_type.split(" ");
  operation = value[1];
  try {
    // console.log(details);
    if (operation == "addition") {
      result = details.x + details.y;
    } else if (operation == "subtraction") {
      result = details.x - details.y;
    } else if (operation == "multiplication") {
      result = details.x * details.y;
    } else if (operation !== "addition" || "subtraction" || "multiplication") {
      result = null;
    }

    res.status(201).json({
      slackUsername: "tonie",
      result,
      operation_type: details.operation_type,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
