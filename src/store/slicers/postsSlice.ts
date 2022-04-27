import axios from "axios";
import { createAsyncThunk, createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { requestParameters, IPost } from "../../../interfaces/interfaces";

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async ( { searchString, postType }: requestParameters ) => {
        const url = 'https://dev.retnback.only.com.ru/api/news/list';
        const res = await axios.get(url, {
            params: {
                search: searchString,
                type: postType
            }
        })
        console.log(res.request.responseURL)
        return res.data
    }
);

const postsAdapter = createEntityAdapter();
const initialState: any = postsAdapter.getInitialState({loading: 'idle', error: null}) 

const postsSlice = createSlice({
    name: 'posts',
    initialState: initialState,
    reducers: {
        sortPosts: (state) => {
            state.entities = state.entities.sort((a: IPost, b: IPost) => state.sortState === 'DESC' ? a.sortId - b.sortId : b.sortId - a.sortId)
        },
        changeSortState: (state) => {
            state.sortState = state.sortState ==='ASC' ? 'DESC' : 'ASC';
        }
    },
    extraReducers: (builder) => {
        builder
        // Вызывается прямо перед выполнением запроса
        .addCase(fetchPosts.pending, (state) => {
          state.loading = 'loading';
          state.error = null;
        })
        // Вызывается в том случае если запрос успешно выполнился
        .addCase(fetchPosts.fulfilled, (state, action) => {
            const posts = action.payload.data.map((post: IPost, index: number) => {
                return {
                    id: `post${index+1}`,
                    sortId: index+1,
                    title: post.title,
                    description: post.description,
                    type: post.type  
                }
            })
            state.ids = posts.map((post: IPost) => {
                return post.id
            })
            state.entities = posts; 
            state.sortState = 'DESC'
            state.loading = 'idle';
            state.error = null;
        })
        // Вызывается в случае ошибки
        .addCase(fetchPosts.rejected, (state, action) => {
          state.loading = 'failed';
          state.error = action.error;
        });
    }
})

export const { sortPosts, changeSortState } = postsSlice.actions;

export default postsSlice.reducer