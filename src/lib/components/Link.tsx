import React from 'react';
import styles from 'styled-components';

type LinkProps = {
  href: string;
  children: string;
};

const StyledNavLink = styles.li`
    color: #fff;
    font-weight: 600;
    padding-right: 20px;
    & > a {
        cursor: pointer;
        text-decoration: none;
        color: #fff;
    };
    @media screen and (max-width: 768px){
        padding: 6px 0;
    }
`;

export const NavLink = ({ href, children }: LinkProps) => {
  return (
    <StyledNavLink>
      <a href={href}>{children}</a>
    </StyledNavLink>
  );
};

export const NavLinkWrapper = styles.ul`
    display: flex;
    padding: 0;
    align-items: center;
    margin: 0;
    width: 100%;
    list-style: none;
    @media screen and (max-width: 768px){
        flex-direction: column;
        align-items: flex-start;
    }
`;
