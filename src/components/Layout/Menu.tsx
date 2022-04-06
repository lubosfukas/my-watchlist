import React, { useState } from 'react'
import styled from '@emotion/styled'
import { Button, ListItemIcon, Menu as MenuMui, MenuItem } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'

import { colors } from '../../theme'
import { Route } from '../../types'

const StyledButton = styled(Button)(() => ({
    color: colors.white,
    textTransform: 'none',
}))

export const capitalize = (s: string) =>
    s.length > 2 ? s[0].toUpperCase() + s.slice(1) : s.toUpperCase()

export const Menu: React.FC<{
    name: string
    routes: Array<Route>
}> = ({ name, routes }) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

    let navigate = useNavigate()
    const { pathname } = useLocation()

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) =>
        setAnchorEl(event.currentTarget)

    const handleClose = () => setAnchorEl(null)

    const open = !!anchorEl
    const buttonId = `${name}-button`
    const menuId = `${name}-menu`

    return (
        <>
            <StyledButton
                aria-controls={open ? menuId : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                id={buttonId}
                onClick={handleClick}
                color="secondary"
                variant="text"
            >
                <strong>{capitalize(name)}</strong>
            </StyledButton>
            <MenuMui
                anchorEl={anchorEl}
                id={menuId}
                onClose={handleClose}
                open={open}
                MenuListProps={{
                    'aria-labelledby': buttonId,
                }}
            >
                {routes.map(({ icon, path, name: routeName }) => {
                    const fullPath = `/${name}/${path}`
                    const isCurrent = pathname === fullPath
                    return (
                        <MenuItem
                            key={routeName}
                            onClick={() => {
                                navigate(fullPath)
                                handleClose()
                            }}
                            selected={isCurrent}
                        >
                            <ListItemIcon>{icon}</ListItemIcon>
                            {routeName}
                        </MenuItem>
                    )
                })}
            </MenuMui>
        </>
    )
}
