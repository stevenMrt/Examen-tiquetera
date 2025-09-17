class CreateTiquetera {
  constructor(tiqueteraRepository) {
    this.tiqueteraRepository = tiqueteraRepository;
  }
    async execute(tiqueteraData) {
   
    const newTiquetera = await this.tiqueteraRepository.create(data);
    return newTiquetera;
  }
}

export default CreateTiquetera;