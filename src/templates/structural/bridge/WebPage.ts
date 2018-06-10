import {WebPageInterface} from "./WebPageInterface";
import {Theme} from "./Theme";

export class WebPage implements WebPageInterface {

  theme: Theme;

  constructor(theme: Theme) {
    this.theme = theme;
  }

  getContent(content): string {
    return content;
  }

}
