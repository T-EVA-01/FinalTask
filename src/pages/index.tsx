import Layout from '../components/Layout'
interface IndexPageProps {

}

const Home = () => {
  return (
      <Layout>
        <div>
          Привет Мир!
        </div>
      </Layout>
  )
}

export async function getStaticProps() {
  
  return {
    props: {

    }
  }

}

export default Home
