import express from "express";
import path from "path";
const hostname = "127.0.0.1";
const app = express();
const port = 3000;
import {fileURLToPath} from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use("/public", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/v1/cat", (req, res) => {
  const cat = {
    cat_id: 1,
    name: "Fluffy",
    birthdate: "2018-01-01",
    weight: 10,
    owner: "Random",
    image: "https://loremflickr.com/320/240/cat",
  };
  res.json(cat);
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
