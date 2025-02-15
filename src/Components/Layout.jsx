/** @format */
import React from 'react'
import AppHeader from './AppHeader'
import SideMenu from './SideMenu'
import { Outlet, useLocation } from 'react-router-dom'

const Layout = () => {
  const location = useLocation()
  return (
    <div className="flex h-screen">
      {location.pathname !== '/product' && <SideMenu />}

      <div className="flex-1 flex flex-col">
        {/* Conditionally render AppHeader only if NOT on the product page */}
        {location.pathname !== '/product' && <AppHeader />}

        {/* Main content section */}

        {/* Outlet will render the nested route component */}
        <div className="flex-1 flex flex-col h-2/5 ">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout
