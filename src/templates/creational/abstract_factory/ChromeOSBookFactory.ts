export class ChromeOSBookFactory{
  static get ChromeBookInch13(){
    return 0;
  }

  static get  ChromeBookInch15(){
    return 1;
  }

  getChromeBook(label){
    switch(label){
      case ChromeOSBookFactory.ChromeBookInch13:
        return new ChromeBookInch13();
      case ChromeOSBookFactory.ChromeBookInch15:
        return new ChromeBookInch15();
      default:
        throw new Error ("Model is not recognized");
    }
  }
}

class ChromeBook {
  name: string;
  constructor(name){
    this.name = name;
  }

  bootLaptop(){
    return `${this.name} is booting ... `;
  }
}

class ChromeBookInch13 extends ChromeBook {
  constructor(){
    super('Chromebook 13 inches');
  }
}

class ChromeBookInch15 extends ChromeBook{
  constructor(){
    super('Chromebook 15 inches');
  }
}
