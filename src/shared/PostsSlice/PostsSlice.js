import { createSlice } from '@reduxjs/toolkit';

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    list: [],
    selectedPost: null,
  },
  reducers: {
    setPostsList: (state, action) => {
      const newState = { ...state };
      newState.list = action.payload;
      return newState;
    },
    setSelectedPost: (state, action) => {
      const newState = { ...state };
      newState.selectedPost = action.payload;
      return newState;
    },
  },
});

export const { setPostsList, setSelectedPost } = postsSlice.actions;

export default postsSlice.reducer;
