export class UrlController {
  constructor(createUrlService, findUrlByIdService) {
    this.createUrlService = createUrlService;
    this.findUrlByIdService = findUrlByIdService;
  }

  async createUrlService(req, res) {
    console.log("entrou!!!!!!!!!!!!!!");
    const url = req.body.url;
    const response = await this.createUrlService.execute(url);
    res.send(response);
  }

  async findUrlByIdService(req, res) {
    const id = req.params.id;
    const response = await this.findUrlByIdService.execute(id);
    res.redirect(response.url);
  }
}
