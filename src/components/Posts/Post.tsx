import styled from 'styled-components';
import { IPost } from '../../../interfaces/interfaces';
import Image from 'next/image';
import PostContentContainer from './PostContentContainer'

const Post = styled.div`
    display: flex;
    flex-direction: row;

    .text-content {

        div {
            margin-top: 10px;
        }

    }
`

interface PostProps {
    className?: string
    post: IPost
}

const Index = ({ className, post: {id, title, description, image}}: PostProps) => {


    return(
        <Post className={className}>
            <PostContentContainer className={'media-content'}>
                <Image src={image} width={'300px'} height={'300px'}/>
                {/* <div>{image}</div> */}
            </PostContentContainer>
            <PostContentContainer className={"text-content"}>
                <>
                    <div>{"id:" + id}</div>
                    <div>{title}</div>
                    <div>{description}</div>
                </>
            </PostContentContainer>
        </Post>
    )
}

export default Index