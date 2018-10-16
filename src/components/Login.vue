<template>
  <f7-page no-toolbar no-navbar no-swipeback login-screen>
    <f7-login-screen-title>Login</f7-login-screen-title>
    <f7-list form>
      <f7-list-item>
        <f7-label>Username</f7-label>
        <f7-input
          type="text"
          placeholder="Your username"
          @input="loginData.login = $event.target.value" />
      </f7-list-item>
      <f7-list-item>
        <f7-label>Password</f7-label>
        <f7-input
          type="password"
          placeholder="Your password"
          @input="loginData.password = $event.target.value" />
      </f7-list-item>
    </f7-list>
    <f7-list>
      <f7-list-button @click="signIn">Login</f7-list-button>
    </f7-list>
  </f7-page>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      loginData: {
        login: '',
        password: ''
      }
    }
  },
  async mounted () {
    let userData = this.$store.getters.getUser
    if (userData?.login) {
      this.$f7router.navigate({ name: 'index' }, { reloadAll: true })
      this.$createORM(this.getAppData, this.checkClientJS)
    }
  },
  computed: {
    ...mapGetters([
      'checkClientJS',
      'getAppData'
    ])
  },
  methods: {
    async signIn () {
      this.$f7.dialog.preloader()
      try {
        await this.$store.dispatch('LOGIN', this.loginData)
        await this.$f7router.navigate({ name: 'index' }, { reloadAll: true })
        this.$f7.dialog.close()
      } catch (e) {
        console.log(e)
        this.$f7.dialog.close()
        this.$f7.dialog.alert('Your username and/or password is wrong, please try again')
      }

      // const self = this;
      // const app = self.$f7;
      // const router = self.$f7router;
      // app.dialog.alert(`Username: ${self.loginData.username}<br>Password: ${self.loginData.password}`, () => {
      //   router.back();
      // });
    }
  }
}
</script>
