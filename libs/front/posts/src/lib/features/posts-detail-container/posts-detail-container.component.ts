import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'x-clone-posts-detail-container',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './posts-detail-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsDetailContainerComponent {}
