const routes = [{
  path: '/'
}, {
  path: '/panel/'
}, {
  path: '/contacts/',
  async async (routeTo, routeFrom, resolve, reject) {
    // dynamic import component; returns promise
    const component = await import('@/components/Contacts.vue')
    resolve({ component: component.default })
  }
}, {
  path: '/settings/',
  async async (routeTo, routeFrom, resolve, reject) {
    // dynamic import component; returns promise
    const component = await import('@/components/Users.vue')
    resolve({ component: component.default })
  }
}]

export default routes
