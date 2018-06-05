import React from 'react';
import styled from 'styled-components';
import { fadeInTop } from 'Utils/keyframes';

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  transition: all 0.3 ease-in-out;
  font-family: 'Indie Flower', cursive;
  opacity: 0;
  animation ${fadeInTop} 0.4s ease both;

  h1 {
    margin: 2rem 0
    font-size: 2.5rem;
  }

  h2 {
    font-size: 1.5rem;
  }
`;

const Home = () => (
  <HomeWrapper>
    <h1>
      Jesse K.
    </h1>
    <h2>
      Front-End Developer
    </h2>
  </HomeWrapper>
);

export default Home;
