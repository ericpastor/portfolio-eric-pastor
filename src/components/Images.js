import { Box, IconButton } from '@mui/material'
import ImageCodeF from '../assets/images/some-old-code-f.png'
import ImageCodeS from '../assets/images/some-old-code-s.png'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import { useState } from 'react'

const itemData = [
  {
    img: ImageCodeF,
    title: 'first-code',
  },
  {
    img: ImageCodeS,
    title: 'second-code',
  },

]

const Images = () => {
  const [selectedImage, setSelectedImage] = useState(itemData[0].img)

  const handleNext = () => {
    const currentIndex = itemData.findIndex(
      (item) => item.img === selectedImage
    )
    const nextIndex = (currentIndex + 1) % itemData.length
    setSelectedImage(itemData[nextIndex].img)
  }

  const handlePrev = () => {
    const currentIndex = itemData.findIndex(
      (item) => item.img === selectedImage
    )
    const prevIndex = (currentIndex - 1 + itemData.length) % itemData.length
    setSelectedImage(itemData[prevIndex].img)
  }

  const handleOpen = (img) => {
    setSelectedImage(img)
  }

  return (
    <Box
      sx={{
        position: 'relative',
        width: '90%',
        height: 'auto',
        overflow: 'hidden',
        '& img': {
          width: '70%',
          height: 'auto%',
          transition: 'transform 0.3s ease-out',
        },
        '@media (max-width: 900px)': {
          marginLeft: '5%',
          width: '85%',
          marginBottom: '35%',
        },
        '@media (max-width: 300px)': {
          marginLeft: '15%',
          width: '60%',
          marginBottom: '35%',
        },
      }}
    >
      <IconButton
        sx={{
          position: 'absolute',
          left: '5%',
          top: '50%',
          transform: 'translateY(-50%)',
          color: 'white',
          backgroundColor: '#252850ff',
          opacity: '0.7',
          '&:hover': {
            color: '#252850ff',
          },
        }}
        onClick={handlePrev}
      >
        <NavigateBeforeIcon />
      </IconButton>

      <img
        srcSet={`${selectedImage}?w=500&h=450&fit=crop&auto=format&dpr=2 2x`}
        src={`${selectedImage}?w=500&h=450&fit=crop&auto=format`}
        alt='Imagen principal'
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
        onClick={() => handleOpen(selectedImage)}
        loading='lazy'
      />

      <IconButton
        sx={{
          position: 'absolute',
          right: '5%',
          top: '50%',
          transform: 'translateY(-50%)',
          color: 'white',
          backgroundColor: '#252850ff',
          opacity: '0.7',
          '&:hover': {
            color: '#252850ff',
          },
        }}
        onClick={handleNext}
      >
        <NavigateNextIcon />
      </IconButton>
    </Box>
  )
}
export default Images
