import Layout from '../components/Layout';
import Posts from '../components/Posts';
import { IndexPageProps } from '../../interfaces/interfaces';

const Home = ({ posts, className }: IndexPageProps) => {

  
  return (
      <Layout className={className}>
        <Posts data={posts}/>
      </Layout>
  )
}

export async function getStaticProps() {

  const res = await fetch('http://localhost:3000/api/posts')
  const posts = await res.json()

  return {
    props: {
      posts 
    }
  }

}

export default Home
