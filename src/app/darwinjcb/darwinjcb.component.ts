import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzRadioModule } from 'ng-zorro-antd/radio';

@Component({
  selector: 'app-darwinjcb',
  standalone: true,
  imports: [FormsModule, NzRadioModule],
  templateUrl: './darwinjcb.component.html'
})
export class DarwinjcbComponent {}
