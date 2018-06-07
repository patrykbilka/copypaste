import React from 'react';
import styled from 'styled-components';
import Checkbox from '@material-ui/core/Checkbox';

const Wrapper = styled.div`
  margin: 0.25rem auto;
`;

function CheckboxComponent(props) {
  return (
    <Wrapper>
      <Checkbox {...props} />
    </Wrapper>
  );
}

export default CheckboxComponent;