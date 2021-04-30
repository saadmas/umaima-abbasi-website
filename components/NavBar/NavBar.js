import DesktopNavBar from './DesktopNavBar/DesktopNavBar';
import MobileNavBar from './MobileNavBar/MobileNavBar';
import useWindowDimensions from '../../hooks/useWindowDimensions';

const navLinks = [
  'Work',
  'Leadership',
  'Interests',
  'Resume',
  'About Me',
  'Contact'
];

const NavBar = () => {
  const windowDimensions = useWindowDimensions();

  if (windowDimensions?.width > 1050) {
    return <DesktopNavBar navLinks={navLinks}/>;
  }
  
  return <MobileNavBar navLinks={navLinks}/>;
};

export default NavBar;
