import React from 'react'
import styled from '@emotion/styled'
import { AppBar, Container, Stack, Toolbar } from '@mui/material'
import { Link } from 'react-router-dom'

import { Menu } from './Menu'
import { home, routes } from '../../Router'

const StyledContainer = styled(Container)`
    padding-top: 0 !important;
    padding-bottom: 0 !important;
`

export const ToolbarMd = () => (
    <React.Fragment>
        <AppBar>
            <Toolbar disableGutters>
                <StyledContainer>
                    <Stack alignItems="center" direction="row" spacing={3}>
                        <Link to={home}>
                            <img
                                alt="The Movie Database (TMDB)"
                                src={`${process.env.PUBLIC_URL}/logo.svg`}
                                style={{
                                    cursor: 'pointer',
                                    height: '20px',
                                    width: 'auto',
                                }}
                            />
                        </Link>
                        {Object.keys(routes).map((media) => (
                            <Menu
                                key={media}
                                name={media}
                                routes={Object.values(routes[media])}
                            />
                        ))}
                    </Stack>
                </StyledContainer>
            </Toolbar>
        </AppBar>
        <Toolbar />
    </React.Fragment>
)
