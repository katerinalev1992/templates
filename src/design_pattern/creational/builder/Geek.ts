import PCBuilder from './PC_Builder';
import {PC} from './PC';

export class Geek implements PCBuilder {
private pc = new PC();

public assemblePC(): string {
    return this.pc.toString();
  }

public setMotherboard(motherboard: string): void {
    this.pc.setMotherboard(motherboard);
}

public setCpu(cpu: string): void {
    this.pc.setCpu(cpu);
}

public setRam(ram: string): void {
    this.pc.setRam(ram);
}

public setSsd(ssd: string): void {
    this.pc.setSsd(ssd);
}

public setNic(nic: string): void {
    this.pc.setNic(nic);
}

public setPowerSupply(powerSupply: string): void {
    this.pc.setPowerSupply(powerSupply);
}

public setCaseDesign(caseDesign: string): void {
    this.pc.setCaseDesign(caseDesign);
}
}
