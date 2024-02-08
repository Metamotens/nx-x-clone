import { Route } from '@angular/router';
import { LoginContainerComponent } from '@x-clone/login';
import { authGuard } from '@x-clone/shared/front/auth';
import { MainComponent } from '@x-clone/main';
import { PostsContainerComponent, PostsDetailContainerComponent } from '@x-clone/front/posts';


export const appRoutes: Route[] = [
    {
        path: 'login',
        component: LoginContainerComponent,
    },
    {
        path: '',
        component: MainComponent,
        canActivate: [authGuard],
        children: [
            {
                path: 'home',
                component: PostsContainerComponent,
            },
            {
                path: 'posts/:id',
                component: PostsDetailContainerComponent,
            },
        ]
    },
    {
        path: '**',
        redirectTo: 'home',
    },
];
