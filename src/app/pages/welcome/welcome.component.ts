import { Component, OnInit } from '@angular/core';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { SliderComponent } from "../../slider/slider.component";

@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  imports: [NzSliderModule, SliderComponent]
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
