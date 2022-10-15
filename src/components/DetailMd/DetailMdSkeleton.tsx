import { Container, Grid, Skeleton, Stack, Typography } from '@mui/material'

export const DetailMdSkeleton = () => (
    <Grid container>
        <Grid item md={12}>
            <Container
                sx={{
                    height: '500px',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <Grid container columnSpacing={3}>
                    <Grid item md="auto">
                        <Skeleton
                            height={450}
                            sx={{ borderRadius: 4, overflow: 'hidden' }}
                            variant="rectangular"
                            width={300}
                        />
                    </Grid>
                    <Grid item md>
                        <Stack spacing={1}>
                            <Typography variant="h4">
                                <Skeleton width="50%" />
                            </Typography>
                            <Stack direction="row" flexWrap="wrap" spacing={1}>
                                <Skeleton width="5%" />
                                <Skeleton width="5%" />
                                <Skeleton width="5%" />
                            </Stack>
                            <Typography>
                                <Skeleton width="30%" />
                            </Typography>
                            <Typography>
                                <Skeleton />
                            </Typography>
                            <Typography>
                                <Skeleton />
                            </Typography>
                            <Stack
                                mb={1}
                                spacing={1}
                                direction="row"
                                flexWrap="wrap"
                            >
                                <Skeleton variant="circular" width="5%" />
                                <Skeleton variant="circular" width="5%" />
                                <Skeleton variant="circular" width="5%" />
                            </Stack>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Grid>
    </Grid>
)
