import { keyframes } from 'styled-components'

export const fadeInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-30%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`

export const fadeInTop = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`
