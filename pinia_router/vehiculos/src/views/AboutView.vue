<script setup>
import { storeToRefs } from "pinia";
import { useCounterStore } from "../stores/counter";

const store = useCounterStore();
const { count } = storeToRefs(store);
const { lista } = store;
const materia = {
  nombre: "",
  comision: "",
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
        <th scope="col"></th>
        <th scope="col">nombre</th>
        <th scope="col">comision</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(materia, index) in lista" :key="index">
        <th> </th>
        <td>{{ materia.nombre }}</td>
        <td>{{ materia.comision }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style>
</style>


