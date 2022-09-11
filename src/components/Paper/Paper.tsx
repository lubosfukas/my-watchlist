import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'

import { colors } from '../../theme'
import { getAverageVote } from '../../utils/helpers'
import { Poster } from '../Poster'

import { StyledBox, StyledPaper } from './Paper.styled'

type Props = {
    averageVote: number
    posterPath: string
    releaseDate: string
    title: string
    to: string
}

export const Paper: React.FC<Props> = ({
    averageVote,
    posterPath,
    releaseDate,
    title,
    to,
}) => {
    if (!posterPath) return <div />

    const releaseYear = releaseDate.split('-')[0] ?? ''

    return (
        <Link to={to}>
            <StyledPaper elevation={8}>
                <Poster path={posterPath} title={title} />
                <StyledBox>
                    {averageVote > 0 && (
                        <Typography
                            sx={{ color: colors.white, textAlign: 'center' }}
                            variant="h4"
                        >
                            {getAverageVote(averageVote)}
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
        </Link>
    )
}
