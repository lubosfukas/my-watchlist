import React from 'react'
import {
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material'
import { Link } from 'react-router-dom'

export const ListItemIconButtonLink: React.FC<{
    icon: React.ReactElement
    label: string
    selected: boolean
    to: string
}> = ({ icon, label, selected, to }) => {
    return (
        <Link to={to} style={{ color: 'inherit', textDecoration: 'none' }}>
            <ListItem>
                <ListItemButton selected={selected}>
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText>{label}</ListItemText>
                </ListItemButton>
            </ListItem>
        </Link>
    )
}
