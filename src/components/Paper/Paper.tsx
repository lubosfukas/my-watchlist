import { Typography } from '@mui/material'

import { Poster } from '../Poster'
import { colors } from '../../theme'
import { MovieDTO } from '../../types'

import { StyledBox, StyledPaper } from './Paper.styled'

interface IProps extends MovieDTO {
    onClick: () => void
}

export const Paper = ({ onClick, title, ...otherProps }: IProps) => {
    const releaseYear = otherProps['release_date']
        ? otherProps['release_date'].split('-')[0]
        : ''

    return (
        <StyledPaper elevation={8} onClick={onClick}>
            <Poster path={otherProps['poster_path']} title={title} />
            <StyledBox>
                {otherProps['vote_average'] > 0 && (
                    <Typography
                        sx={{ color: colors.white, textAlign: 'center' }}
                        variant="h4"
                    >
                        {otherProps['vote_average']}
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
                    {releaseYear ? `${title} (${releaseYear})` : title}
                </Typography>
            </StyledBox>
        </StyledPaper>
    )
}
