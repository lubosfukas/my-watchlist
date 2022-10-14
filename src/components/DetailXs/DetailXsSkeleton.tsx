import React from 'react'
import { Skeleton, Stack, Typography, useMediaQuery } from '@mui/material'

import { device } from '../../utils/device'

export const DetailXsSkeleton = () => {
    const isSm = useMediaQuery(device.sm)

    return (
        <Stack m={isSm ? 3 : 2}>
            <Typography mb={1} variant="h5">
                <Skeleton width="60%" />
            </Typography>
            <Stack direction="row" flexWrap="wrap" mb={1} spacing={1}>
                <Skeleton width="15%" />
                <Skeleton width="15%" />
                <Skeleton width="15%" />
            </Stack>
            <Skeleton
                sx={{ paddingBottom: '56.25%', marginBottom: '16px' }}
                variant="rectangular"
            />
            <Stack direction="row" flexWrap="wrap" mb={1} spacing={1}>
                <Skeleton variant="circular" width="15%" />
                <Skeleton variant="circular" width="15%" />
                <Skeleton variant="circular" width="15%" />
            </Stack>
            <Typography mb={1} variant="body1">
                <Skeleton width="70%" />
            </Typography>

            <Typography variant="body1">
                <Skeleton />
                <Skeleton />
                {!isSm && <Skeleton />}
            </Typography>
        </Stack>
    )
}
