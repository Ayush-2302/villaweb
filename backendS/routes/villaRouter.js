import { Router } from "express";
import { addVilla } from "../controller/villaController.js";

const router = Router();
router.post("/addvilla", addVilla);
export default router;
