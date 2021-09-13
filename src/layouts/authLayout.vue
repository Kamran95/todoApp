<template>
  <div>
     <div
    class="bg-no-repeat bg-cover bg-center relative"
    style="
      background-image: url(https://media.istockphoto.com/photos/check-off-a-todo-list-with-a-black-pen-picture-id1212554542?k=20&m=1212554542&s=612x612&w=0&h=-oEdrogzLxoGXrFNKPSnTlqI7H2GQ8a8wL6P4YEKq1g=);
    "
  >
    <div
      class="
        absolute
        bg-gradient-to-b
        from-blue-500
        to-blue-400
        opacity-75
        inset-0
        z-0
      "
    ></div>
    <div class="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
      <div class="flex justify-center self-center z-10">
        <router-view />
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  created:()=>{
    console.log("auth layout created")
  }
};
</script>

<style lang="scss" scoped>
</style>