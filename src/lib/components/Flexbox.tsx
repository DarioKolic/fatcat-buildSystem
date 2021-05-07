import React from 'react';
import styles from 'styled-components';

type FlexProps = {
  alignCenter?: boolean;
  alignEnd?: boolean;
  alignStart?: boolean;
  center?: boolean;
  spaceBetween?: boolean;
  spaceEvenly?: boolean;
  spaceAround?: boolean;
  row?: boolean;
  column?: boolean;
  flexWrap?: boolean;
  children?: React.ReactNode;
};

export const Flex = styles.div`
    display: flex;
    box-sizing: border-box;
    align-items: ${(props: FlexProps) => {
      if (props.alignCenter) return 'center';
      else if (props.alignEnd) return 'flex-end';
      else if (props.alignStart) return 'flex-start';

      return 'flex-start';
    }};
    
    justify-content: ${(props: FlexProps) => {
      if (props.center) return 'center';
      else if (props.spaceBetween) return 'space-between';
      else if (props.spaceAround) return 'space-around';
      else if (props.spaceEvenly) return 'space-evenly';

      return 'flex-start';
    }};

    flex-direction: ${(props: FlexProps) => {
      if (props.row) return 'row';
      else if (props.column) return 'column';

      return 'row';
    }};
    
    flex-wrap: ${(props: FlexProps) => (props.flexWrap ? 'wrap' : null)};
    
`;

export const Flexbox = (props: FlexProps) => {
  const { children } = props;

  return <Flex {...props}>{children}</Flex>;
};
