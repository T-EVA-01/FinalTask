import styled from 'styled-components';
import { IPost } from '../../../interfaces/interfaces';
import Post from '../Post';
import variables from '../../styles/variables';

const Posts = styled.div`
    width: ${variables.layoutWidth};
    margin: 0 auto;
`

interface PostsProps {
    className?: string
    data: IPost[]
}

const Index = ({className, data}: PostsProps) => {

    return(
        <Posts className={className}>
            {data.map((item: IPost) => {
                return(
                    <Post className='post' post={item} key={item.id}/> 
                )
            })}
        </Posts>
    )
}

export default Index