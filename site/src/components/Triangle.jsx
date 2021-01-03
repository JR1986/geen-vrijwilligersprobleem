import styled from '@emotion/styled';

const Triangle = styled.div`
  display: none;

  @media (min-width: 600px) {
    display: block;
    width: 0; 
    height: 0; 
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    border-top: 45px solid ${(props) => props.backgroundColor};
    position: absolute;
    left: calc(50% - 30px);
    right: calc(50% - 30px);
    top: -12px;
  }
`;

export default Triangle;
