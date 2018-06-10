import {Component, OnInit} from '@angular/core';
import {ChromeOSBookFactory} from "../templates/creational/abstract_factory/ChromeOSBookFactory";
import FactoryOfFactories from "../templates/creational/abstract_factory/FactoryOfFactories";
import {Geek} from "../templates/creational/builder/Geek";
import {Manufacturer} from "../templates/creational/builder/Manufacturer";
import {Sheep} from "../templates/creational/prototype/Sheep";
import {Singleton} from "../templates/creational/singleton/Singleton";
import {HDMIToVGAAdapter} from "../templates/structural/adapter/HDMIToVGAAdapter";
import {About} from "../templates/structural/bridge/About";
import {LightTheme} from "../templates/structural/bridge/LightTheme";
import {Contacts} from "../templates/structural/bridge/Contacts";
import {DarkTheme} from "../templates/structural/bridge/DarkTheme";
import {Company} from "../templates/structural/composite/Company";
import {Designer} from "../templates/structural/composite/Designer";
import {Developer} from "../templates/structural/composite/Developer";

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
  adapter_result: string;
  bridge_result: string;
  composite_result: string;

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

    const adapter: HDMIToVGAAdapter = new HDMIToVGAAdapter();
    this.adapter_result = adapter.handleDigitalSignal();

    const about: About = new About(new LightTheme());
    const contacts: Contacts = new Contacts(new DarkTheme());

    this.bridge_result = about.getContent();
    this.bridge_result += "\n";
    this.bridge_result += contacts.getContent();


    const company = new Company();
    company.addEmployee(new Designer("John Doe", 3000));
    company.addEmployee(new Developer("Mike Doe"));
    company.addEmployee(new Designer("Mike Doe2"));
    company.addEmployee(new Developer("Mike Doe3", 4000));

    company.getNetSalary();
  }


}
