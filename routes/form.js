import express from "express";
import { formdata, getallcomment, register } from "../controllers/formController.js";
import { admin } from "../controllers/formController.js";

const router =express.Router();


router.post("/form",formdata)
router.get("/comment",getallcomment)
router.post("/admin",admin)
router.post("/register",register)
export default router;