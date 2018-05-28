export class Singleton {
  private static instance: Singleton;

  constructor(param1: string, param2: string) {
  }
  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton('Parameter1', 'Parameter2');
    }

    return Singleton.instance;
  }

}
