import styles from './Welcome.module.scss';

const Welcome = () => {
  return (
    <div className={styles.welcome}>
      <div className={styles.primaryText}>Hi, I'm Umaima Abbasi.</div>
      <div className={styles.subText}>I empower communities in becoming agents of change.</div>
    </div>
  );
};

export default Welcome;