export class FindUrlByIdUseCase {
  constructor(urlRepository) {
    this.repository = urlRepository;
  }

  async execute(id) {
    if (!id) {
      throw new Error("Id is invalid");
    }

    const foundUrl = await this.repository.findById(id);
    if (!foundUrl) {
      throw new Error("Id not found");
    }
    return foundUrl;
  }
}
