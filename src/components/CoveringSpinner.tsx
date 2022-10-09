import { Box, CircularProgress } from '@mui/material'
import styled from '@emotion/styled'

const StyledBox = styled(Box)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

export const CoveringSpinner = () => (
    <StyledBox>
        <CircularProgress />
    </StyledBox>
)
