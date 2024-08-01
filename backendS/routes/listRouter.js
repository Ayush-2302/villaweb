import { Router } from "express";
import {
  createList,
  fetchAllList,
  fetchById,
} from "../controller/listController.js";

const listRouter = Router();

listRouter.post("/list", createList);
listRouter.get("/list", fetchAllList);
listRouter.get("/list/:id", fetchById);

export default listRouter;
