import { Layout } from 'antd';
import classNames from 'classnames';

import { useTheme } from './providers/theme/useTheme';
import { AppFooter, AppHeader } from '../components';

import styles from './App.module.scss';
import { Home } from '../pages';

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
      <div className={styles.contentWrapper}>
        <Home />
      </div>
      <AppFooter />
    </Layout>
  );
};

export default App;
