import React, { useMemo, useState } from 'react'
import { Global, css } from '@emotion/react'
import { ThemeProvider } from '@mui/material/styles'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'

import { MovieContext } from './MovieContext'
import { Router } from './Router'
import { theme } from './theme'

const GlobalStyles = css`
    body {
        margin: 0;
    }
`

const queryClient = new QueryClient()

function App() {
    const [title, setTitle] = useState('')
    const value = useMemo(
        () => ({
            title,
            setTitle,
        }),
        [title]
    )

    return (
        <MovieContext.Provider value={value}>
            <BrowserRouter>
                <QueryClientProvider client={queryClient}>
                    <Global styles={GlobalStyles} />
                    <ThemeProvider theme={theme}>
                        <Router />
                    </ThemeProvider>
                </QueryClientProvider>
            </BrowserRouter>
        </MovieContext.Provider>
    )
}

export default App
