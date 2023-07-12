import { Outlet } from 'react-router-dom'
import AppBar from '../../components/global/app-bar'

const RootLayout = () => {
  return (
    <>
      <AppBar />
      <div>
        <Outlet />
      </div>
      
    </>
  )
}

export default RootLayout
