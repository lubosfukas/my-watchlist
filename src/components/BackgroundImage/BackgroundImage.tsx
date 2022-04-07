/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Box, Grid, Container } from '@mui/material'

export const BackgroundImage: React.FC<{
    children: React.ReactNode
    imageUrl: string
}> = ({ children, imageUrl }) => (
    <Grid
        css={css`
            background-image: url(${imageUrl});
            background-repeat: no-repeat;
            background-size: cover;
            height: 500px;
            position: relative;
        `}
        item
        md={12}
    >
        <Box
            css={css`
                background: linear-gradient(
                    to bottom right,
                    rgba(96.47%, 96.47%, 96.47%, 1),
                    rgba(96.47%, 96.47%, 96.47%, 0.84)
                );
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                height: 100%;
                width: 100%;
            `}
        >
            <Container
                sx={{
                    height: '500px',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                {children}
            </Container>
        </Box>
    </Grid>
)
