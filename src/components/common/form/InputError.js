import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.p`
  font-size: 0.8rem;
  color: #f44541;
  text-align: left;
  letter-spacing: 1px;
`

function InputError(props) {
  return (
    <Wrapper>
      {props.children}
    </Wrapper>
  );
}

export default InputError;