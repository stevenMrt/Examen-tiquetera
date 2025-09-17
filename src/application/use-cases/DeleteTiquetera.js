class DeleteTiquetera {
    constructor(tiqueteraRepository) {
        this.tiqueteraRepository = tiqueteraRepository;
    }
    async execute(id) {
        const deletedTiquetera = await this.tiqueteraRepository.delete(id);
        return deletedTiquetera;
    }
}