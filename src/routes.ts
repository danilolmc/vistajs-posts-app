import {Routes} from "vistajs/router";
import {lazy} from "vistajs/utils";
import {Home} from "./pages/home";
import {authService} from "@/services/auth.ts";

const auth_service = authService()

export const routes: Routes = [
    {
        path: '',
        component: () => Home
    },
    {
        path: 'login',
        component: lazy(() => import('./pages/login'))
    },
    {
        path: 'feed',
        canActivate: [auth_service.isAuthenticated],
        component: lazy(() => import('./pages/feed'))
    }
]