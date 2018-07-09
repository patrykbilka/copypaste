import React from 'react';
import styled from 'styled-components';

const Title = styled.h2`
  font-size: 1.45rem;
  font-weight: 400;
  text-align: center;
  letter-spacing: 0.15rem;
  color: #033539;
`;
const Wrapper = styled.div`
`


function PageHeader(props) {
  return (
    <Wrapper>
      <Title>{props.children}</Title>
    </Wrapper>
  );
}

export default PageHeader;