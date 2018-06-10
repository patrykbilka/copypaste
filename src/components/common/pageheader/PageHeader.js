import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-size: 1.25rem;
`

function PageHeader(props) {
  return (
    <Wrapper>
      {props.children}
    </Wrapper>
  );
}

export default PageHeader;