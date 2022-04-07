import { useMediaQuery } from '@mui/material'

import { ToolbarMd } from './ToolbarMd'
import { ToolbarXs } from './ToolbarXs'
import { device } from '../../utils/device'

export const Toolbar: React.FC<{ toggleDrawer: () => void }> = ({
    toggleDrawer,
}) => {
    const isMd = useMediaQuery(device.md)

    if (isMd) return <ToolbarMd />
    return <ToolbarXs toggleDrawer={toggleDrawer} />
}
