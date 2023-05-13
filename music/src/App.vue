<template>
  <app-header />

  <router-view></router-view>

  <app-player />

  <auth />
</template>

<script>
import AppHeader from '@/components/Header.vue'
import Auth from '@/components/Auth.vue'
import { mapWritableState } from 'pinia'
import useUserStore from '@/stores/user'
import { auth } from './includes/firebase'
import appPlayer from '@/components/Player.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    Auth,
    appPlayer
  },
  computed: {
    ...mapWritableState(useUserStore, ['userLoggedIn'])
  },
  created() {
    if (auth.currentUser) {
      this.userLoggedIn = true
    }
  }
}
</script>
