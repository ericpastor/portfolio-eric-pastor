import { Typography, styled } from '@mui/material'

const TypoPhrases = styled(Typography)(({ theme }) => ({
  '& .type': {
    position: 'absolute',
    zIndex: 1,
    top: '14%',
    left: '20%',
    transform: 'translate(-30%, -50%)',
    textAlign: 'left',
    fontSize: '1.75vw',
    fontFamily: 'Cedarville Cursive, cursive',
    overflow: 'hidden',
    display: 'block',
    maxWidth: '610px',
    margin: '0 auto 40px',
    whiteSpace: 'nowrap',
    width: '40ch',
    animation:
      'typing 3s steps(40, start) reverse, blink 1s step-start alternate',
  },
  '@keyframes typing': {
    from: {
      width: '40ch',
    },
    to: {
      width: '0',
    },
  },
  '@keyframes blink': {
    '50%': {
      borderColor: 'transparent',
    },
  },
}))

export default TypoPhrases
