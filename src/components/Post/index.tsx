import styled from 'styled-components';
import { IPost } from '../../../interfaces/interfaces';
import PostContentContainer from './PostContentContainer'
import colors from '../../styles/colors';

const Post = styled.div`
    flex-direction: row;
    padding: 15px 20px;
    background-color: ${colors.white};
    margin-top: 20px;
    border-radius: 4px;
    font-size: 13px;
    box-shadow: 0 1px 0 0 #dce1e6, 0 0 0 1px #e7e8ec;

    .text-content {
        div:not(:last-child) {
            margin-bottom: 10px;
        }
    }
`

interface PostProps {
    className?: string
    post: IPost
}

const Index = ({ className, post: {id, title, description, type}}: PostProps) => {

    return(
        <Post className={className}>
            <PostContentContainer className={"text-content"}>
                <div>{"id:" + id}</div>
                <div>{"Post type: " + type}</div>
                <div>{title}</div>
                <div>{description}</div>
            </PostContentContainer>
        </Post>
    )
}

export default Index