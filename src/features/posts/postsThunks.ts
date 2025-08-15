import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchPostsApi } from './postsApi';
import type { Post } from '../../types/Post';

interface FetchPostsResponse {
  posts: Post[];
  total: number;
}

export const fetchPosts = createAsyncThunk<FetchPostsResponse, number>(
  'posts/fetchPosts',
  async (skip: number) => {
    const data = await fetchPostsApi(skip);
    return data;
  }
);
