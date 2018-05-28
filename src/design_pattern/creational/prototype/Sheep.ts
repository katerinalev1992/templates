import {AbstractSheep} from "./AbstractSheep";

export class Sheep implements AbstractSheep{

  private name:string;
  private color: string;

  constructor(name: string, color: string){
    this.name = name;
    this.color = color;
  }

  clone(): AbstractSheep {
    return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
  }

  getName(): string{
    return this.name;
  }

  getColor(): string{
    return this.color;
  }
}
