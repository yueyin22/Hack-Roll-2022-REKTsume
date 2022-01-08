const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.options("/pdf", cors());
app.options("/get-pdf", cors());

const pdfRouter = require("./routes/pdf/genPdf");
app.use("/", pdfRouter);

app.listen(port, () => {
  console.log(`App listening on port ${port}.`);
});
