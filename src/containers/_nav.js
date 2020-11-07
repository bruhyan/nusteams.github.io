import React from 'react'
import CIcon from '@coreui/icons-react'

export default [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'My Projects',
    to: '/view-my-projects',
    icon: <CIcon name="cil-bookmark" customClasses="c-sidebar-nav-icon" />,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Search Projects',
    to: '/view-all-projects',
    icon: <CIcon name="cil-lightbulb" customClasses="c-sidebar-nav-icon" />
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Search Users',
    to: '/view-users',
    icon: <CIcon name="cil-user" customClasses="c-sidebar-nav-icon" />
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Settings',
    to: '',
    icon: <CIcon name="cil-settings" customClasses="c-sidebar-nav-icon" />
  },
]

