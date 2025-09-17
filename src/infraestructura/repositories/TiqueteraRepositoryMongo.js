import mongosse from "mongoose";

const tiqueteraSchema = new mongosse.Schema({
    numeroTiquetera: { type: String, required: true, unique: true },
    cliente: { type: String, required: true },
    saldo: { type: Number, default: 0 },
    totalTransacciones: {},
});
const TiqueteraModel = mongosse.model("Tiquetera", tiqueteraSchema);

class TiqueteraRepositoryMongo {
    constructor() {
        this.tiqueteraModel = TiqueteraModel;
    }
async create(tiqueteraData) {
    const tiquetera = new this.tiqueteraModel(tiqueteraData);
    return await tiquetera.save();
}
async findAll() {
    return await this.tiqueteraModel.find();
}

async findById(id) {
    return await this.tiqueteraModel.findById(id);
}

async updateById(id, tiqueteraData) {
    return await this.tiqueteraModel.findByIdAndUpdate(id, tiqueteraData, { new: true });
}

async deleteById(id) {
    return await this.tiqueteraModel.findByIdAndDelete(id);
}
}
export default TiqueteraRepositoryMongo;