import {ChromeOSBookFactory} from "./ChromeOSBookFactory";

export default class FactoryOfFactories{
  static get CHROMEOSBOOK(){
    return 0;
  }

  static get MACBOOK(){
    return 1;
  }

  static get WINGOWS(){
    return 2;
  }

  static getOSFactory(label){
    switch(label){
      case FactoryOfFactories.CHROMEOSBOOK:
        return new ChromeOSBookFactory();
      case FactoryOfFactories.MACBOOK:
        // return new MacbookFactory();
      case FactoryOfFactories.WINGOWS:
        // return new WindowsFactory();
      default:
        throw new Error('OS is not recognized');
    }
  }
}
