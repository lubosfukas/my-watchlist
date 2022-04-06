import styled from '@emotion/styled'
import { AppBar, Container, Stack, Toolbar } from '@mui/material'

import { Menu } from './Menu'
import { routes } from '../../Router'
import { useNavigate } from 'react-router-dom'

const StyledContainer = styled(Container)`
    padding-top: 0 !important;
    padding-bottom: 0 !important;
`

export const ToolbarMd = () => {
    let navigate = useNavigate()

    return (
        <AppBar position="static">
            <Toolbar disableGutters>
                <StyledContainer>
                    <Stack alignItems="center" direction="row" spacing={3}>
                        <img
                            alt="The Movie Database (TMDB)"
                            onClick={() => navigate('/')}
                            src={`${process.env.PUBLIC_URL}/logo.svg`}
                            style={{
                                cursor: 'pointer',
                                height: '20px',
                                width: 'auto',
                            }}
                        />
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
}
