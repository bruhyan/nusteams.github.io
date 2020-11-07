import React from 'react';
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const UserProfile = React.lazy(() => import('./views/profile/UserProfile'));
const Users = React.lazy(() => import('./views/users/Users'));
const User = React.lazy(() => import('./views/users/User'));
const ProjectDetails = React.lazy(() => import('./views/project/project-details/ProjectDetails'));
const MyProjectDetails = React.lazy(() => import('./views/project/my-project-details/MyProjectDetails'));
// const Landing = React.lazy(() => import('./views/landing/Landing'));
const ViewAllProjects = React.lazy(() => import("./views/view-all-projects/ViewAllProjects"));
const ViewUsers = React.lazy(() => import("./views/view-users/ViewUsers"));
const UserPortfolio = React.lazy(() => import('./views/user-portfolio/UserPortfolio'));
const ViewMyProjects = React.lazy(() => import('./views/view-my-project/ViewMyProjects'));

const routes = [
  // { path: '/', exact: true, name: 'Home', component: Landing },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/profile', name: 'UserProfile', component: UserProfile },
  { path: '/users', exact: true, name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },
  { path: '/project/:id', exact: true, name: 'Project Details', component: ProjectDetails },
  { path: '/my_project/:id', exact: true, name: 'My Project Details', component: MyProjectDetails },
  { path: "/view-all-projects", exact: true, name: "View All Projects", component: ViewAllProjects },
  { path: "/view-users", exact: true, name: "View Users", component: ViewUsers },
  { path: '/user-portfolio', name: 'User Portfolio', component: UserPortfolio },
  { path: '/view-my-projects', name: 'View My Projects', component: ViewMyProjects },
];

export default routes;
