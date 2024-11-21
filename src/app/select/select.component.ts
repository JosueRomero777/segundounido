import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzSelectModule } from 'ng-zorro-antd/select';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [FormsModule, NzSelectModule],
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent {}
