import { urlModel } from "../schemas/schemas.js";

export class UrlRepository {
  async create(url) {
    return await urlModel.create(url);
  }
  async findById(id) {
    return await urlModel.findOne({ id: id });
  }
}
