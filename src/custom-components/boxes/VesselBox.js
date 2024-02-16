import { Box, styled } from '@mui/material'

const VesselBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row-reverse',
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  '& img': {
    width: '70%',
    height: 'auto%',
    transition: 'transform 0.3s ease-out',
  },
}))

export default VesselBox
