import { Component, html } from "vistajs/dom";

import styles from './home.module.css';
import { router } from "vistajs/router";
import {authService} from "@/services/auth.ts";

export const Home = Component('app-home', () => {

    const route = router();

    const auth_service = authService();


    if(auth_service.isAuthenticated()){
        route.navigateByUrl('/feed');
    }

    const handleClick = () => {
        route.navigateByUrl('/login');
    };

    return () => html`
        <div class="${styles.home_container}">
            <h1>Welcome</h1>
            <p>Sign in to continue</p>
            <button onclick="${handleClick}">Sign in</button>
        </div>
    `;
});