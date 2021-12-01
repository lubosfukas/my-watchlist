import { createTheme } from '@mui/material/styles'

export const colors = {
    primary: '#0d253f',
    secondary: '#01b4e4',
    white: '#ffffff',
}

export const theme = createTheme({
    palette: {
        primary: {
            main: colors.primary,
        },
        secondary: {
            main: colors.secondary,
        },
    },
})
