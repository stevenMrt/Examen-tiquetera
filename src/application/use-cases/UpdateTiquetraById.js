class UpdateTiquetraById {
    constructor(tiqueteraRepository) {
        this.tiqueteraRepository = tiqueteraRepository;
    }
    async execute(id, tiqueteraData) {
        const updatedTiquetera = await this.tiqueteraRepository.updateById(id, tiqueteraData);
        return updatedTiquetera;
    }
}

export default UpdateTiquetraById;