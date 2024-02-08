import { CUSTOM_ELEMENTS_SCHEMA, Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SidenavComponent } from '../../ui/sidenav/sidenav.component';
import { RightBarComponent } from '../../ui/right-bar/right-bar.component';

@Component({
  selector: 'x-clone-main',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SidenavComponent, RightBarComponent],
  templateUrl: './main.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MainComponent { }
