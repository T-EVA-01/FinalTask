export interface IOptions {
    sort: 'ASC' | 'DESK'
    filter?: {
        name: string
        value: string
    }
}

export interface IPost {
    id: number
    title: string
    description: string
    image: string
} 

export interface IndexPageProps {
    posts: IPost[]
    className?: string 
}