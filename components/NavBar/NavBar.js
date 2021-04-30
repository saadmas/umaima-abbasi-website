import styles from './NavBar.module.scss';


const NavBar = () => {
  return (
    <div className={styles.navBarContainer}>
      <div className={styles.navBar}>
        <span className={styles.navLink}>Work</span>
        <span className={styles.navLink}>Leadership</span>
        <span className={styles.navLink}>Interests</span>
        <span className={styles.navLink}>Resume</span>
        <span className={styles.navLink}>About Me</span>
      </div>
    </div>
  );
};

export default NavBar;