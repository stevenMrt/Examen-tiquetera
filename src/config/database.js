import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log("🔹 Intentando conectar a MongoDB con URI:", process.env.MONGO_URI);
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Conectado a MongoDB");
  } catch (err) {
    console.error(" Error de conexión:", err);
    process.exit(1);
  }
};

export default connectDB;
