import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'x-clone-follow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './follow.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FollowComponent {
  follows = [{ name: 'MetaComp1', subname: '@MetaCompX' }, { name: 'MetaComp2', subname: '@MetaCompX' }, { name: 'MetaComp3', subname: '@MetaCompX' }];
}
