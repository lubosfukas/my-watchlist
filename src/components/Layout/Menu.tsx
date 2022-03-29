/** @jsxImportSource @emotion/react */
import React, { useState } from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Button, Menu as MenuMui, MenuItem } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'

import { colors } from '../../theme'
import { Route } from '../../types'

const StyledButton = styled(Button)(() => ({
    color: colors.white,
    textTransform: 'capitalize',
}))

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
                {name}
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
                {routes.map(({ path, name: routeName }) => {
                    const fullPath = `/${name}/${path}`
                    const isCurrent = pathname === fullPath
                    return (
                        <MenuItem
                            key={routeName}
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
                            onClick={() => {
                                navigate(fullPath)
                                handleClose()
                            }}
                            selected={isCurrent}
                        >
                            {routeName}
                        </MenuItem>
                    )
                })}
            </MenuMui>
        </>
    )
}
