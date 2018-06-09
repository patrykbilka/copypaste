import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 201px;
  margin: 0.825rem auto;
  text-align: right;
  > div {
    width: 100%;
  }
`

function InputWrapper(props) {
  return (
    <Wrapper>
      {props.children}
    </Wrapper>
  );
}

export default InputWrapper;