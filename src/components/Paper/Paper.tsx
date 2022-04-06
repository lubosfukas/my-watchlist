import { Typography } from '@mui/material'

import { Poster } from '../Poster'
import { colors } from '../../theme'

import { StyledBox, StyledPaper } from './Paper.styled'

interface IProps {
    averageVote: number
    posterPath: string
    releaseDate: string
    title: string
    onClick: () => void
}

export const Paper = ({
    averageVote,
    posterPath,
    releaseDate,
    title,
    onClick,
}: IProps) => {
    const releaseYear = releaseDate.split('-')[0]

    return (
        <StyledPaper elevation={8} onClick={onClick}>
            <Poster path={posterPath} title={title} />
            <StyledBox>
                {averageVote > 0 && (
                    <Typography
                        sx={{ color: colors.white, textAlign: 'center' }}
                        variant="h4"
                    >
                        {averageVote}
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
