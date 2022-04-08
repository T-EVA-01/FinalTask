import type { AppProps } from 'next/app'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import fonts from '../styles/fonts'
import variables from '../styles/variables'
import breakpoints from '../styles/breakpoints'
import colors from '../styles/colors'

const theme: object = {
  variables,
  colors,
  breakpoints
}

const GlobalStyles = createGlobalStyle`
  
  ${fonts()}

  * {
    box-sizing: border-box;
  }

  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  html {
    font-family: ${variables.fonts.workSans}, sans-serif, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, 
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue;
    scrollbar-width: none;
  }

  body {
    margin: 0;
    height: 100%;
  }  

  h1, h2, h3, h4, h5, span, a {
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

`

function MyApp({ Component, pageProps }: AppProps) {

  return( 
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyles/>
    </ThemeProvider>

  )
}

export default MyApp