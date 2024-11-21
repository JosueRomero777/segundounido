import { Component, OnInit } from '@angular/core';
import { GabrielComponent } from "../../gabriel/gabriel.component";

@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  imports: [GabrielComponent]
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
