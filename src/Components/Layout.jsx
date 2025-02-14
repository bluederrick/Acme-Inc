/** @format */

import React from 'react'
import AppHeader from './AppHeader'
import SideMenu from './SideMenu'
import PageContent from './PageContent'

const Layout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <SideMenu />

      {/* Main content section */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <AppHeader />

        {/* Page content */}
        <div className="flex-1 flex flex-col h-2/5 ">
          <PageContent />
        </div>
      </div>
    </div>
  )
}

export default Layout
