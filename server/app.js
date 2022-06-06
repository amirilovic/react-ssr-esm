import cors from "cors";
import express from "express";
import { renderToString } from "./render-to-string.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use(express.static("public"));

app.use('/client', express.static("client"));

app.get(
  "*",
  async (
    req,
    res,
    next
  ) => {
    try {
      const html = await renderToString({ url: req.url });
      res.send(html);
    } catch (err) {
      console.error(err);
      next(err);
    }
  }
);

app.use((_req, res) => {
  res.status(404).send({ message: "NotFound" });
});

app.use(
  (
    error,
    _req,
    res,
    _next
  ) => {
    res.status(500).send({ message: "InternalServerError", error });
  }
);

export { app };
