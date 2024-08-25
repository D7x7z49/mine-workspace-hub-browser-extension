// IconGrid.tsx
import React from 'react';
import * as styles from '@styles/IconGrid.module.scss';

interface LinkItem {
  url: string;
  icon: string;
  title: string;
}

interface IconGridProps {
  links: LinkItem[];
}

const IconTile: React.FC<LinkItem> = ({ url, icon, title }) => {
  return (
    <div className={styles.iconTile}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img src={icon} alt={title} className={styles.icon} />
        <span className={styles.title}>{title}</span>
      </a>
    </div>
  );
};

const IconGrid: React.FC<IconGridProps> = ({ links }) => {
  return (
    <div className={styles.iconGrid}>
      {links.map((link, index) => (
        <IconTile key={index} {...link} />
      ))}
    </div>
  );
};

export default IconGrid;
