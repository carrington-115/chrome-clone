import { createSlice } from "@reduxjs/toolkit";

const showSideBarSlice = createSlice({
  name: "sidebar",
  initialState: {
    showSideBar: false,
  },
  reducers: {
    openSideBar: (state) => {
      state.showSideBar = true;
    },
    closeSideBar: (state) => {
      state.showSideBar = false;
    },
  },
});

export const { openSideBar, closeSideBar } = showSideBarSlice.actions;
export default showSideBarSlice.reducer;
