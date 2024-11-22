import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSwitchModule } from 'ng-zorro-antd/switch';

@Component({
  standalone: true,
  selector: 'app-sebas-cuesta',
  imports: [FormsModule, NzBadgeModule, NzButtonModule, NzIconModule, NzSwitchModule],
  templateUrl: './sebas-cuesta.component.html',
  styleUrls: ['./sebas-cuesta.component.css']
})
export class SebasCuestaComponent {
  count = 5;
  dot = true;

  addCount(): void {
    this.count++;
  }

  minusCount(): void {
    this.count = Math.max(0, this.count - 1);
  }
}
