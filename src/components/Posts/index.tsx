import styled from 'styled-components';
import { IPost } from '../../../interfaces/interfaces';
import Post from '../Post';
import PostsHeader from './PostsHeader';
import { useState, useEffect } from 'react';
import { sortPosts, changeSortState } from '../../store/slicers/postsSlice';
import { useSelector, useDispatch } from 'react-redux';
import Form from '../Form/Form'

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

    const sortState = useSelector((state: any) => state.posts.sortState )
    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(sortPosts());

    }, [sortState])

    return(
        <Posts className={className}>

            <PostsHeader>
                <Form />
                <button onClick={() => dispatch(changeSortState())}>{sortState}</button>
            </PostsHeader>

            {data.map((item: IPost) => {
                return(
                    <Post className='post' post={item} key={item.id}/> 
                )
            })}
        </Posts>
    )
}

export default Index