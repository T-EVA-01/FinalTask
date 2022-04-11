import { useEffect, useState } from "react";
import { IPost, IOptions } from "../../interfaces/interfaces";

export function useFilters(array: IPost[], options: IOptions) {
    const [posts, setPosts] = useState(array);

    useEffect(() => {

        const sortedPosts = array.sort((a, b) => options.sort === 'ASC' ? a.id - b.id : b.id - a.id);

        const filteredPosts = sortedPosts.filter((post) => {

            const postValue = post[options.filter.name];

            if(typeof postValue === "string") {
                return postValue.toLowerCase().indexOf(options.filter.value.toLowerCase()) !== -1
            }

        });

        setPosts(filteredPosts)
    }, [array, options])

    return posts 
}
