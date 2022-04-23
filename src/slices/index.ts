import counterReduser from './counterSlice';
import postsReducer from './postsSlice';
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
    reducer: {
        counter: counterReduser,
        posts: postsReducer
    },
});
