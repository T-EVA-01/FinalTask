import styled from 'styled-components';
import { IPost, IOptions } from '../../../interfaces/interfaces';
import Post from '../Post';
import PostsHeader from './PostsHeader';
import { useState, useEffect } from 'react';
import { useFilters } from '../../helpers/hooks';

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

    const [booleanSortFlag, setBooleanSortFlag] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const iOptions: IOptions = {
        sort: booleanSortFlag ? "ASC" : "DESC",
        filter: {
            name: "Не понятно",
            value: inputValue
        }
    }

    const posts = useFilters(data, iOptions)

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