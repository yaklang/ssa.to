import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.css';

export default function FooterCopyright({copyright}) {
  return (
    <div
      className={clsx("footer__copyright", styles['copyright'])}
      // Developer provided the HTML, so assume it's safe.
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{__html: copyright}}
    />
  );
}
