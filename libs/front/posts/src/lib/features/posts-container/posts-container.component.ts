import { CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PostsStore } from '../../data-access/posts.store';
import { HeaderComponent } from '../../ui/header/header.component';
import { PostComponent } from '../../ui/post/post.component';
import { TweetFormComponent } from '../../ui/tweet-form/tweet-form.component';

@Component({
  selector: 'x-clone-posts-container',
  standalone: true,
  imports: [CommonModule, RouterLink, HeaderComponent, PostComponent, TweetFormComponent],
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
