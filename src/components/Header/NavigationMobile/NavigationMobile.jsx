import { RxHamburgerMenu } from 'react-icons/rx';

export default function NavigationMobile() {
  const handleClick = () => {
    console.log('open');
  };

  return <RxHamburgerMenu onClick={handleClick} />;
}
