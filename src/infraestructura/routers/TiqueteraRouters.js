import { Router } from "express";
import {
  createTiquetera,
  getTiquetera,
  getTiqueteraByIdController,
  updateTiquetera,
  deleteTiquetera,
} from "../controllers/TiqueteraController.js";

const router = Router();

router.post("/", createTiquetera);        
router.get("/", getTiquetera);            
router.get("/:id", getTiqueteraByIdController);
router.put("/:id", updateTiquetera);      
router.delete("/:id", deleteTiquetera);   

export default router;
