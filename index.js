import express, { Router } from "express";
import cors from "cors";
import { config } from "dotenv";
import { MongoDbConnection } from "./src/database/connection/connect.js";
import { makeUrlFactory } from "./src/factories/urlFactory.js";
import bodyParser from "body-parser";

config();
const ConnectDb = new MongoDbConnection();
await ConnectDb.connectDb();

const app = express();
const router = Router();

const urlFactory = makeUrlFactory(router);

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("", urlFactory.route());

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Running at port ${port}`);
});
