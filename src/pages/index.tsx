import Layout from '../components/Layout';
import Posts from '../components/Posts';

import { getPosts } from '../../lib/api';

import { IndexPageProps } from '../../interfaces/interfaces';

const Home = ({ posts }: IndexPageProps) => {
  return (
      <Layout>
        <Posts data={posts}/>
      </Layout>
  )
}

export async function getStaticProps() {

  const posts = getPosts();
  
  return {
    props: {
      posts 
    }
  }

}

export default Home
