import styles from './Welcome.module.scss';
import Typewriter from 'typewriter-effect';

const Welcome = () => {
  return (
    <div className={styles.welcome}>
      <div className={styles.welcomeText}>
        <div className={styles.primaryText}>Hi, I'm Umaima Abbasi.</div>
        <Typewriter
          options={{
            strings: [
              'I empower communities in becoming agents of change.',
              'I strive for social justice.',
              /// add more!
            ],
            autoStart: true,
            loop: true,
            wrapperClassName: styles.subText,
            cursorClassName: styles.typeWriterCursor
          }}
        />
      </div>
    </div>
  );
};

export default Welcome;