import { useContext, useEffect } from 'react'
import {
    Alert,
    AlertTitle,
    Button,
    Container,
    Grid,
    useMediaQuery,
} from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import { useNavigate } from 'react-router-dom'

import { MovieContext } from '../MovieContext'
import { NOT_FOUND } from '../utils/constants'
import { device } from '../utils/device'

export const NotFound = () => {
    const { setTitle } = useContext(MovieContext)

    useEffect(() => {
        document.title = NOT_FOUND
        setTitle(NOT_FOUND)
    }, [setTitle])

    let navigate = useNavigate()

    const isSmOrLarger = useMediaQuery(device.sm)

    return (
        <Container>
            <Grid container justifyContent="center">
                <Grid item sm={6} md={4} lg={3}>
                    <Alert severity="info">
                        <AlertTitle>Page not found!</AlertTitle>
                        Looks like you've followed a broken link or entered a
                        URL that doesn't exist on this site.
                    </Alert>
                    <Button
                        color="secondary"
                        onClick={() => navigate('')}
                        startIcon={<ArrowBackIosNewIcon />}
                        sx={{ mt: 2 }}
                        variant="contained"
                        fullWidth={!isSmOrLarger}
                    >
                        Redirect to homepage
                    </Button>
                </Grid>
            </Grid>
        </Container>
    )
}
