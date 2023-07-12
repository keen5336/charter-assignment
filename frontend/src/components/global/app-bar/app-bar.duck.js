import { useState } from 'react'
import { useLocation } from 'react-router-dom'

const useAppBar = () => {
  const [openState, setOpenState] = useState(false)
  const handleToggleOpenState = () => {
    setOpenState(!openState)
  }
  const { pathname } = useLocation()

  return {
    openState,
    setOpenState,
    handleToggleOpenState,
  }
}

export default useAppBar
