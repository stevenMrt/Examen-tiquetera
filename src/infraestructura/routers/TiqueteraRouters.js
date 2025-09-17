import { Router } from "express";
import {
    createTiquetera,
    getTiqueteras,
    getTiqueteraById,
    updateTiquetera,
    deleteTiquetera

} from "../controllers/TiqueteraController.js";

const router = Router();

router.post("/tiqueteras", createTiquetera);
router.get("/tiqueteras", getTiqueteras);
router.get("/tiqueteras/:id", getTiqueteraById);
router.put("/tiqueteras/:id", updateTiquetera);
router.delete("/tiqueteras/:id", deleteTiquetera);

export default router;