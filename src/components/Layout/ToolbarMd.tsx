import { AppBar, Container, Stack, Toolbar, Typography } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'

import { routerMap } from '../../Router'

export const ToolbarMd = () => {
    const { pathname } = useLocation()
    let navigate = useNavigate()

    const routeLinks = Object.values(routerMap)
        .filter((x) => !x.excludeFromNav)
        .map((y) => {
            const isCurrent = pathname.split('/')[1] === y.path

            return (
                <Typography
                    key={y.path}
                    sx={{ cursor: 'pointer' }}
                    onClick={() => navigate(`/${y.path}`)}
                    variant="subtitle1"
                >
                    {isCurrent ? <strong>{y.name}</strong> : y.name}
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
