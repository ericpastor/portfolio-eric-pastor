import { Typography, styled } from '@mui/material'

const DescriptionProjectTypo = styled(Typography)(({ theme }) => ({
  position: 'absolute',
  color: 'white',
  width: 'calc(100% - 20px)',
  zIndex: '1',
  pointerEvents: 'none',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
  top: '55%',
  left: '30px',
  fontFamily: 'Montserrat, sans-serif',
  fontWeight: '700',
  fontSize: '1.75em',
  '@media (max-width: 932px)': {
    fontSize: '1.5em',
  },
}))

export default DescriptionProjectTypo
