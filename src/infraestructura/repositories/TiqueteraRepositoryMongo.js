import mongoose from "mongoose";

const tiqueteraSchema = new mongoose.Schema({
  numeroTiquetera: { type: String, required: true, unique: true },
  cliente: { type: String, required: true },
  saldo: { type: Number, default: 0 },
  totalTransacciones: { type: Number, default: 0 },
});

const TiqueteraModel = mongoose.model("Tiquetera", tiqueteraSchema);

class TiqueteraRepository {
  async create(data) {
    return await new TiqueteraModel(data).save();
  }

  async findAll() {
    return await TiqueteraModel.find();
  }

  async findById(id) {
    return await TiqueteraModel.findById(id);
  }

  async updateById(id, data) {
    return await TiqueteraModel.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteById(id) {
    return await TiqueteraModel.findByIdAndDelete(id);
  }

  async incrementarTransaccion(id) {
    return await TiqueteraModel.findByIdAndUpdate(
      id,
      { $inc: { totalTransacciones: 1 } },
      { new: true }
    );
  }
}

export default TiqueteraRepository;
