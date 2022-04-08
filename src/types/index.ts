export type Breakpoints = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl' | 'fhd' | 'qhd' | 'uhd'

export interface IPost {
    id: number
    title: string
    description: string
    image: string
} 

export interface IOptions {
    sort: 'ASC' | 'DESK'
    filter: {
        name: string
        value: string
    }
}