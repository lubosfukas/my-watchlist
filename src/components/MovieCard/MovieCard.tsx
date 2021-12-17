import { Typography, useMediaQuery } from '@mui/material'

import { Poster } from '../Poster'
import { colors } from '../../theme'
import { MovieDTO } from '../../types'
import { device } from '../../utils/device'

import { StyledBox, StyledPaper } from './MovieCard.styled'

interface IMovie extends MovieDTO {
    onClick: () => void
}

export const MovieCard = (props: IMovie) => {
    const isMobileOrLarger = useMediaQuery(device.mobileL)
    const isDesktopOrLarger = useMediaQuery(device.desktop)

    const width = isDesktopOrLarger ? 400 : 300

    const releaseYear = props['release_date']
        ? props['release_date'].split('-')[0]
        : ''
    const title = releaseYear
        ? `${props['title']} (${releaseYear})`
        : props['title']

    return (
        <StyledPaper
            elevation={8}
            mobile={(!isMobileOrLarger).toString()}
            onClick={props.onClick}
            width={width}
        >
            <Poster
                path={props['poster_path']}
                title={props['title']}
                width={width}
            />
            <StyledBox>
                {props['vote_average'] > 0 && (
                    <Typography
                        sx={{ color: colors.white, textAlign: 'center' }}
                        variant="h4"
                    >
                        {props['vote_average']}
                        {'/10'}
                    </Typography>
                )}
                <Typography
                    sx={{
                        color: colors.white,
                        m: '20px 15px 30px 15px',
                        textAlign: 'center',
                    }}
                    variant="h6"
                >
                    {title}
                </Typography>
            </StyledBox>
        </StyledPaper>
    )
}
