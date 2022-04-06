import styled from '@emotion/styled'
import { AppBar, Container, Stack, Toolbar } from '@mui/material'

import { Menu } from './Menu'
import { routes } from '../../Router'

const StyledContainer = styled(Container)`
    padding-top: 0 !important;
    padding-bottom: 0 !important;
`

export const ToolbarMd = () => (
    <AppBar position="static">
        <Toolbar disableGutters>
            <StyledContainer>
                <Stack direction="row" spacing={3}>
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
)
