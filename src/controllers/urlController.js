import dns from "dns";
import urlParser from "url";

export class UrlController {
  constructor(createUrlService, findUrlByIdService) {
    this.createUrlService = createUrlService;
    this.findUrlByIdService = findUrlByIdService;
  }

  async createUrlController(req, res) {
    const bodyUrl = req.body.url;

    dns.lookup(urlParser.parse(bodyUrl).hostname, async (err, address) => {
      if (!address) {
        res.send({ error: "Invalid URL" });
      } else {
        const link = await this.createUrlService.execute(bodyUrl);

        link.save((err, data) => {
          res.send({
            original_url: data.url,
            short_url: data.id,
          });
        });
      }
    });
  }

  async findUrlByIdController(req, res) {
    const id = req.params.id;
    const response = await this.findUrlByIdService.execute(id);
    res.redirect(response.url);
  }
}
