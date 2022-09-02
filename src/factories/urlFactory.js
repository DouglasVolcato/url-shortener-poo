import { UrlRepository } from "../database/repository/urlRepository.js";
import { CreateUrlUseCase } from "../services/usecases/createUrl.js";
import { FindUrlByIdUseCase } from "../services/usecases/findUrl.js";
import { UrlController } from "../controllers/urlController.js";
import { UrlRoutes } from "../routes/urlRoutes.js";

export function makeUrlFactory(router) {
  const urlRepository = new UrlRepository();

  const createUrlUseCase = new CreateUrlUseCase(urlRepository);
  const findUrlByIdUseCase = new FindUrlByIdUseCase(urlRepository);

  const urlController = new UrlController(createUrlUseCase, findUrlByIdUseCase);

  const urlRoutes = new UrlRoutes(urlController, router);

  return urlRoutes;
}
