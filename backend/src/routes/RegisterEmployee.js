import express from "express";
import registerEmployeeController from "../controllers/registerEmployeesController.js";

const router = express.Router()
router.route("/").post(registerEmployeeController.register);
export default router;