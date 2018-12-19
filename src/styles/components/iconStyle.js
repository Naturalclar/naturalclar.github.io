import styled from 'styled-components'

export const StyledIcon = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: FontAwesome;
  padding: 0.3rem;
  margin: 0.3rem;
  color: rgba(255, 255, 255, 0.8);
  background: rgba(0, 0, 0, 0.1);
  text-decoration: none;
  border-radius: 50%;
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
    background: rgba(0, 0, 0, 0.2);
    color: white;
  }
`

const iconStyle = {
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'FontAwesome',
    padding: '0.3rem',
    margin: '0.3rem',
    color: 'rgba(255,255,255,0.8)',
    background: 'rgba(0,0,0,.1)',
    textDecoration: 'none',
    borderRadius: '50%',
    transition: 'all 0.3s ease-in-out',
    ':hover': {
      boxShadow: '2px 2px 2px rgba(0,0,0,.3)',
      background: 'rgba(0,0,0,.2)',
      color: 'white',
    },
  },
}

export default iconStyle
