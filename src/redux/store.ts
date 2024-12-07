import { configureStore } from '@reduxjs/toolkit';
import counterReducer from "./features/counterSlice";
import userReducer from "./features/userSlice";

export const makeStore = () => {
    return configureStore({
        reducer: {
          counter: counterReducer,
          users: userReducer,
        },
        devTools: false, // false pr nhi dikhta hai 
    });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];