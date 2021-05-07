import React from 'react';
import styles from 'styled-components';

type WrapperDivProps = {
  centered: boolean;
};

type WrapperProps = {
  center?: boolean;
  children: React.ReactNode;
};

const WrapperDiv = styles.div`
    max-width: 1200px;
    width: 100%;
    box-sizing: border-box;
    margin: ${(props: WrapperDivProps) => (props.centered ? '0 auto' : '0')};
    padding: 0 20px;
`;

export default function Wrapper({
  center,
  children,
}: WrapperProps): React.ReactElement {
  return <WrapperDiv centered={center}>{children}</WrapperDiv>;
}
