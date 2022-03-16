import React, { useState } from 'react'

import { Toolbar } from './Toolbar'
import { SideDrawer } from './SideDrawer'

export const Layout: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <Toolbar toggleDrawer={() => setOpen(!open)} />
            <main>{children}</main>

            <SideDrawer open={open} onClose={() => setOpen(false)} />
        </>
    )
}
