import {WebPage} from "./WebPage";
import {Theme} from "./Theme";

export class About extends WebPage{
  theme: Theme;
  constructor(theme: Theme){
    super(theme);
  }

  getContent(){
    return "About page with" + this.theme.getColor();
  }
}
