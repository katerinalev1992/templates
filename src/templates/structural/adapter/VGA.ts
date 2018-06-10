import {AnalogueInterface} from "./AnalogueInterface";

export class VGA implements AnalogueInterface{

  handleAnalogueSignal(): string {
    return "Interface: VGA; \nSignal: analogue";
  }

}
