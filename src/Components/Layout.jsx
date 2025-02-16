/** @format */

import AppHeader from './AppHeader'
import SideMenu from './SideMenu'
import { Outlet, useLocation } from 'react-router-dom'

const Layout = () => {
  const location = useLocation()

  // Define conditions for hiding elements
  const hideSideMenu =
    location.pathname === '/product' ||
    location.pathname === '/order' ||
    location.pathname === '/login'
  const hideAppHeader =
    location.pathname === '/product' ||
    location.pathname === '/order' ||
    location.pathname === '/login'

  return (
    <div className="flex h-screen">
      {/* Show SideMenu unless on /product or /order */}
      {!hideSideMenu && <SideMenu />}

      <div className="flex-1 flex flex-col">
        {/* Show AppHeader unless on /product or /order */}
        {!hideAppHeader && <AppHeader />}

        {/* Main content section */}
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout
