import { boostrap } from 'vistajs/boot';
import { routes } from './routes';

export const POSTS_API = import.meta.env.VITE_POSTS_API;

import './style.css';

const root = document.querySelector('#app') as Element;

boostrap(document.body, root, {
  routes: routes
});
