import styled from 'styled-components';

const PostContentContainer = styled.div`
    width: 50%;
`
interface PostContentContainerProps {
    className?: string
    children: JSX.Element | Element
}

const Index = ({ className, children }: PostContentContainerProps) => {
    
    return(
        <PostContentContainer className={className}>
            {children}
        </PostContentContainer>
    )
}

export default Index
