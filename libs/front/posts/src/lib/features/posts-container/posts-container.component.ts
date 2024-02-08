import { CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PostsStore } from '../../data-access/posts.store';
import { HeaderComponent } from '../../ui/header/header.component';

@Component({
  selector: 'x-clone-posts-container',
  standalone: true,
  imports: [CommonModule, RouterLink, HeaderComponent],
  templateUrl: './posts-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PostsContainerComponent implements OnInit {
  postStore = inject(PostsStore);

  ngOnInit(): void {
    this.postStore.loadPosts();
  }
}
