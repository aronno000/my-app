import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCog, faFileAlt, faCalendarAlt, faChat, faMusic, faVideo, faGamepad } from '@fortawesome/free-solid-svg-icons';
import styles from './IconInterface.module.css';

const IconInterface = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <FontAwesomeIcon icon={faHome} className={styles.icon} />
      </header>

      <main className={styles.main}>
        <div className={styles.section}>
          <FontAwesomeIcon icon={faHome} className={styles.icon} />
          <FontAwesomeIcon icon={faCog} className={styles.icon} />
        </div>

        <div className={styles.section}>
          <FontAwesomeIcon icon={faFileAlt} className={styles.icon} />
          <FontAwesomeIcon icon={faCalendarAlt} className={styles.icon} />
        </div>

        <div className={styles.section}>
          <FontAwesomeIcon icon={faMusic} className={styles.icon} />
          <FontAwesomeIcon icon={faGamepad} className={styles.icon} />
        </div>
      </main>
    </div>
  );
};

export default IconInterface;
