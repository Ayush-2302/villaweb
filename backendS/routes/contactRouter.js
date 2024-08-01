import { Router } from "express";
const router = Router();
import { addContact } from "../controller/contactController.js";
router.post("/contact", addContact);

export default router;
