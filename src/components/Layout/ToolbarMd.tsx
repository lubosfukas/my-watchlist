import React from 'react'
import { AppBar, Container, Stack, Toolbar } from '@mui/material'

import { Menu } from './Menu'
import { routes } from '../../Router'

export const ToolbarMd = () => (
    <AppBar position="static">
        <Toolbar disableGutters>
            <Container>
                <Stack direction="row" spacing={3}>
                    {Object.keys(routes).map((media) => (
                        <Menu
                            key={media}
                            name={media}
                            routes={Object.values(routes[media])}
                        />
                    ))}
                </Stack>
            </Container>
        </Toolbar>
    </AppBar>
)
