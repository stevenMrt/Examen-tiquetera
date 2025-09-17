import CreateTiquetera from "../../application/use-cases/CreateTiquetera.js";
import GetTiqueteras from "../../application/use-cases/getTiqueteras.js";
import GetTiqueteraById from "../../application/use-cases/getTiqueteraById.js";
import UpdateTiquetera from "../../application/use-cases/updateTiquetera.js";
import DeleteTiquetera from "../../application/use-cases/deletetiquetera.js";
import TiqueteraRepository from "../repositories/TiqueteraRepository.js";

const tiqueteraRepository = new TiqueteraRepository();

export const createTiquetera = async (req, res) => {
    try {
        const createdTiquetera = new CreateTiquetera(tiqueteraRepository);
        const tiquetera = await createdTiquetera.execute(req.body);
        res.status(201).json(tiquetera);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getTiqueteras = async (req, res) => {
    try {
        const getAllTiqueteras = new GetTiqueteras(tiqueteraRepository);
        const tiqueteras = await getAllTiqueteras.execute();
        res.status(200).json(tiqueteras);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getTiqueteraById = async (req, res) => {
    try {
        const getTiqueteraByIdUseCase = new GetTiqueteraById(tiqueteraRepository);
        const tiquetera = await getTiqueteraByIdUseCase.execute(req.params.id);
        if (!tiquetera) return res.status(400).json({ message: "Tiquetera no encontrada" });
        res.status(200).json(tiquetera);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updatedTiquetera = async (req, res) => {
    try {
        const updateTiqueteraById = new UpdateTiquetera(tiqueteraRepository);
        const updatedTiquetera = await updateTiqueteraById.execute(req.params.id, req.body);
        if (!updatedTiquetera) return res.status(400).json({ message: "Tiquetera no encontrada" });
        res.status(200).json(updatedTiquetera);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteTiquetera = async (req, res) => {
    try {
        const deleteTiqueteraById = new DeleteTiquetera(tiqueteraRepository);
        const deletedTiquetera = await deleteTiqueteraById.execute(req.params.id);
        if (!deletedTiquetera) return res.status(400).json({ message: "Tiquetera no encontrada" });
        res.status(200).json(deletedTiquetera);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};