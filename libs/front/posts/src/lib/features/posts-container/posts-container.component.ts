import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'x-clone-posts-container',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './posts-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsContainerComponent {}
