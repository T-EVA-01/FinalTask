import styled from 'styled-components';
import { IPost } from '../../../interfaces/interfaces';
import Post from '../Post';
import { useEffect } from 'react';
import { sortPosts, changeSortState } from '../../store/slicers/postsSlice';
import { useSelector, useDispatch } from 'react-redux';
import variables from '../../styles/variables';
// import colors from '../../styles/colors';

const Posts = styled.div`
    width: ${variables.layoutWidth};
    margin: 0 auto;
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
            <button onClick={() => dispatch(changeSortState())}>{sortState}</button>
            {data.map((item: IPost) => {
                return(
                    <Post className='post' post={item} key={item.id}/> 
                )
            })}
        </Posts>
    )
}

export default Index