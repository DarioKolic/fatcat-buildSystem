import styles from 'styled-components';

type Mobile = {
  mobile?: boolean;
};

export const Icon = styles.i`
    padding: ${(props: Mobile) => (props.mobile ? '0' : '0 5px 0 0')};
    display: ${(props: Mobile) => (props.mobile ? 'none' : 'flex')};
    align-items: center;
    color: #fff;
    @media screen and (max-width: 768px){
        display: ${(props: Mobile) => (props.mobile ? 'flex' : 'none')};
        font-size: ${(props: Mobile) => (props.mobile ? '24px' : 'inital')};
        cursor: pointer;
    }
`;
