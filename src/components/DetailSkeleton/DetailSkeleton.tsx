import {
    Box,
    Container,
    Grid,
    Skeleton as SkeletonMui,
    Stack,
    Typography,
} from '@mui/material'

const DetailItemSkeleton = () => (
    <Box sx={{ flex: '1 50%' }}>
        <Typography variant="h6">
            <SkeletonMui width="50%" />
        </Typography>
        <Typography variant="body1">
            <SkeletonMui width="50%" />
        </Typography>
    </Box>
)

const PosterSkeleton = () => (
    <SkeletonMui
        height={450}
        sx={{ borderRadius: 8, overflow: 'hidden' }}
        variant="rectangular"
        width={300}
    />
)

const TrailerSkeleton = () => (
    <Container sx={{ mt: 3 }}>
        <Typography variant="h6">
            <SkeletonMui width="10%" />
        </Typography>
        <SkeletonMui height={360} variant="rectangular" width={640} />
    </Container>
)

export const DetailSkeleton = () => (
    <Grid container>
        <Grid item lg={12}>
            <Container
                sx={{
                    height: '500px',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <Grid container columnSpacing={3}>
                    <Grid item>
                        <PosterSkeleton />
                    </Grid>
                    <Grid item lg={8}>
                        <Stack spacing={1}>
                            <Typography variant="h4">
                                <SkeletonMui width="70%" />
                            </Typography>
                            <Typography>
                                <SkeletonMui width="30%" />
                            </Typography>
                            <Typography>
                                <SkeletonMui />
                            </Typography>
                            <Typography>
                                <SkeletonMui />
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                }}
                            >
                                <DetailItemSkeleton />
                                <DetailItemSkeleton />
                            </Box>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Grid>
        <Grid item lg={12}>
            <TrailerSkeleton />
        </Grid>
    </Grid>
)
