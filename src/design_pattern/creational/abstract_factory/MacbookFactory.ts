export class MacbookFactory {

  static get MacbookProInch13() {
    return 0;
  }

  static get MacbookProInch15() {
    return 1;
  }

  static get MacbookInch12() {
    return 2;
  }

  getMacbook(id) {
    switch (id) {
      case MacbookFactory.MacbookProInch13:
        return new MacbookProInch13();
      case MacbookFactory.MacbookProInch15:
        return new MacbookProInch15();
      case MacbookFactory.MacbookInch12:
        return new MacbookInch12();
      default:
        throw new Error('The Linux distribution you are looking for has not been found');
    }
  }
}

class MacBook {
  name: string;

  constructor(name) {
    if (new.target !== undefined) {
      throw new Error('You cannot instantiate an abstract class!');
    }
    this.name = name;
  }

  bootMacbook() {
    return `${this.name} is booting...`;
  }

  getInfo() {
    return this.name;
  }
}

class MacbookProInch13 extends MacBook {
  constructor() {
    super('Macbook pro 13 inches');
  }
}

class MacbookProInch15 extends MacBook {
  constructor() {
    super('Macbook pro 15 inches');
  }
}

class MacbookInch12 extends MacBook {
  constructor() {
    super('Macbook 12 inches');
  }
}

