import {ChromeOSBookFactory} from './ChromeOSBookFactory';
import {MacbookFactory} from './MacbookFactory';
import {WindowsFactory} from './WindowsFactory';

export class Factory {

  static get CHROMEOS() { return 0; }
  static get MACBOOK() { return 1; }
  static get WINDOWS() { return 2; }

  static getOSFactory(id) {
    switch (id) {
      case Factory.CHROMEOS:
        return new ChromeOSBookFactory();
      case Factory.MACBOOK:
        return new MacbookFactory();
      case Factory.WINDOWS:
        return new WindowsFactory();
      default:
        throw new Error('The factory you are looking for has not been found');
    }
  }
}
