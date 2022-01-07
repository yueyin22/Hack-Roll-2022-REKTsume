const express = require("express");
const router = express.Router();
const { PythonShell } = require("python-shell");

// Change to post
router.post("/pdf", (req, res) => {
  let options = {
    mode: "text",
    pythonPath: "C:/Python38/python.exe",
    pythonOptions: ["-u"], // get print results in real-time
    args: JSON.stringify(req.body),
  };
  PythonShell.run("./routes/pdf/genPdf.py", options, function (err, results) {
    if (err) throw err;
    console.log("results: %j", results);
  });
});

module.exports = router;
