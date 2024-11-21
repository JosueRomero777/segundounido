import { Component } from '@angular/core';

import { NzAlertModule } from 'ng-zorro-antd/alert';

@Component({
  standalone: true,
  selector: 'app-paulGuti',
  imports: [NzAlertModule],
  templateUrl: './nz-alert.component.html',
  styleUrls: ['./nz-alert.component.css']
})
export class NzAlertComponent {}
