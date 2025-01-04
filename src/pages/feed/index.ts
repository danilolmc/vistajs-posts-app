import {Component, html} from "vistajs/dom";
import {authService} from "@/services/auth";
import {postsService} from "@/services/post.ts";
import {Post} from "@/components/post/post.ts";

import '@/components/post/post.ts';

import './feed.css';

const Feed = Component('app-feed', () => {

    const auth_service = authService()

    const posts_service = postsService()
    const posts = posts_service.getPosts();

    return () => html`
        <div class="product-dash">
            <header>
                <button onclick="${auth_service.logout}">Log out</button>
            </header>
            <main>
                <h1>For you</h1>
                <div>
                    <n-if condition="${posts.loading()}">
                        <p class="loading">Loading posts...</p>
                    </n-if>
                    <n-else>
                        <n-if condition="${posts.value()?.length > 0}">
                            <ul>
                                ${posts.value()?.map((post: Post) => (`
                                    <app-post>
                                        <div class="post-body">
                                            <h2 class="title">${post.title}</h2>
                                            <p class="description">
                                                ${post.body}
                                            </p>
                                            <div class="tags">
                                                ${post.tags.map(tag => (`<span>#${tag}</span>`)).join('')}
                                            </div>
                                        </div>
                                        <footer>
                                            <button>
                                              Likes: ${post.reactions.likes}
                                            </button>
                                            <button>
                                              Dislikes: ${post.reactions.dislikes}
                                            </button>   
                                            <button>
                                              Views: ${post.views}
                                            </button>
                                        </footer>
                                    </app-post>
                                `))}
                            </ul>
                        </n-if>
                        <n-else>
                            <n-if condition="${!!posts.error()}">
                                <p class="error">Something went wrong, try again later! 😕</p>
                            </n-if>
                            <n-else>
                                <p>No posts found</p>
                            </n-else>
                        </n-else>
                    </n-else>
                </div>
            </main>
        </div>`;
})

export default Feed;