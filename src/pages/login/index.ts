import {Component, html} from "vistajs/dom";

import {signal} from "vistajs/core";
import {authService} from "@/services/auth";
import styles from './login.module.css';
import {router} from "vistajs/router";

const Login = Component('app-login', () => {
    const isValid = signal(false);
    const isTouched = signal(false);

    const route = router();
    const auth_service = authService();

    if (auth_service.isAuthenticated()) {
        route.navigateByUrl('/feed');
    }

    const handleSubmit = (e: SubmitEvent) => {

        e.preventDefault();

        const auth_service = authService()

        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);

        const data = Object.fromEntries(formData);

        isTouched.set(true);
        isValid.set(data.username === 'admin_app' && data.password === 'admin_app');

        if (!isValid()) {
            return;
        }

        auth_service.login();
    }

    const home = () => {
        route.navigateByUrl('/');
    }

    return () => html`
        <div class="${styles.login_container}">
            <a onclick="${home}">Home</a>
            <form onsubmit="${handleSubmit}">
                <h1>Welcome</h1>
                <div class="username_field">
                    <label for="username">Username</label>
                    <input type="text" name="username"/>
                </div>
                <div class="password_field">
                    <label for="password">Password</label>
                    <input type="password" name="password"/>
                </div>
                <button>Sign in</button>

                <n-if condition="${isTouched() && !isValid()}">
                    <p class="${styles.error_submit}">Invalid username or password</p>
                </n-if>
            </form>
        </div>
    `;
});

export default Login;