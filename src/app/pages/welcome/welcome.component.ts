import { Component, OnInit } from '@angular/core';
import { DiazcheckComponent } from '../../diazcheck/diazcheck.component';
import { SelectComponent } from '../../select/select.component';
import { MateoLComponent } from '../../mateo-l/mateo-l.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  imports: [DiazcheckComponent, SelectComponent, MateoLComponent]
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
