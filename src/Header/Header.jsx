import React from 'react';
import { Button } from '../Styled/Button.styled';
import { Container } from '../Styled/Container.styled';

const Header = () => {
  return (
    <>
        <Container>
            <h1>This is Style Component</h1>
            <Button color='white'>Apply Now</Button>
        </Container>
    </>
  )
};

export default Header;