import { useLocation, useNavigate } from 'react-router-dom'
import {
    AppBar,
    Container,
    IconButton,
    Stack,
    Toolbar as ToolbarMui,
    Typography,
    useMediaQuery,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

import { MovieContext } from '../../MovieContext'
import { routerMap } from '../../Router'
import { device } from '../../utils/device'
import { useContext } from 'react'

type Props = {
    toggleDrawer: () => void
}

export const Toolbar: React.FC<Props> = ({ toggleDrawer }) => {
    const { title } = useContext(MovieContext)
    const { pathname } = useLocation()
    let navigate = useNavigate()

    const isLargerThanLaptop = useMediaQuery(device.laptop)

    if (isLargerThanLaptop) {
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
                <ToolbarMui disableGutters>
                    <Container maxWidth="xl">
                        <Stack direction="row" spacing={3}>
                            {routeLinks}
                        </Stack>
                    </Container>
                </ToolbarMui>
            </AppBar>
        )
    }

    return (
        <AppBar position="static">
            <ToolbarMui>
                <IconButton onClick={toggleDrawer}>
                    <MenuIcon sx={{ color: 'white' }} />
                </IconButton>
                <Typography sx={{ ml: 2 }} variant="subtitle1">
                    {title}
                </Typography>
            </ToolbarMui>
        </AppBar>
    )
}
