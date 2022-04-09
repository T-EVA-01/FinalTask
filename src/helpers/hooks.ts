import { useEffect, useState } from "react";
import { IPost, IOptions } from "../../interfaces/interfaces";

export function useFilters(array: IPost[], options: IOptions) {

    const [posts, setPosts] = useState(array);
    const value = options.filter.value;
    const sortStatus = options.sort;

    useEffect(() => {
        
        const posts = filteredAndSortedPosts(array, value, sortStatus, sortingPosts, filteringPosts);

        setPosts(posts)
    }, [value, sortStatus]);

    const filteredAndSortedPosts = (
        posts: IPost[], 
        inputValue: string, 
        sortStatus: string,
        sortingPosts: (sortStatus: string,  posts: IPost[]) => IPost[],
        filteringPosts: (posts: IPost[], inputValue: string) => IPost[]
    ) => {

        let outputPostsArray: [] | IPost[] = [];
        
        outputPostsArray = filteringPosts(posts, inputValue);
        sortingPosts(sortStatus, outputPostsArray);

        return outputPostsArray
    };

    const filteringPosts = (posts: IPost[], inputValue: string) => {
        const outputPostsArray = [];
        const inputPostsArray = posts;
        
        for(let i = 0; i < inputPostsArray.length; i++) {
            if(inputPostsArray[i].description.includes(inputValue)) {
                outputPostsArray.push(inputPostsArray[i])
            }
        }

        return outputPostsArray
    }

    const sortingPosts = (sortStatus: string, posts: IPost[]) => {
        
        switch(sortStatus) {
            case "ASC": 
                posts.sort((a, b) => {
                    if (a.id > b.id) {
                        return 1
                    } else {
                        return -1
                    }
                });
                break;
            case "DESC": 
                posts.sort((a, b) => {
                    if (a.id > b.id) {
                        return -1
                    } else {
                        return 1
                    }
                });
                break;
        }
        return posts
    };

    return posts
}
