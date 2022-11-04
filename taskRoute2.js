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
    if (operation == "+") {
      result = details.x + details.y;
    } else if (operation == "-") {
      result = details.x - details.y;
    } else if (operation == "*" || "x") {
      result = details.x * details.y;
    }

    res.status(201).json({
      slackUsername: "tonie",
      operation_type: details.operation_type,
      result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
