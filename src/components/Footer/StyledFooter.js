import styled from 'styled-components';

export const StyledFooter = styled.footer`
  grid-area: footer;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 2rem;
  color: white;
`;

export const Line = styled.div`
  width: 90%;
  height: 1px;
  background: white;
`;

export const FooterText = styled.p`
  padding: 1rem 0;
`;

export const FooterLink = styled.ul`
  display: flex;
  margin-top: 0.5rem;
`;
