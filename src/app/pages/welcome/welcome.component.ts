import { Component, OnInit } from '@angular/core';
import { SebastianPComponent } from '../../sebastian-p/sebastian-p.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  imports: [SebastianPComponent],
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
