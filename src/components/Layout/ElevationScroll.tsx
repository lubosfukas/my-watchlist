import React, { ReactElement } from 'react'
import useScrollTrigger from '@mui/material/useScrollTrigger'

type Props = {
    children: ReactElement
    window?: () => Window
}

export const ElevationScroll = ({ children, window }: Props) => {
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    })

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    })
}
