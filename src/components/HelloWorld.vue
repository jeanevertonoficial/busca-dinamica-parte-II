<template>
 <div>
   <h1>{{titulo}}</h1>
 </div>
</template>

<script>
export default {
    data() {
      return {
        titulo: "AluraPic",
        foto: {
          url: 'https://www.google.com/search?q=cachorro&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjp0Yyl6Nz1AhWRCrkGHUkkA7MQ_AUoAXoECAEQAw&biw=659&bih=980&dpr=1#imgrc=P7FABI-ZN63GgM',
          titulo: 'cachorro'
        }
      }
    }
}
</script>
<style>
h1{
  color: #2c3e50;
  font-size: 28px;
}

</style>
