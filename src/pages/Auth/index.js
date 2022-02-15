import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'

const Auth = () => {
  return (
    <Fragment>
      <div>Auth</div>
      <Outlet/>
    </Fragment>
  )
}

export default Auth