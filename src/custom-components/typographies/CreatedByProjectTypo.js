import { Typography, styled } from '@mui/material'

const CreatedByProjectTypo = styled(Typography)(({ theme }) => ({
  position: 'absolute',
  color: 'white',
  width: 'calc(100% - 20px)',
  zIndex: '1',
  pointerEvents: 'none',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
  top: '85%',
  left: '30px',
  fontFamily: 'Montserrat, sans-serif',
  fontWeight: '700',
  overflow: 'hidden',
  fontSize: '1.25em',
}))

export default CreatedByProjectTypo
