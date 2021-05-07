import React, { useCallback, useEffect, useState } from 'react';
import styles from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';

import { NavLinkWrapper, NavLink } from './Link';
import { Header } from './Header';
import { SearchBox } from './SearchBox';
import { Icon } from './Icon';

type NavigationProps = boolean;
type isOpenProp = {
  isOpen: boolean;
};

const Nav = styles.nav`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    height: 74px;
    display: flex;
    padding: 0 20px;
    align-items: center;
    justify-content: space-between;
`;

const MobileNav = styles.div`
    width: 100%;
    display: flex;
    background-color: #364652;
    left: 0;
    height: auto;
    overflow: hidden;
    transition: 0.3s ease;
    @media screen and (max-width: 768px){
        position: absolute;
        top: 74px;
        padding: 0 20px;
        box-sizing: border-box;
        flex-direction: column;
        max-height: ${(props: isOpenProp) => (props.isOpen ? '100vh' : 0)}
    }
`;

export default function Navigation() {
  const [isOpen, setIsOpen] = useState<NavigationProps>(false);

  useEffect(() => {}, [isOpen]);

  const handleMobileOpen = useCallback(() => {
    setIsOpen(curr => !curr);
  }, []);

  return (
    <Header>
      <Nav>
        <Icon mobile onClick={handleMobileOpen}>
          <GiHamburgerMenu />
        </Icon>
        <MobileNav isOpen={isOpen}>
          <NavLinkWrapper>
            <NavLink href='home'>Home</NavLink>
            <NavLink href='about'> About</NavLink>
            <NavLink href='contact'>Contact</NavLink>
          </NavLinkWrapper>
          <SearchBox />
        </MobileNav>
      </Nav>
    </Header>
  );
}
