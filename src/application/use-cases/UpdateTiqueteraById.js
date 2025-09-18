class UpdateTiqueteraById {
  constructor(tiqueteraRepository) {
    this.tiqueteraRepository = tiqueteraRepository;
  }

  async execute(id) {
    const tiqueteraActualizada = await this.tiqueteraRepository.incrementarTransaccion(id);

    if (!tiqueteraActualizada) {
      throw new Error("Tiquetera no encontrada");
    }

    return tiqueteraActualizada;
  }
}

export default UpdateTiqueteraById;
