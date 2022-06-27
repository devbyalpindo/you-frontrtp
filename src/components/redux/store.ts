import { configureStore } from "@reduxjs/toolkit";
import themeModeReducer from "./reducers/darkMode";
import productReducer from "./reducers/product";

export const store = configureStore({
  reducer: {
    themeMode: themeModeReducer,
    product: productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
