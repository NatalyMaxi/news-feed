import { apiFetch } from '../../utils/api/apiClient';
import type { Post } from '../../types/Post';

interface FetchPostsResponse {
  posts: Post[];
  total: number;
}

export const fetchPostsApi = (
  skip: number,
  limit = 10
): Promise<FetchPostsResponse> => {
  return apiFetch<FetchPostsResponse>('/posts', {
    params: { limit, skip },
  });
};
