import {
    Box,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material'
import { Home } from '@mui/icons-material'
import { useLocation, useNavigate } from 'react-router-dom'

import { MediaItems } from './MediaItems'
import { routes } from '../../Router'
import { Media } from '../../types'
import { getMediaLabel } from '../../utils/helpers'

type Props = {
    open: boolean
    onClose: () => void
}

export const SideDrawer: React.FC<Props> = ({ open, onClose }) => {
    const { pathname } = useLocation()
    let navigate = useNavigate()

    return (
        <Drawer open={open} onClose={onClose}>
            <Box onClick={onClose} role="presentation" sx={{ width: 250 }}>
                <List>
                    <ListItem>
                        <ListItemButton
                            onClick={() => navigate('/')}
                            selected={pathname === '/'}
                        >
                            <ListItemIcon>
                                <Home />
                            </ListItemIcon>
                            <ListItemText>Home</ListItemText>
                        </ListItemButton>
                    </ListItem>
                    {Object.keys(routes).map((media) => (
                        <MediaItems
                            key={media}
                            items={Object.values(routes[media])}
                            label={getMediaLabel(media as Media)}
                            name={media}
                        />
                    ))}
                </List>
            </Box>
        </Drawer>
    )
}
