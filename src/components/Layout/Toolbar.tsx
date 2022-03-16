import { useMediaQuery } from '@mui/material'

import { ToolbarMd } from './ToolbarMd'
import { ToolbarMobile } from './ToolbarMobile'
import { device } from '../../utils/device'

type Props = {
    toggleDrawer: () => void
}

export const Toolbar: React.FC<Props> = ({ toggleDrawer }) => {
    const isMd = useMediaQuery(device.md)

    if (isMd) return <ToolbarMd />
    return <ToolbarMobile toggleDrawer={toggleDrawer} />
}
