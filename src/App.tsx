import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Global, css } from '@emotion/react'
import { ThemeProvider } from '@mui/material/styles'

import { Layout } from './components'
import { Router } from './Router'
import { theme } from './theme'

const GlobalStyles = css`
    body {
        margin: 0;
    }
`

function App() {
    return (
        <BrowserRouter>
            <Global styles={GlobalStyles} />
            <ThemeProvider theme={theme}>
                <Layout>
                    <Router />
                </Layout>
            </ThemeProvider>
        </BrowserRouter>
    )
}

export default App
