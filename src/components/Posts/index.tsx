import styled from 'styled-components';
import { IPost } from '../../../interfaces/interfaces';
import Post from './Post';

const Posts = styled.div`
    width: 60%;
    margin: 0 auto;
    padding: 15px;

    input {
        margin-bottom: 20px;
    }
`

interface PostsProps {
    className?: string
    data: IPost[]
}

const Index = ({className, data}: PostsProps) => {

    return(
        <Posts className={className}>
            <input type="text" placeholder='Поиск'/>
            {data.map((item, index) => {
                return(
                    <Post post={item} key={index}/> 
                )
            })}
        </Posts>
    )
}

export default Index