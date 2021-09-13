<template>
    <div>
        <div class="w-full bg-white rounded-lg shadow-lg lg:w-1/3">
        <ul class="divide-y-2 divide-gray-400">
            <li class="flex justify-between p-3 hover:bg-blue-100 hover:text-blue-200">
                View List Item
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                
            </li>
    </ul>
</div>
    </div>
</template>

<script>
import { mapActions} from 'vuex'
    export default {
        data(){
            return{
                page:0,
                todos:[],
                last_page:1,
            }
        },
        created(){
            this.handleScrolledToBottom()
        },
        methods:{
            ...mapActions('system',['getAllTodos']),
            getAlltodos(){
                this.getAllTodos(this.page)
                .then(res=>{
                    this.todos.push(...res.data.message.data)
                    this.last_page=res.data.message.last_page
                })
            },
            handleScrolledToBottom(isVisible=true){
                console.log('this.page>=this.last_page',this.page,this.last_page,this.page>=this.last_page)

                if(!isVisible)return
                if(this.page>=this.last_page)return 
                this.page++
                this.getAlltodos()

            }
        }
    }
</script>

<style lang="scss" scoped>

</style>