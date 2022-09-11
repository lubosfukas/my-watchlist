import React, { useContext } from 'react'
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

import { ElevationScroll } from './ElevationScroll'
import { MovieContext } from '../../MovieContext'

export const ToolbarXs: React.FC<{ toggleDrawer: () => void }> = ({
    toggleDrawer,
}) => {
    const { title } = useContext(MovieContext)

    return (
        <React.Fragment>
            <ElevationScroll>
                <AppBar>
                    <Toolbar>
                        <IconButton onClick={toggleDrawer}>
                            <MenuIcon sx={{ color: 'white' }} />
                        </IconButton>
                        <Typography sx={{ ml: 2 }} variant="subtitle1">
                            <strong>{title}</strong>
                        </Typography>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <Toolbar />
        </React.Fragment>
    )
}
