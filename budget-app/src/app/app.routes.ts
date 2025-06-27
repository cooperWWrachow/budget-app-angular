import { Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./landing/landing.routes'),
    },
    {
        path: '/dashboard',
        loadChildren: () => import('./dashboard/dashboard.routes'),
        canActivate: [AuthGuard]
    }
];
