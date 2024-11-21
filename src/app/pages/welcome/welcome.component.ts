import { Component, OnInit } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { SpaceComponent } from '../../space/space.component';
import { PaulmuelaComponent } from '../../paulmuela/paulmuela.component';



@Component({
  selector: 'app-welcome',
  standalone: true,
  imports:[SpaceComponent, PaulmuelaComponent],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
