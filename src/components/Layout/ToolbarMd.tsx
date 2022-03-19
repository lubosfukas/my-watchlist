import { AppBar, Container, Stack, Toolbar, Typography } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'

import { routes } from '../../Router'

export const ToolbarMd = () => {
    const { pathname } = useLocation()
    let navigate = useNavigate()

    const routeLinks = Object.values(routes)
        .filter(({ excludeFromNav }) => !excludeFromNav)
        .map(({ name, path }) => {
            const isCurrent = pathname.split('/')[1] === path

            return (
                <Typography
                    key={path}
                    sx={{ cursor: 'pointer' }}
                    onClick={() => navigate(`/${path}`)}
                    variant="subtitle1"
                >
                    {isCurrent ? <strong>{name}</strong> : name}
                </Typography>
            )
        })

    return (
        <AppBar position="static">
            <Toolbar disableGutters>
                <Container>
                    <Stack direction="row" spacing={3}>
                        {routeLinks}
                    </Stack>
                </Container>
            </Toolbar>
        </AppBar>
    )
}
