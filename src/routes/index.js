const routes = [{
  name: 'index',
  path: '/',
  async async (_, __, resolve, ___) {
    // dynamic import component; returns promise
    const component = await import('@/components/Loading.vue')
    resolve({
      component: component.default
    })
  }
}, {
  name: 'home',
  path: '/home/',
  async async (_, __, resolve, ___) {
    // dynamic import component; returns promise
    const component = await import('@/components/Home.vue')
    resolve({
      component: component.default
    })
  }
}, {
  name: 'login',
  path: '/login/',
  async async (_, __, resolve, ___) {
    // dynamic import component; returns promise
    const component = await import('@/components/Login.vue')
    resolve({
      component: component.default
    })
  }
}, {
  name: 'panel',
  path: '/panel/',
  panel: {
    async component () {
      const { default: component } = await import('@/components/Panel.vue')
      console.log(component)
      return component
    }
    // component: require('@/components/Panel.vue')
  }
  // async async (_, __, resolve, ___) {
  //   // dynamic import component; returns promise
  //   const component = await import('@/components/Panel.vue')
  //   resolve({
  //     component: component.default
  //   })
  // }
}, {
  name: 'contacts',
  path: '/contacts/',
  async async (_, __, resolve, ___) {
    // dynamic import component; returns promise
    const component = await import('@/components/Contacts.vue')
    resolve({ component: component.default })
  }
}, {
  name: 'settings',
  path: '/settings/',
  async async (_, __, resolve, ___) {
    // dynamic import component; returns promise
    const component = await import('@/components/Users.vue')
    resolve({ component: component.default })
  }
}, {
  name: 'new-contact',
  path: '/contact/',
  async async (_, __, resolve, ___) {
    // dynamic import component; returns promise
    const component = await import('@/components/NewContact.vue')
    resolve({ component: component.default })
  }
}, {
  name: 'edit-contact',
  path: '/contact/:id',
  async async (_, __, resolve, ___) {
    // dynamic import component; returns promise
    const component = await import('@/components/NewContact.vue')
    resolve({ component: component.default })
  }
}]

export default routes
