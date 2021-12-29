import { createTheme } from '@mui/material/styles'

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
