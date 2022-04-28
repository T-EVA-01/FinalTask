import styled from 'styled-components';
import HeaderWrapper from './HeaderWrapper';
import variables from '../../styles/variables';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sortPosts, changeSortState } from '../../store/slicers/postsSlice';

const Header = styled.header`
    width: ${variables.layoutWidth};
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
        margin-top: 10px;
    }
`
interface HeaderProps {
    className?: string
    children: JSX.Element | JSX.Element[]
}

const Index = ({ className, children }: HeaderProps) => {

    const sortState = useSelector((state: any) => state.posts.sortState )
    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(sortPosts());

    }, [sortState])

    return(
        <HeaderWrapper>
            <Header className={className}>
                {children}
                <button onClick={() => dispatch(changeSortState())}>{sortState}</button>
            </Header> 
        </HeaderWrapper>
    )
}

export default Index