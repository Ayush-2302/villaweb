import { Router } from "express";
import {
  createReview,
  deletebyid,
  getbylistid,
  getreviewbyid,
  updatebyid,
} from "../controller/reviewController.js";

const reviewRouter = Router();

reviewRouter.post("/createreview/:list_id", createReview);
reviewRouter.get("/getreviewbyidlist_id/:list_id", getbylistid);
reviewRouter.get("/getreviewbyid/:id", getreviewbyid);
reviewRouter.delete("/deletebyid/:id", deletebyid);
reviewRouter.put("/updatebyid/:id", updatebyid);

export default reviewRouter;
