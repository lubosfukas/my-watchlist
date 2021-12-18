import { createContext, Dispatch, SetStateAction } from 'react'

export const MovieContext = createContext<{
    title: string
    setTitle: Dispatch<SetStateAction<string>>
}>({
    title: '',
    setTitle: () => {},
})
