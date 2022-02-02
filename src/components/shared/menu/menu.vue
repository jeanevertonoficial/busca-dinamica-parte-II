<template>
  <nav class="nav-menu">
    <ul class="nav-ul">
      <li class="nav-li" v-for="route in rotas" :key="route.id">
        <router-link :to="route.path ? route.path : '/'">
          {{route.titulo}}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>

export default {
    props: {
      rotas: {
        type: Array,
        required: true
      }
    }
}
</script>

<style>

.nav-menu{
  width: 100%;
  height: 100px;
  background: rgba(229, 149, 28, 0.54);
}

.nav-li {
  width: auto;
  display: inline-flex;

}
.nav-ul {
  margin-top: 25px;
  display: inline-flex;
  justify-content: space-around;
  width: 100%;
}
.nav-li a {
  color: white;
  text-decoration: none;
  font-family: "arial";
}

.nav-li a:hover{
  color: #444;
}
</style>