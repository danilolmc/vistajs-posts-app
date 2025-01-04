import { router } from "vistajs/router";

const login = () => {
    const route = router();
    sessionStorage.setItem('isAuthenticated', 'true');
    route.navigateByUrl('/feed');
}

const logout = () => {
    const route = router();
    sessionStorage.removeItem('isAuthenticated');
    route.navigateByUrl('/login');
}

const isAuthenticated = () => {
    return sessionStorage.getItem('isAuthenticated') === 'true';
}

export const authService = () => {
    return {
        login,
        logout,
        isAuthenticated
    }
}