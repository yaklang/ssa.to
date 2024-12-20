import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function FooterLayout({ style, links, logo, copyright }) {
  return (
    <footer
      className={clsx('footer', {
        'footer--dark': style === 'dark',
      }, styles['footer'])}>
      <div className="container container-fluid">
        {links}
        {(logo || copyright) && (
          <div className="footer__bottom text--center">
            {logo && <div className="margin-bottom--sm">{logo}</div>}
          </div>
        )}
      </div>
      {copyright}
    </footer>
  );
}
