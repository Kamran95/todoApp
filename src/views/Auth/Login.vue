<template>
 
        <div class="p-12 bg-white mx-auto rounded-2xl w-100">
          <div class="mb-4">
            <h3 class="font-semibold text-2xl text-gray-800">Sign In</h3>
            <p class="text-gray-500">Please sign in to your account.</p>
          </div>
          <div class="space-y-5">
            <div v-if="isLogin" class="py-3 px-5 mb-4 bg-green-100 text-green-900 text-sm rounded-md border border-green-200" role="alert">
                You have <strong>Logged In</strong> Successfully!. Redirecting you to dashboard
            </div>
            <div v-if="responseErrors.length" class="py-3 px-5 mb-4 bg-red-100 text-red-900 text-sm rounded-md border border-red-200" role="alert">
              <ul v-for="(error,i) in responseErrors" :key="i">
                <li> {{error}}!</li>
              </ul>
            </div>
            <div class="space-y-2">
              <label class="text-sm font-medium text-gray-700 tracking-wide"
                >Email</label
              >
              <input
              v-model="$v.form.email.$model"
              :class="{' border-red-500':emailError.length,' border-blue-400':!emailError.length}"
                class="
                  w-full
                  text-base
                  px-4
                  py-2
                  border border-gray-300
                  rounded-lg
                  focus:outline-none
                  focus:border-blue-400
                "
                type="email"
                placeholder="mail@gmail.com"
              />
              <span v-if="emailError.length" class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
			          {{emailError.join(',',' ')}} !
		          </span>
            </div>
            <div class="space-y-2">
              <label
                class="mb-5 text-sm font-medium text-gray-700 tracking-wide"
              >
                Password
              </label>
              <input
              v-model="$v.form.password.$model"
              :class="{' border-red-500':passwordError.length,' border-blue-400':!passwordError.length}"
                class="
                  w-full
                  content-center
                  text-base
                  px-4
                  py-2
                  border border-gray-300
                  rounded-lg
                  focus:outline-none
                  focus:border-blue-400
                "
                type="password"
                placeholder="Enter your password"
              />
              <span v-if="passwordError.length" class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
			          {{passwordError.join(',',' ')}} !
		          </span>
            </div>
            <div class="flex items-center justify-between">
              <div class="text-sm">
                <router-link
                  tag="a"
                  :to="{ name: 'Register' }"
                  class="text-blue-400 hover:text-blue-500"
                >
                  Don't have a account?
                </router-link>
              </div>
            </div>
            <div>
              <button
              
              @click="signinUser"
                type="submit"
                class="
                  disabled:opacity-0
                  w-full
                  flex
                  justify-center
                  bg-blue-400
                  hover:bg-blue-500
                  text-gray-100
                  p-3
                  rounded-full
                  tracking-wide
                  font-semibold
                  shadow-lg
                  cursor-pointer
                  transition
                  ease-in
                  duration-500
                "
              >
                Sign in
              </button>
            </div>
          </div>
          <div class="pt-5 text-center text-gray-400 text-xs">
            <span>
              Copyright © 2021-2022
              <a
                href="https://codepen.io/uidesignhub"
                rel=""
                target="_blank"
                title="Ajimon"
                class="text-blue hover:text-blue-500"
                >AJI</a
              ></span
            >
          </div>
        </div>
</template>
<script>
import { mapActions} from 'vuex'
import { validationMixin } from "vuelidate";
import { required,email,sameAs } from "vuelidate/lib/validators";
export default {
  mixins:[validationMixin],
    data(){
        return{
          requestSent:false,
          isLogin:false,
          responseErrors:[],
            form:{
                email:'',
                password:'',
            }
        }
    },
    methods:{
      ...mapActions('auth',['LOGIN_USER']),
        signinUser(){
          this.requestSent=true
          this.isLogin=false
          this.$v.$touch();
          if(this.$v.$anyError)return
          let data={
            email:this.form.email,
            password:this.form.password
          }
          this.LOGIN_USER(data)
          .then(res=>{
            // return console.log(res)
            window.scrollTo(0, 0);
            this.isLogin=true
            setTimeout(()=>{
              this.$router.push({name:'App'})
            },3000)
            
          })
          .catch(err=>{
            this.requestSent=false
            this.isLogin=false
            window.scrollTo(0, 0);
            if(err.response){
              this.responseErrors=err.response.data.errors
            }else{
              this.responseErrors=['Something Went Wrong']
            }
          })

        }
    },
    validations: { 
     form:{
        email:{
          required,
          email
        },
        password:{
          required
        },
     }
       
    },
    computed:{
       emailError() {
            const errors = [];
            if (!this.$v.form.email.$dirty) return errors
            !this.$v.form.email.required &&
              errors.push("This Field is Required");
            !this.$v.form.email.email &&
              errors.push("Invalid Email");
            return errors;
        },
        passwordError() {
            const errors = [];
            if (!this.$v.form.password.$dirty) return errors
            !this.$v.form.password.required &&
              errors.push("This Field is Required");
            return errors;
        },
    }
}
</script>
