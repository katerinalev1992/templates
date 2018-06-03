import {Component, OnInit} from '@angular/core';
import {ChromeOSBookFactory} from "../templates/creational/abstract_factory/ChromeOSBookFactory";
import FactoryOfFactories from "../templates/creational/abstract_factory/FactoryOfFactories";
import {Geek} from "../templates/creational/builder/Geek";
import {Manufacturer} from "../templates/creational/builder/Manufacturer";
import {Sheep} from "../templates/creational/prototype/Sheep";
import {Singleton} from "../templates/creational/singleton/Singleton";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  result: string;
  builder_result:string;
  prototype_result:string;
  singleton_result:string;

  ngOnInit(): void {

    const chromeFactory = <ChromeOSBookFactory> FactoryOfFactories.getOSFactory(FactoryOfFactories.CHROMEOSBOOK);
    const chromeBook13 = chromeFactory.getChromeBook(ChromeOSBookFactory.ChromeBookInch13);
    this.result = chromeBook13.bootLaptop();

    const geek: Geek = new Geek();
    const pc: string = Manufacturer.manufacture(geek);
    this.builder_result = pc;

    const sheep: Sheep = new Sheep('Moly', 'white');
    const cloneSheep = <Sheep> sheep.clone();
    this.prototype_result = `${cloneSheep.getColor()} ${cloneSheep.getName()}`;

    const singleton = Singleton.getInstance();
    const singleton2 = Singleton.getInstance();

    this.singleton_result = (singleton === singleton2).toString();
  }


}
