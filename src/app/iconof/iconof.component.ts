import { Component } from '@angular/core';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { SerggioComponent } from '../serggio/serggio.component';

@Component({
  selector: 'app-iconof',
  standalone: true,
  imports: [NzIconModule,SerggioComponent],
  templateUrl: './iconof.component.html',
  styleUrls: ['./iconof.component.css']
})
export class IconofComponent {}
