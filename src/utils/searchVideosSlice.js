import { createSlice } from "@reduxjs/toolkit";

const searchVideosSlice = createSlice({
  name: "searchVideos",
  initialState: {
    searchVideosResults: [],
  },
  reducers: {
    addSearchVideosResult: (state, action) => {
      state.searchVideosResults = action.payload;
    },
  },
});

export const { addSearchVideosResult } = searchVideosSlice.actions;
export default searchVideosSlice.reducer;
