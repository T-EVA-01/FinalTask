import styled from 'styled-components';
import { IPost, IOptions } from '../../../interfaces/interfaces';
import Post from '../Post';
import PostsHeader from './PostsHeader';
import { useState } from 'react';
// import { useFilters } from '../../helpers/hooks';

// import { sortPosts } from '../../slices/postsSlice';
import { useSelector } from 'react-redux';

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

    const [booleanSortFlag, setBooleanSortFlag] = useState(true);
    const [inputValue, setInputValue] = useState('');

    const iOptions: IOptions = {
        sort: booleanSortFlag ? "ASC" : "DESC",
        filter: {
            name: "description",
            value: inputValue
        }
    }

    console.log(data)

    // ПЫТАЮСЬ ОТФИЛЬТРОВАТЬ И ОТСОРТИРОВАТЬ ДАННЫЕ ПОСТОВ ИЗ СТОРА В ХУКЕ

    // useFilters(data, iOptions)
    
    const posts = useSelector((state: any) => state.posts.data)
    // const dispatch = useDispatch()

    // useEffect(() => {

    //     dispatch(sortPosts(booleanSortFlag ? "ASC" : "DESC"))

    // }, [booleanSortFlag])

    const onChangeInputValue = (e: any) => {
        setInputValue(e.target.value)
    }

    return(
        <Posts className={className}>
            <PostsHeader>
                <input value={inputValue} type="text" placeholder='Поиск' onChange={onChangeInputValue}/>
                <button onClick={() => setBooleanSortFlag(!booleanSortFlag)}>{booleanSortFlag ? "DESC" : "ASC"}</button>
            </PostsHeader>

            {posts.map((item: IPost) => {
                return(
                    <Post className='post' post={item} key={item.id}/> 
                )
            })}
        </Posts>
    )
}

export default Index