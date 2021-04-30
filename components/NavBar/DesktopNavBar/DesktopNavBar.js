import styles from './DesktopNavBar.module.scss';

const DesktopNavBar = ({ navLinks }) => {

  const renderNavLinks = () => {
    return navLinks.map(navLink => (
      <span className={styles.navLink} key={navLink}>{navLink}</span>
    ));
  };

  return (
    <div className={styles.navBarContainer}>
      <div className={styles.navBar}>
        {renderNavLinks()}
      </div>
    </div>
  );
};

export default DesktopNavBar;