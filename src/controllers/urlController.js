export class UrlController {
  constructor(createUrlService, findUrlByIdService) {
    this.createUrlService = createUrlService;
    this.findUrlByIdService = findUrlByIdService;
  }

  async createUrlController(req, res) {
    const url = req.body.url;
    const response = await this.createUrlService.execute(url);
    res.send(response);

    const bodyUrl = req.body.url;

    // const parsedUrl = dns.lookup(
    //   urlParser.parse(bodyUrl).hostname,
    //   (err, address) => {
    //     if (!address) {
    //       res.json({ error: "Invalid URL" });
    //     } else {
    //       const link = new Url({ url: bodyUrl });

    //       link.save((err, data) => {
    //         res.json({
    //           original_url: data.url,
    //           short_url:
    //             "https://douglasvolcato-url-shortener.herokuapp.com/shorturl/" +
    //             data.id,
    //         });
    //       });
    //     }
    //   }
    // );
  }

  async findUrlByIdController(req, res) {
    const id = req.params.id;
    const response = await this.findUrlByIdService.execute(id);
    res.redirect(response.url);
  }
}
