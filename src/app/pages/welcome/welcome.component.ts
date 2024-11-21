import { Component, OnInit } from '@angular/core';
import { ZambranoComponent } from '../../zambrano/zambrano.component';
import { NzAlertComponent } from '../../PaulGuti/nz-alert.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  imports: [ ZambranoComponent, NzAlertComponent]
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
