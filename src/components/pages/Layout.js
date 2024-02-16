import { Box, Grid, Typography } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import ContactPhoneIcon from '@mui/icons-material/ContactPhone'
import MailIcon from '@mui/icons-material/Mail'
import HomeIcon from '@mui/icons-material/Home'

import VesselBox from '../../custom-components/boxes/VesselBox'
import PresentationTypo from '../../custom-components/typographies/PresentationTypo'
import AnimationTypo from '../../custom-components/typographies/AnimationTypo'
import MainBox from '../../custom-components/boxes/MainBox'
import BlueLineBox from '../../custom-components/boxes/BlueLineBox'

import Images from '../Images'
import Vessel from '../../assets/images/container-vessel.png'
import Porfolio from '../../assets/images/portfolio-project.png'
import Breweries from '../../assets/images/breweries-project.png'
import SailOnHolidays from '../../assets/images/sail-on-holidays-project.png'
import EricLogo from '../../assets/images/my-logo-nav.png'
import Comm from '../../assets/images/comm-project.png'
import ProjectPaper from '../../custom-components/papers/ProjectPaper'
import TitleProjectTypo from '../../custom-components/typographies/TitleProjectTypo'
import DescriptionProjectTypo from '../../custom-components/typographies/DescriptionProjectTypo'
import CreatedByProjectTypo from '../../custom-components/typographies/CreatedByProjectTypo'
import CodeButton from '../../custom-components/buttons/CodeButton'

