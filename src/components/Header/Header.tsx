import { useState } from 'react';
import { Layout, Tooltip, Button } from 'antd';
import { BulbOutlined, MoonOutlined } from '@ant-design/icons';
import classNames from 'classnames';

import { useTheme } from '../../app/providers/theme/useTheme';

import styles from './Header.module.scss';

const { Header } = Layout;

export const AppHeader = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const [tooltipVisible, setTooltipVisible] = useState(false);

  return (
    <Header
      className={classNames(styles.header, {
        [styles.headerDark]: isDark,
        [styles.headerLight]: !isDark,
      })}
    >
      <a
        href="#"
        className={classNames(styles.logo, {
          [styles.titleDark]: isDark,
          [styles.titleLight]: !isDark,
        })}
        onClick={(e) => e.preventDefault()}
      >
        News Feed
      </a>

      <Tooltip
        title={isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
        open={tooltipVisible}
        onOpenChange={setTooltipVisible}
      >
        <Button
          type="text"
          shape="circle"
          size="large"
          onClick={() => {
            toggleTheme();
            setTooltipVisible(false);
          }}
          className={styles.themeButton}
          icon={
            isDark ? (
              <MoonOutlined style={{ fontSize: 24 }} />
            ) : (
              <BulbOutlined style={{ fontSize: 24 }} />
            )
          }
        />
      </Tooltip>
    </Header>
  );
};
