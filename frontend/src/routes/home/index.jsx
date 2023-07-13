import React from 'react'
import useHome from './home'
import PinnedSubheaderList from './rewards-list'

const Home = () => {
  const { yes } = useHome()
  return (
    <>
      <div>Home</div>
      <div>{ yes }</div>
      <PinnedSubheaderList />
    </>
  )
}

export default Home
