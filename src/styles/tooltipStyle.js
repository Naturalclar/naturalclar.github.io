import { fadeIn } from './keyframes';

const tooltipStyle = {
  top: {
    position: 'absolute',
    bottom: '105%',
    left: '-7.5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '15rem',
    marginLeft: '50%',
    opacity: 0,
    animation: '0.3s both',
    animationName: fadeIn,
  },
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
};

export default tooltipStyle;
