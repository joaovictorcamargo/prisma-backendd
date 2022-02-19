import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";
import { categoriesRoutes } from "./routes/categories.routes";

const app = express();

app.use(express.json());

app.use("/categories", categoriesRoutes);

app.listen(3333, () => console.log("Server is running in port 3333 🚀"));
