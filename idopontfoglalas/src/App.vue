<script setup>
import {onMounted} from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { useIdopontfoglalasStore } from '@/stores/idopontfoglalas.js'

const idopontfoglalasStore = useIdopontfoglalasStore()

onMounted(() =>{
  idopontfoglalasStore.loadAll()
})

</script>

<template>
      <div class="container">
        <nav>
          <RouterLink to="/">Időpontok</RouterLink>&nbsp;&nbsp;
          <RouterLink to="/foglalasok">Foglalások</RouterLink>
        </nav>
          <RouterView />
      </div>
</template>

<style>
nav {
  background-color: #f8f9fa;
  padding: 1rem;
}
ul {
  display: flex;
  list-style-type: none;
  padding: 0;
}
li {
  margin-right: 1rem;
}
a {
  text-decoration: none;
  color: #007bff;
}
a.router-link-exact-active {
  font-weight: bold;
}
</style>
