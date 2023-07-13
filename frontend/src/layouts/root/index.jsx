import { Outlet } from 'react-router-dom'
import { css } from '@emotion/css'
import AppBar from '../../components/global/app-bar'

const style = css`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
`

const RootLayout = () => {
  return (
    <>
      <AppBar />
      <div className={style}>
        <Outlet />
      </div>
    </>
  )
}

export default RootLayout
