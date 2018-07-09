import React from 'react';
import styled from 'styled-components';
import PageHeader from '../../common/pageheader/PageHeader';
import { Link, NavLink } from 'react-router-dom'
import Button from '../../common/buttons/PageButton';

const Content = styled.div`
  margin-top: 5rem;
`
const Title = styled.h1`
  color: #f64757;
  text-align: center;
  font-weight: 400;
  
`
const SectionTitle = styled.h3`
  color: #03363a;
  text-align: center;
  font-weight: 400;
  margin: 3rem 0;
`

const SectionSubTitle = styled.h2`
  color: #03363a;
  text-align: center;
  font-weight: 400;
  margin: 3rem 0;
`

function Home(props) {
  return (
    <div>
      <Title>Copy & paste</Title>
      <Content>
        <SectionSubTitle>Magazyn dla Twoich przydatnych linków i nie tylko.</SectionSubTitle>
        <SectionTitle>Mem, śmieszny filmik, lub interesujący artykuł? Skopiuj, wklej, by potem przejrzeć go w wolnym czasie.</SectionTitle>
        <p>
          Czy kiedykolwiek znalazłeś pasjonujący artykuł, lecz nie miałeś czasu, by się w niego zagłębić? "To musi być ciekawe. Przeczytam później." - myślisz, lecz to "później" nie ma miejsca.
          Używając tej aplikacji możesz (kompletnie za darmo) przechowywać ważne dla siebie odnośniki, które wyświetlą Ci się w jednym miejscu.  
        </p>
        <Button color="inherit" component={Link} to="/register">
          Stwórz konto
        </Button>
      </Content>
    </div>
  );  
}

export default Home;