import { Typography, styled } from '@mui/material'

const TypoPresentation = styled(Typography)(({ theme }) => ({
  position: 'absolute',
  zIndex: 1,
  top: '75%',
  left: '26%',
  transform: 'translate(-30%, -50%)',
  textAlign: 'left',
  fontSize: '4vw',
  fontFamily: 'Protest Strike, sans-serif',
  overflow: 'hidden',
  '& .light': {
    color: '#8ed1fc',
  },
  '& .dark': {
    color: '#252850ff',
  },
}))

export default TypoPresentation
