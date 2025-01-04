import {Component, html} from 'vistajs/dom';
import {router} from 'vistajs/router';

import './notFound.css';

const Index = Component('app-not-found', () => {

    const route = router()

    const returnToRoute = () => {
        route.navigateByUrl('/');
    }

    return () => html`
        <div class="not-found">
            <h1>404</h1>
            <p>Page not found</p>
            <button onclick="${returnToRoute}">Return</button>
        </div>
    `;
});

export default Index;