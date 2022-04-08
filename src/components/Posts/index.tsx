import styled from 'styled-components';
import { IPost } from '../../../interfaces/interfaces';
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
`

interface PostsProps {
    className?: string
    data: IPost[]
}

const Index = ({className, data}: PostsProps) => {
    
    const [sortStatus, setSortStatus] = useState('');
    const [booleanSortFlag, setBooleanSortFlag] = useState(false);

    useEffect(() => {
        if (booleanSortFlag) {
            setSortStatus('ASC');
            sortHandler(sortStatus, data);
        } else {
            setSortStatus('DESC')
            sortHandler(sortStatus, data);
        }
    })

    function sortHandler(sortStatus: string, data: IPost[]) {
        switch(sortStatus) {
            case "ASC": 
                data.sort((a, b) => {
                    if (a.id > b.id) {
                        return 1
                    } else {
                        return -1
                    }
                });
                break;
            case "DESC": 
                data.sort((a, b) => {
                    if (a.id > b.id) {
                        return -1
                    } else {
                        return 1
                    }
                });
                break;
        }
    }

    return(
        <Posts className={className}>
            <PostsHeader>
                <input type="text" placeholder='Поиск'/>
                <button onClick={() => setBooleanSortFlag(!booleanSortFlag)}>{sortStatus}</button>
            </PostsHeader>

            {data.map((item, index) => {
                return(
                    <Post className='post' post={item} key={index}/> 
                )
            })}
        </Posts>
    )
}

export default Index