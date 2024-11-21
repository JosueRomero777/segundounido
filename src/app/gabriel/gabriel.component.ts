import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzRateModule } from 'ng-zorro-antd/rate';

@Component({
  selector: 'app-gabriel',
  standalone: true,
  imports: [FormsModule, NzRateModule],
  templateUrl: './gabriel.component.html'
})
export class GabrielComponent {}
