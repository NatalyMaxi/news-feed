import { Spin } from 'antd';

import { useTheme } from '../../app/providers/theme/useTheme';

import styles from './Loader.module.scss';

export const Loader = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className={styles.loader}>
      <Spin className={isDark ? styles.spinnerDark : styles.spinnerLight} />
    </div>
  );
};
