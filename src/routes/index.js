const routes = [{
  name: 'index',
  path: '/',
  async async (_, __, resolve, ___) {
    // dynamic import component; returns promise
    const { default: component } = await import(
      /* webpackChunkName: "loading" */
      '@/components/Loading.vue'
    )
    resolve({ component })
  }
}, {
  name: 'home',
  path: '/home/',
  async async (_, __, resolve, ___) {
    // dynamic import component; returns promise
    const { default: component } = await import(
      /* webpackChunkName: "home" */
      '@/components/Home.vue'
    )
    resolve({ component })
  }
}, {
  name: 'login',
  path: '/login/',
  async async (_, __, resolve, ___) {
    // dynamic import component; returns promise
    const { default: component } = await import(
      /* webpackChunkName: "login" */
      '@/components/Login.vue'
    )
    resolve({ component })
  }
}, {
  name: 'panel',
  path: '/panel/',
  panel: {
    async component () {
      const { default: component } = await import(
        /* webpackChunkName: "panel" */
        '@/components/Panel.vue'
      )
      console.log(component)
      return component
    }
    // component: require('@/components/Panel.vue')
  }
}, {
  name: 'contacts',
  path: '/contacts/',
  async async (_, __, resolve, ___) {
    // dynamic import component; returns promise
    const { default: component } = await import('@/components/Contacts.vue')
    resolve({ component })
  }
}, {
  name: 'settings',
  path: '/settings/',
  async async (_, __, resolve, ___) {
    // dynamic import component; returns promise
    const { default: component } = await import('@/components/Users.vue')
    resolve({ component })
  }
}, {
  name: 'resources',
  path: '/resources/:name',
  async async (_, __, resolve, ___) {
    // dynamic import component; returns promise
    const { default: component } = await import(
      /* webpackChunkName: "resources" */
      '@/components/Resources.vue'
    )
    resolve({ component })
  }
// }, {
//   name: 'edit-contact',
//   path: '/contact/:id',
//   async async (_, __, resolve, ___) {
//     // dynamic import component; returns promise
//     const { default: component } = await import('@/components/NewContact.vue')
//     resolve({ component }) }
}]

export default routes
