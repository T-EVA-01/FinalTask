export interface IOptions {
    sort: 'ASC' | 'DESC'
    filter: {
        name: keyof IPost
        value: string
    }
}

export interface IPost {
    id: string
    sortId: number
    title: string
    description: string
    type: string 
    image?: string
} 

export interface IndexPageProps {
    data: IPost[]
    className?: string 
}

export interface requestParameters {
    searchString: string 
    postType: string
}

export interface PostState {
    ids: string[]
    entities: IPost[]
    loading: 'loading' | 'idle'
    error: any
}