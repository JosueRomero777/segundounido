import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzSwitchModule } from 'ng-zorro-antd/switch';

@Component({
  selector: 'app-switch-pau',
  standalone: true,
  imports: [FormsModule, NzSwitchModule],
  templateUrl: './switch-pau.component.html'
})
export class SwitchPauComponent {}
