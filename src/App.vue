<template>
  <v-app>
    <v-main>
      <Holiday/>
    </v-main>
  </v-app>
</template>

<script>
import Holiday from "./components/Holiday"
export default {
  name: 'App',
  components:{
    Holiday
  },
  data: () => ({
    //
  }),
};
</script>
