import { createSlice } from '@reduxjs/toolkit';

import { fetchPosts } from './postsThunks';
import type { Post } from '../../types/Post';

interface PostsState {
  posts: Post[];
  loading: boolean;
  error: string | null;
  skip: number;
  hasMore: boolean;
}

const initialState: PostsState = {
  posts: [],
  loading: false,
  error: null,
  skip: 0,
  hasMore: true,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;

        const existingIds = new Set(state.posts.map((post) => post.id));
        const newPosts = action.payload.posts.filter(
          (post: Post) => !existingIds.has(post.id)
        );

        state.posts.push(...newPosts);
        state.skip += newPosts.length;
        state.hasMore = action.payload.posts.length === 10;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Failed to load posts';
      });
  },
});

export default postsSlice.reducer;
