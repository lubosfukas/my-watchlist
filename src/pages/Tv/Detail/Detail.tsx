import { useContext, useEffect } from 'react'
import { Alert, AlertTitle, Container, useMediaQuery } from '@mui/material'
import { useParams } from 'react-router-dom'

import { useFetchTvDetail } from './hooks'
import { ContentMd } from './ContentMd'
import { ContentXs } from './ContentXs'
import { CoveringSpinner, DetailMdSkeleton } from '../../../components'
import { MovieContext } from '../../../MovieContext'
import { device } from '../../../utils/device'

export const Detail = () => {
    const { setTitle } = useContext(MovieContext)
    const { id } = useParams()

    const { data, error, isLoading } = useFetchTvDetail(id)

    useEffect(() => {
        if (data) {
            document.title = data.name
            setTitle('')
        }
    })

    const isMd = useMediaQuery(device.md)

    if (isLoading) {
        if (isMd) return <DetailMdSkeleton />
        return <CoveringSpinner />
    }

    if (error)
        return (
            <Container>
                <Alert severity="error">
                    <AlertTitle>{error}</AlertTitle>
                </Alert>
            </Container>
        )

    if (!data)
        return (
            <Container>
                <Alert severity="info">
                    <AlertTitle>TV series not found!</AlertTitle>
                </Alert>
            </Container>
        )

    if (isMd) return <ContentMd {...data} />
    return <ContentXs {...data} />
}
