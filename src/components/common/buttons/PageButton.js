import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const Wrapper = styled.div`
  margin: 4.25rem auto;
  text-align: center;
  & > a {
    background-color: #f50057;
    color: #FFF;
  }
  & > a:hover {
    background-color: #f50057;
  }
`;

function PageButton(props) {
  return (
    <Wrapper>
      <Button variant="raised" {...props}>
        {props.children}
      </Button>
    </Wrapper>
  );
}

export default PageButton;