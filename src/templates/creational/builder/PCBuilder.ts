export interface PCBuilder{
  assemblePC():string;
  setCpu(cpu: string): void;
  setSsd(ssd: string):void;
  setMotherboard(motherboard: string):void;
}
