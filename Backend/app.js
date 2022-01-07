const express = require("express");
const app = express();

const pdfRouter = require("./routes/pdf/genPdf");
app.use("/", pdfRouter);

app.listen(3000);
