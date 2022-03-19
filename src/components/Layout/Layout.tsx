import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'

import { Toolbar } from './Toolbar'
import { SideDrawer } from './SideDrawer'

export const Layout = () => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <Toolbar toggleDrawer={() => setOpen(!open)} />
            <main>
                <Outlet />
            </main>

            <SideDrawer open={open} onClose={() => setOpen(false)} />
        </>
    )
}
