// Main Containers
import MainHome from '@/containers/main_home'
import MainSponsors from '@/containers/main_sponsors'
import MainAttend from '@/containers/main_attend'
import MainFAQ from '@/containers/main_faq'

const MainHomeRoute = {
  path: '/',
  name: 'main_home',
  component: MainHome
}

const MainSponsorsRoute = {
  path: '/sponsors',
  name: 'main_sponsors',
  component: MainSponsors
}

const MainAttendRoute = {
  path: '/main/attend',
  name: 'main_attendance',
  component: MainAttend
}

const MainFAQRoute = {
  path: '/FAQ',
  name: 'main_faq',
  component: MainFAQ
}

export default [
  MainHomeRoute,
  MainSponsorsRoute,
  MainAttendRoute,
  MainFAQRoute
]
