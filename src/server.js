import express from "express";
import bodyParser from "body-parser";
var favicon = require('serve-favicon')
var path = require('path')
import cors from "cors";
import words from "./api/words.route";

const app = express();

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/words", words);

app.use("*", (req, res) => res.status(404).json({ error: "not found" }));

export default app;
