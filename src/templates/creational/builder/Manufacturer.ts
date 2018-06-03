import {PCBuilder} from "./PCBuilder";

export class Manufacturer{
  public static manufacture(builder: PCBuilder): string{
    builder.setMotherboard('Asus Z170-A ATX LGA1151');
    builder.setCpu('Intel Core i7 ');
    builder.setSsd('SanDisk SSD PLUS 240 GB');

    return builder.assemblePC();
  }
}
