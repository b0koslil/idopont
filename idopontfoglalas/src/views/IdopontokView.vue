<script setup>
</script>

<template>
  <h1 class="text-center">Időpontok</h1>
  <div class="row">
    <div v-for="p in idopontfoglalasStore.foglalasok" :key="p.id" class="card col-12 col-md-4 col-lg-3">
      <p class="card-title text-center"> {{p.name}}</p>
      <div class="card-body">
        <p class="card-text">{{ p.price }}</p>
      </div>
      <div class="card-footer text-center">
        <button @click="idopontfoglalasStore.lefoglalas(p.id)" class="btn btn-outline-primary w-50">&#128722;</button>
      </div>
    </div>
  </div>
</template>
