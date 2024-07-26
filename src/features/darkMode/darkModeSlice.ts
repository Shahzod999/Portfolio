import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

export interface DarkMode {
  value: boolean
}

const initialState: DarkMode = {
  value: false
}

export const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.value = !state.value
    }
  }
})

export const { toggleDarkMode } = darkModeSlice.actions
export default darkModeSlice.reducer