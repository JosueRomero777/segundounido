import { Component, OnInit } from '@angular/core';
import { ZambranoComponent } from '../../zambrano/zambrano.component';
import { NzAlertComponent } from '../../PaulGuti/nz-alert.component';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

@Component({
  standalone: true,
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  imports: [ZambranoComponent, NzAlertComponent,NzAvatarModule, NzDividerModule, NzToolTipModule]
})
export class WelcomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
