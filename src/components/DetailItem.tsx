import React from 'react'
import { Box, Typography } from '@mui/material'

export const DetailItem = <T,>({
    label,
    value,
    component,
}: {
    label: string
    value?: T
    component?: JSX.Element
}) => {
    if (!component && !value) return null

    return (
        <Box sx={{ flex: '1 50%' }}>
            <Typography gutterBottom variant="h6">
                {label}
            </Typography>
            {component}
            {!component && (
                <Typography aria-label={label} gutterBottom variant="body1">
                    {value}
                </Typography>
            )}
        </Box>
    )
}
