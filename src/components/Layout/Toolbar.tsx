import { useLocation, useNavigate } from 'react-router-dom'
import {
    AppBar,
    IconButton,
    Stack,
    Toolbar as CoreToolbar,
    Typography,
    useMediaQuery,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

import { routes } from '../../Router'
import { device } from '../../utils/device'

type Props = {
    toggleDrawer: () => void
}

export const Toolbar: React.FC<Props> = ({ toggleDrawer }) => {
    const { pathname } = useLocation()
    let navigate = useNavigate()

    const isLargerThanLaptop = useMediaQuery(device.laptop)

    if (isLargerThanLaptop) {
        const routeLinks = routes
            .filter((x) => x.isVisible)
            .map((y) => {
                const isCurrent = pathname === `/${y.path}`

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
                <CoreToolbar>
                    <Stack direction="row" spacing={3}>
                        {routeLinks}
                    </Stack>
                </CoreToolbar>
            </AppBar>
        )
    }

    return (
        <AppBar position="static">
            <CoreToolbar>
                <IconButton onClick={toggleDrawer}>
                    <MenuIcon sx={{ color: 'white' }} />
                </IconButton>
            </CoreToolbar>
        </AppBar>
    )
}
