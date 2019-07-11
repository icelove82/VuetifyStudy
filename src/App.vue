<template>
  <v-app :dark="isDark" :class="{ grey : !isDark}" class="lighten-4">
    <Navbar @themeChange="makeTheme"></Navbar>
    <v-content class="mx-4 mb-4">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  name: "App",
  components: { Navbar },
  data() {
    return {
      isDark: false
    };
  },
  methods: {
    makeTheme(value) {
      if (value == 0) {
        this.isDark = false;
      } else {
        this.isDark = true;
      }
    }
  }
};
</script>
