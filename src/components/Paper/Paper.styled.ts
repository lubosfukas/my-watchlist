import styled from '@emotion/styled'
import { Box, Paper } from '@mui/material'

import { device } from '../../utils/device'

export const StyledPaper = styled(Paper)`
    border-radius: 16px;
    cursor: pointer;
    display: inline-flex;
    margin: 16px 8px;
    overflow: hidden;
    position: relative;
    max-width: 300px;

    @media ${device.md} {
        margin: 24px 16px;

        &:hover {
            transform: scale(1.075);
        }
    }
`

export const StyledBox = styled(Box)`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

    opacity: 0;
    transition: opacity 0.1s ease;

    background: linear-gradient(
        to top,
        rgba(10, 10, 10, 0.85),
        rgba(10, 10, 10, 0.5)
    );

    @media ${device.md} {
        &:hover {
            opacity: 1;
        }
    }
`
