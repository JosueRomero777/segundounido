import { Component, OnInit } from '@angular/core';
import { SwitchPauComponent } from '../../switch-pau/switch-pau.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports:[SwitchPauComponent],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
