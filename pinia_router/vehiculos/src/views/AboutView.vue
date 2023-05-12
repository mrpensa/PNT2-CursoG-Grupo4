<script setup>
import { storeToRefs } from "pinia";
import { useCounterStore } from "../stores/counter";

const store = useCounterStore();
const { count } = storeToRefs(store);
const { lista } = store;
const auto = {
  marca: "",
  modelo: "",
};
</script>

<template>
  <div>
    <h1>Otra página</h1>
  </div>
  <h1>Esta página no era accesible sin login</h1>  
  <h2>Accede a la misma información a través del store</h2>
  <table class="table table-striped table-dark">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Marca</th>
        <th scope="col">Modelo</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(auto, index) in lista" :key="index">
        <th scope="row">{{ auto.id }}</th>
        <td>{{ auto.marca }}</td>
        <td>{{ auto.modelo }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style>
</style>


