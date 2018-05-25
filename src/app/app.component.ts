import {Component, OnInit} from '@angular/core';
import {ChromeOSBookFactory} from '../design_pattern/creational/abstract_factory/ChromeOSBookFactory';
import {Factory} from '../design_pattern/creational/abstract_factory/Factory';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  result: string;
  ngOnInit(): void {
    const chromeFactory = <ChromeOSBookFactory> Factory.getOSFactory(Factory.CHROMEOS);
    const chromeBook13 = chromeFactory.getChroomeBook(ChromeOSBookFactory.ChromeBookInch13);
    this.result = chromeBook13.bootChromebook();
  }
}
