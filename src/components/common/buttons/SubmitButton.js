import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const Wrapper = styled.div`
  margin: 0.25rem auto;
  & > button {
    width: 100%;
  }
`;

function SubmitButton(props) {
  return (
    <Wrapper>
      <Button variant="raised" {...props}>
        {props.children}
      </Button>
    </Wrapper>
  );
}

export default SubmitButton;