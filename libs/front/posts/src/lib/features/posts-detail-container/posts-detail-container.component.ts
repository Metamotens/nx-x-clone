import { ChangeDetectionStrategy, Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PostsStore } from '../../data-access/posts.store';

@Component({
  selector: 'x-clone-posts-detail-container',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './posts-detail-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsDetailContainerComponent implements OnInit {
  @Input() id!: number;

  postStore = inject(PostsStore);

  ngOnInit(): void {
    this.postStore.loadPostById(this.id);
  }
}
