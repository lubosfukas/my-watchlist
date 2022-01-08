import styled from '@emotion/styled'
import { Box, Skeleton as SkeletonMui } from '@mui/material'

import { device } from '../../utils/device'

const StyledSkeleton = styled(SkeletonMui)`
    border-radius: 8px;
    height: 450px;
    margin: 8px;
    overflow: hidden;
    width: 300px;

    @media ${device.sm} {
        margin: 16px 8px;
    }

    @media ${device.md} {
        margin: 16px;
    }

    @media ${device.lg} {
        margin: 24px 16px;
    }

    @media ${device.xl} {
        margin: 24px;
    }
`

export const PaperSkeleton = () => (
    <Box
        sx={{
            width: '100%',
        }}
    >
        <StyledSkeleton variant="rectangular" />
    </Box>
)
