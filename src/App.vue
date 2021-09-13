<template>
<div>
    <component :is="layout">
        <router-view />
    </component>
    
</div>
</template>
<script>
import { mapMutations , mapActions, mapGetters} from 'vuex'
export default {
  name: 'app',
  data(){
    return{
      windowIdeal:null
    }
  },
  computed: {
    ...mapGetters('auth',['getToken']),
    layout () {
        return this.$route.meta.layout
    }
  },
  methods:{
  
  },
  created(){
    
  },
}
</script>
<style>


</style>


