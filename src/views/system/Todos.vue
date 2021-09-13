<template>
    <div>
        <view-all-todos></view-all-todos>
        <view-individual-todo></view-individual-todo>
        <create-edit-todo></create-edit-todo>
    </div>
</template>

<script>
import viewAllTodos from '@/components/todos/viewAllTodos'
import viewIndividualTodo from '@/components/todos/viewIndividualTodo'
import createEditTodo from '@/components/todos/createEditTodo'
    export default {
        data(){
            return{
                articles:['']
            }
        },
        components:{
            viewAllTodos,
            viewIndividualTodo,
            createEditTodo
        },
    }
</script>

<style lang="scss" scoped>

</style>