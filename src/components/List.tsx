import { Typography } from '@mui/material'
import styled from '@emotion/styled'

const StyledList = styled.ul`
    display: inline-flex;
    flex-wrap: wrap;
    list-style-type: none;
    margin: 0 0 8px 0;
    padding: 0;
`

const ListItem = styled.li`
    display: inline-block;
    color: inherit;
    vertical-align: middle;

    :not(:first-of-type) {
        ::before {
            display: inline-block;
            margin: 0 0.5rem 0.2rem 0.5rem;
            content: '';
            font-size: 1rem;
            line-height: 0.5rem;
            padding: 1px;
            border-radius: 50%;
            vertical-align: middle;
            background-color: black;
        }
    }
`

export type Props = {
    listItems: Array<string | undefined>
}

export const List = ({ listItems }: Props) => (
    <StyledList>
        {listItems
            .filter((item) => item !== undefined)
            .map((item) => (
                <ListItem key={item}>
                    <Typography sx={{ display: 'inline' }} variant="body2">
                        {item}
                    </Typography>
                </ListItem>
            ))}
    </StyledList>
)
