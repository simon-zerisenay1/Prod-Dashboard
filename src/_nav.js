import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilHome,
  cilBell,
  cilIndustry,
  cilMap,
  cilContact,
  cilCircle,
  cilFindInPage,
  cilGroup,
  cilCog,
  cilCalendarCheck,
  cilReportSlash,
  cilUserPlus,
  cilFile,
  // cilAnimal,
  cilList,
  // cilApplications,
  cilFolder,
  cilPlus,
  cilLayers,
  cilChart,
} from '@coreui/icons'
import { CNavGroup, CNavItem } from '@coreui/react' // CNavTitle

import { GetValueFromJson } from './config'

let _nav = []
_nav.push({
  component: CNavItem,
  name: 'Dashboard',
  to: '/dashboard',
  icon: <CIcon icon={cilHome} customClassName="nav-icon" />,
})

if (Number(localStorage.getItem('uType')) === 3) {
  _nav.push({
    component: CNavItem,
    name: 'Organization Chart',
    to: '/organizational-chart',
    icon: <CIcon icon={cilChart} customClassName="nav-icon" />,
  })
}
_nav.push({
  component: CNavGroup,
  name: 'Staff Management',
  customclassname:
    GetValueFromJson(localStorage.getItem('permission'), 'wrk_mng', '') === 1 ? '' : 'wrk_mng',
  icon: <CIcon icon={cilIndustry} customClassName="nav-icon" />,
  items: [
    {
      component: CNavItem,
      name: 'Punch Exception',
      to: '/workers-missed-punchs',
      icon: <CIcon icon={cilCircle} customClassName="nav-icon" />,
    },
    {
      component: CNavItem,
      name: 'Leave Request',
      to: '/workers-leave-request',
      icon: <CIcon icon={cilCircle} customClassName="nav-icon" />,
    },
    {
      component: CNavItem,
      name: 'Attendance',
      to: '/workers-attendance',
      icon: <CIcon icon={cilCircle} customClassName="nav-icon" />,
    },
    {
      component: CNavItem,
      name: 'Activity',
      to: '/workers-activity',
      icon: <CIcon icon={cilCircle} customClassName="nav-icon" />,
    },
    {
      component: CNavItem,
      name: 'Login Log',
      to: '/workers-login-log',
      icon: <CIcon icon={cilCalendarCheck} customClassName="nav-icon" />,
    },
  ],
})
_nav.push({
  component: CNavGroup,
  name: 'Geo Fencing Management',
  customclassname:
    GetValueFromJson(localStorage.getItem('permission'), 'geo_mng', '') === 1 ? '' : 'geo_mng',
  icon: <CIcon icon={cilMap} customClassName="nav-icon" />,
  items: [
    {
      component: CNavItem,
      name: 'Requested Geo Fencing',
      to: '/geo-fencing-list',
      icon: <CIcon icon={cilList} customClassName="nav-icon" />,
    },
    {
      component: CNavItem,
      name: 'Default Geo Fencing',
      to: '/geo-fencing-default',
      icon: <CIcon icon={cilList} customClassName="nav-icon" />,
    },
    {
      component: CNavItem,
      name: 'Define Location',
      to: '/define-location',
      icon: <CIcon icon={cilPlus} customClassName="nav-icon" />,
    },
  ],
})

_nav.push({
  component: CNavItem,
  name: 'My Attendance',
  isutype: GetValueFromJson(localStorage.getItem('profile'), 'uType', 1),
  to: '/workers-attendance',
  icon: <CIcon icon={cilReportSlash} customClassName="nav-icon" />,
})
_nav.push({
  component: CNavItem,
  name: 'Profile Management',
  to: '/profile-management',
  icon: <CIcon icon={cilContact} customClassName="nav-icon" />,
})
_nav.push({
  component: CNavGroup,
  name: 'Researchers Management',
  customclassname:
    GetValueFromJson(localStorage.getItem('permission'), 'resr_mng', '') === 1 ? '' : 'resr_mng',
  icon: <CIcon icon={cilFindInPage} customClassName="nav-icon" />,
  items: [
    {
      component: CNavItem,
      name: 'Create Report',
      to: '/upload-activity',
      icon: <CIcon icon={cilPlus} customClassName="nav-icon" />,
    },
    {
      component: CNavItem,
      name: 'Scheduling',
      to: '/scheduling',
      icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    },
    {
      component: CNavItem,
      name: 'All Reports',
      to: '/workers-activity',
      icon: <CIcon icon={cilFolder} customClassName="nav-icon" />,
    },
  ],
})

_nav.push({
  component: CNavGroup,
  name: 'User Roles and Permissions',
  customclassname:
    GetValueFromJson(localStorage.getItem('permission'), 'rols_mng', '') === 1 ? '' : 'rols_mng',
  icon: <CIcon icon={cilCog} customClassName="nav-icon" />,
  items: [
    {
      component: CNavItem,
      name: 'Manage Staff',
      to: '/user-roles-and-permissions',
      icon: <CIcon icon={cilGroup} customClassName="nav-icon" />,
    },
    {
      component: CNavItem,
      name: 'Manage Departments',
      to: '/manage-departments',
      icon: <CIcon icon={cilFile} customClassName="nav-icon" />,
    },
    {
      component: CNavItem,
      name: 'Manage Public Holidays',
      to: '/manage-public-holidays',
      icon: <CIcon icon={cilLayers} customClassName="nav-icon" />,
    },
    {
      component: CNavItem,
      name: 'New Account Request',
      to: '/Sign-Up-List',
      icon: <CIcon icon={cilUserPlus} customClassName="nav-icon" />,
    },
  ],
})

export default _nav
