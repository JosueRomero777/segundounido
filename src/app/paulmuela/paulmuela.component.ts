import { Component } from '@angular/core';

import { NzQRCodeModule } from 'ng-zorro-antd/qr-code';

@Component({
  selector: 'app-paulmuela',
  standalone: true,
  imports: [NzQRCodeModule],
  templateUrl: './paulmuela.component.html'
})
export class PaulmuelaComponent {}
