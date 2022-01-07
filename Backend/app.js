const express = require("express");
const app = express();
const port = process.nextTick.port || 3000;

app.use(express.json());

const pdfRouter = require("./routes/pdf/genPdf");
app.use("/", pdfRouter);

app.listen(port, () => {
  console.log(`App listening on port ${port}.`);
});
