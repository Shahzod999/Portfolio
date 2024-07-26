import { configureStore } from "@reduxjs/toolkit";
import darkModeSlice from "../features/darkMode/darkModeSlice";

export const store = configureStore({
  reducer: {
    darkMode: darkModeSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch