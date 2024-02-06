import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PostsStore } from '../../data-access/posts.store';

@Component({
  selector: 'x-clone-posts-container',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './posts-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsContainerComponent implements OnInit {
  postStore = inject(PostsStore);

  ngOnInit(): void {
    this.postStore.loadPosts();
  }
}
