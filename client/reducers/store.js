import { configureStore } from '@reduxjs/toolkit';
import propertyReducer from './propertyReducer.js';

export const store = configureStore({
    reducer: {
        properties: propertyReducer,
    }
}
);