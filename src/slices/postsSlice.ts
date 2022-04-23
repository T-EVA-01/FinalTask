import { createSlice } from "@reduxjs/toolkit";

const initialState: {
    data: {
        id: number,
        title: string,
        description: string,
        image: string
    }[]
} = {
    data: [
        {
            id: 1,
            title: "Заголовок",
            description: "Текст",
            image: "Ссылка"
        }
    ]
};

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        setPosts: (state, action) => {
            state.data = action.payload
        },
        sortPosts: (state, action) => {
            state.data.sort((a, b) => action.payload === 'ASC' ? a.id - b.id : b.id - a.id); 
        }
    },
});

export const { setPosts, sortPosts } = postsSlice.actions;

export default postsSlice.reducer;