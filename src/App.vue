<template>
  <v-app :dark="isDark" :class="classValue">
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
      isDark: false,
      lightClass: "grey lighten-4",
      darkClass: "lighten-4",
      classValue: this.lightClass
    };
  },
  methods: {
    makeTheme(value) {
      if (value == 0) {
        this.isDark = false;
        this.classValue = this.lightClass;
      } else {
        this.isDark = true;
        this.classValue = this.darkClass;
      }
    }
  }
};
</script>
