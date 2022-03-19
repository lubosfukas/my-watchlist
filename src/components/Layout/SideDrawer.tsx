/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import {
    Box,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
} from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'

import { routes } from '../../Router'
import { colors } from '../../theme'

type Props = {
    open: boolean
    onClose: () => void
}

export const SideDrawer: React.FC<Props> = ({ open, onClose }) => {
    const { pathname } = useLocation()
    let navigate = useNavigate()

    const routeLinks = Object.values(routes)
        .filter(({ excludeFromNav }) => !excludeFromNav)
        .map(({ name, path }) => {
            const isCurrent = pathname === `/${path}`

            return (
                <ListItem
                    disablePadding
                    key={path}
                    css={css`
                        .Mui-selected {
                            background-color: ${colors.primary} !important;
                            color: ${colors.white} !important;
                        }
                        :hover {
                            background-color: ${colors.primary};
                            color: ${colors.white};
                        }
                    `}
                >
                    <ListItemButton
                        onClick={() => navigate(`/${path}`)}
                        selected={isCurrent}
                    >
                        <ListItemText>{name}</ListItemText>
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
