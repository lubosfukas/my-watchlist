import { Box, Divider, Drawer, List } from '@mui/material'
import { Home } from '@mui/icons-material'
import { useLocation } from 'react-router-dom'

import { ListItemIconButtonLink } from './ListItemIconButtonLink'
import { home, routes } from '../../Router'
import { Media } from '../../types'
import { HOME } from '../../utils/constants'
import { getMediaLabel } from '../../utils/helpers'
import React from 'react'

type Props = {
    open: boolean
    onClose: () => void
}

export const SideDrawer: React.FC<Props> = ({ open, onClose }) => {
    const { pathname } = useLocation()

    return (
        <Drawer open={open} onClose={onClose}>
            <Box onClick={onClose} role="presentation" sx={{ width: 250 }}>
                <List>
                    <ListItemIconButtonLink
                        icon={<Home />}
                        label={HOME}
                        selected={pathname === home}
                        to={home}
                    />
                    {Object.keys(routes).map((media) => (
                        <React.Fragment key={media}>
                            <Divider />
                            {Object.values(routes[media]).map(
                                ({ icon, path, name: itemName }) => {
                                    const fullPath = `/${media}/${path}`
                                    const label = `${itemName} ${getMediaLabel(
                                        media as Media
                                    )}`

                                    return (
                                        <ListItemIconButtonLink
                                            key={itemName}
                                            icon={icon}
                                            label={label}
                                            selected={pathname === fullPath}
                                            to={fullPath}
                                        />
                                    )
                                }
                            )}
                        </React.Fragment>
                    ))}
                </List>
            </Box>
        </Drawer>
    )
}
