import React from 'react'
import {
    Divider,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'

import { Route } from '../../types'

export const MediaItems: React.FC<{
    items: Array<Route>
    label: string
    name: string
}> = ({ items, label, name }) => {
    const { pathname } = useLocation()
    let navigate = useNavigate()

    return (
        <>
            <Divider />
            {items.map(({ icon, path, name: itemName }) => {
                const isCurrent = pathname === `/${name}/${path}`
                return (
                    <ListItem key={path}>
                        <ListItemButton
                            onClick={() => navigate(`/${name}/${path}`)}
                            selected={isCurrent}
                        >
                            <ListItemIcon>{icon}</ListItemIcon>
                            <ListItemText>{`${itemName} ${label}`}</ListItemText>
                        </ListItemButton>
                    </ListItem>
                )
            })}
        </>
    )
}
