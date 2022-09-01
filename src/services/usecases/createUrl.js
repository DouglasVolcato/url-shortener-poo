import { Url } from "../../entities/urlEntity.js";

export class CreateUrlUseCase {
  constructor(urlRepository) {
    this.repository = urlRepository;
  }

  async execute(url) {
    const newUrl = new Url(url);
    newUrl.validate();
    return await this.repository.create(newUrl.getUrl());
  }
}
