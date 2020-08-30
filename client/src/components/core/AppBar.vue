<template>
  <v-app-bar
    app
    flat
  >
    <v-app-bar-nav-icon
      class="hidden-md-and-up"
      @click="toggleDrawer"
    />

    <v-container class="mx-auto py-0">
      <v-row align="center">
        <v-img
          :src="require('@/assets/logo.png')"
          class="mr-5"
          contain
          height="48"
          width="48"
          max-width="48"
          @click="$vuetify.goTo(0)"
        />
         <v-spacer />
         <v-spacer />
          <v-btn
          class="hidden-sm-and-down"
          text
          to="/"
        >
          Home
        </v-btn>
        <v-btn
          class="hidden-sm-and-down"
          text
          to="/about"
        >
          About
        </v-btn>
        <v-spacer />
        <v-btn
          v-if="!isLogged"
          class="hidden-sm-and-down"
          text
          to="login"
        >
          Login
        </v-btn>
        <v-btn
          v-if="!isLogged"
          class="hidden-sm-and-down"
          text
          to="register"
        >
          Register
        </v-btn>
        <v-menu 
          open-on-hover
          offset-y
          v-if="isLogged"
          >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Profile
        </v-btn>
      </template>

      <v-list>
        <v-list-item>
          <v-list-item-title>Settings</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
  // Utilities
  import {
    mapGetters,
    mapMutations,
  } from 'vuex'

  export default {
    name: 'CoreAppBar',
    data: () => ({
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
    }),

    computed: {
      ...mapGetters(['isLogged']),
    },

    methods: {
      ...mapMutations(['toggleDrawer']),
    },
  }
</script>
