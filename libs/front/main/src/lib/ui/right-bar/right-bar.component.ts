import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../search/search.component';
import { FollowComponent } from '../follow/follow.component';
import { TrendsComponent } from '../trends/trends.component';
import { SubscribeComponent } from '../subscribe/subscribe.component';

@Component({
  selector: 'x-clone-right-bar',
  standalone: true,
  imports: [CommonModule, SearchComponent, FollowComponent, TrendsComponent, SubscribeComponent],
  templateUrl: './right-bar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RightBarComponent {}
