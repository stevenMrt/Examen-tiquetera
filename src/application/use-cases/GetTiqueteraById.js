class GetTiqueteraById{
    constructor(tiqueteraRepository) {
        this.tiqueteraRepository = tiqueteraRepository;
    }
    async execute(id) {
        const tiquetera = await this.tiqueteraRepository.getById(id);
        return tiquetera;
    }
}