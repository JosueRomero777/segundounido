import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzRateModule } from 'ng-zorro-antd/rate';

@Component({
  selector: 'app-gabriell',
  standalone: true,
  imports: [FormsModule, NzRateModule],
  templateUrl: './gabriell.component.html'
})
export class GabriellComponent {}
