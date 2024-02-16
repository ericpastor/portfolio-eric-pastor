import { Paper, styled } from '@mui/material'

const ProjectPaper = styled(Paper)(({ theme }) => ({
  position: 'relative',
  borderRadius: '0',
  maxWidth: '500px',
  height: '250px',
  border: 'solid 2px #8ed1fc',
  overflow: 'hidden',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    opacity: '44%',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  '&::before': {
    content: "''",
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.5)',
    zIndex: '0',
    borderRadius: '0',
  },
}))

export default ProjectPaper
