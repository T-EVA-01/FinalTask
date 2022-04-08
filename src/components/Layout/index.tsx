import styled from "styled-components";
import Head from "next/head";

const Layout = styled.main`
    position: relative;
    width: 100%;
`
interface LayoutProps {
    className?: string
    children: JSX.Element | JSX.Element[]
}

const Index = ({className, children}: LayoutProps) => {
    
    return(
        <>
            <Head>
                <title>SecondTask</title>
                <meta charSet="utf-8" />
            </Head>
            <Layout className={className}>
                {children}
            </Layout>
        </>
    )
}

export default Index