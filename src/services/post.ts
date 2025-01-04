import {resource} from "vistajs/core";
import {POSTS_API} from "..";
import {Post} from "@/components/post/post.ts";

const getPosts = () => {
    return resource({
        loader: async () => {
            const response = await fetch(`${POSTS_API}/?limit=20`);
            const data = await response.json();
            return data?.posts as Post[]
        }
    })

}

export function postsService() {
    return {
        getPosts
    }
}