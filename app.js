import express from "express";
import router from "./rotas/index.rotas.js";
import cors from "cors";

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(router);

const port = 8000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
