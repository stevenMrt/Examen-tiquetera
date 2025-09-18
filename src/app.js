  import "dotenv/config";
  import express from "express";
  import cors from "cors";
  import mongoose from "mongoose";

  import TiqueteraRouters from "./infraestructura/routers/TiqueteraRouters.js";

  const app = express();
  const PORT = process.env.PORT || 3000;

  // 
  app.use(express.json());
  app.use(cors());

  app.use("/tiqueteras", TiqueteraRouters);

  app.get("/", (req, res) => {
  });

  const startServer = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URI);
      console.log("Conectado a MongoDB");

      app.listen(PORT, () => {
        console.log(`Servidor corriendo en: http://localhost:${PORT}`);
      });
    } catch (err) {
      console.error("Error al conectar MongoDB:", err.message);
    } 
  };

  startServer();

  export default app;
