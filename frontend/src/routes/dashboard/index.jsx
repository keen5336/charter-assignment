import React from 'react'
import useDashboard from './dashboard'

const Dashboard = () => {
  const { yes } = useDashboard()
  return (
    <>
      <div>Dashboard</div>
      <div>{ yes }</div>
    </>
  )
}

export default Dashboard
