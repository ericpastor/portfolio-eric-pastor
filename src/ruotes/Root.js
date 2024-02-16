import { Outlet } from 'react-router-dom'
import Navbar from '../components/bars/Navbar'
import Sidebar from '../components/bars/Sidebar'

const Root = () => {
  return (
    <>
      <Sidebar />
      <Navbar />
      <Outlet />
    </>
  )
}

export default Root
