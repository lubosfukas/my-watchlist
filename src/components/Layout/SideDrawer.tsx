import { useLocation, useNavigate } from 'react-router-dom'
import {
    Box,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
} from '@mui/material'

import { routerMap } from '../../Router'
import { colors } from '../../theme'

type Props = {
    open: boolean
    onClose: () => void
}

export const SideDrawer: React.FC<Props> = ({ open, onClose }) => {
    const { pathname } = useLocation()
    let navigate = useNavigate()

    const routeLinks = Object.values(routerMap)
        .filter((x) => !x.excludeFromNav)
        .map((y) => {
            const isCurrent = pathname === `/${y.path}`

            return (
                <ListItem
                    key={y.path}
                    disablePadding
                    sx={{
                        '& .Mui-selected': {
                            backgroundColor: colors.primary,
                            color: colors.white,
                        },
                        '&:hover': {
                            backgroundColor: colors.primary,
                            color: colors.white,
                        },
                    }}
                >
                    <ListItemButton
                        onClick={() => navigate(`/${y.path}`)}
                        selected={isCurrent}
                    >
                        <ListItemText>{y.name}</ListItemText>
                    </ListItemButton>
                </ListItem>
            )
        })

    return (
        <Drawer open={open} onClose={onClose}>
            <Box onClick={onClose} role="presentation" sx={{ width: 250 }}>
                <List>{routeLinks}</List>
            </Box>
        </Drawer>
    )
}
