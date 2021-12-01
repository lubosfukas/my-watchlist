import React, { useState } from 'react'

import { Toolbar } from './Toolbar'
import { SideDrawer } from './SideDrawer'

type Props = {
    children: React.ReactNode
}

export const Layout: React.FC<Props> = ({ children }) => {
    const [open, setOpen] = useState(false)

    return (
        <React.Fragment>
            <Toolbar toggleDrawer={() => setOpen(!open)} />
            <main>{children}</main>

            <SideDrawer open={open} onClose={() => setOpen(false)} />
        </React.Fragment>
    )
}
