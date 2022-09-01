import { randomUUID } from "node:crypto";
import { url } from "node:inspector";

export class Url {
  constructor(url) {
    this.id = randomUUID();
    this.url = url;
  }

  validate() {
    if (url) {
      console.log(url)
      console.log("Valid url");
    } else {
      throw new Error("Invalid url");
    }
  }

  getUrl() {
    return {
      id: this.id,
      url: this.url,
    };
  }
}
