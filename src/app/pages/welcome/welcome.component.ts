import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Componentes y módulos de terceros
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

// Componentes personalizados
import { ZambranoComponent } from '../../zambrano/zambrano.component';
import { NzAlertComponent } from '../../PaulGuti/nz-alert.component';

@Component({
  standalone: true,
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  imports: [FormsModule,NzBadgeModule,NzButtonModule,NzIconModule,NzSwitchModule,NzAvatarModule,NzDividerModule,NzToolTipModule,
    ZambranoComponent,NzAlertComponent
  ]
})
export class WelcomeComponent implements OnInit {
  count = 5;
  dot = true;

  constructor() {}

  ngOnInit(): void {}

  addCount(): void {
    this.count++;
  }

  minusCount(): void {
    this.count = Math.max(0, this.count - 1);
  }
}
