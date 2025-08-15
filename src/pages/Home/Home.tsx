import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import VirtualList from 'rc-virtual-list';

import { Loader, NewsCard } from '../../components';
import { AppDispatch, RootState } from '../../app/store';
import { fetchPosts } from '../../features/posts/postsThunks';
import { useWindowHeight } from '../../hooks/useWindowHeight';
import {
  FOOTER_HEIGHT,
  HEADER_HEIGHT,
  ITEM_HEIGHT,
} from '../../constants/layout';

import styles from './Home.module.scss';

export const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { posts, loading, skip, hasMore } = useSelector(
    (state: RootState) => state.posts
  );

  const windowHeight = useWindowHeight();
  const listHeight = windowHeight - HEADER_HEIGHT - FOOTER_HEIGHT;

  useEffect(() => {
    if (!loading && posts.length === 0) {
      dispatch(fetchPosts(0));
    }
  }, [dispatch, posts.length, loading]);

  const onScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    if (
      target.scrollHeight - target.scrollTop - target.clientHeight < 300 &&
      hasMore &&
      !loading
    ) {
      dispatch(fetchPosts(skip));
    }
  };

  return (
    <div className={styles.container}>
      {loading && posts.length === 0 ? (
        <Loader />
      ) : posts.length === 0 ? (
        <div className={styles.noPosts}>
          There are no news posts at the moment.
        </div>
      ) : (
        <VirtualList
          data={posts}
          height={listHeight}
          itemHeight={ITEM_HEIGHT}
          itemKey="id"
          onScroll={onScroll}
          className={styles.virtualList}
        >
          {(post) => <NewsCard key={post.id} post={post} />}
        </VirtualList>
      )}
    </div>
  );
};
