import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { Post } from "../utils/models/post"
import { inject } from '@angular/core';
import { PostsService } from './posts.service';
import { pipe, switchMap, tap } from 'rxjs';
import { tapResponse } from '@ngrx/operators';

interface PostState {
    posts: Post[]
    post: Post | null
    loading: boolean
    error: string | null

}

const initialState: PostState = {
    posts: [],
    post: null,
    loading: false,
    error: null
}

export const PostsStore = signalStore(
    { providedIn: 'root' },
    withState(initialState),
    withMethods((store, postsService = inject(PostsService)) => ({
        loadPosts: rxMethod<void>(
            pipe(
                tap(() => patchState(store, { loading: true })),
                switchMap(() => postsService.getPosts()
                    .pipe(
                        tapResponse({
                            next: (posts: Post[]) => patchState(store, { posts, loading: false, error: null }),
                            error: (error: string) => patchState(store, { loading: false, error })
                        })
                    )
                ),
            )
        ),
        loadPostById: rxMethod<number>(
            pipe(
                tap(() => patchState(store, { loading: true })),
                switchMap((id: number) => postsService.getPostById(id)
                    .pipe(
                        tapResponse({
                            next: (post: Post) => patchState(store, { post, loading: false, error: null }),
                            error: (error: string) => patchState(store, { loading: false, error })
                        })
                    )
                ),
            )
        )
    }))
)
