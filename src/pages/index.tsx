import Layout from '../components/Layout';
import Posts from '../components/Posts';
import { IndexPageProps } from '../../interfaces/interfaces';
import { useSelector } from 'react-redux';
import { IPost } from '../../interfaces/interfaces';
import Header from '../components/Header/Header';
import Form from '../components/Form/Form';

const Home = ({ className }: IndexPageProps) => {

  const posts = useSelector((state: any) => state.posts.entities) 
  
  return (
      <Layout className={className}>
        {/* <Counter/> */}
        <Header>
          <Form/>
        </Header>
        <Posts data={posts}/>
      </Layout>
  )
}

export async function getStaticProps() {

  const res = await fetch('https://dev.retnback.only.com.ru/api/news/list')
  const data = await res.json();

  const posts = data.data.map((post: IPost, index: number) => {
    return {
      id: `post${index+1}`,
      sortId: index+1,
      title: post.title,
      description: post.description,
      type: post.type  
    };
  });

  const ids = posts.map((post: IPost) => {
    return post.id
  })

  return {
    props: {
      initialReduxState: {
        posts: {
          ids: ids,
          entities: posts,
          sortState: 'DESC',
          loading: '',
          error: null
        }
      }
    }
  }

}

export default Home
