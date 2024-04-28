import React from 'react'

const Dashboard = React.lazy(() => import('./views/Dashboard/Dashboard'))
const Delete = React.lazy(() => import('./views/Dashboard/Delete'))
const LeaveRequest = React.lazy(() => import('./views/WorkersManagement/LeaveRequest'))
const MissedPunchs = React.lazy(() => import('./views/WorkersManagement/MissedPunchs'))
const WorkersActivity = React.lazy(() => import('./views/WorkersManagement/WorkersActivity'))
const Departments = React.lazy(() => import('./views/WorkersManagement/DepartmentsList'))
const publicHolidays = React.lazy(() => import('./views/WorkersManagement/publicHolidaysList'))
const ActivityDetails = React.lazy(() => import('./views/WorkersManagement/WorkersActivityDetails'))
const WorkesLogs = React.lazy(() => import('./views/WorkersManagement/WorkersLogs'))
const WorkersAttendance = React.lazy(() => import('./views/WorkersManagement/WorkersAttendance'))
const WorkersList = React.lazy(() => import('./views/WorkersManagement/WorkersList'))
const GeoFencingList = React.lazy(() => import('./views/GeoFencingManagement/GeoFencingList'))
const NotificationsList = React.lazy(() => import('./views/WorkersManagement/NotificationsList'))
// const AnimalLogs = React.lazy(() => import('./views/LivestockManagenment/AnimalsLogs'))
const DefaultGeoFencingList = React.lazy(() =>
  import('./views/GeoFencingManagement/DefaultGeoFencingList'),
)
const DefineLocation = React.lazy(() => import('./views/GeoFencingManagement/DefineLocation'))
const RequestGeoFencing = React.lazy(() => import('./views/GeoFencingManagement/RequestGeoFencing'))
const ProfileManagement = React.lazy(() => import('./views/Profile/ProfileManagement'))

const UploadActivity = React.lazy(() => import('./views/ResearchersManagement/UploadActivity'))
const SignUpList = React.lazy(() => import('./views/UserRolesPermissions/SignUpList'))
const OrganizationalChart = React.lazy(() =>
  import('./views/UserRolesPermissions/OrganizationalChart'),
)
const DeleteAccountRequest = React.lazy(() =>
  import('./views/UserRolesPermissions/DeleteAccountRequest'),
)
const RolesPermissions = React.lazy(() => import('./views/UserRolesPermissions/RolesPermissions'))

// const AnimalsActivityList = React.lazy(() => import('./views/LivestockManagenment/ActivityList'))
const SchedulingList = React.lazy(() => import('./views/Scheduling/List'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/delete', name: 'Delete', element: Delete },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/organizational-chart', name: 'Dashboard', element: OrganizationalChart },
  { path: '/Sign-Up-List', name: 'Dashboard', element: SignUpList },
  { path: '/Delete-Account-Request', name: 'Dashboard', element: DeleteAccountRequest },
  { path: '/workers-notifications', name: 'Dashboard', element: NotificationsList },
  { path: '/manage-departments', name: 'Dashboard', element: Departments },
  { path: '/manage-public-holidays', name: 'Dashboard', element: publicHolidays },
  { path: '/scheduling', name: 'AnimalsList', element: SchedulingList },
  { path: '/workers-leave-request', name: 'LeaveRequest', element: LeaveRequest },
  { path: '/workers-missed-punchs', name: 'MissedPunchIN', element: MissedPunchs },
  { path: '/workers-attendance', name: 'WorkersActivity', element: WorkersAttendance },
  { path: '/workers-activity', name: 'WorkersActivity', element: WorkersActivity },
  { path: '/workers-activity-details', name: 'ActivityDetails', element: ActivityDetails },
  { path: '/workers-login-log', name: 'ActivityDetails', element: WorkesLogs },
  { path: '/workers-list', name: 'WorkersList', element: WorkersList },
  { path: '/geo-fencing-list', name: 'GeoFencingList', element: GeoFencingList },
  { path: '/geo-fencing-default', name: 'GeoFencingList', element: DefaultGeoFencingList },
  { path: '/define-location', name: 'DefineLocation', element: DefineLocation },
  { path: '/requested-geo-fencing', name: 'RequestGeoFencing', element: RequestGeoFencing },
  { path: '/profile-management', name: 'ProfileManagement', element: ProfileManagement },
  { path: '/upload-activity', name: 'UploadActivity', element: UploadActivity },
  { path: '/user-roles-and-permissions', name: 'RolesPermissions', element: RolesPermissions },
]

export default routes
