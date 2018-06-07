import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 768px) {
    width: 750px;
  },
  @media (min-width: 992px) {
    width: 970px;
  },
  @media (min-width: 1200px) {
    width: 1170px;
  }
`

function Container(props) {
  return (
    <Wrapper>
      {props.children}
    </Wrapper>
  );
}

export default Container;