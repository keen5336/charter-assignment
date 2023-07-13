import React from 'react'
import useHome from './home'
import RewardsList from '../../components/rewards-list/index'

const Home = () => {
  const { dataset } = useHome()
  return (
    <>
      <h1>Home</h1>
      {
        dataset.length > 0 ? (
          <RewardsList dataset={dataset} />
        ): null
      }
    </>
  )
}

export default Home
