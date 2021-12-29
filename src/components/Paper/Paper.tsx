import { Typography } from '@mui/material'

import { Poster } from '../Poster'
import { colors } from '../../theme'
import { MovieDTO } from '../../types'

import { StyledBox, StyledPaper } from './Paper.styled'

interface IMovie extends MovieDTO {
    onClick: () => void
}

export const Paper = (props: IMovie) => {
    const releaseYear = props['release_date']
        ? props['release_date'].split('-')[0]
        : ''
    const title = releaseYear
        ? `${props['title']} (${releaseYear})`
        : props['title']

    return (
        <StyledPaper elevation={8} onClick={props.onClick}>
            <Poster path={props['poster_path']} title={props['title']} />
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
