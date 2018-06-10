import {WebPage} from "./WebPage";
import {Theme} from "./Theme";

export class Contacts extends WebPage{
  theme: Theme;
  constructor(theme: Theme){
    super(theme);
  }

  getContent(){
    return "Contacts page with" + this.theme.getColor();
  }
}
