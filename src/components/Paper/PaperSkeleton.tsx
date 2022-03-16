import styled from '@emotion/styled'
import { Box, Skeleton as SkeletonMui } from '@mui/material'

const StyledSkeleton = styled(SkeletonMui)`
    border-radius: 8px;
    height: 450px;
    overflow: hidden;
    max-width: 300px;
`

export const PaperSkeleton = () => (
    <Box sx={{ width: '100%' }}>
        <StyledSkeleton variant="rectangular" />
    </Box>
)
