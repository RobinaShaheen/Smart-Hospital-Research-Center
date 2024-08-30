// /**
//    Set Home URL based on User Roles
//  */
const getHomeRoute = (role: string) => {
  if (role === 'client') return '/acl'
  else if (role === 'Pharmacist') return '/dashboards/analytics'
  else if (role === 'Pathologist') return '/dashboards/analytics'
  else if (role === 'Radiologist') return '/dashboards/analytics'
  else if (role === 'Nurse') return '/dashboards/analytics'
  else return '/dashboards/analytics'
}

export default getHomeRoute
