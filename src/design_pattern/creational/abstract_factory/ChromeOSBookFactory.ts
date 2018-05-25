export class ChromeOSBookFactory {
  static get ChromeBookInch13() {
    return 0;
  }

  static get ChromeBookInch15() {
    return 1;
  }

  getChroomeBook(id) {
    switch (id) {
      case ChromeOSBookFactory.ChromeBookInch13:
        return new ChromeBookInch13();
      case ChromeOSBookFactory.ChromeBookInch15:
        return new ChromeBookInch15();
      default:
        throw new Error('The ChroomeBook you are looking for has not been found');
    }
  }
}

export class ChromeBook {
  name: string;
  constructor(name) {
    console.log(name)
    console.log(new.target)
    this.name = name;
  }

  bootChromebook() {
    return `${this.name} is booting...`;
  }
}

class ChromeBookInch13 extends ChromeBook {
  constructor() {
    super('ChromeBook 13 inches');
  }
}

class ChromeBookInch15 extends ChromeBook {
  constructor() {
    super('ChromeBook 15 inches');
  }
}
