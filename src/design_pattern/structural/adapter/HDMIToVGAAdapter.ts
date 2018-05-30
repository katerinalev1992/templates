import {DigitalInterface} from './DigitalInterface';
import {VGA} from './VGA';

export class HDMIToVGAAdapter implements DigitalInterface {

  private vga: VGA = new VGA();
  handleDigitalSignal(): string {
    return this.vga.handleAnalogueSignal();
  }

}
