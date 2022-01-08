const express = require("express");
const router = express.Router();
const { PythonShell } = require("python-shell");
const fs = require("fs");

router.get("/get-pdf", (req, res) => {
  var file = fs.createReadStream("./myresume.pdf");
  var stat = fs.statSync("./myresume.pdf");
  res.set("Content-Length", stat.size);
  res.set("Content-Type", "application/pdf; charset=latin-1");
  res.set("Content-Disposition", "attachment; filename=myresume.pdf");
  file.pipe(res);
});

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
