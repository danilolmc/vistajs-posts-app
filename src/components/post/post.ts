import { Component, html } from "vistajs/dom";

import './post.css';


export interface Reactions {
    likes: number
    dislikes: number
}

export interface Author {
    id: number
    firstName: string
    age: number
    gender: string
    username: string
}

export interface Post {
    id: number
    title: string
    body: string
    tags: string[]
    reactions: Reactions
    views: number
    author: Author
}

Component<Post>('app-post', () => {
    return () => html`<div class="post"><n-content/></div>`;
})

