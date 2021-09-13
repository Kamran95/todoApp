<template>
    <div>
<div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
  <div class="relative py-3 w-11/12 max-w-xl sm:mx-auto">
    <div class="relative p-8 bg-white shadow-sm sm:rounded-xl">
         <div v-if="isAdded" class="py-3 px-5 mb-4 bg-green-100 text-green-900 text-sm rounded-md border border-green-200" role="alert">
                You have <strong>Logged In</strong> Successfully!. Redirecting you to dashboard
            </div>
            <div v-if="responseErrors.length" class="py-3 px-5 mb-4 bg-red-100 text-red-900 text-sm rounded-md border border-red-200" role="alert">
              <ul v-for="(error,i) in responseErrors" :key="i">
                <li> {{error}}!</li>
              </ul>
            </div>
      <form class="w-full" @submit.prevent="add">
        <div class="mb-5 relative">
          <input v-model="form.name" type="" id="name" class="peer pt-8 border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16 placeholder-transparent" placeholder="name@example.com" autocomplete="off" />
          <label for="name" class="peer-placeholder-shown:opacity-100   opacity-75 peer-focus:opacity-75 peer-placeholder-shown:scale-100 scale-75 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 -translate-y-3 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 translate-x-1 peer-focus:translate-x-1 absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out">Title</label>
        </div>
        <div class="mb-5 relative">
          <textarea v-model="form.description" type="email" id="email" class=" w-full px-3 py-2 peer pt-8 border border-gray-200 focus:outline-none rounded-lg focus:border-gray-500 focus:shadow-sm w-full p-3  placeholder-transparent" placeholder="name@example.com" autocomplete="off" ></textarea>
          <label for="email" class="peer-placeholder-shown:opacity-100   opacity-75 peer-focus:opacity-75 peer-placeholder-shown:scale-100 scale-75 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 -translate-y-3 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 translate-x-1 peer-focus:translate-x-1 absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out">Description</label>

        </div>
        <button class="w-full bg-blue-600 text-white p-3 rounded-md">Submit</button>
      </form>
    </div>
  </div>
</div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
    export default {
        data(){
            return{
                isAdded:false,
                form:{
                    name:'',
                    description:'',
                    status:false
                }
                
            }
        },
        methods:{
            ...mapActions('system',['addTodo']),
            add(){
                this.isAdded=false
                this.addTodo(this.form)
                .then(res=>{
                    window.scrollTo(0, 0);
                    this.isRegistered=true
                    this.isLogin=true
                    setTimeout(()=>{
                    this.$router.push({name:'App'})
                    },3000)
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>