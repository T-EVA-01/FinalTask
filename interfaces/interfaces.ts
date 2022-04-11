export interface IOptions {
    sort: 'ASC' | 'DESC'
    filter: {
        name: keyof IPost
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