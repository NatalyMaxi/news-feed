import { Layout } from 'antd';
import classNames from 'classnames';

import { useTheme } from './providers/theme/useTheme';
import { AppFooter, AppHeader } from '../components';

import styles from './App.module.scss';

const App = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <Layout
      className={classNames(styles.appLayout, {
        [styles.appLayoutDark]: isDark,
        [styles.appLayoutLight]: !isDark,
      })}
    >
      <AppHeader />
      <div className={styles.contentWrapper}>Hello</div>
      <AppFooter />
    </Layout>
  );
};

export default App;
