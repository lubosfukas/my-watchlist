import styled from '@emotion/styled'
import { Box, Paper } from '@mui/material'

type Props = {
    mobile: string
    width: number
}

export const StyledPaper = styled(Paper)`
    border-radius: 10px;
    margin: ${(props: Props) =>
        props.mobile === 'true' ? '15px 10px' : '30px'};
    overflow: hidden;
    position: relative;
    width: ${(props: Props) => `${props.width}px`};

    &:hover {
        transform: scale(1.075);
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

    &:hover {
        opacity: 1;
    }
`
