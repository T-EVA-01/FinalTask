import Layout from '../components/Layout';
import Posts from '../components/Posts';
import { IndexPageProps } from '../../interfaces/interfaces';
import Counter from '../components/Counter'

import { useSelector, useDispatch } from 'react-redux';
import { setPosts } from '../slices/postsSlice';

const Home = ({ data, className }: IndexPageProps) => {

  const dispatch = useDispatch();
  dispatch(setPosts(data))
  const posts = useSelector((state: any) => state.posts.data)

  // console.log(posts)

  return (
      <Layout className={className}>
        <Counter/>
        <Posts data={posts}/>
      </Layout>
  )
}

export async function getStaticProps() {

  const res = await fetch('http://localhost:3000/api/posts')
  const data = await res.json()

  return {
    props: {
      data 
    }
  }

}

export default Home
