import { Card, Tag } from 'antd';
import { LikeOutlined, DislikeOutlined } from '@ant-design/icons';

import { useTheme } from '../../app/providers/theme/useTheme';
import type { Post } from '../../types/Post';

import styles from './NewsCard.module.scss';

interface NewsCardProps {
  post: Post;
}

export const NewsCard = ({ post }: NewsCardProps) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <Card
      title={post.title}
      className={`${styles.card} ${isDark ? styles.cardDark : styles.cardLight}`}
    >
      <p className={styles.body}>{post.body}</p>
      <div className={styles.meta}>
        <div className={styles.tags}>
          {post.tags.map((tag) => (
            <Tag
              key={tag}
              className={isDark ? styles.tagDark : styles.tagLight}
            >
              {tag}
            </Tag>
          ))}
        </div>
        <div className={styles.reactions}>
          <LikeOutlined /> {post.reactions?.likes ?? 0} | <DislikeOutlined />{' '}
          {post.reactions?.dislikes ?? 0}
        </div>
      </div>
    </Card>
  );
};
