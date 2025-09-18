class DeleteTiqueteraById {
  constructor(tiqueteraRepository) {
    this.tiqueteraRepository = tiqueteraRepository;
  }

  async execute(id) {
    return await this.tiqueteraRepository.deleteById(id);
  }
}

export default DeleteTiqueteraById;
