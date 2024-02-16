import { Button, styled } from '@mui/material'

const CodeButton = styled(Button)(({ theme }) => ({
  position: 'absolute',
  color: 'white',
  zIndex: '1',
  cursor: 'pointer',
  padding: '4px 10px',
  backgroundColor: 'transparent',
  borderRadius: '0',
  border: 'solid 2px white',
  transition: '.6s ease',
  textSizeAdjust: 'auto',
  textTransform: 'capitalize',
  fontSize: '1em',
  fontFamily: 'Protest Strike, sans-serif',
  fontWeight: '100',
  top: '3.50em',
  left: '30px',
  '&:hover': {
    backgroundColor: '#fff',
    color: '#323235',
  },
}))

export default CodeButton
