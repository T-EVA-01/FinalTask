import styled from "styled-components";
import Head from "next/head";
import colors from "../../styles/colors";

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
                <title>OnlyFinalTask</title>
                <meta charSet="utf-8" />
            </Head>
            <Layout className={className}>
                {children}
            </Layout>
        </>
    )
}

export default Index