<template>
  <h1 class="text-center">Foglalások</h1>
    <p v-if="Object.entries(idopontfoglalasStore.foglalasok).length < 1"> Nincs foglalás</p>
    <table v-else>
      <tr v-for="p in idopontfoglalasStore.foglalasok"> 
        <td>{{ p.key }}</td>
      </tr>
    </table>
</template>

<script setup>
  import {useIdopontfoglalasStore} from '@/stores/idopontfoglalas.js'
  const idopontfoglalasStore = useIdopontfoglalasStore()

</script> 
