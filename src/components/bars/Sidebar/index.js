import PersonIcon from '@mui/icons-material/Person'
import SailingIcon from '@mui/icons-material/Sailing'
import WebIcon from '@mui/icons-material/Web'
import ContactMailIcon from '@mui/icons-material/ContactMail'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'

import './index.scss'
import EricLogo from '../../../assets/images/logo-name.png'

const Sidebar = () => {
  const handleClick = (targetId) => {
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <div className='sticky'>
      <div className='nav-bar'>
        <div className='logo'>
          <img src={EricLogo} alt='Logo' />
          <div className='my-name'>Eric Pastor</div>
        </div>
        <nav>
          <div
            className='home'
            activeclassname='active'
            onClick={() => handleClick('home')}
          >
            <SailingIcon
              sx={{
                color: '#abb8c3',
                height: 'auto',
                width: '36px',
                zIndex: 9999,
                transition: ' 0.3s ease-out',
                '&:hover': { color: '#8ed1fc' },
              }}
            />
          </div>
          <div
            activeclassname='active'
            className='about'
            onClick={() => handleClick('about')}
          >
            <PersonIcon
              sx={{
                color: '#abb8c3',
                height: 'auto',
                width: '36px',
                zIndex: 9999,
                transition: ' 0.3s ease-out',
                '&:hover': { color: '#8ed1fc' },
              }}
            />
          </div>
          <div
            activeclassname='active'
            className='projects'
            onClick={() => handleClick('projects')}
          >
            <WebIcon
              sx={{
                color: '#abb8c3',
                height: 'auto',
                width: '36px',
                zIndex: 9999,
                transition: ' 0.3s ease-out',
                '&:hover': { color: '#8ed1fc' },
              }}
            />
          </div>
          <div
            activeclassname='active'
            className='contact'
            onClick={() => handleClick('contact')}
          >
            <ContactMailIcon
              sx={{
                color: '#abb8c3',
                height: 'auto',
                width: '36px',
                zIndex: 9999,
                transition: ' 0.3s ease-out',
                '&:hover': { color: '#8ed1fc' },
              }}
            />
          </div>
          <ul>
            <li>
              <a
                href='https://www.linkedin.com/in/eric-pastor-padial'
                target='_blank'
                rel='noreferrer'
              >
                <LinkedInIcon
                  sx={{
                    color: '#abb8c3',
                    height: 'auto',
                    width: '22px',
                    zIndex: 9999,
                    transition: ' 0.3s ease-out',
                    '&:hover': { color: '#8ed1fc' },
                  }}
                />
              </a>
            </li>
            <li>
              <a
                href='https://github.com/ericpastor?tab=repositories'
                target='_blank'
                rel='noreferrer'
              >
                <GitHubIcon
                  sx={{
                    color: '#abb8c3',
                    height: 'auto',
                    width: '22px',
                    zIndex: 9999,
                    transition: ' 0.3s ease-out',
                    '&:hover': { color: '#8ed1fc' },
                  }}
                />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
export default Sidebar
