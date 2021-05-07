import React from 'react';
import { FaSearch } from 'react-icons/fa';
import styles from 'styled-components';

import { Icon } from './Icon';

const Label = styles.label`
    display: flex;
    align-items: center;
    border: 1px solid #fff;
    padding: 5px;
    border-radius: 5px;
    color: #fff;
    margin: 20px 0;
`;

const Input = styles.input`
    background: transparent;
    border: 0;
    caret-color: #fff;
    color: #fff;
    &:focus{
        outline: 0;
    }
    &::placeholder{
        color: #fff;
    }
`;

export const SearchBox = () => {
  return (
    <Label>
      <Icon>
        <FaSearch />
      </Icon>
      <Input type='text' placeholder='Search' />
    </Label>
  );
};
