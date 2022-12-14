export class UrlRoutes {
  constructor(controller, router) {
    this.controller = controller;
    this.router = router;
  }

  route() {
    this.router.post("/shorturl", (req, res) =>
      this.controller.createUrlController(req, res)
    );

    this.router.get("/shorturl/:id", (req, res) =>
      this.controller.findUrlByIdController(req, res)
    );
    this.router.get("/", (req, res) =>
      res.sendFile(process.cwd() + "/views/index.html")
    );
    return this.router;
  }
}
