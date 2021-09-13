<template>
  <div>
        <router-view />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  created:()=>{
    console.log("auth layout created")
  },
  computed: {
  },
};
</script>

<style lang="scss" scoped>
</style>