class GetTiquetera {
    constructor(tiqueteraRepository) {
        this.tiqueteraRepository = tiqueteraRepository;
    }
    async execute() {
        const tiquetera = await this.tiqueteraRepository.getById(id);
        return tiquetera;
    }
}