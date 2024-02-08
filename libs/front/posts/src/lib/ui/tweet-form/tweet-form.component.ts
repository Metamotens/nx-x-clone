import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'x-clone-tweet-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tweet-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TweetFormComponent {}
