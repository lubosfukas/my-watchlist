import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'

import { Poster } from '../Poster'
import { colors } from '../../theme'

import { StyledBox, StyledPaper } from './Paper.styled'

interface IProps {
    averageVote: number
    posterPath: string
    releaseDate: string
    title: string
    to: string
}

export const Paper: React.FC<IProps> = ({
    averageVote,
    posterPath,
    releaseDate,
    title,
    to,
}) => {
    const releaseYear = releaseDate.split('-')[0]

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
        </Link>
    )
}
