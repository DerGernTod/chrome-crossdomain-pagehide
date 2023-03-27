import express from "express";
import { readFileSync } from "fs";
const app = express();

app.get("/", (req, res) => {
    res.setHeader("content-type", "text/html");
    res.send(readFileSync("index.html").toString());
});
app.get("/image.jpg", () => {
    // intentionally never send a response
});

app.listen(3000, () => console.log("Server listening to port ", 3000));
