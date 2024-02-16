import { Typography, styled } from '@mui/material'

const TitleProjectTypo = styled(Typography)(({ theme }) => ({
  position: 'absolute',
  color: 'white',
  width: 'calc(100% - 20px)',
  zIndex: '1',
  pointerEvents: 'none',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
  top: '35%',
  left: '30px',
  fontFamily: 'Protest Strike, sans-serif',
  overflow: 'hidden',
  fontSize: '3.75em',
  '@media (max-width: 932px)': {
    fontSize: '3.5em',
  },
}))

export default TitleProjectTypo
