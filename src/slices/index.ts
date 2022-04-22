import counterReduser from './counterSlice';
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
    reducer: {
        counter: counterReduser
    },
});
