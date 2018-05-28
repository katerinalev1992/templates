import {Component, OnInit} from '@angular/core';
import {ChromeOSBookFactory} from '../design_pattern/creational/abstract_factory/ChromeOSBookFactory';
import {Factory} from '../design_pattern/creational/abstract_factory/Factory';
import {Geek} from '../design_pattern/creational/builder/Geek';
import Manufacturer from '../design_pattern/creational/builder/Manufacturer';
import {Sheep} from "../design_pattern/creational/prototype/Sheep";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  result: string;
  // builder_info: string;
  prototype_info: string;
  ngOnInit(): void {
    const chromeFactory = <ChromeOSBookFactory> Factory.getOSFactory(Factory.CHROMEOS);
    const chromeBook13 = chromeFactory.getChroomeBook(ChromeOSBookFactory.ChromeBookInch13);
    this.result = chromeBook13.bootChromebook();

    // const geek: Geek = new Geek(),
    //   pc: string = Manufacturer.manufacture(geek);
    //
    // this.builder_info = pc;

    // const sheep = new Sheep('Doly', 'white');
    // const cloneSheep = <Sheep> sheep.clone();
    // this.prototype_info = cloneSheep.getColor() + ' ' + cloneSheep.getName();

  }
}
