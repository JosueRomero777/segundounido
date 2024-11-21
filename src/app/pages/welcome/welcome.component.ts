import { Component, OnInit } from '@angular/core';
import { GabriellComponent } from '../../gabriell/gabriell.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports:[GabriellComponent],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
