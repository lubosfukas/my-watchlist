import { createTheme } from '@mui/material/styles'

import { device } from './utils/device'

export const colors = {
    primary: '#0d253f',
    secondary: '#01b4e4',
    white: '#ffffff',
}

export const theme = createTheme({
    components: {
        MuiContainer: {
            defaultProps: {
                maxWidth: 'xl',
            },
            styleOverrides: {
                root: {
                    paddingTop: '16px',
                    paddingBottom: '16px',
                    [`@media ${device.sm}`]: {
                        paddingTop: '24px',
                        paddingBottom: '24px',
                    },
                },
            },
        },
    },
    palette: {
        primary: {
            main: colors.primary,
            contrastText: colors.white,
        },
        secondary: {
            main: colors.secondary,
            contrastText: colors.white,
        },
    },
})
