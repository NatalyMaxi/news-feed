import { Layout } from 'antd';
import classNames from 'classnames';

import { useTheme } from '../../app/providers/theme/useTheme';

import styles from './Footer.module.scss';

const { Footer } = Layout;

export const AppFooter = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <Footer
      className={classNames(styles.footer, {
        [styles.footerDark]: isDark,
        [styles.footerLight]: !isDark,
      })}
    >
      © 2025 News Feed. Все права защищены.
    </Footer>
  );
};
