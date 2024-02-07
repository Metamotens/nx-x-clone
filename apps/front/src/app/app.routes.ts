import { Route } from '@angular/router';
import { LoginContainerComponent } from '@x-clone/login';
import { PostsContainerComponent, PostsDetailContainerComponent } from '@x-clone/front/posts';
import { authGuard } from '@x-clone/shared/front/auth';


export const appRoutes: Route[] = [
    {
        path: 'login',
        component: LoginContainerComponent,
    },
    {
        path: 'posts',
        component: PostsContainerComponent,
        canActivate: [authGuard],
    },
    {
        path: 'posts/:id',
        component: PostsDetailContainerComponent,
        canActivate: [authGuard],
    },
    {
        path: '**',
        redirectTo: 'posts',
    },
];
