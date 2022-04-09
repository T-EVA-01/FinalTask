import styled from 'styled-components';
import { IPost, IOptions } from '../../../interfaces/interfaces';
import Post from './Post';
import PostsHeader from './PostsHeader';
import { useState, useEffect } from 'react';

const Posts = styled.div`
    width: 60%;
    margin: 0 auto;
    padding: 15px;

    .post {
        margin-bottom: 20px;
    }

    .post {
        margin-bottom: 20px;
    }
`

interface PostsProps {
    className?: string
    data: IPost[]
}

const Index = ({className, data}: PostsProps) => {

    const [sortStatus, setSortStatus] = useState('');
    const [booleanSortFlag, setBooleanSortFlag] = useState(true);
    const [inputValue, setInputValue] = useState('');
    const [posts, setPosts] = useState(data)

    useEffect(() => {
        
        if (booleanSortFlag) {
            setSortStatus('ASC');
        } else {
            setSortStatus('DESC');
        }

        const posts = filteredAndSortedPosts(data, inputValue, sortStatus, sortingPosts, filteringPosts);

        setPosts(posts)

    }, [inputValue, sortStatus, booleanSortFlag])

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

    const onChangeInputValue = (e: any) => {
        setInputValue(e.target.value)
    }

    return(
        <Posts className={className}>
            <PostsHeader>
                <input value={inputValue} type="text" placeholder='Поиск' onChange={onChangeInputValue}/>
                <button onClick={() => setBooleanSortFlag(!booleanSortFlag)}>{booleanSortFlag ? "DESC" : "ASC"}</button>
            </PostsHeader>

            {posts.map((item, index) => {
                return(
                    <Post className='post' post={item} key={index}/> 
                )
            })}
        </Posts>
    )
}

export default Index