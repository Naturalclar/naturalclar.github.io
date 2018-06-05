import React from 'react';
import styled from 'styled-components';
import { fadeInTop } from 'Utils/keyframes';
import { color, viewport } from 'Styles/abstracts';

const AboutWrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 0.5rem;
  margin-top: 3rem;
`;

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${color.BACKGROUND_SECONDARY};
  width: 80%;
  padding: 3rem;
  border-radius: 5px;
  box-shadow: 4px 4px 4px ${color.BACKGROUND_SECONDARY};
  opacity: 0;
  animation: ${fadeInTop} 0.4s ease both;
  transition: transform opacity 0.3s ease-in-out;
  ${viewport.large} {
    width: 50%;
  }
  h2 {
    font-size: 1.5rem;
    font-family: 'Indie Flower', cursive;
    border-bottom: 2px solid;
    padding: 0.2rem;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.1rem;
    line-height: 2rem;
    margin-bottom: 1rem;
  }
}
`;

function About() {
  return (
    <AboutWrapper>
      <AboutContainer>
        <h2>
          About me
        </h2>
        <p>
          Hi! My name is Jesse Katsumata, a front-end developer based in Union City, California.
          I will help you make your dream website into reality, as I am on my way to making mine!
          I have a degree in computer science &#x1f4bb; and minor in music &#x1f3b9;&#x1f3b6; .
          I mainly use React with Redux to build my applications for work.
          I&apos;m also a clarinet player and have a strong passion in classical music!
        </p>
      </AboutContainer>
    </AboutWrapper>
  );
}

export default About;

