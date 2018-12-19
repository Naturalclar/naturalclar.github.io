import styled from 'styled-components'
import { fadeIn } from 'Utils/keyframes'

export const StyledTooltip = styled.div`
  position: absolute;
  bottom: 105%;
  left: -7.5rem;
  width: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 50%;
  opacity: 0;
  animation: ${fadeIn} 0.3s both;
`

export const TooltipArrow = styled.span`
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #444 transparent transparent transparent;
`

export const TooltipText = styled.p`
  width: auto;
  background: #444;
  padding: 0.3rem;
  border-radius: 2px;
`

const tooltipStyle = {
  topArrow: {
    position: 'absolute',
    top: '100%',
    left: '50%',
    marginLeft: '-5px',
    borderWidth: '5px',
    borderStyle: 'solid',
    borderColor: '#444 transparent transparent transparent',
  },
  text: {
    width: 'auto',
    background: '#444',
    padding: '0.3rem',
    borderRadius: '2px',
  },
}

export default tooltipStyle
