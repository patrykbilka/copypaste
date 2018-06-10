import React from 'react';
import styled from 'styled-components';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import Button from '@material-ui/core/Button';

const Wrapper = styled.div`
  margin: 0.25rem 0;
  > div {
    background-color: #3f6f6f;
  }
`

const action = (props) => (
  <Button color="secondary" size="small">
    lorem ipsum dolorem
  </Button>
);

function PageHeader(props) {
  return (
    <Wrapper>
      <SnackbarContent
        {...props}
        action={
          <Button size="small">
            Go
          </Button>
        }
      />
    </Wrapper>
  );
}

export default PageHeader;