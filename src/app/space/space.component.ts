import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzSpaceModule } from 'ng-zorro-antd/space';

@Component({
  selector: 'app-space',
  standalone: true,
  imports: [FormsModule, NzButtonModule, NzSpaceModule, NzSliderModule],
  templateUrl: './space.component.html'
})
export class SpaceComponent {
  size = 8;
}
