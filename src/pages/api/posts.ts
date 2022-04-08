import posts from '../../../data/_posts/posts.json';
import { NextApiRequest, NextApiResponse } from 'next';
import { IPost } from '../../../interfaces/interfaces'

  
export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<IPost[]>
) {
    res.status(200).json(posts)
}