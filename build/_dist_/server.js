import express from "express";
import path from "path";
const app = express();
const port = process.env.PORT || 3e3;
app.use(express.static(path.join(__dirname, "../public")));
app.use("/node_modules", express.static(path.join(__dirname, "../node_modules")));
app.get("*.ts", (req, res) => {
  const tsPath = path.join(__dirname, "../public", req.path);
  res.sendFile(tsPath);
});
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