const Layout = () => {
  return (
    <Box
      sx={{
        marginLeft: '61px',
        '@media (max-width:600px)': {
          marginLeft: '0',
        },
      }}
    >
      <MainBox id='home'>
        <AnimationTypo>
          <span className='type'>"Next port: Software Development"</span>
        </AnimationTypo>
        <PresentationTypo>
          Hello,
          <br />
          I'm <span className='light'>Eric,</span>
          <br />
          aspiring Full <span className='dark'>Stack Developer.</span>
        </PresentationTypo>
        <VesselBox>
          <img src={Vessel} alt='skills-vessel' />
        </VesselBox>
      </MainBox>
      <Box
        display='grid'
        gridTemplateColumns='repeat(12, 1fr)'
        gap={2}
        sx={{
          marginTop: '10%',
          width: '100%',
          minHeight: 'auto',
          backgroundColor: '#abb8c3',
        }}
      >
        <Box
          gridColumn='span 12'
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography
            sx={{
              marginTop: '5%',
              textAlign: 'center',
              fontSize: '4vw',
              fontFamily: 'Protest Strike, sans-serif',
              overflow: 'hidden',
              color: '#252850ff',
            }}
          >
            About Me
          </Typography>
          <BlueLineBox />
        </Box>
        <Box
          id='about'
          gridColumn={{ xs: 'span 12', md: 'span 6' }}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: '10%',
            marginRight: '10%',
            marginBottom: '20%',
            flexDirection: 'row',
          }}
        >
          <Typography
            sx={{
              color: '#3b3b3f',
              fontSize: '1.5vw',
              fontFamily: 'Montserrat, sans-serif',
              fontOpticalSizing: 'auto',
              fontWeight: '400',
              fontStyle: 'normal',
              marginTop: '7%',
              '& .name-about-me': {
                fontWeight: '700',
                fontFamily: 'Protest Strike, sans-serif',
                color: '#252850ff',
                fontSize: '2vw',
                marginBottom: '10%',
              },
            }}
          >
            <span className='name-about-me'>Eric Pastor</span>
            <br />
            I am a full-stack developer undergoing a career transition. During
            my bachelor's degree studies in Nautical and Maritime Transport, I
            delved into engineering subjects like mathematics, physics,
            informatics, naval electricity and electronics, and automatic
            regulation and control.
            <br />
            <br />
            My interest in programming sparked while studying creating apps to
            address challenges related to ship stability and celestial
            navigation.
            <br />
            <br />
            In August 2022, I embarked on a self-study journey through the Full
            Stack Open online course, reigniting my passion for problem-solving
            through coding.
            <br />
            <br />
            From August 2023 to January 2024, I was enrolled at Integrity
            Academy, and I completed a Full Stack program.
          </Typography>
        </Box>
        <Box
          gridColumn={{
            xs: 'span 12',
            md: 'span 6',
          }}
          sx={{
            marginLeft: '0',
            width: '100%',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',

              '@media (max-width: 600px)': {
                marginLeft: '6%',
              },
              '@media (min-width: 600px)': {
                marginLeft: '5%',
              },
            }}
          >
            <Typography
              sx={{
                fontWeight: '700',
                fontFamily: 'Protest Strike, sans-serif',
                color: '#252850ff',
                fontSize: '2vw',
                marginTop: '6%',
                '@media (max-width: 900px)': {
                  marginLeft: '5%',
                  marginTop: '0',
                },
                '@media (max-width: 300px)': {
                  marginLeft: '15%',
                  marginTop: '0',
                },
              }}
            >
              Some code where all began...
            </Typography>
            <Images />
          </Box>
        </Box>
      </Box>
      <Box
        id='projects'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography
          sx={{
            marginTop: '5%',
            textAlign: 'center',
            fontSize: '4vw',
            fontFamily: 'Protest Strike, sans-serif',
            overflow: 'hidden',
            color: '#abb8c3',
          }}
        >
          Projects
        </Typography>
        <BlueLineBox
          sx={{
            backgroundColor: '#abb8c3',
            marginBottom: '5%',
          }}
        />
      </Box>
      <Grid
        container
        spacing={2}
        sx={{
          marginLeft: '5%',
          width: '90%',
        }}
      >
        <Grid item xs={12} md={6} lg={6}>
          <ProjectPaper>
            <img src={Porfolio} loading='lazy' alt='portfolio' />
            <CodeButton>CODE</CodeButton>
            <TitleProjectTypo>Portfolio</TitleProjectTypo>
            <DescriptionProjectTypo>
              Create with Javascript, React, Mui Material and SASS.
            </DescriptionProjectTypo>
            <CreatedByProjectTypo>by Eric Pastor</CreatedByProjectTypo>
          </ProjectPaper>
        </Grid>

        <Grid item xs={12} md={6} lg={6}>
          <ProjectPaper>
            <img src={Comm} loading='lazy' alt='Fake e-commerce' />
            <CodeButton
              sx={{
                top: '2em',
              }}
            >
              WEB
            </CodeButton>
            <CodeButton sx={{ top: '2em', left: '120px' }}>
              FRONTEND CODE
            </CodeButton>
            <CodeButton sx={{ top: '6em' }}>API</CodeButton>
            <CodeButton sx={{ top: '6em', left: '120px', padding: '4px 13px' }}>
              BACKEND CODE
            </CodeButton>
            <TitleProjectTypo>COMM</TitleProjectTypo>
            <DescriptionProjectTypo
              sx={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9)' }}
            >
              Fake e-commerce. Full Stack Project
            </DescriptionProjectTypo>
            <CreatedByProjectTypo>by Eric Pastor</CreatedByProjectTypo>
          </ProjectPaper>
        </Grid>

        <Grid item xs={12} md={6} lg={6}>
          <ProjectPaper>
            <img src={Breweries} loading='lazy' alt='breweries-project' />
            <CodeButton>WEB</CodeButton>
            <CodeButton sx={{ left: '120px' }}>FRONTEND CODE</CodeButton>
            <TitleProjectTypo>BREWERIES</TitleProjectTypo>
            <DescriptionProjectTypo>
              Fronted proteject fetching data to display breweries information
              details.
            </DescriptionProjectTypo>
            <CreatedByProjectTypo>by Eric Pastor</CreatedByProjectTypo>
          </ProjectPaper>
        </Grid>

        <Grid item xs={12} md={6} lg={6}>
          <ProjectPaper>
            <img
              src={SailOnHolidays}
              loading='lazy'
              alt='sailOnHolidays-project'
            />
            <CreatedByProjectTypo sx={{ top: '3.50em' }}>
              &lt;web under construction&gt;
            </CreatedByProjectTypo>
            <TitleProjectTypo>Sail On Holidays</TitleProjectTypo>
            <DescriptionProjectTypo>
              Fake yacht booking web. Full Stack Project.
            </DescriptionProjectTypo>
            <CreatedByProjectTypo>by Eric Pastor</CreatedByProjectTypo>
          </ProjectPaper>
        </Grid>
      </Grid>
      <Box
        id='contact'
        sx={{
          marginTop: '10%',
          width: '100%',
          minHeight: 'auto',
          backgroundColor: '#abb8c3',
        }}
      >
        <Box
          sx={{
            // marginTop: '10%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginLeft: '4%',
          }}
        >
          <Box
            sx={{
              marginTop: '10%',
              bgcolor: '#3b3b3f',
              width: '10%',
              borderRadius: '5%',
              marginBottom: '10%',
              '& img': {
                width: '100%',
                height: 'auto',
              },
            }}
          >
            <img src={EricLogo} alt='Logo' />
            <Typography
              sx={{
                fontFamily: 'Cedarville Cursive, cursive',
                color: '#fff',
                marginLeft: '1.2vw',
                fontSize: '1.2vw',
                marginTop: '-2vw',
              }}
            >
              Eric Pastor
            </Typography>
          </Box>

          <Box sx={{ width: '80%', marginLeft: '20%', marginBottom: '20%' }}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 6, sm: 8, md: 10 }}
            >
              <Grid Box xs={6}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    marginBottom: '5%',
                  }}
                >
                  <LocationOnIcon
                    sx={{
                      color: 'black',
                      width: '1.5vw',
                      height: 'auto',
                    }}
                  />
                  <Typography
                    sx={{
                      fontFamily: 'Montserrat, sans-serif',
                      color: '#252850ff',
                      fontSize: '1.5vw',
                      marginLeft: '10px',
                    }}
                  >
                    Finland
                  </Typography>
                </Box>
              </Grid>
              <Grid Box xs={6}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                  }}
                >
                  <ContactPhoneIcon
                    sx={{
                      color: 'black',
                      width: '1.5vw',
                      height: 'auto',
                    }}
                  />
                  <Typography
                    sx={{
                      fontFamily: 'Montserrat, sans-serif',
                      color: '#252850ff',
                      fontSize: '1.5vw',
                      marginLeft: '10px',
                    }}
                  >
                    +358449211012
                  </Typography>
                </Box>
              </Grid>
              <Grid Box xs={6}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                  }}
                >
                  <MailIcon
                    sx={{
                      color: 'black',
                      width: '1.5vw',
                      height: 'auto',
                    }}
                  />
                  <Typography
                    sx={{
                      fontFamily: 'Montserrat, sans-serif',
                      color: '#252850ff',
                      fontSize: '1.5vw',
                      marginLeft: '10px',
                    }}
                  >
                    ericpastorpadial@gmail.com
                  </Typography>
                </Box>
              </Grid>
              <Grid Box xs={6}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                  }}
                >
                  <HomeIcon
                    sx={{
                      color: 'black',
                      width: '1.5vw',
                      height: 'auto',
                    }}
                  />
                  <Typography
                    sx={{
                      fontFamily: 'Montserrat, sans-serif',
                      color: '#252850ff',
                      fontSize: '1.5vw',
                      marginLeft: '10px',
                    }}
                  >
                    https://charming-tapioca-35e14a.netlify.app/
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Layout
