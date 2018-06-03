export class Singleton{
  private static instance: Singleton;

  constructor(param1: string, param2: number){
  }

  public static getInstance(): Singleton{
    if(!Singleton.instance){
      console.log('Create instance');
      Singleton.instance = new Singleton("Queen", 1956);
    }

    console.log("return instance");
    return Singleton.instance;
  }
}
