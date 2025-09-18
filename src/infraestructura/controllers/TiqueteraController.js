import CreateTiquetera from "../../application/use-cases/CreateTiquetera.js";
import GetTiquetera from "../../application/use-cases/GetTiquetera.js";
import GetTiqueteraById from "../../application/use-cases/GetTiqueteraById.js";
import UpdateTiqueteraById from "../../application/use-cases/UpdateTiqueteraById.js";
import DeleteTiqueteraById from "../../application/use-cases/DeleteTiqueteraById.js";
import TiqueteraRepository from "../repositories/TiqueteraRepositoryMongo.js";

const tiqueteraRepository = new TiqueteraRepository();

export const createTiquetera = async (req, res) => {
  try {
    const useCase = new CreateTiquetera(tiqueteraRepository);
    const tiquetera = await useCase.execute(req.body);
    res.status(201).json(tiquetera);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getTiquetera = async (req, res) => {
  try {
    const useCase = new GetTiquetera(tiqueteraRepository);
    const tiqueteras = await useCase.execute();
    res.status(200).json(tiqueteras);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getTiqueteraByIdController = async (req, res) => {
  try {
    const useCase = new GetTiqueteraById(tiqueteraRepository);
    const tiquetera = await useCase.execute(req.params.id);
    if (!tiquetera) return res.status(404).json({ message: "Tiquetera no encontrada" });
    res.status(200).json(tiquetera);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateTiquetera = async (req, res) => {
  try {
    const useCase = new UpdateTiqueteraById(tiqueteraRepository);
    const updated = await useCase.execute(req.params.id); // <-- solo id
    if (!updated) return res.status(404).json({ message: "Tiquetera no encontrada" });
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteTiquetera = async (req, res) => {
  try {
    const useCase = new DeleteTiqueteraById(tiqueteraRepository);
    const deleted = await useCase.execute(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Tiquetera no encontrada" });
    res.status(200).json(deleted);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
